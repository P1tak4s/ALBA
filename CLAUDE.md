# ALBA Wellbeing

## Kas tai per projektas
Statinė trikalbė svetainė vienam asmens verslui. Savininkė Lina Simavičiūtė (Alba), dirba Louth, Lincolnshire ir aplinkiniuose rajonuose bei nuotoliu.

Pozicionavimas (pakeistas 2026-07-09): NE „wellbeing terapeutė", o **profesionali gyvenamoji (live-in) slaugytoja ir kompanjonė** su medicininiu išsilavinimu, o wellbeing paslaugos (hipnoterapija, Reiki, masažas) yra papildomos. Seną „gydytojos praktikos" rėmą laikyk pasenusiu.

Auditorija: 45-70 m. žmonės ir jų šeimos nariai, dažnai pažeidžiami (liga, senėjimas, gedulas). Skaito telefone, neskubėdami. Tonas: šiltas, žmogiškas, patikimas, niekada kliniškas.

Šūkis: „Professional Knowledge. Human Presence. A Happy We."
Kontaktai puslapyje: albalinasima25@icloud.com, +44 7300 403632. Kainos nebeviešinamos, aptariamos individualiai.

## Stack'as
- Grynas HTML + CSS + vanilla JS. Jokio framework'o, jokio bundler'io, jokių npm priklausomybių.
- **`package.json` NĖRA** (patikrinta). `npm install` nereikia.
- Šriftai per Google Fonts `<link>`: Fraunces (antraštės), Manrope (tekstas). Cormorant Garamond dar linkinamas, bet antraštėms nebenaudojamas.
- Hostingas: Vercel projektas `alba`, domenas https://www.albawellbeing.co.uk. Projektas susietas su GitHub github.com/P1tak4s/ALBA (public).
- **Diegimas = `git push origin main`.** Vercel CLI šiam projektui neveikia (nėra teisių org'e), `vercel --prod` nebandyk. Push reiškia LIVE.

## SVARBU: šakninis HTML yra generuojamas
Nors build'o įrankių nėra, yra vienas mažas node skriptas:

```
node src/build.mjs          # generuoja EN šaknyje + lt/ + ru/
LOCALES=en node src/build.mjs   # tik EN
```

- Tikrasis HTML šaltinis yra **`src/*.html`** (6 puslapiai) + žodynas `src/translations.mjs`.
- `index.html`, `about.html`, `contact.html`, `hypnotherapy.html`, `end-of-life.html`, `consent.html` šaknyje ir tie patys 6 failai `lt/` bei `ru/` yra **išvestiniai**. Redaguosi juos tiesiai, kitas build'as perrašys.
- Vertimas veikia string-match principu: skriptas ieško EN pastraipos kaip rakto `translations.mjs`. Pridėjai naują EN tekstą, pridėk ir LT/RU raktą, kitaip LT/RU puslapyje liks anglų kalba.
- Raktuose naudok garbanotas kabutes ir apostrofus, nes build'as dekoduoja HTML esybes į unicode. Tiesios kabutės nesutaps.
- `css/styles.css` ir `js/main.js` NĖRA generuojami, juos redaguok tiesiai. Jie bendri visoms kalboms (absoliutūs keliai `/css/styles.css`, `/js/main.js`).

Taisyklė: naują puslapį reikia visomis trimis kalbomis. Praktiškai tai reiškia: sukurk `src/naujas.html`, įrašyk jį į `PAGES` masyvą `src/build.mjs`, sudėk LT/RU eilutes į `translations.mjs`, paleisk build'ą, papildyk `sitemap.xml`.

## Peržiūra lokaliai
```
python3 -m http.server 8000
```
Tada http://localhost:8000. `file://` NETINKA: turto keliai absoliutūs, tad `/lt/` ir `/ru/` atsidarytų be stilių.

## Struktūra
```
index about contact hypnotherapy end-of-life consent  (.html, EN, generuoti)
lt/, ru/            tie patys 6 puslapiai, generuoti
src/                HTML šablonai + build.mjs + translations.mjs
css/styles.css      vienas ~2500 eilučių failas
js/main.js          meniu, focus-trap, scroll reveal, formos demo
Gallery/img/        6 webp nuotraukos, tarp jų lina-portrait.webp
Gallery/Logo/       logotipo originalai ir perdirbti variantai
favicon-32.png, favicon-256.png, apple-touch-icon.png, og-image.png
robots.txt, sitemap.xml (18 URL, visos 3 kalbos)
seo/                planavimo dokumentai, į deploy neina
```
`.vercelignore` išmeta `src/`, `seo/`, `*.md`, nepanaudotus png.

## Dizaino taisyklės
- Paletė šilta: kreminė, šokoladinė, bronzinė. Žalios (sage) nebėra, nors `--sage*` token'ų vardai liko, jų reikšmės yra bronzinės. Nauju žaliu nespalvink.
- **SVG ikonų nedėk.** 2026-07-12 jos sąmoningai išimtos iš trust ir service kortelių, kontaktų telefono bloko, varnelių ir kalbos meniu. Išvaizda tipografinė, redakcinė. Liko tik telefono ikona lipnioje skambučio juostoje, nes tai vienintelis to mygtuko turinys.
- Mobilus vaizdas: 16px šrifto grindys visur (net kicker'iuose), 48px lietimo taikiniai. Šis blokas yra paskutinis `styles.css` sluoksnis, nes vėliausias sluoksnis laimi.
- WCAG AA kontrastas privalomas. Tikros reikšmės `css/styles.css` `:root`:
  `--taupe` #7C6A53 (patamsintas nuo #9C8B77 dėl ~4.5:1 ant kreminio),
  `--bronze-deep` #8A6038, `--sage` #C8A56E, `--sage-deep` #8A6038.
- Veidų negeneruok. Linos nuotrauka yra tikra (`Gallery/img/lina-portrait.webp`). Dirbtinio jos veido kurti NEGALIMA. Kitos nuotraukos yra atmosferinės, be žmonių.
- ⚠️ `css/styles.css` (2543 eil.) turi chronologinius `!important` sluoksnius, 8 deklaracijos. Vėlesnis sluoksnis atstato tai, ką ankstesnis paslėpė: `.portrait-inner img, .portrait-photo` slepiamas 2169 eil. ir vėl rodomas 2371 eil.; tas pats su `.sf-photo` (2184 ir 2375). Paprastas grep dėl `display:none` meluoja, žiūrėk paskutinį sluoksnį. Sluoksnių nelygink į vieną.

## Spąstai
- **`~/Desktop/Claude code/` yra iCloud Drive.** iCloud kaišioja „ 2" kopijas į `.git` (`fatal: bad object`), o failai virsta `compressed,dataless`: `cat` grąžina tuščią arba kabo. Prieš rašydamas į įtartiną failą tikrink `ls -lO failas`, `dataless` vėliavėlė reiškia, kad turinio dar nematei. Žr. `gotcha_rev_motors_icloud_desktop.md` ir `gotcha_icloud_dataless_reads.md`.
- Repo jau turi bent vieną sugadintą ref'ą: `refs/remotes/origin/main 2`. Git dėl jo įspėja, bet veikia.
- Užsakymo forma yra tik front-end demo. Realiems laiškams reikia `action`/`method` (Formspree ar pan.) ir demo handler'io pašalinimo iš `js/main.js`.

## SEO
- `robots.txt` leidžia viską ir rodo į `https://www.albawellbeing.co.uk/sitemap.xml`.
- `sitemap.xml` apima visus 18 URL (6 puslapiai x 3 kalbos). Pridedant puslapį atnaujink rankiniu būdu.
- Kiekvienas puslapis turi hreflang en/lt/ru + x-default, per lokalę skirtingą canonical ir og:url (juos įrašo build'as per `<!--HREFLANG-->` ir `<!--LANGS-->` vietaženklius).
- `og-image.png` šaknyje, naudojamas visuose puslapiuose. Favicon rinkinys: `favicon-32.png`, `favicon-256.png`, `apple-touch-icon.png`.
- JSON-LD: pagrindiniame puslapyje MedicalBusiness + LocalBusiness, vidiniuose BreadcrumbList, paslaugų puslapiuose Service + FAQPage, about puslapyje Person.
