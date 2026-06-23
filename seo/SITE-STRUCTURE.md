# ALBA Wellbeing — Site Structure & Technical SEO

The site is currently **two pages** (`index.html` one-pager + `consent.html`). To rank for distinct service and location intents, the one-pager's anchor sections must become **real, indexable pages**. Below is the target architecture — deliberately compact (quality over quantity).

## Target URL hierarchy

```
/                                  Home — positioning, top services, CTA, LocalBusiness schema
/about/                            Lina's story + credentials (E-E-A-T anchor, Person schema)
/services/                         Services hub (links to each service page)
  /services/hypnotherapy/          ⭐ online + in-person — highest organic upside
  /services/companionship/         companionship & home visits
  /services/end-of-life-companionship/   ⭐ flagship niche (palliative companionship)
  /services/bereavement-support/   grief support
  /services/reiki/                 Reiki & relaxation
  /services/wellbeing-support/     wellbeing support
  /services/life-transitions/      life-transition support
  /services/elderly-companionship/ support for seniors  (folds appointment + overnight here)
/pricing/                          transparent pricing + "what to expect"
/consultation/                     free introductory consultation (conversion page)
/reviews/                          testimonials + Google review embed (build over time)
/areas/                            service-area hub
  /areas/louth/                    primary location page
  /areas/horncastle/               nearby town
  /areas/mablethorpe/
  /areas/market-rasen/
/online-hypnotherapy/              ⭐ UK-wide (non-local) landing page — escapes local ceiling
/blog/                             resource hub
  /blog/<post-slug>/
/contact/                          NAP, map, form, hours, ContactPage schema
/client-agreement/                 (existing consent.html — keep, noindex optional)
```

**Quality-gate compliance:** ~4 location pages now, scaling to ≤8. We stay well under the 30-page warning / 50-page hard-stop. Never auto-generate thin "service × every village" pages.

> **Pragmatic note for a solo operator:** you do **not** need all of this at once. Priority order is in `IMPLEMENTATION-ROADMAP.md`. A strong Home + About + Hypnotherapy + End-of-Life + Companionship + Pricing + Contact (7 pages) already covers ~80% of the value.

## Page-type requirements

| Page type | Min words | Must include |
|---|---|---|
| Service page | 700–900, 100% unique | H1 with service + place, who it helps, what happens in a session, pricing, Lina's relevant credential, FAQ, CTA, `Service` + `FAQPage` schema |
| Location page | 500–600, 60%+ unique | Town name in H1/title, *specific* local references (towns, travel, "home visits across…"), services offered there, a local-flavoured testimonial, CTA |
| About page | 600+ | Full bio, credentials list, photo with alt text, philosophy, `Person` schema |
| Blog post | 800–1,500 | One real question answered from experience, author = Lina, internal links to 2–3 services |

## Internal linking plan

- **Home** → links to all top services + About + Pricing + Consultation.
- **Each service page** → links up to `/services/`, sideways to 2 related services, down to relevant blog posts, and to `/consultation/`.
- **Location pages** → link to the services offered there + Contact.
- **Blog posts** → link to the 2–3 services they relate to (topic → service funnel).
- **About** → linked from every page (it carries the E-E-A-T weight); link out to each service Lina is qualified for.
- Use descriptive anchor text ("doctor-led hypnotherapy in Louth"), never "click here".

## Technical foundation

| Item | Status / action |
|---|---|
| **Custom domain** | 🔴 Register branded `.co.uk` (e.g. `albawellbeing.co.uk`); point at Vercel; force HTTPS + non-www→www (or apex) canonical |
| **Sitemap** | 🔴 Add `/sitemap.xml` (list all indexable pages) + reference in robots |
| **robots.txt** | 🔴 Add; allow all, point to sitemap, (optionally) `Disallow: /client-agreement/` |
| **Canonical tags** | 🔴 Self-referencing `<link rel="canonical">` on every page |
| **Per-page meta** | 🟡 Unique `<title>` (≤60 char) + `meta description` (≤155) per page; currently one shared set |
| **Open Graph image** | 🟡 Add a branded 1200×630 `og:image` (use the logo lockup on cream) |
| **Core Web Vitals** | 🟢 Static site, minimal JS — already fast. Self-host the Google Font or use `font-display: swap` (already set) to protect LCP/CLS. Keep hero image dimensioned (already done). |
| **Mobile** | 🟢 Responsive + polished (done) |
| **Analytics** | 🔴 Add privacy-friendly analytics (Plausible / GA4) + **Google Search Console** (verify, submit sitemap) |
| **Accessibility** | 🟢 WCAG AA pass done (supports SEO + trust) |

## Schema markup plan (JSON-LD)

Add to `<head>` / before `</body>`. **Replace placeholders** (domain, postcode, geo, hours).

### 1. Home / global — `LocalBusiness` (Service-Area Business)
```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "ALBA Wellbeing",
  "description": "Doctor-led companionship, wellbeing support, hypnotherapy, Reiki, life-transition and end-of-life companionship in Louth, Lincolnshire and online.",
  "url": "https://albawellbeing.co.uk",
  "telephone": "+447300403632",
  "image": "https://albawellbeing.co.uk/Gallery/Logo/alba-wellbeing-logo.png",
  "priceRange": "££",
  "areaServed": [
    {"@type": "City", "name": "Louth"},
    {"@type": "City", "name": "Horncastle"},
    {"@type": "City", "name": "Mablethorpe"},
    {"@type": "City", "name": "Market Rasen"},
    {"@type": "AdministrativeArea", "name": "Lincolnshire"}
  ],
  "address": {"@type": "PostalAddress", "addressLocality": "Louth", "addressRegion": "Lincolnshire", "addressCountry": "GB"},
  "founder": {"@type": "Person", "name": "Lina Simavičiūtė"},
  "sameAs": ["GBP_URL", "FACEBOOK_URL", "GHR_PROFILE_URL"]
}
```
> Use `HealthAndBeautyBusiness` (a `LocalBusiness` subtype) — `MedicalBusiness` implies regulated clinical care, which ALBA explicitly is not. Omit `address.streetAddress` (home-based SAB); keep locality/region.

### 2. About page — `Person` (the E-E-A-T centrepiece)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Lina Simavičiūtė",
  "alternateName": "Alba",
  "jobTitle": "Doctor, Caregiver, Therapist",
  "worksFor": {"@type": "Organization", "name": "ALBA Wellbeing"},
  "alumniOf": "Kaunas University of Medicine",
  "knowsAbout": ["Hypnotherapy", "Reiki", "Palliative companionship", "Wellbeing", "Public Health"],
  "hasCredential": [
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "General Practitioner (Medicine)"},
    {"@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MSc Public Health"}
  ]
}
```

### 3. Each service page — `Service` + `FAQPage`
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Hypnotherapy",
  "provider": {"@type": "Organization", "name": "ALBA Wellbeing"},
  "areaServed": ["Louth", "Lincolnshire", "Online (UK)"],
  "description": "Calm, doctor-informed hypnotherapy, online and in person.",
  "offers": {"@type": "Offer", "priceCurrency": "GBP", "price": "20", "description": "From £20/hr; free introductory consultation"}
}
```
Pair with a `FAQPage` block of 3–5 real questions per page (great for rich results + AI answers).

### 4. Reviews — add `aggregateRating` to `LocalBusiness` **only once real reviews exist** (never fabricate).

## "Done" checklist for technical Phase 1
- [ ] Custom domain live + HTTPS + canonical host
- [ ] `LocalBusiness` + `Person` schema validated (Rich Results Test)
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Unique title/description per page
- [ ] GSC verified + sitemap submitted
- [ ] Analytics installed
- [ ] OG image set
