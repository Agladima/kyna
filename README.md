# Virtually Kyna — Premium Consulting Website

A premium, modern corporate consulting website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond (serif headings) + Inter (body)

## Brand

- **Primary**: Cream `#f0e7d5`
- **Secondary**: Deep Navy `#212842`
- **Accent**: Gold `#c9a96e`

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   ├── loading.tsx         # Loading screen
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   ├── layout.tsx      # About page metadata
│   │   └── page.tsx        # About page
│   ├── services/
│   │   ├── layout.tsx      # Services page metadata
│   │   └── page.tsx        # Services page
│   └── contact/
│       ├── layout.tsx      # Contact page metadata
│       └── page.tsx        # Contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky animated navbar
│   │   └── Footer.tsx      # Luxury footer with legal copy
│   ├── sections/
│   │   ├── HeroSection.tsx     # Animated hero
│   │   ├── TrustedSection.tsx  # Trust points section
│   │   └── PillarsSection.tsx  # Three pillars section
│   └── ui/
│       ├── PillarCard.tsx      # Animated pillar card
│       ├── ServiceCard.tsx     # Pricing tier card
│       ├── AddonCard.tsx       # Add-on service card
│       ├── SectionWrapper.tsx  # Scroll reveal wrapper
│       └── DecorativeBg.tsx    # Background decorative elements
├── data/
│   └── constants.ts        # All site content/data
├── lib/
│   └── animations.ts       # Framer Motion animation variants
└── app/globals.css         # Global styles, grain overlay, utilities
```

## Customisation

### Content
All text content lives in `src/data/constants.ts`. Edit `BRAND`, `PILLARS`, `SERVICE_TIERS`, `ADDONS`, and `COMPANY_VALUES`.

### Colors
Colors are defined in `tailwind.config.ts` and as CSS variables in `globals.css`.

### Fonts
Google Fonts are loaded via `<head>` in `src/app/layout.tsx`. Replace `Cormorant Garamond` or `Inter` as needed.

### Images
The founder section uses a placeholder. Replace with a real `<Image>` component pointing to `/public/founder.jpg`.

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended for Next.js):

```bash
npx vercel
```

Or use any Node.js hosting provider supporting Next.js 15.

---

© Virtually Kyna. All rights reserved.
