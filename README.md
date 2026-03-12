# LootScout Website

Professional landing and legal pages for **LootScout** — a local marketplace for collectibles (trading cards, comics, vinyl, etc.). This site satisfies Stripe's business verification requirements with clear business description, customer service contact, and refund/return/cancellation policies.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (hosting)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm run start
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx       # Root layout, metadata, global styles
│   ├── page.tsx        # Landing page (hero, how it works, features, pricing, policies)
│   ├── globals.css     # Tailwind + custom CSS
│   ├── components/    # Footer, FadeInSection
│   ├── privacy/        # Privacy Policy
│   ├── terms/          # Terms of Service
│   └── refund/         # Refund Policy
├── public/
│   ├── logo.svg        # LootScout logo
│   └── favicon.ico     # Add your favicon here (optional)
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Deployment on Vercel

### Option A: Deploy from Git (recommended)

1. Push this repo (or the `website` folder as its own repo) to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → Import your repository.
4. Set **Root Directory** to `website` if the repo root is the parent (LootScout); otherwise leave as `.`
5. Vercel will detect Next.js. Click **Deploy**.
6. After deploy, go to **Settings → Domains** and add `lootscout.io`.

### Option B: Deploy with Vercel CLI

```bash
cd website
npm i -g vercel
vercel
```

Follow the prompts. To deploy to production:

```bash
vercel --prod
```

### Connecting lootscout.io

1. In Vercel: **Project → Settings → Domains**.
2. Add `lootscout.io` and `www.lootscout.io` (optional).
3. Vercel will show DNS records. In your domain registrar (e.g. Namecheap, Cloudflare, Google Domains):
   - Add an **A** record: `76.76.21.21` (Vercel’s IP) for `@` and/or `www`, or
   - Add a **CNAME** for `www` to `cname.vercel-dns.com`.
4. For apex `lootscout.io`, use Vercel’s recommended A record or their DNS nameservers if you transfer DNS to Vercel.
5. Wait for DNS propagation (up to 48 hours, often minutes). Vercel will issue SSL automatically.

## Environment Variables

This project does not require environment variables for the landing site. If you add analytics or other services later, add them in Vercel under **Settings → Environment Variables**.

## Stripe / Business Verification

The site includes everything typically required for Stripe and similar reviews:

- **Business description:** Hero and “How it works” explain the marketplace.
- **Customer service:** Email (support@lootscout.io), location (Raleigh, NC), response time (24 hours) in footer and dedicated section.
- **Refund policy:** Dedicated section on the homepage + full page at `/refund`.
- **Return policy:** Section on the homepage (seller-defined returns).
- **Cancellation policy:** Subscriptions and listings (homepage section).
- **Terms of Service:** `/terms`.
- **Privacy Policy:** `/privacy`.

## Favicon

Place a `favicon.ico` (or use Next.js App Router `app/icon.png`) in `public/` or `app/` so the browser tab shows your icon. The layout currently references `/favicon.ico`.

## License

Proprietary — LootScout.
