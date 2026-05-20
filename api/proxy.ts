import type { IncomingMessage, ServerResponse } from 'node:http';
import https from 'node:https';

// Апстрим выносим в env, чтобы менять контур (IFT/прод) без правки кода.
const API_TARGET =
  process.env.API_TARGET ?? 'https://ift.gate1.spaymentsplus.ru';

// Аналог `secure: false` из vite.config (server.proxy): IFT-шлюз отдаёт
// недоверенный сертификат. Vercel-rewrites на внешний URL валидируют TLS строго
// и падают в 502 — поэтому проксируем сами и отключаем проверку cert.
const agent = new https.Agent({ rejectUnauthorized: false });

// Сюда rewrite заворачивает весь /api/* (см. vercel.json). Исходный путь
// приходит в query-параметре `__upstream`, остальные query сохраняются.
export default function handler(req: IncomingMessage, res: ServerResponse) {
  const target = new URL(API_TARGET);

  // Парсим входящий URL (база-заглушка, нужен только для разбора query).
  const incoming = new URL(req.url ?? '/', 'http://localhost');
  const sp = incoming.searchParams;
  const upstreamPath = sp.get('__upstream') ?? '';

  // Вычищаем служебные параметры, чтобы они НЕ ушли на шлюз:
  // - __upstream: наш носитель исходного пути;
  // - path: Vercel сам дублирует сюда `:path*` из rewrite, причём со слэшами
  //   в виде %2F — закодированный слэш ловит F5 ASM («evasion») и режет запрос;
  // - __debug: отладочный флаг.
  sp.delete('__upstream');
  sp.delete('path');
  sp.delete('__debug');

  const query = sp.toString();
  const path = `/${upstreamPath}${query ? `?${query}` : ''}`;

  // WAF апстрима (F5 ASM) режет запрос по «прокси/облачным» заголовкам, которые
  // Vercel дописывает, а vite-прокси — нет. Чистим их, чтобы запрос выглядел как
  // из preview. changeOrigin: Host подменяем на адрес апстрима.
  const headers: Record<string, string | string[] | undefined> = {
    ...req.headers,
  };
  for (const key of Object.keys(headers)) {
    const lower = key.toLowerCase();
    if (
      lower.startsWith('x-vercel-') ||
      lower.startsWith('x-forwarded-') ||
      lower === 'forwarded' ||
      lower === 'x-real-ip' ||
      lower === 'x-invocation-id' ||
      lower === 'via' ||
      lower === 'connection'
    ) {
      delete headers[key];
    }
  }
  headers.host = target.host;

  // Debug: ?__debug=1 — вернуть, что мы реально шлём на шлюз, без проксирования.
  // Помогает понять, на чём F5 ASM режет запрос. Удалить после диагностики.
  if (incoming.searchParams.get('__debug') === '1') {
    res.setHeader('content-type', 'application/json');
    res.end(
      JSON.stringify(
        { method: req.method, target: target.host, path, headers },
        null,
        2,
      ),
    );
    return;
  }

  const proxyReq = https.request(
    {
      protocol: target.protocol,
      hostname: target.hostname,
      port: target.port || 443,
      method: req.method,
      path,
      headers,
      agent,
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode ?? 502, proxyRes.headers);
      proxyRes.pipe(res);
    },
  );

  proxyReq.on('error', (err) => {
    res.statusCode = 502;
    res.end(`Proxy error: ${(err as Error).message}`);
  });

  // Стримим тело запроса в апстрим (важно для POST/PUT при оплате заказа).
  req.pipe(proxyReq);
}
