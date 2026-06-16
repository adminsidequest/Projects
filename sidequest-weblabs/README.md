# Sidequest Weblabs

Marketing site for Sidequest Weblabs, a boutique web studio that designs and builds
custom websites for any industry.

## Stack

- React 19
- Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite`)
- lucide-react icons
- Deployed on Vercel

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

- `src/components/` UI sections and primitives
- `src/data/content.js` all site copy, pricing, services, and FAQs
- `public/` static assets (favicon, case-study image)

Update studio contact details in `src/data/content.js` (the `contact` export).
