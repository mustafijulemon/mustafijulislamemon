# Mustafijul Islam Emon — Professional Portfolio

A responsive React + TypeScript portfolio built with Vite. The site includes a refined visual system, animated hero, rotating role text, scroll progress, active navigation, scroll-triggered reveals, interactive project filters, image galleries, achievements, leadership experience, and contact links.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Upload the contents of this project folder to the root of a GitHub repository. `package.json`, `index.html`, `src/`, and `public/` must be at the repository root.
2. Import the repository in Vercel.
3. Use the Vite defaults or keep the included `vercel.json` settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy.

## Content updates

Portfolio text, roles, projects, achievements, photos, experience, education, social profiles, and contact details are maintained in `src/data/siteConfig.ts`. Public images are organized under `public/`.

## Motion and accessibility

Motion is implemented with CSS and IntersectionObserver. Reduced-motion preferences are respected through `prefers-reduced-motion`; core content remains available without animation.

## Contact form

The contact form validates inputs and opens the visitor's default email application because `formEndpoint` is currently blank. Configure a trusted form endpoint in `src/data/siteConfig.ts` to enable direct submission.
