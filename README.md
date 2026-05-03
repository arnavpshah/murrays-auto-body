# Murray's Auto Body

MVP website for Murray's Auto Body — a local collision repair shop in Westford, MA.

Built with Next.js 16, TypeScript, Tailwind CSS, and Supabase (for contact form submissions).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home (hero, trust bar, services, gallery, location)
- `/services` — All services
- `/gallery` — Before/after photos
- `/contact` — Contact form + map

## Folder structure

```
/app
  /services
  /gallery
  /contact
  /api/inquiries     <- POST endpoint for the contact form
/components          <- Navbar, Footer, Hero, ServiceCard, GalleryGrid, ...
/lib                 <- supabase client
/public/images       <- shop photos go here
/supabase/schema.sql <- DB schema
```

## Supabase setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor (creates the `inquiries` table).
3. Copy `.env.local.example` → `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` *(optional, recommended — used by the server route to bypass RLS)*

If env vars are missing, the API route accepts the submission and logs it to the console. This keeps local development unblocked.

## Replacing placeholder content

- **Shop photo (Hero):** drop a high-res photo into `public/images/hero.jpg` and update `components/Hero.tsx` to render it via `next/image`.
- **Before/after gallery:** replace the placeholder gradients in `components/GalleryGrid.tsx` with actual images from `public/images/`.
- **Hours:** confirm the actual shop hours and update `components/LocationContact.tsx` and `app/contact/page.tsx`.
- **Domain:** update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `components/LocalBusinessJsonLd.tsx` to match the real domain.

## Deployment

1. Push this folder to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the Supabase env vars in Vercel's project settings.
4. Deploy.

## Local SEO

After deployment, create a [Google Business Profile](https://www.google.com/business/) with the address, phone, hours, and shop photos. This is the single highest-leverage step for ranking on "auto body near me" searches.
