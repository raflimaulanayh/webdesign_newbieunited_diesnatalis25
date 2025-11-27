# Meal Up | Level Up Your Meal Website

This is a [Next.js](https://nextjs.org) project for the Meal Up | Level Up Your Meal, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- Next.js 16.0.4 (App Router)
- Bun and pnpm support for fast development and CI
- Authentication with NextAuth.js
- Theme switching (light/dark) with `next-themes`
- Global state management with Zustand
- Data fetching with SWR and Axios
- Carousel with Embla
- UI components with Sonner, Lucide, and more
- Font optimization using `next/font`
- Linting, formatting, and type checking (ESLint, Prettier, TypeScript)
- PWA support (`next-pwa`)
- Analytics with Vercel Analytics

## Getting Started

Install dependencies (choose one):

```bash
pnpm install
# or
bun install
```

Run the development server:

```bash
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `src/app/(public)/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Google Fonts (Barlow Condensed, Inter).

## Project Structure

- `src/app/` — App router pages and layouts
- `src/components/` — UI components, providers, atoms
- `src/constants/site-metadata/` — Site metadata (see `index.ts`)
- `src/services/` — API and auth logic
- `src/shared/` — Fonts and global styles
- `src/utils/` — Utility functions
- `types/` — TypeScript type definitions

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Run linter
- `pnpm typecheck` — TypeScript type checking
- `pnpm prettier:format` — Format code

Or use the same commands with `bun run` if you prefer Bun.

## Environment Variables

Set up your `.env.local` for secrets and public URLs, e.g.:

```
NEXTAUTH_SECRET=your-secret
APP_URL=https://yourdomain.com
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [pnpm Documentation](https://pnpm.io/)
- [Bun Documentation](https://bun.sh/docs)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Vercel Analytics](https://vercel.com/analytics)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
