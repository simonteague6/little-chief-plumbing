# TODO — Little Chief Plumbing

> Client website: https://demo.simonteague.xyz

## Fixes Needed

- [ ] Optimize images — 6.5MB total (skyline 1.3MB, plumbing-work 3.2MB, bathroom-fixture 2.0MB) → convert to WebP, target <200KB each, add srcset
- [ ] Add sitemap.xml (robots.txt references it but file doesn't exist)
- [ ] Extract hardcoded overlay values (`rgba(26,18,11,0.82)`) into CSS custom property
- [ ] Replace inline SVG service icons with external icon files (see template-plumber Task 12)

## Integration

- [ ] Configure StaticForms access key (currently: YOUR_STATICFORMS_ACCESS_KEY)
- [ ] Set up real Calendly URL (currently: calendly.com/your-username)
- [ ] Replace Google review placeholder URL (g.co/kgs/PLACEHOLDER)

## Review & Polish

- [ ] Design review pass
- [ ] Responsive testing across all breakpoints
- [ ] Accessibility audit (contrast, focus states, ARIA)
- [ ] Performance audit (Lighthouse)
- [ ] Meta tags / SEO final pass
- [ ] Form backend integration test

## Future

- [ ] Analytics / conversion tracking
- [ ] Live Google Reviews API integration (currently static cards)
- [ ] Client onboarding (welcome email, domain purchase, Route53 setup)
