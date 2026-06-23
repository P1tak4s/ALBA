# ALBA Wellbeing — Implementation Roadmap

Four phases over 12 months, sized for a solo operator. **Bold = highest leverage.** Each phase lists tasks, owner-effort, and dependencies.

Legend: 🔴 critical · 🟡 important · 🟢 nice-to-have · ⏱️ rough effort

---

## Phase 1 — Foundation (Weeks 1–4)

Goal: a trustworthy, indexable, locally-listed site on its own domain.

| Task | Pri | ⏱️ | Notes / dependency |
|---|---|---|---|
| **Register branded domain** (`albawellbeing.co.uk` or similar) | 🔴 | 1h | Check availability; UK `.co.uk` signals local trust |
| **Point domain at Vercel**, HTTPS, choose canonical host | 🔴 | 30m | Vercel → Project → Domains |
| **Create & verify Google Business Profile** (Service-Area Business) | 🔴 | 1–2h + verify | List service-area *towns* (Louth, Horncastle, Mablethorpe, Market Rasen) — **not** the whole county (June 2025 SAB rule). Video verification likely |
| Set hours, services, description, photos on GBP | 🔴 | 1h | "Open at time of search" is a top-5 local factor — keep hours accurate |
| **Split one-pager → core pages**: Home, About, Hypnotherapy, Companionship, End-of-Life, Pricing, Contact | 🔴 | 1–2 days | See `SITE-STRUCTURE.md`; reuse existing copy/styles |
| **Add schema**: `LocalBusiness` + `Person` (+ `Service` on the 3 service pages) | 🔴 | 2–3h | Validate with Rich Results Test |
| Unique `<title>` + meta description per page; self-canonical | 🔴 | 1h | |
| `sitemap.xml` + `robots.txt` + OG image | 🔴 | 1h | |
| **Google Search Console** verify + submit sitemap | 🔴 | 30m | Establishes indexing + baseline data |
| Install privacy-friendly analytics (Plausible/GA4) | 🟡 | 30m | |
| NAP everywhere identical (site footer, GBP, socials) | 🔴 | — | Name / +44 7300 403632 / Louth, Lincolnshire |
| **Ask first 3–5 clients for Google reviews** | 🔴 | ongoing | Reviews unlock local pack |

**Exit criteria:** custom domain live, GBP verified, 5–7 pages indexed in GSC, schema validates, 3+ reviews.

---

## Phase 2 — Expansion (Weeks 5–12)

Goal: full service coverage, local pages, blog launch, first citations.

| Task | Pri | ⏱️ | Notes |
|---|---|---|---|
| Build remaining service pages (Reiki, Wellbeing, Life-Transitions, Bereavement, Elderly) | 🔴 | 2–3 days | 700–900 unique words + FAQ each |
| **`/online-hypnotherapy/` UK-wide landing page** | 🔴 | 3h | Escapes local ceiling — big upside |
| Location pages: `/areas/louth/` + Horncastle, Mablethorpe, Market Rasen | 🟡 | 1 day | 500–600 words, *genuinely* local; ≤8 total |
| **Join professional registers & directories** (citations + backlinks): GHR / CNHC / a Reiki federation; Hypnotherapy Directory; Bark; Yell; Lottie & Age UK partner lists; Apple & Bing Maps | 🔴 | 1 day spread | Consistent NAP; each = citation + referral |
| **Launch blog** + first 4 posts | 🔴 | per calendar | See `CONTENT-CALENDAR.md` |
| Internal-linking pass (services ↔ blog ↔ About) | 🟡 | 2h | Descriptive anchors |
| Reviews page + Google review embed | 🟡 | 2h | |
| GBP posts 1–2/month | 🟡 | ongoing | |

**Exit criteria:** all services + 3–4 area pages live; 8+ citations; 4 posts; page-1 for 3+ "[service] Louth" long-tails; 6+ reviews.

---

## Phase 3 — Scale (Months 4–6)

Goal: local-pack presence, content depth, first links.

| Task | Pri | Notes |
|---|---|---|
| Continue blog (2/mo → ~12 total) | 🔴 | Hit the winnable long-tails |
| **Local link building / PR** | 🟡 | Lincolnshire press, local-business features, partnerships with funeral directors, hospices, GP surgeries, U3A, care navigators; guest pieces |
| Reviews → 12+ | 🔴 | Keep requesting + replying |
| Optimise underperformers (GSC: impressions but low CTR → improve title/meta) | 🟡 | Data-driven |
| Add `aggregateRating` schema once reviews are genuine & plural | 🟡 | Never fabricate |
| Core Web Vitals check (PageSpeed Insights) | 🟢 | Should stay green; self-host font if LCP needs it |
| GEO: get on a curated "best hypnotherapists / companions in Lincolnshire" list | 🟡 | #1 AI-visibility factor per Whitespark 2026 |

**Exit criteria:** appearing in Louth local pack for 2–3 terms; 12+ posts; first 3–5 quality backlinks; 12+ reviews.

---

## Phase 4 — Authority (Months 7–12)

Goal: own the niches, build durable authority.

| Task | Pri | Notes |
|---|---|---|
| Thought-leadership content ("a doctor's view on wellbeing", palliative companionship deep-dives) | 🔴 | E-E-A-T flagship; differentiates permanently |
| Client stories / reflections (with consent) | 🟡 | Strong experience signals |
| Sustained outreach: hospices, bereavement charities, private GPs, solicitors (probate→bereavement), retirement communities | 🟡 | Referral + links |
| Seasonal campaigns (grief at holidays, new-year wellbeing) | 🟡 | Calendar-driven |
| Quarterly content refresh of top pages | 🟡 | Freshness |
| Reviews → 25+; maintain GBP cadence | 🔴 | |
| Review schema, FAQ expansion, AI-citation monitoring (ChatGPT/Perplexity "companion/hypnotherapy Louth") | 🟢 | |

**Exit criteria:** top-3 local pack for hypnotherapy/companionship in Louth; ranking UK-wide for online-hypnotherapy long-tails; recognised as *the* doctor-led wellbeing companion in Lincolnshire; 25+ reviews; 400–800 organic sessions/mo.

---

## Dependencies & sequencing
1. **Domain + GBP first** — everything else compounds on these; don't build content on `*.vercel.app`.
2. **Schema + GSC** before heavy content — so indexing/data is captured from day one.
3. **Reviews from week 1** — they take time to accumulate and gate local ranking.
4. Content and citations run **continuously** from Phase 2 onward.

## Risk mitigation
- **Low DA early** → lean on local pack + directories + long-tail, not head terms.
- **YMYL scrutiny** → keep credentials visible, disclaimers honest, no outcome guarantees.
- **Solo capacity** → 2 posts/month max; batch GBP posts; template service/area pages to reduce effort without going thin.
- **Single point of failure (one person)** → keep NAP/citations consistent so the brand is findable even as offerings evolve.

## Fastest 5 wins (do these first)
1. Register the domain + go live on it.
2. Verify Google Business Profile (Service-Area).
3. Split the one-pager into Home / About / Hypnotherapy / End-of-Life / Contact with schema.
4. List on GHR + Hypnotherapy Directory + Bark.
5. Get your first 5 Google reviews.
