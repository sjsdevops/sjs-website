# Sree Jayam School Website

Local development starter for the Sree Jayam School redesign.

## Requirements
- Node.js 20.9 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Important before running
The homepage references image files in `public/images/`. Add the school's approved photographs using the filenames below, or replace those paths in `src/app/page.tsx`:
- `images/hero/school-hero-placeholder.jpg`
- `images/campus/classroom-placeholder.jpg`
- `images/campus/activities-placeholder.jpg`
- `images/campus/lab-placeholder.jpg`
- `images/campus/sports-placeholder.jpg`
- `images/campus/arts-placeholder.jpg`

The logo is currently represented by a temporary text mark. Replace it with the school's approved logo asset.

## Production build
```bash
npm run build
```

This is a starting point for local development, not a finished or launch-ready website. Verify all school facts, contact details, photographs, page routes, forms, and SEO URLs before deployment.
