# Colon y Recto S.A.

Official website for **Colon y Recto S.A.**, the gastrointestinal center of **Dr. Héctor Enríquez Blanco** in Guatemala City. Specialists in diseases of the colon, rectum, and anus, with over 35 years of experience.

Live site: https://colonyrecto.com.gt

## Stack

A fast, dependency-light static site, no runtime framework.

- Single `index.html` (semantic, accessible, responsive)
- **Tailwind CSS** compiled to a static stylesheet (`assets/styles.css`), no CDN
- Vanilla JavaScript for the menu, accordion, smooth scroll, and the appointment form
- Spanish (Guatemala), SEO-ready: canonical, Open Graph, Twitter, and `MedicalClinic` + `Physician` JSON-LD structured data

## Structure

```
index.html            The whole site
assets/styles.css     Compiled Tailwind (generated)
assets/og.jpg         Social share image
assets/favicon-*.png  Icons
img/                  logo.png, doctor.png, clinic.jpg
src/input.css         Tailwind entry (source)
tailwind.config.js    Tailwind theme (brand colors + fonts)
robots.txt, sitemap.xml, site.webmanifest, vercel.json
```

## Develop

```bash
npm install
npm run watch:css   # rebuild assets/styles.css on change while editing index.html
```

Build once for production:

```bash
npm run build:css
```

Then open `index.html` (or serve the folder with any static server).

## Appointment form

The "Solicitud de cita" form works out of the box: with no configuration it opens **WhatsApp** to the clinic with the patient's details prefilled.

To also receive requests by **email**, create a free key at https://web3forms.com (registered to the clinic's inbox) and paste it into `index.html`:

```js
var WEB3FORMS_ACCESS_KEY = 'your-key-here';
```

## Deploy

Hosted on **Vercel** as a static site (`assets/styles.css` is committed, so no build step is required on deploy). Push to the default branch to deploy, or run `vercel --prod`.

To go live on the real domain, point `colonyrecto.com.gt` (A / CNAME) to the Vercel project.

---

Sitio desarrollado por [Sidequest Weblabs](https://sidequest-weblabs.vercel.app).
