# SA Nutrición — Sitio web de Lic. Soledad Alvarez

Este repo contiene dos versiones del sitio, cada una es un proyecto Next.js independiente:

| Carpeta | Qué es | Puerto local |
| --- | --- | --- |
| [`web/`](web) | Versión evolucionada del sitio (nueva estructura y diseño, según `web/SA_Nutricion_ClaudeCode_Brief.md`). | 3000 |
| [`migracion-wix/`](migracion-wix) | Réplica fiel del sitio en Wix Studio: https://doohagency.wixstudio.com/solealvarez | 3001 |

## Correr localmente

```bash
cd web && npm install && npm run dev            # http://localhost:3000
cd migracion-wix && npm install && npm run dev  # http://localhost:3001
```

## Deploy en Vercel

Cada carpeta se despliega como un proyecto separado: en Vercel, configurar **Root Directory** = `web` o `migracion-wix`.
