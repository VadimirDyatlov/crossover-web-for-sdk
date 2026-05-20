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
  const upstreamPath = incoming.searchParams.get('__upstream') ?? '';
  incoming.searchParams.delete('__upstream');

  const query = incoming.searchParams.toString();
  const path = `/${upstreamPath}${query ? `?${query}` : ''}`;

  const proxyReq = https.request(
    {
      protocol: target.protocol,
      hostname: target.hostname,
      port: target.port || 443,
      method: req.method,
      path,
      // changeOrigin: подменяем Host на адрес апстрима (как в vite-прокси).
      headers: { ...req.headers, host: target.host },
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
