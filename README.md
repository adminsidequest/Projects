# Projects

Monorepo for Sidequest Web Studio sites. Each folder is an independent app with its own Vercel project (Root Directory set to the folder).

## Sites

- **sidequest-weblabs** · Sidequest Web Studio marketing site (Vite + React)
- **lumetric-films** · Lumetric Films cinematic portfolio (Vite + React)
- **colonyrecto** · Colon y Recto coloproctology clinic (static HTML + compiled Tailwind)

## Local development

cd into a folder, then for the Vite apps:

```
npm install
npm run dev
```

colonyrecto is static: open `index.html`, or run `npm run watch:css` to rebuild Tailwind.

## Deployment

Each folder is deployed as its own Vercel project under the `admin-22996966's projects` team. Vite apps build automatically; colonyrecto ships its precompiled CSS as a static site.
