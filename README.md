# Sea Pearl Biotech — GitHub Pages

The complete Sea Pearl Biotech website: company and service pages, 15 products, three journal articles, original images, a wide muted looping video banner, and WhatsApp/call links.

## Enable hosting (one-time setup)

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions → Deploy website to GitHub Pages → Run workflow** and select **main**.
4. Wait for both **build** and **deploy** to succeed. Open the website URL shown in the deployment.

Expected project URL, before adding a custom domain: **https://amdev27.github.io/seaperl.github.io/**. This is an expected address, not confirmation of a successful deployment.

A repository named `seaperl.github.io` is still a project site under the `amdev27` account. Only `amdev27.github.io` would be this account's root user-site repository.

The workflow is in `.github/workflows/pages.yml`. Future pushes to `main` build and deploy automatically after Pages is enabled. Do not select “Deploy from a branch”: this repository stores source code, and the workflow publishes the generated `out/` folder.

If Actions reports that Pages is not enabled, complete steps 1–2 and rerun the workflow. Repository/environment approval policies may also require approving the deployment.

## Add your domain later

1. In **Settings → Pages → Custom domain**, enter your domain and save.
2. Follow GitHub's [custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Configure the required DNS records with your domain provider. Do not use wildcard records.
3. Rerun **Deploy website to GitHub Pages** after saving or changing the domain. The workflow reads the site's base path from GitHub automatically; this rebuild updates all internal links and media paths.
4. When DNS and the certificate are ready, enable **Enforce HTTPS** in Pages settings.

No domain is hard-coded and no DNS records have been changed. For an Actions-based deployment, manage the domain in Pages settings; no manually maintained CNAME file is needed.

## Local development

Requires Node.js 22.13 or newer and npm.

```sh
npm ci
npm run dev
```

Development preview: http://localhost:5173. The existing local preview uses Vinext.

## Build for GitHub Pages

```sh
npm run build:pages
```

This uses Next.js static export and creates `out/` with HTML, JavaScript, styles, images, video and `.nojekyll`. No server or Cloudflare account is needed for this output.

For the repository subdirectory, set `NEXT_PUBLIC_BASE_PATH=/seaperl.github.io` before building. Example in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH="/seaperl.github.io"
npm run build:pages
```

Leave the variable empty for a custom domain served at its root. The GitHub workflow sets this value automatically using `actions/configure-pages`.

The original `npm run build` remains the separate Vinext/Worker build; it is not the Pages command.

## Website settings

- Phone/WhatsApp numbers: `lib/contact.ts`.
- Email: **seapearlbiotech@gmail.com**.
- Shop destination: set `STORE_URL` in `lib/commerce.ts`.
- Products: `lib/products.ts` and `lib/product-research.ts`.
- About-page hero video: `public/sea-to-spirulina.mp4` (muted autoplay, looping, with pause control).
- Homepage hero: the original cultivation photo `public/original/PHOTO-2024-07-12-12-50-21.jpg`, with the original headline.
- Goodluck (gluck) and Singest logos are original assets from the Sea Pearl WordPress media library, displayed before Our roots and on Our Brands. Brand enquiries currently lead to Contact.
- Original media: `public/original/`.

## Before launch

- The contact form is explicitly a preview: it does **not** send email. Connect an external form/email service if needed; GitHub Pages cannot run a server-side mail handler.
- WhatsApp and call buttons open the visitor's apps; they do not indicate live staff availability.
- The ecommerce destination is not yet connected.
- Confirm certification validity, product formulations and source details flagged on the site.
- Never commit secrets or private customer data.

References: [Next.js static export](https://nextjs.org/docs/app/guides/static-exports) · [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
