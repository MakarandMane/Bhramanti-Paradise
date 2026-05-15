# Bhramanti Paradise Tours — Landing Page

## Original Problem Statement
Build a landing page for Bhramanti Paradise, Tours website, which showcases their services for tourists who want to travel in different country or different places.

## User Choices
- Sections: Hero + Featured Destinations + Services + Testimonials + WhatsApp/phone CTA + Footer
- No contact form — WhatsApp/phone CTAs only
- Visual style: Elegant & editorial (warm earthy palette, Cormorant Garamond serif + Outfit body)
- Destinations: Mix international (Bali, Switzerland, Maldives, Dubai, Paris) + India (Kerala, Kashmir, Rajasthan)
- Uses high-quality Unsplash travel imagery

## Architecture
- **Frontend only** (React 19, Tailwind, lucide-react icons). No backend logic needed for this MVP.
- **No DB usage**, no third-party integration. WhatsApp links use `wa.me/<number>` deep links; calls use `tel:` links.
- Brand constants centralised in `/app/frontend/src/lib/brand.js` (single source for phone/email/WhatsApp number).

## What's Been Implemented (as of Dec 2025)
- `/app/frontend/src/pages/Landing.jsx` — page composition
- `/app/frontend/src/components/Header.jsx` — sticky glass header, nav, mobile menu, WhatsApp CTA
- `/app/frontend/src/components/Hero.jsx` — full-bleed hero, gradient overlay, dual CTAs, trust stats
- `/app/frontend/src/components/Destinations.jsx` — bento-style grid of 8 destinations
- `/app/frontend/src/components/Services.jsx` — 6-card services grid (Custom Itineraries, Group & Family, Luxury, Visa, Flights, Stays)
- `/app/frontend/src/components/Testimonials.jsx` — 3 traveler testimonials with portraits + 5-star rating
- `/app/frontend/src/components/CTASection.jsx` — dark earthy CTA block with WhatsApp/phone/email
- `/app/frontend/src/components/Footer.jsx` — giant brand mark, columns, socials
- `/app/frontend/src/components/FloatingWhatsApp.jsx` — fixed bottom-left chat button
- `/app/frontend/src/lib/brand.js` — BRAND constants + waLink helper
- Google Fonts (Cormorant Garamond + Outfit) wired in `public/index.html`
- 100% testing agent pass (34/34 frontend checks, desktop + mobile)

## Personas
- **Indian travelers** planning leisure trips abroad and within India who prefer WhatsApp-first communication.
- **Honeymooners / families** seeking curated, low-effort booking experiences.

## Core Requirements (static)
- Showcase brand + service breadth on one elegant scroll
- Drive all engagement to WhatsApp or phone
- Mobile-first, fast, accessible
- Easy to update phone / WhatsApp number (one file)

## Backlog (Prioritized)
### P0 — None blocking
### P1
- Replace placeholder phone/WhatsApp (919876543210) with real business number
- Add real brand logo / favicon
- Add Open Graph + Twitter card meta tags for social sharing
### P2
- Add tour-package detail pages with full itinerary + pricing
- Add lead capture form backed by FastAPI + MongoDB (currently WhatsApp-only)
- Add blog / travel-stories section for SEO
- Add multilingual support (Hindi)
- Integrate Google Analytics / Meta Pixel
- Sticky inquiry banner with seasonal offers

## Next Tasks
1. Collect real WhatsApp/phone/email from client and update `brand.js`
2. Decide if a CMS or admin panel is required for destinations/testimonials
3. SEO meta tags + structured data (`TravelAgency` schema.org)
