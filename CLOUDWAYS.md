# vite-ssr · npm

| Field | Value |
|-------|-------|
| Framework Preset | Vite |
| Package Manager | npm |
| Build Command | `npm install && npm run build` (runs client + ssr sub-builds) |
| Output Directory | `dist` |
| Entry File | src/entry-server.jsx (+ server.js) |
| Start Command | `npm start` |
| Node | >=18.0.0 |

Listens on `process.env.PORT`. Generate the lockfile with `./generate-lockfile.sh` before pushing.
