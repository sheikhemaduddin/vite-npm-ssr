# vite-ssr · npm

Standard Vite + React SSR app (Express render server). Mirrors a typical customer repo built from the [Vite SSR guide](https://vite.dev/guide/ssr).

## Cloudways deploy settings

| Field | Value |
|-------|-------|
| Rendering mode | **SSR** (Node.js), not Vite CSR/static |
| Package Manager | npm |
| Build Command | `npm install && npm run build` |
| Output Directory | `dist` |
| **Entry File** | **`server.js`** (project root) |
| Start Command | `npm start` |
| Node | >=18.0.0 |

Listens on `process.env.PORT`. Generate the lockfile with `./generate-lockfile.sh` before pushing.

**Note:** If Cloudways runs `node server.js` directly (without `NODE_ENV`), the server defaults to **production** mode. Use `npm start` or set `NODE_ENV=production` explicitly. Vite `allowedHosts` includes `*.cloudwaysstagingapps.com` and `*.cloudwaysapps.com` for staging.

## Entry files (do not confuse)

| File | Purpose |
|------|---------|
| `server.js` | **Runtime entry** — starts Express, listens on `PORT`. Cloudways must start this file. |
| `src/entry-server.jsx` | SSR **source** — `renderToString` module (dev + build input). |
| `dist/server/entry-server.js` | SSR **bundle** — imported by `server.js` at runtime. **Do not** set this as the Cloudways entry file. |

There is **no** `dist/server/server.js` in this repo.

## Auto-detection pitfall (customer-realistic)

Cloudways may auto-detect this as **Vite CSR** because the repo shares the same surface signals as a SPA:

- `vite.config.js` + root `index.html`
- `npm run build` and output under `dist/`

That is expected customer pain: most Vite apps are CSR, so generic heuristics misfire on SSR repos that follow the official Vite SSR layout.

If auto-detection picks CSR, **manually override** to SSR/Node and set entry file to `server.js`.

## Build output

```
dist/
  client/
    index.html          # template (contains <!--ssr-outlet-->)
    assets/             # client JS/CSS
  server/
    entry-server.js     # SSR render bundle (imported by server.js)
```

CSR deploy (static `dist/` only) will fail: HTML is not pre-rendered without the Node server.
