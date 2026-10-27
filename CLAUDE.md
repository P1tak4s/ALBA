# ALBA Wellbeing

## Kas tai per projektas
Trikalbė (EN, LT, RU) svetainė vienam asmens verslui. Savininkė Lina Simavičiūtė (Alba), gyvena Louth, Lincolnshire, dirba apylinkėse ir toliau, hipnoterapija ir internetu.

Pozicionavimas: **profesionali slaugytoja, gyvenanti kartu su prižiūrimu žmogumi (live-in carer)**, su medicininiu išsilavinimu. Wellbeing (hipnoterapija, masažas, Reiki, kvėpavimas) yra papildoma. „Gydytojos“ rėmo ir viešų kainų nebėra.

Auditorija: 45-70 m. žmonės ir jų šeimos, dažnai susirūpinę. Skaito telefone. Tonas: šiltas, jaukus, žmogiškas, kaip Lina kalbėtų telefonu. Niekada kliniškas.

Šūkis: „Professional knowledge. Human presence. A happy we.“
Kontaktai: albalinasima25@icloud.com, +44 7300 403632. Kainos aptariamos individualiai.

## Stack'as (nuo 2026-10 perdarymo)
- **Astro 7** (statinis), GSAP + Lenis judesiui, jokio WebGL. `npm ci && npm run build`, išvestis `dist/`.
- `vercel.json` nurodo Vercel'iui Astro framework'ą ir `dist/`. Vercel projektas `alba`, domenas https://www.albawellbeing.co.uk, auto-deploy iš GitHub `main` (github.com/P1tak4s/ALBA).
- **Diegimas = `git push origin main`.** `vercel --prod` neveikia (nėra teisių org'e). Push reiškia LIVE.
- URL išlaikyti tokie patys kaip seni: `build.format: 'preserve'` daro `/about.html`, `/lt/about.html`, `/lt/`. Naujas puslapis: `/live-in-care.html`.

## Kur kas
```
src/i18n/en.ts      VISAS angliškas tekstas (šaltinis), Block tipai
src/i18n/lt.ts      lietuviškas tekstas, tas pats raktų medis (TypeScript tikrina)
src/i18n/ru.ts      rusiškas tekstas
src/i18n/index.ts   lokalės, failų vardai (URL), href(), site
src/i18n/schema.ts  FAQPage ir Service JSON-LD
src/pages/[...lang]/*.astro   puslapiai (EN šaknyje, LT ir RU aplankuose)
src/pages/404.astro, sitemap.xml.ts
src/layouts/Base.astro        head, SEO, hreflang, JSON-LD @graph, header, footer
src/components/               Mark (logotipo ženklas), WeFigure (hero su Linos nuotrauka), ArchPhoto, PageHero, Blocks, Header, Footer
src/motion/                   we.ts (ženklo „--we“ varikliukas), ui.ts (meniu, forma, header), setup.ts (užuolaidų perėjimas)
src/engine/                   awwwards variklis be loader/GL/cursor
src/styles/                   tokens.css (spalvos, šriftai), base.css, site.css
public/                       šriftai, favicon, og.png, robots.txt, llms.txt, manifest
Gallery/Logo/2026/            NAUJAS logotipas (SVG su kreivėmis + PNG)
DESIGN.md                     koncepcija, sistema, sprendimai
```

## Teksto taisymas
Keisk tik `src/i18n/*.ts`. Pridėjai raktą `en.ts`, pridėk jį ir `lt.ts`, `ru.ts`, kitaip `npm run build`/`astro check` nepraeis. LT tekstui VISADA skill `lt-rasyba` ir `python3 ~/.claude/skills/lt-rasyba/scripts/lt_lint.py src/i18n/lt.ts`.
Jokio ilgojo brūkšnio (U+2014) niekur.

## Dizaino taisyklės
- Koncepcija „A happy we“: ženklas iš dviejų kupolų ant vieno horizonto (pilnas = Lina, atviras = žmogus, kurį ji prižiūri, persidengimas = „pirmoji šviesa“). Alba = aušra.
- Paletė jauki: linas `#f6efe6`, avižinė `#ede2d3`, vakaro rašalas `#2e2226`, pirmoji šviesa `#f2a365` (tik plotams), žarija `#9c4a17` (tekstui). Visos poros AA, skaičiai DESIGN.md.
- Šriftai: Literata (antraštės ir tekstas), Onest (UI: meniu, mygtukai, etiketės). Abu su kirilica, savame hoste `public/fonts/`.
- Lankstumas: piliulės veiksmams, arkos žmonėms ir nuotraukoms, 1rem kampai kitkam.
- 16px šrifto grindys, 48px lietimo taikiniai, WCAG AA.
- Veidų negeneruok. Linos nuotraukos tikros (`src/assets/lina-*.jpg`). Atmosferinės nuotraukos (`src/assets/*.webp`) be žmonių, keistinos tikromis.

## Spąstai
- Originalus checkout'as `~/Desktop/Claude code/ALBA` yra iCloud Drive (dataless failai, „ 2“ kopijos `.git`'e). Dirbk worktree už iCloud ribų (pvz. `~/dev/alba-redesign`), `node_modules` į iCloud nedėk.
- Repo turi sugadintą ref'ą `refs/remotes/origin/main 2`. Git įspėja, bet veikia.
- Kontaktų forma neturi backend'o: ji atidaro lankytojo el. pašto programą (mailto) su paruoštu laišku. Tikram siuntimui reikia Formspree ar pan.

## SEO / GEO
- `/sitemap.xml` generuojamas (`src/pages/sitemap.xml.ts`), su hreflang alternatyvomis. `robots.txt` aiškiai leidžia AI robotus. `llms.txt` su faktais.
- Kiekvienas puslapis: unikalus title/description, canonical, hreflang en-GB/lt-LT/ru + x-default, OG/Twitter, JSON-LD @graph (WebSite, LocalBusiness+ProfessionalService, Person, WebPage, BreadcrumbList, Service, FAQPage).
- **Anglijos regionų puslapiai** (tik EN): `/live-in-care/<regionas>.html`, tekstas `src/i18n/areas.ts`, šablonas `src/pages/live-in-care/[area].astro`. 10 puslapių (Lincolnshire + 9 regionai), kiekvienas ~67-71 % unikalaus teksto. Nedaryk puslapio kiekvienam miestui (doorway rizika): miestai vardijami regionų sąrašuose.
- **Kainų gidas** (tik EN): `/live-in-care-cost.html` (`src/pages/live-in-care-cost.astro`), rinkos kainos su šaltiniais, patikrinta 2026-10-27. Atnaujink kasmet.
- **IndexNow** raktas `public/2b321020e551bf0a309a1d1c55e090a2.txt`: po diegimo pinguok `api.indexnow.org` (Bing, per jį ChatGPT paieška).
- QA: `npm run build`, serveris ant 4400, `node ~/.claude/skills/awwwards/scripts/audit.mjs http://127.0.0.1:4400/` (tikslas 0 FAIL, 0 WARN).
