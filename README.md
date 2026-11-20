# Mustafijul Islam Emon — Professional Portfolio

A clean, responsive personal portfolio built with React, TypeScript and Vite.

## Included sections

- Home and profile summary
- About and education
- Professional experience and leadership
- Technical skills
- Academic and personal projects
- Achievements and awards
- National TV debate, debate events and leadership roles
- Workshops and public speaking sessions
- Press coverage
- Contact details, social profiles and message form

All portfolio content is maintained in `src/data/siteConfig.ts`. Public images are stored in `public/`.

## Local development

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

Import this repository into Vercel. The default Vite build settings are sufficient:

- Build command: `npm run build`
- Output directory: `dist`

The site is configured for client-side routing fallback in `vercel.json`.

## Content updates

Edit `src/data/siteConfig.ts` to update the profile details, education, skills, projects, achievements, experience, image galleries, contact information and social links. Place any new gallery images in the appropriate directory under `public/` and update the matching image path in `siteConfig.ts`.
