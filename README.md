# Hirelense.Web

Simple public marketing site for HireLens AI.

## Tech Stack
- **Next.js 15** - React framework
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety

## Getting Started

Install dependencies:

```bash
cd Hirelense.Web
npm install
```

Run development server:

```bash
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Hirelense.Web/
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind & global styles
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Landing page
│   └── components/
│       └── section.tsx      # Reusable section wrapper
├── package.json
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json
```

## Customization

### Update CTAs
Edit links in `src/app/page.tsx` to point to your production app URLs (currently pointing to `http://localhost:3000`).

### Colors
Modify brand colors in `tailwind.config.ts` under `theme.extend.colors.brand`.

### Content
Edit `src/app/page.tsx` to update:
- Hero section text
- Features list
- Pricing tiers
- Footer content

## Notes
- Runs on port **3010** to avoid conflict with the main app (port 3000)
- Includes responsive design for mobile/tablet/desktop
- Sticky navigation header
- Smooth scroll for anchor links
