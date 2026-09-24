# Sea Pearl Biotech

Multi-page Sea Pearl Biotech website with neomorphic surfaces, original product imagery, a wide muted looping video banner, and WhatsApp/call links for three contact numbers.

## Run locally

Requires Node.js 22.13 or newer and npm.

```sh
npm ci
npm run dev
```

Local preview: http://localhost:5173.

```sh
npm run build
npm start
```

This project uses React, Vinext, Vite and the Cloudflare Vite plugin. The build produces a Cloudflare Worker and client assets in dist/. npm start runs a local Wrangler preview, not a public deployment.

## Hosting and domain

This repository contains the source and media, not a live hosted deployment. Connect a compatible hosting service before adding a custom domain. The existing Worker build requires a Worker-capable host; uploading source to GitHub Pages alone will not run it. No domain, DNS records or hosting credentials are configured here.

## Content and settings

- Contact numbers and WhatsApp links: lib/contact.ts.
- Main email: seapearlbiotech@gmail.com.
- Store destination: set STORE_URL in lib/commerce.ts when available.
- Products: lib/products.ts and lib/product-research.ts.
- Homepage video: public/sea-to-spirulina.mp4.
- Original company/product images and certification marks: public/original/.

The enquiry form is a preview and does not send messages. WhatsApp and telephone links open the visitor's appropriate app. Certificate validity, formulations and source details flagged on the site still require business confirmation.

No checkout, payment processing, email delivery or live support availability tracking is configured. Keep secrets in ignored environment files.
