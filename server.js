// Vite SSR runtime entry (Cloudways entry file: server.js).
// Dev: Vite middleware + on-the-fly SSR. Prod: serve built client assets + SSR from dist/.
// Start: npm start  |  SSR render bundle: dist/server/entry-server.js (not the process entry).
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

async function createServer() {
  const app = express();
  let vite;

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    vite = await createViteServer({ server: { middlewareMode: true }, appType: 'custom' });
    app.use(vite.middlewares);
  } else {
    const compression = (await import('compression')).default;
    app.use(compression());
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/client/assets')));
    app.use(express.static(path.resolve(__dirname, 'dist/client'), { index: false }));
  }

  app.use('*', async (req, res) => {
    const url = req.originalUrl;
    try {
      let template, render;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      }
      const { html: appHtml } = render(url);
      const html = template.replace('<!--ssr-outlet-->', appHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProd && vite) vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(PORT, () => console.log(`[vite-ssr] listening on ${PORT} (prod=${isProd})`));
}

createServer();
