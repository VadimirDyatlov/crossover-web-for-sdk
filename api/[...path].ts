import type { IncomingMessage, ServerResponse } from 'node:http';
import https from 'node:https';

// Апстрим выносим в env, чтобы менять контур (IFT/прод) без правки кода.
const API_TARGET =
  process.env.API_TARGET ?? 'https://ift.gate1.spaymentsplus.ru';

// Аналог `secure: false` из vite.config (server.proxy): IFT-шлюз отдаёт
// недоверенный сертификат. Vercel-rewrites валидируют TLS строго и падают
// в 502 на handshake — поэтому проксируем вручную и отключаем проверку cert.
const agent = new https.Agent({ rejectUnauthorized: false });

// Catch-all serverless-функция: ловит весь /api/* (заменяет rewrite в vercel.json).
export default function handler(req: IncomingMessage, res: ServerResponse) {
  const target = new URL(API_TARGET);

  // req.url приходит как `/api/crossover/v1/...?x=y`. Срезаем префикс `/api`,
  // которого нет в апстриме — так же, как rewrite в vite (path.replace(/^\/api/, '')).
  const path = (req.url ?? '').replace(/^\/api/, '') || '/';

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
