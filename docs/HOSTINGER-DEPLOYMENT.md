# Hostinger Node.js Apps — Deployment Checklist

Deploy **`247-website`** only. Keep **`studio-247-website`** separate (local `npm run dev` or `sanity deploy`).

## Pre-deploy (local)

- [ ] `cd 247-website && npm ci`
- [ ] Copy `.env.example` → `.env.local` and fill values
- [ ] `npm run build` succeeds
- [ ] `npm run start` serves the site on port 3000
- [ ] `/about` loads content from Sanity (after publishing in Studio)
- [ ] `npx sanity schema deploy` run from `studio-247-website` (once)

## Hostinger hPanel setup

- [ ] Plan: **Business** or **Cloud** with **Node.js Web Apps**
- [ ] **Websites → Add Website → Node.js Apps → Import Git Repository**
- [ ] Repository root: **`247-website`** (monorepo: set root directory in settings)
- [ ] Node.js version: **20** or **22**

### Build settings

| Setting | Value |
|---------|--------|
| Install command | `npm ci` |
| Build command | `npm run build` |
| Start command | `npm run start -- -p $PORT` |

## Production environment variables

Set in Hostinger **Node.js app → Environment variables** (see `.env.example`).

Required for About page + webhook:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_REVALIDATE_SECRET`

Also set existing app variables (Firebase, API base, etc.) from `.env.example`.

## Sanity webhook (instant About updates)

1. [Sanity Manage → API → Webhooks](https://www.sanity.io/manage/project/3maklbfn/api/webhooks) → Create webhook
2. **URL:** `https://YOUR_DOMAIN/api/revalidate/`
3. **Dataset:** `production`
4. **Trigger on:** Create, Update, Delete
5. **Filter:** `_type == "aboutPage"`
6. **Secret:** same string as `SANITY_REVALIDATE_SECRET` on Hostinger
7. **HTTP method:** POST

After publish in Studio, `/about` updates within seconds (no code redeploy).

Without webhook, updates appear within **60 seconds** (ISR).

## Sanity CORS

Ensure production URL is in CORS origins:

```bash
cd studio-247-website
npx sanity cors add https://YOUR_DOMAIN --credentials
```

## Post-deploy verification

- [ ] Homepage and other routes load (unchanged static behavior)
- [ ] `/about` shows CMS content
- [ ] Edit About in Studio → Publish → `/about` updates without git deploy
- [ ] Images from `cdn.sanity.io` load (when About uses Sanity images in future)

## Studio (editors)

- Local: `cd studio-247-website && npm run dev` → http://localhost:3333
- Hosted: `cd studio-247-website && npm run deploy`
