# Information Architecture: Little Chief Plumbing

## Site Map

This is a single-page website with one primary entry point and a secondary thank-you page.

- Home `/` (index.html)
  - Hero `#hero`
  - Services `#services`
  - About `#about`
  - Reviews `#reviews`
  - FAQ `#faq`
  - Contact `#contact`
- Thanks `/thanks.html` — Form submission success page
- 404 `/404.html` — Error page (existing)

No additional pages. All navigation is anchored to section IDs.

## Navigation Model

- **Primary navigation**: Sticky header with 4 anchor links: Services, About, Reviews, Contact. Plus a prominent click-to-call phone button `(210) 461-0893`.
- **Secondary navigation**: None. Single-page design means no sub-pages or dropdowns.
- **Utility navigation**: None. No account, settings, or search.
- **Mobile navigation**: Hamburger toggle opens a full-screen overlay menu. Close on link tap, Escape key, or tap outside. Phone number remains accessible in the header.

### Navigation Flow
```
Header (sticky)
├── Logo → scroll to top / reload
├── Services → #services
├── About → #about
├── Reviews → #reviews
├── Contact → #contact
└── (210) 461-0893 → tel:+12104610893
```

## Content Hierarchy

### Hero Section (#hero)
1. **Headline + subheadline** — "Honest Plumbing San Antonio" + trust message. Immediate context.
2. **Primary CTAs** — Call Now (most prominent) + Book Online (secondary). These are the conversion gates.
3. **Trust signals** — 4.9 rating, 87+ reviews, 24/7, TX Licensed. Reassurance before the user scrolls.
4. **Emergency messaging** — "24/7 — no overtime charges" woven into the subheadline. No dedicated strip.

### Services Section (#services)
1. **Section eyebrow + title** — "What we do" / "Services". Clear label.
2. **6 service cards** — Emergency Repairs, Water Heaters, Drain Cleaning, Fixture Installation, Leak Detection, Repiping. Each card: icon, number, title, description.
3. **Implicit CTA** — Each card leads the user toward booking. No per-card buttons (clutter), but the section ends with a natural scroll to About/Reviews.

### About Section (#about)
1. **Owner story** — Pedro's background, why Little Chief exists. Humanizes the brand.
2. **Differentiators** — Upfront pricing, licensed & insured, Latino & women-owned, 24/7 no overtime, warranty. The "Little Chief Difference".
3. **Photo slot** — Owner/team photo placeholder. Visual proof of real people.

### Reviews Section (#reviews)
1. **Section header** — "What your neighbors say" + Google Reviews reference.
2. **Curated review cards** — 4–6 best reviews from Google, presented as designed cards with star ratings, reviewer name, and location.
3. **Google profile link** — "See all 87+ reviews on Google" with external link to the business's Google Business Profile.

### FAQ Section (#faq)
1. **Section header** — "Common questions" or "What to expect".
2. **Accordion items** — 8–10 questions covering pricing, hours, emergencies, warranties, service area, estimates, payment, preparation.
3. **Accordion behavior** — One open at a time (optional). Smooth expand/collapse.

### Contact Section (#contact)
1. **Section header** — "Book Service" + "We'll get back within the hour".
2. **Booking form** — Name, phone, email, service dropdown, message textarea. Primary conversion point.
3. **Contact sidebar** — Map embed, address, hours (24/7), Calendly link.
4. **Final CTA** — Phone number repeated prominently for mobile users who prefer calling.

### Footer
1. **Brand recap** — Logo + tagline + Latino & women-owned.
2. **Quick links** — Services, About, Reviews, Contact (anchor scrolls).
3. **Contact info** — Phone, email, address.
4. **License** — TX License #RMP-XXXXX.
5. **Copyright** — © 2026 Little Chief Plumbing.

## User Flows

### Flow 1: Emergency Caller (Fastest Path)
1. User lands on homepage (organic search, referral, ad)
2. User sees hero headline + phone number in sticky header
3. User taps/clicks `(210) 461-0893`
4. User calls directly — conversion complete in ~3 seconds

### Flow 2: Researcher → Booker
1. User lands on homepage
2. User scrolls to Services — scans for their problem ("Drain Cleaning")
3. User continues to About — reads credentials, sees Latino & women-owned
4. User reads Reviews — validates quality through neighbor testimonials
5. User expands FAQ — checks "Do you charge for estimates?" (answer: no)
6. User scrolls to Contact — fills form with name, phone, service, message
7. User submits form → redirected to Thanks page
8. User receives confirmation call within the hour

### Flow 3: Comparison Shopper → Trust Builder
1. User lands on homepage from Google search ("plumber San Antonio")
2. User sees reviews in hero trust signals (4.9, 87+ reviews)
3. User scrolls directly to Reviews section
4. User reads 4–5 curated Google reviews
5. User clicks "See all reviews on Google" — visits Google Business Profile
6. User returns and books via Contact form or calls

### Flow 4: Mobile User (Primary Device)
1. User lands on mobile viewport
2. Sticky header always shows phone number
3. Hero CTAs stack vertically — Call Now (full width), Book Online (full width)
4. Services in single column, easy to scan
5. Reviews in single column, readable card layout
6. FAQ accordion items are thumb-friendly tap targets
7. Contact form fields use correct input types (tel, email) with autocomplete

## Naming Conventions

| Concept | Label in UI | Notes |
|---------|-------------|-------|
| Business name | Little Chief Plumbing | Always full name, never abbreviated |
| Phone | (210) 461-0893 | With dashes, always clickable (tel: link) |
| CTA — primary | Call Now | Short, urgent, action-oriented |
| CTA — secondary | Book Online | Calmer, implies scheduling |
| Emergency messaging | 24/7 — no overtime charges | Always paired, never just "24/7" |
| Owner | Pedro | First name in About section |
| Ownership | Latino & women-owned | Full phrase, not shortened |
| Reviews source | Google Reviews | Always attribute to Google for credibility |
| Service area | San Antonio, TX | Specific, no "surrounding areas" |
| Licensing | Licensed & Insured in Texas | Not just "licensed" — Texas matters locally |

## Component Reuse Map

| Component | Used on | Behavior Differences |
|-----------|---------|---------------------|
| Header / Navigation | All pages (Home, Thanks, 404) | On Home: anchor links. On Thanks/404: links back to Home. Phone always visible. |
| Footer | All pages | Identical on all pages. Quick links scroll on Home, navigate on Thanks/404. |
| Section Eyebrow + Title Pattern | Services, About, Reviews, FAQ, Contact | Same typography, spacing, and reveal animation. Only text changes. |
| Reveal Animation Wrapper | All content sections | One IntersectionObserver pattern, applied via CSS class. |
| Button Styles (Copper, Ghost) | Hero, Contact, Footer, Mobile Nav | Copper = primary CTA. Ghost = secondary. Full-width on mobile. |

## Content Growth Plan

- **Services**: Fixed at 6 for this phase. If expanding later, add accordion or dedicated service detail pages.
- **Reviews**: Curated static cards (4–6). As new great reviews come in, swap cards manually. Future phase: live Google API.
- **FAQ**: 8–10 items. Easy to add more accordion items without structural changes.
- **Team/Photos**: Photo slots are placeholders in this demo. Real photos replace stock images when provided.
- **Testimonials / Case Studies**: Future phase — could add a dedicated "Our Work" section with before/after photos.

## URL Strategy

- **Pattern**: All routes are static files. No dynamic segments.
- **Anchor links**: `#services`, `#about`, `#reviews`, `#faq`, `#contact` — used only on Home page.
- **External links**: Phone (`tel:+12104610893`), email (`mailto:`), Google Reviews (external), Calendly (external), Google Maps embed.
- **No query parameters**: Form submission uses POST to StaticForms.xyz with redirect.
- **SEO considerations**: Single-page design means one URL to optimize. Schema.org structured data (already present) helps with local search. Meta description targets "plumber San Antonio" and related terms.
