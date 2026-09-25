# aishwaryashukla.info

Personal portfolio of Aishwarya Shukla, a technology and AI leader in Hong Kong. It is built for two audiences: recruiters (experience, credentials, résumé) and prospective clients (live product work, services, contact).

Built with Next.js 16 (App Router), React 19 and CSS Modules, with no UI framework and no runtime dependencies beyond Next.

## Editing the site

Almost everything lives in **`src/content/site.ts`**:

| What | Where in `site.ts` |
| --- | --- |
| Name, headline, availability line, LinkedIn | `site`, `hero` |
| Headline numbers (15+, 40%, 3×, 6) | `highlights` |
| Featured case studies and client websites | `featuredProjects`, `moreProjects` |
| Career timeline | `experience` |
| Awards, education, certification | `credentials` |
| Services and engagement steps | `services`, `engagementSteps` |
| About text, facts and toolkit | `about` |

Other things you may want to change:

- **Screenshots**: `src/assets/work/`. Replace a file with the same name, keeping a 16:10 image about 1920×1200.
- **Portrait**: `src/assets/portrait.jpg` (4:5).
- **Résumé**: `public/Aishwarya-Shukla-Resume.pdf`. Set `site.resume` to `null` to hide every résumé button.
- **Contact form topics**: `src/content/contact.ts`.
- **Colours, type and spacing**: the tokens at the top of `src/app/globals.css`, with a light and a dark theme.
- **Social share image and icons**: `src/app/opengraph-image.png`, `twitter-image.png`, `icon.png`, `apple-icon.png` and `favicon.ico`.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local`:

- `BREVO_API_KEY` sends contact form messages through Brevo (`src/app/api/contact/route.ts`).
- `NEXT_PUBLIC_GA_ID` sets the Google Analytics measurement ID. It is optional and read at build time.

## Deployment

The site builds as a standalone Docker image. See [DEPLOY.md](DEPLOY.md).
