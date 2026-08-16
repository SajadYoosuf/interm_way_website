# Internway Website

Official Next.js landing page for Internway’s international hospitality internships and career pathway programs.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Next.js Metadata API, structured data, dynamic robots and sitemap

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the final production origin before deployment so canonical, Open Graph, robots and sitemap URLs use the public domain. See `.env.example`.

## Quality checks

```bash
npm run lint
npm test
```
