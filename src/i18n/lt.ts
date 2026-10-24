// Lietuviškas tekstas. Rašytas iš faktų, ne verstas sakinys po sakinio (skill lt-rasyba).
// Kreipinys „jūs“ mažąja, mygtukai bendratimi, be ilgųjų brūkšnių.
import type { Block, Dict } from './en';

const lt: Dict = {
  lang: 'lt',
  ogLocale: 'lt_LT',
  langName: 'Lietuvių',
  common: {
    brand: 'Alba Wellbeing',
    brandShort: 'Alba',
    brandSub: 'Wellbeing',
    skip: 'Pereiti prie turinio',
    menu: 'Meniu',
    close: 'Uždaryti',
    navLabel: 'Pagrindinis',
    langLabel: 'Kalba',
    homeLabel: 'Alba Wellbeing, pradžia',
    nav: {
      liveIn: 'Priežiūra namuose',
      endOfLife: 'Gyvenimo pabaigoje',
      hypno: 'Hipnoterapija',
      about: 'Apie Liną',
      contact: 'Kontaktai',
    },
    phoneDisplay: '07300 403632',
    phoneIntl: '+44 7300 403632',
    callShort: 'Skambinti',
    call: 'Skambinti 07300 403632',
    book: 'Susitarti dėl pokalbio',
    email: 'albalinasima25@icloud.com',
    motto: 'Profesinės žinios. Žmogiškas buvimas. Laiminga bendrystė.',
    breadcrumbHome: 'Pradžia',
    finale: {
      h2: 'Pasikalbėkime. Pirmas pokalbis nemokamas.',
      text: 'Nieko nereikia pasirašyti ir niekas neskubina. Papasakokite, kas vyksta namuose, o kartu išsiaiškinsime, ar aš jums tinku.',
      phoneLabel: 'Skambinkite arba rašykite SMS',
      emailLabel: 'Arba parašykite laišką',
    },
    footer: {
      pagesLabel: 'Puslapiai',
      area: 'Gyvenu Louth mieste, Lincolnshire grafystėje. Žmones prižiūriu apylinkėse ir toliau, o hipnoterapijos sesijos vyksta ir internetu, iš bet kurios JK vietos.',
      coords: 'Louth stovi ant Grinvičo dienovidinio: 53,37° š. pl., 0° 0′.',
      agreement: 'Kliento sutartis ir konfidencialumas',
      disclaimer: 'Alba Wellbeing teikia priežiūrą, draugiją ir pagalbą gerovei. Tai nepakeičia medicinos, slaugos ar skubiosios pagalbos. Ištikus nelaimei, skambinkite 999.',
      rights: 'Lina Simavičiūtė, vadinama Alba.',
    },
    figure: {
      lina: 'Lina',
      you: 'ir jūs',
      alt: 'Lina Simavičiūtė, vadinama Alba, su lino palaidine namuose žiūri pro langą',
    },
    faqLabel: 'Klausimai',
  },

  pages: {
    home: {
      title: 'Slaugytoja, gyvenanti kartu, Louth ir Lincolnshire',
      description: 'Lina (Alba) turi medicininį išsilavinimą ir prižiūri žmones jų namuose Louth ir Lincolnshire: demencija, Parkinsono liga, insultas, paliatyvi priežiūra, draugija.',
      ask: '„Ar mama gali likti savo namuose?“',
      h1: 'Taip, gali. Apsigyvensiu kartu ir prižiūrėsiu ją namuose.',
      lead: 'Esu Lina, bet dauguma mane vadina Alba. Turiu medicininį išsilavinimą, o jau penkerius metus Jungtinėje Karalystėje gyvenu kartu su žmonėmis, kuriuos prižiūriu, jų pačių namuose. Padedu viskuo: nuo asmens higienos iki puodelio arbatos ir nuoširdaus pokalbio. Dirbu ilgam, todėl šeima visada žino, kas yra šalia.',
      heroNote: 'Gyvenu Louth mieste, Lincolnshire. Vairuoju ir mielai atvykstu toliau.',
      questions: {
        h2: 'Ko dažniausiai klausia šeimos',
        intro: 'Pirmas skambutis beveik visada prasideda nerimu. Štai klausimai, kuriuos girdžiu dažniausiai, ir kaip paprastai padedu.',
        items: [
          { q: 'Mama serga demencija. Ar kas nors galėtų gyventi kartu su ja?', a: 'Taip. Apsigyvenu kartu ir saugau jos įprastą dieną: mėgstamą maistą, mažus kasdienius ritualus, ramią draugiją ir asmens priežiūrą. Namai lieka namais, o mama lieka savimi.', link: 'liveIn', more: 'Priežiūra namuose' },
          { q: 'Tėtis po insulto grįžo iš ligoninės.', a: 'Laikausi kineziterapeutų plano, kasdien padrąsinu daryti pratimus ir anksti pastebiu mažus pokyčius. Einame jo tempu, ne manuoju.', link: 'liveIn', more: 'Pagalba sveikstant' },
          { q: 'Kas būna su ja naktį?', a: 'Kai gyvenu kartu, naktį esu namuose, todėl ji niekada nelieka viena. Jei reikia tik nakties priežiūros, galime susitarti ir dėl jos.', link: 'liveIn', more: 'Priežiūra naktį' },
          { q: 'Jam labiausiai trūksta draugijos ir pagalbos namuose.', a: 'Tai ne mažiau svarbu. Gaminu valgyti, apsiperku, tvarkau namus, kartu einame pas gydytojus ir visada randu laiko atsisėsti ir pasikalbėti.', link: 'liveIn', more: 'Draugija ir pagalba' },
          { q: 'Artėja pabaiga. Ar galėtumėte pabūti su mumis?', a: 'Taip. Būsiu rami, švelni draugija jūsų artimajam, o šeimai duosiu progą pailsėti. Dirbu kartu su šeimos gydytoju, bendruomenės slaugytojais ir hospiso komanda.', link: 'endOfLife', more: 'Palydėjimas gyvenimo pabaigoje' },
          { q: 'Nuolat nerimauju ir negaliu atsipalaiduoti.', a: 'Hipnoterapija, atsipalaidavimo ir kvėpavimo sesijos padeda vėl pailsėti. Susitikti galime internetu iš bet kurios JK vietos arba gyvai netoli Louth.', link: 'hypno', more: 'Hipnoterapija' },
        ],
      },
      window: {
        caption: 'Namus namais daro smulkmenos: rytinė arbata, mėgstamas krėslas, langas, prie kurio ji mėgsta sėdėti. Visa tai paliekame taip, kaip buvo.',
        alt: 'Arbatos puodelis ir džiovintos gėlės ant palangės švelnioje ryto šviesoje',
      },
      about: {
        h2: 'Pirmiausia išklausau',
        paras: [
          'Turiu medicininį išsilavinimą ir profesinę kvalifikaciją, todėl suprantu, kas vyksta su žmogaus sveikata. Vis dėlto man svarbiausias pats žmogus: jo įpročiai, istorijos, kas jį prajuokina ir ko jis tikisi iš kiekvienos dienos.',
          'Per penkerius metus prižiūrėjau žmones, sergančius demencija, Parkinsono liga, vėžiu, po insulto, turinčius Dauno sindromą ar ribotą judumą, ir buvau šalia šeimų paliatyvios priežiūros metu. Kiekviena diena kitokia, todėl prisitaikau su kantrybe, sveiku protu ir pagarba.',
        ],
        facts: [
          { k: 'Penkeri metai', v: 'priežiūros žmonių namuose Jungtinėje Karalystėje' },
          { k: 'Dirbu savarankiškai', v: 'viską sutariate tiesiogiai su manimi' },
          { k: 'Vairuotojo pažymėjimas', v: 'mielai vairuoju ir atvykstu' },
          { k: 'Rekomendacijos', v: 'pateiksiu paprašius' },
        ],
        more: 'Daugiau apie mane',
        alt: 'Lina Simavičiūtė šviesiu tvido švarku, smakrą parėmusi ranka',
      },
      promises: {
        h2: 'Ką jums pažadu',
        items: [
          'Niekada jūsų neskubinsiu. Einame jūsų tempu.',
          'Sutiksiu jus geranoriškai, be jokio smerkimo.',
          'Sprendžiate jūs. Aš padedu, bet nevadovauju.',
        ],
      },
      steps: {
        h2: 'Nuo ko pradedame',
        items: [
          { title: 'Paskambinkite man', text: 'Arba parašykite SMS ar laišką. Papasakokite tiek, kiek norite: neteisingo būdo pradėti nėra.' },
          { title: 'Susėdame ir pasikalbame', text: 'Dažniausiai namuose, prie arbatos puodelio. Pokalbis nemokamas, jokių anketų, niekas neskuba.' },
          { title: 'Susitariame kartu', text: 'Valandas, dienotvarkę ir sąžiningą kainą sutariame tiesiogiai. Tada atvykstu ir pradedame.' },
        ],
      },
    },

    liveIn: {
      title: 'Priežiūra namuose gyvenant kartu, Lincolnshire',
      description: 'Lina gyvena kartu su prižiūrimu žmogumi jo namuose netoli Louth: asmens priežiūra, pagalba sergant demencija ir po insulto, buitis, draugija.',
      crumb: 'Priežiūra namuose',
      ask: '„Ką reiškia priežiūra gyvenant kartu?“',
      h1: 'Geras ir išmanantis žmogus, gyvenantis su jumis namuose.',
      lead: 'Nereikia keltis į globos namus ir kas valandą sutikti vis naują veidą. Atsikraustau pas žmogų, kurį prižiūriu, dalijuosi jo kasdienybe dieną ir naktį, o su šeima bendradarbiauju taip, kad namai liktų namais.',
      image: { alt: 'Jauki svetainė su krėslu, minkštu pledu ir ryto šviesa pro užuolaidas', caption: 'Pažįstami kambariai, įprasta tvarka.' },
      serviceName: 'Priežiūra namuose gyvenant kartu ir draugija',
      blocks: [
        {
          type: 'list', id: 'help', h2: 'Kuo padedu',
          items: [
            'Prausimas, rengimas ir kita asmens priežiūra, visada oriai ir saugant privatumą',
            'Draugija ir pokalbiai kiekvieną dieną',
            'Maisto gaminimas, apsipirkimas ir namų tvarka',
            'Kartu einame pas gydytojus ir į kitus vizitus',
            'Rami dienotvarkė, padedanti išlikti savarankiškam',
            'Sveikimo pratimai pagal sutartą priežiūros planą',
            'Padrąsinimas ir palaikymas sunkesnėmis dienomis',
            'Naktį namuose yra žmogus',
          ],
        },
        {
          type: 'list', id: 'conditions', h2: 'Kokias ligas ir būkles pažįstu',
          intro: 'Esu prižiūrėjusi žmones su kiekviena iš šių būklių. Laikausi gydytojų patarimų ir priežiūros plano, o kiekvieną dieną prisitaikau prie to, kaip žmogus jaučiasi šiandien.',
          items: ['Demencija', 'Parkinsono liga', 'Insultas', 'Vėžys', 'Dauno sindromas', 'Ribotas judumas', 'Sudėtingi priežiūros poreikiai', 'Paliatyvi priežiūra ir gyvenimo pabaiga'],
        },
        {
          type: 'prose', id: 'steady', h2: 'Kasdien tas pats veidas',
          paras: [
            'Ieškau ilgalaikio darbo ir ilgų atostogų neplanuoju. Su šeima sutartą pastovią dienotvarkę vertinu labiau nei besikeičiančias pamainas, nes ji visiems namuose suteikia saugumo jausmą.',
            'Tos dienotvarkės ribose lieku lanksti. Poreikiai keičiasi kas savaitę, kartais net kas valandą, ir gera priežiūra keičiasi kartu su jais.',
          ],
        },
        {
          type: 'prose', id: 'rehab', h2: 'Sveikimas po ligoninės',
          paras: [
            'Po insulto, griuvimo ar gulėjimo ligoninėje pažanga ateina iš mažų dalykų, daromų kiekvieną dieną. Laikausi kineziterapeutų ir priežiūros komandos plano, padrąsinu daryti pratimus, džiaugiuosi mažomis pergalėmis ir pasakoju šeimai, ką pastebiu.',
          ],
        },
        {
          type: 'prose', id: 'team', h2: 'Bendradarbiauju su šeima ir gydytojais',
          paras: [
            'Šeimą nuolat informuoju, o dirbu kartu su šeimos gydytojais, bendruomenės slaugytojais ir kitais specialistais. Priežiūrą sutariate tiesiogiai su manimi: dirbu savarankiškai, ne per agentūrą.',
          ],
        },
        { type: 'note', text: 'Atkreipkite dėmesį: reglamentuojamos slaugos ar gydymo neteikiu. Dirbu kartu su specialistais, kurie tai daro.' },
        {
          type: 'faq', id: 'faq', h2: 'Klausimai apie priežiūrą gyvenant kartu',
          items: [
            { q: 'Kas yra priežiūra gyvenant kartu?', a: 'Slaugytoja apsigyvena žmogaus namuose ir padeda jam dieną bei naktį, todėl jam nereikia keltis į globos namus.' },
            { q: 'Kuo tai skiriasi nuo lankomosios priežiūros?', a: 'Lankomieji darbuotojai užsuka trumpam, dažnai kaskart vis kitas žmogus. Gyvenant kartu visą dieną šalia yra tas pats pažįstamas žmogus, o naktį jis būna namuose.' },
            { q: 'Kuriose vietovėse dirbate?', a: 'Gyvenu Louth mieste, Lincolnshire, ir dirbu apylinkėse bei toliau. Turiu vairuotojo pažymėjimą ir dėl tinkamo ilgalaikio susitarimo mielai atvyksiu.' },
            { q: 'Kiek kainuoja priežiūra gyvenant kartu?', a: 'Kaina sutariama individualiai: ji priklauso nuo to, kiek pagalbos reikia, nuo valandų, dienotvarkės ir vietos. Pirmas pokalbis nemokamas, o kai suprasiu, ko reikia, pasakysiu aiškią sumą.' },
            { q: 'Ar dirbate per agentūrą?', a: 'Ne. Dirbu savarankiškai, todėl priežiūrą sutariate tiesiogiai su manimi. Rekomendacijas mielai pateiksiu.' },
            { q: 'Ar siūlote ir gerovės sesijų?', a: 'Taip, jei jų norima: hipnoterapija, gydomasis masažas, Reiki ir kvėpavimo sesijos. Visada tik sutikus pačiam žmogui ir jo šeimai.' },
          ],
        },
      ] as Block[],
    },

    endOfLife: {
      title: 'Palydėjimas gyvenimo pabaigoje, Louth',
      description: 'Rami, neskubri draugija gyvenimo pabaigoje ir atokvėpis šeimai, namuose Lincolnshire. Kartu su šeimos gydytoju, bendruomenės slaugytojais ir hospisu.',
      crumb: 'Gyvenimo pabaigoje',
      ask: '„Ar kas nors galėtų pabūti su mumis?“',
      h1: 'Švelni draugija gyvenimo pabaigoje, kad niekas nebūtų vienas.',
      lead: 'Rami draugija jūsų mylimam žmogui, o jums patikimos rankos šalia. Namuose ir tokiu tempu, koks atrodo tinkamas.',
      image: { alt: 'Džiovintos gėlės vazoje ant ramios palangės', caption: 'Laikas tiesiog pabūti kartu.' },
      serviceName: 'Palydėjimas gyvenimo pabaigoje ir paliatyvi draugija',
      blocks: [
        {
          type: 'prose', id: 'comfort', h2: 'Jaukumas, orumas ir ryšys',
          paras: [
            'Gyvenimo pabaiga yra vienas giliausių laikotarpių, kuriuos išgyvename. Mano vaidmuo paprastas: būti šalia. Sėdžiu su žmogumi, klausausi, skaitome kartu, mažinu vienatvę ir gerbiu jo norus, vertybes ir orumą.',
            'Medicininis išsilavinimas padeda man suprasti, kas vyksta. Tačiau čia pirmiausia esu žmogus, sėdintis šalia kito žmogaus.',
          ],
        },
        {
          type: 'list', id: 'help', h2: 'Kuo galiu padėti',
          items: [
            'Rami draugija, pokalbiai ir skaitymas kartu',
            'Švelnus padrąsinimas ir ranka, kurią galima laikyti',
            'Būnu šalia, kad žmogus niekada neliktų vienas',
            'Atokvėpis, kad šeima galėtų pailsėti ir išsimiegoti',
            'Būnu ir naktį, iš anksto susitarus',
            'Pastovus, patikimas žmogus visai šeimai',
          ],
        },
        {
          type: 'prose', id: 'family', h2: 'Rūpinuosi ir šeima',
          paras: [
            'Prižiūrėti mylimą žmogų jo gyvenimo pabaigoje yra sekinantis ir labai jautrus darbas. Šeimai reikia poilsio ir dar vienų rankų, kuriomis galima pasitikėti. Esu šalia ir jums, kad galėtumėte išeiti į lauką, atsikvėpti ir žinoti, kad jūsų artimasis yra švelnioje draugijoje.',
          ],
        },
        { type: 'note', text: 'Atkreipkite dėmesį: tai draugija, praktinė ir emocinė pagalba, o ne reglamentuojama slauga ar gydymas. Dirbu kartu su jūsų šeimos gydytoju, bendruomenės slaugytojais ir hospiso komanda.' },
        {
          type: 'faq', id: 'faq', h2: 'Klausimai apie palydėjimą gyvenimo pabaigoje',
          items: [
            { q: 'Ar tai tas pats, kas slauga?', a: 'Ne. Tai draugija su praktine ir emocine pagalba, o ne reglamentuojama slauga ar gydymas. Už gydymą toliau atsako šeimos gydytojas, bendruomenės slaugytojai ir hospisas, o aš palaikau su jais ryšį.' },
            { q: 'Ką tai apima?', a: 'Ramią draugiją ir pokalbius, skaitymą kartu, švelnų padrąsinimą, buvimą šalia, kad žmogus neliktų vienas, ir laiką šeimai pailsėti. Viskas vyksta pagal paties žmogaus norus.' },
            { q: 'Ar galite padėti ir mums, šeimai?', a: 'Taip. Šeimai irgi reikia rūpesčio. Galiu suteikti atokvėpį ir būti pastovus, patikimas žmogus šalia, kad prireikus galėtumėte pasitraukti.' },
            { q: 'Ar galite pabūti naktį?', a: 'Taip, iš anksto susitarus. Nakties priežiūrą ir gyvenimą kartu aptariame individualiai, pagal jūsų situaciją.' },
            { q: 'Nuo ko pradėti?', a: 'Tiesiog paskambinkite arba parašykite. Tinkamų žodžių ieškoti nereikia. Ramiai pasikalbėsime, kas padėtų, o pirmas pokalbis nemokamas.' },
          ],
        },
      ] as Block[],
    },

    hypno: {
      title: 'Hipnoterapija internetu ir Louth mieste',
      description: 'Švelni hipnoterapija nuo nerimo, streso, nemigos ir nepasitikėjimo savimi, internetu visoje JK arba gyvai netoli Louth. Taip pat masažas, Reiki ir kvėpavimas.',
      crumb: 'Hipnoterapija',
      ask: '„Noriu tiesiog vėl jaustis ramiai.“',
      h1: 'Švelni hipnoterapija jūsų tempu, internetu arba netoli Louth.',
      lead: 'Rami vieta, kurioje padedu atsikratyti nerimo ir įtampos, geriau išsimiegoti ir vėl pasijusti savimi. Visą laiką esate sąmoningi ir viską kontroliuojate patys.',
      image: { alt: 'Susukti balti rankšluosčiai, glotnūs akmenys ir deganti žvakė ant medinio stalo', caption: 'Valanda, skirta tik jums.' },
      serviceName: 'Hipnoterapija ir gerovės sesijos',
      blocks: [
        {
          type: 'prose', id: 'what', h2: 'Kas yra hipnoterapija',
          paras: [
            'Hipnoterapija yra atsipalaidavusi, sutelkto dėmesio būsena, šiek tiek panaši į ramią akimirką tarp miego ir pabudimo. Tokioje būsenoje protas lengviau priima naudingus pasiūlymus, o įtampą ir senus įpročius paleisti tampa lengviau.',
            'Man tai niekada nėra kontrolės praradimas ar savo galios atidavimas. Hipnoterapija remiasi pasitikėjimu, jaukumu, sutikimu ir laisva valia, taip pat laiku ir dėmesiu, kuriuos skiriate sau.',
          ],
        },
        {
          type: 'list', id: 'helps', h2: 'Kuo ji gali padėti',
          items: [
            'Nerimas, rūpesčiai ir jausmas, kad visko per daug',
            'Stresas ir sunkumas atsipalaiduoti',
            'Miegas ir gilus atsipalaidavimas',
            'Pasitikėjimas savimi',
            'Įpročių, kurie nebepadeda, atsikratymas',
            'Permainos, netektis ar sunkus laikotarpis',
          ],
        },
        {
          type: 'prose', id: 'session', h2: 'Kaip vyksta sesija',
          paras: [
            'Pradedame ramiu pokalbiu apie tai, kas jums svarbu. Tada palydžiu jus į ramią, patogią būseną, o jums tereikia ilsėtis ir klausytis. Po to trumpai aptariame, kaip jautėtės. Jokio spaudimo ir jokių sudėtingų terminų.',
            'Sesijos internetu vyksta per privatų vaizdo skambutį, ir daugeliui lengviausia atsipalaiduoti savo namuose. Susitikti galime ir gyvai netoli Louth.',
          ],
        },
        {
          type: 'terms', id: 'wellbeing', h2: 'Kita pagalba gerovei',
          intro: 'Žmonėms, kuriuos prižiūriu, šios sesijos visada neprivalomos ir siūlomos tik sutikus jiems patiems ir jų šeimai.',
          items: [
            { title: 'Klinikinė hipnoterapija', text: 'Proto nuraminimas vedamose sesijose, jūsų tempu.' },
            { title: 'Gydomasis masažas', text: 'Jaukumas, palengvėjimas ir atsipalaidavimas kūnui.' },
            { title: 'Reiki', text: 'Įtampos sušvelninimas ir ramybė.' },
            { title: 'Atsipalaidavimas ir kvėpavimas', text: 'Paprasti pratimai, kurie suramina kvėpavimą ir mintis.' },
          ],
        },
        { type: 'note', text: 'Atkreipkite dėmesį: hipnoterapija padeda atsipalaiduoti ir gerina savijautą, bet nepakeičia medicininės diagnozės, gydymo ar psichoterapijos. Toliau laikykitės savo gydytojo ar sveikatos priežiūros komandos patarimų.' },
        {
          type: 'faq', id: 'faq', h2: 'Klausimai apie hipnoterapiją',
          items: [
            { q: 'Ar hipnoterapija saugi?', a: 'Taip. Tai švelni, atsipalaidavusi sutelkto dėmesio būsena. Visą laiką esate sąmoningi, viską kontroliuojate ir bet kada galite sustoti.' },
            { q: 'Ar prarasiu kontrolę?', a: 'Ne. Niekas negali priversti daryti ko nors prieš jūsų valią. Dirbame kartu, ir niekas nevyksta be jūsų sutikimo.' },
            { q: 'Ar sesija internetu veikia?', a: 'Daugumai žmonių taip. Užtenka privataus vaizdo skambučio, o pažįstama aplinka namuose dažnai padeda atsipalaiduoti dar giliau.' },
            { q: 'Kiek sesijų reikės?', a: 'Kiekvienam skirtingai. Tai aptariame per nemokamą pirmą pokalbį ir sudarome jums tinkamą planą, be jokio įsipareigojimo.' },
          ],
        },
      ] as Block[],
    },

    about: {
      title: 'Apie Liną Simavičiūtę (Albą), slaugytoją',
      description: 'Lina, vadinama Alba: slaugytoja iš Lietuvos su medicininiu išsilavinimu ir penkerių metų patirtimi JK. Jos istorija, patirtis, vertybės ir darbo būdas.',
      crumb: 'Apie Liną',
      ask: '„Kas gyvens kartu su mumis?“',
      h1: 'Sveiki, esu Lina. Dauguma mane vadina Alba.',
      lead: 'Prižiūriu žmones gyvendama kartu su jais ir rūpinuosi jų gerove. Užaugau Lietuvoje, o dabar gyvenu Louth mieste, Lincolnshire.',
      alt: 'Lina Simavičiūtė šviesiu tvido švarku, smakrą parėmusi ranka',
      story: {
        h2: 'Šiek tiek apie mane',
        paras: [
          'Turiu medicininį išsilavinimą ir profesinę kvalifikaciją, dirbu savarankiškai. Jungtinėje Karalystėje prižiūriu žmones jau penkerius metus ir turiu nuolatinį leidimą čia gyventi ir dirbti.',
          'Stengiuosi gyventi atvira širdimi ir giliai gerbti gyvybę, žmones, gamtą ir gyvūnus. Gyventi kartu kito žmogaus namuose yra ypatingi santykiai: jie remiasi pasitikėjimu, pagarba, supratimu ir paprasta bendra kasdienybe.',
          'Todėl ilgalaikius, nusistovėjusius susitarimus vertinu labiau nei trumpus darbus. Žmogui jie suteikia ramybės, šeimai užtikrintumo, o man leidžia žmogų tikrai pažinti.',
        ],
        facts: [
          { k: 'Išsilavinimas', v: 'Medicininis išsilavinimas ir profesinė kvalifikacija' },
          { k: 'Patirtis', v: 'Penkeri metai priežiūros darbo JK' },
          { k: 'Darbas', v: 'Savarankiška veikla, nuolatinė teisė dirbti JK' },
          { k: 'Kelionės', v: 'Vairuotojo pažymėjimas, mielai atvykstu' },
          { k: 'Kalbos', v: 'Anglų ir lietuvių' },
        ],
      },
      name: {
        h2: 'Kodėl „Alba“?',
        text: 'Alba vadina mane dauguma žmonių. Italų ir ispanų kalbomis šis žodis reiškia aušrą. Ženkle šalia vardo virš vieno horizonto kyla du lankai, vienas pilnas, kitas atviras: aš ir žmogus, kurį prižiūriu, kartu kuriame laimingą bendrystę.',
      },
      blocks: [
        {
          type: 'terms', id: 'principles', h2: 'Penki dalykai, kuriais vadovaujuosi',
          items: [
            { title: 'Pagarba', text: 'Kiekvieno žmogaus charakteriui, orumui, šeimai, kultūrai ir tikėjimui. Žmogus niekada nėra tik diagnozė ar amžius.' },
            { title: 'Jūsų pasirinkimas', text: 'Ne man už jus spręsti. Padedu suprasti galimybes, kad galėtumėte pasirinkti tai, kas jums atrodo teisinga.' },
            { title: 'Lankstumas', text: 'Pagalbą pritaikau prie jūsų poreikių, norų, galimybių, įpročių ir gyvenimo tarpsnio, o ne atvirkščiai.' },
            { title: 'Savarankiškumas', text: 'Kur tik įmanoma, priežiūra turi saugoti jūsų pasitikėjimą savimi ir teisę spręsti dėl savo gyvenimo.' },
            { title: 'Žmogiškas ryšys', text: 'Jis remiasi pasitikėjimu, sutikimu ir konfidencialumu. Kartais esu kito žmogaus rankos, akys ar ausys, o kartais tiesiog rami draugija.' },
          ],
        },
        {
          type: 'statement', id: 'philosophy', h2: 'Kuo tikiu',
          quote: 'Gyvenimas nėra vien protokolas.',
          paras: [
            'Medicinos žinios, priežiūros planai ir gera praktika yra pagrindas. Tačiau gerai priežiūrai reikia ir lankstumo, supratimo bei šilumos, nes kiekvienas žmogus unikalus, o kiekviena diena atneša kažką naujo.',
            'Kad galėčiau gerai rūpintis kitais, rūpinuosi ir savimi. Sveika dienotvarkė padeda man atnešti ramybės, geros energijos ir pastovumo žmonėms, kuriems padedu.',
          ],
          close: 'Laimės daugėja, kai ja dalijamės.',
        },
        {
          type: 'prose', id: 'personal', h2: 'Laisvalaikiu',
          paras: [
            'Myliu gamtą, gyvūnus, gerus pokalbius ir judėjimą. Menas yra didelė mano gyvenimo dalis: kai tik galiu, piešiu ir kuriu, ir nuolat mokausi.',
            'Šeima man labai svarbi. Gerbiu kiekvieno žmogaus kultūrą, kalbą, tradicijas, tikėjimą ir privatumą, o namus, kuriuose gyvenu ir dirbu, prižiūriu kaip savo.',
          ],
        },
        {
          type: 'prose', id: 'mission', h2: 'Kodėl tai darau',
          paras: [
            'Noriu sujungti profesines žinias ir tikrą žmogišką šilumą, kad žmonės, kuriuos prižiūriu, kiekvieną dieną gyventų oriai, jaukiai, savarankiškai ir su viltimi. Kartu kuriame laimingą bendrystę.',
          ],
        },
      ] as Block[],
    },

    contact: {
      title: 'Susisiekite su Lina: pirmas pokalbis nemokamas',
      description: 'Skambinkite, rašykite SMS ar laišką Linai (Albai) Louth mieste dėl priežiūros namuose, palydėjimo gyvenimo pabaigoje ar hipnoterapijos. Pirmas pokalbis nemokamas.',
      crumb: 'Kontaktai',
      ask: '„Nuo ko išvis pradėti?“',
      h1: 'Pradėkime nuo arbatos puodelio ir pokalbio.',
      lead: 'Trumpai papasakokite, kas vyksta namuose. Atsakysiu pati, ir jokių įsipareigojimų tai neužkrauna.',
      image: { alt: 'Minkšti sulankstyti pledai ant patogaus krėslo prie lango', caption: 'Prisitraukite kėdę.' },
      direct: {
        h2: 'Skambinkite, rašykite SMS ar laišką',
        phoneLabel: 'Telefonas',
        emailLabel: 'El. paštas',
        note: 'Jei neatsiliepiu, gali būti, kad esu su žmogumi, kurį prižiūriu. Palikite žinutę arba parašykite SMS, ir aš perskambinsiu.',
      },
      form: {
        h2: 'Arba trumpai parašykite čia',
        intro: 'Užpildykite laukus ir paspauskite mygtuką: atsidarys jūsų el. pašto programa su paruoštu laišku. Niekas neišsiunčiama, kol ten nepaspausite „Siųsti“.',
        name: 'Jūsų vardas',
        reach: 'Telefonas arba el. paštas atsakymui',
        who: 'Kam reikia pagalbos?',
        whoOptions: ['Pasirinkite', 'Man pačiam', 'Mamai arba tėčiui', 'Sutuoktiniui ar partneriui', 'Kitam šeimos nariui', 'Kitam žmogui'],
        service: 'Kas padėtų?',
        serviceOptions: ['Pasirinkite', 'Priežiūra gyvenant kartu', 'Pagalba po ligoninės ar insulto', 'Draugija ir pagalba namuose', 'Palydėjimas gyvenimo pabaigoje', 'Hipnoterapija ar gerovės sesijos', 'Dar nežinau'],
        message: 'Jūsų žinutė',
        messageHint: 'Užtenka kelių eilučių.',
        submit: 'Atidaryti el. pašto programoje',
        subject: 'Užklausa iš albawellbeing.co.uk',
        required: 'Įrašykite vardą ir kaip su jumis susisiekti.',
        opened: 'Jūsų el. pašto programa turėtų būti atidaryta su laišku. Jei nieko neįvyko, rašykite tiesiai adresu albalinasima25@icloud.com.',
      },
      next: {
        h2: 'Kas bus toliau',
        items: [
          { title: 'Atsakau pati', text: 'Telefonu arba el. paštu, kaip jums patogiau.' },
          { title: 'Nemokamai pasikalbame', text: 'Apie žmogų, jo dienotvarkę ir tai, kas labiausiai padėtų.' },
          { title: 'Jei viskas tinka', text: 'Tiesiogiai sutariame dėl tvarkos ir kainos, ir aš atvykstu.' },
        ],
      },
      fees: {
        h2: 'Apie kainą',
        text: 'Kiekviena situacija kitokia, todėl kaina sutariama individualiai. Ji priklauso nuo to, kiek pagalbos reikia, nuo valandų, dienotvarkės, vietos ir gerovės sesijų. Galiu padėti dieną, vakarais, savaitgaliais, naktį ir gyvendama kartu, jei turiu laisvo laiko.',
      },
      privacy: 'Viskas, ką papasakosite, liks tarp mūsų.',
      privacyLink: 'Skaityti kliento sutartį',
      emergency: 'Ištikus nelaimei, skambinkite 999. Jei reikia skubaus medicininio patarimo, skambinkite NHS 111.',
    },

    consent: {
      title: 'Kliento sutartis ir konfidencialumas',
      description: 'Kaip dirba Alba Wellbeing: paslaugų pobūdis, sutikimas, konfidencialumas ir jūsų informacijos tvarkymas. Spausdinama kliento sutartis.',
      crumb: 'Kliento sutartis',
      h1: 'Informacija klientui, sutikimas ir sutartis',
      lead: 'Man svarbu pasitikėjimas, pagarba ir aiškumas. Šiame puslapyje rasite, kokias paslaugas teikiu, kaip saugoma jūsų informacija ir dėl ko susitariame.',
      before: {
        h2: 'Prieš pradedant',
        intro: 'Prieš dalyvaudamas (-a) bet kurioje priežiūros, draugijos, gerovės, hipnoterapijos, atsipalaidavimo, Reiki ar papildomos pagalbos sesijoje suprantu ir sutinku, kad:',
        items: [
          'Alba Wellbeing paslaugos skirtos gerovei, gyvenimo kokybei, savimonei, atsipalaidavimui, asmeniniam augimui, draugijai ir emocinei pagalbai.',
          'Šios paslaugos nepakeičia medicininės diagnozės, gydymo, slaugos, psichoterapijos, skubiosios pagalbos ar šeimos gydytojo, gydytojo konsultanto ar kito sveikatos specialisto patarimų.',
          'Turiu toliau laikytis savo sveikatos specialistų patarimų ir gydymo planų.',
          'Jokie konkretūs rezultatai, pagerėjimai ar nauda nebuvo garantuoti.',
          'Visi sprendimai dėl mano sveikatos, gerovės, gydymo ir asmeninių aplinkybių lieka mano atsakomybė.',
          'Prireikus pateiksiu svarbios informacijos apie savo sveikatą ir savijautą ir pranešiu apie reikšmingus pokyčius.',
          'Dalyvauju savanoriškai ir bet kada galiu nutraukti sesiją ar atšaukti sutikimą.',
          'Specialistė gali nuspręsti, kad paslauga mano aplinkybėmis netinka, ir rekomenduoti kreiptis į kitą specialistą ar tarnybą.',
          'Gerovės sesijos, hipnoterapija, Reiki, draugija ir palaikantys pokalbiai yra bendras darbas, o rezultatai kiekvienam skiriasi.',
          'Sesijose pasidalyta informacija laikoma konfidencialia, išskyrus atvejus, kai ją atskleisti reikalauja įstatymas, vaiko ar pažeidžiamo asmens apsauga arba rimta grėsmė saugumui.',
          'Turėjau galimybę užduoti klausimų ir suprantu siūlomų paslaugų pobūdį.',
          'Laisva valia pasirenku dalyvauti ir duodu informuotą sutikimą.',
        ],
        sign: { name: 'Kliento vardas ir pavardė', signature: 'Parašas', date: 'Data' },
      },
      confidentiality: {
        h2: 'Konfidencialumas',
        paras: [
          'Pagarba, pasitikėjimas ir konfidencialumas yra mano darbo pagrindas. Viskas, kas pasakoma pokalbių ir sesijų metu, saugoma rūpestingai, pagarbiai ir konfidencialiai.',
          'Asmeninės informacijos be jūsų leidimo niekam neperduodu, išskyrus atvejus, kai to reikalauja įstatymas, apsaugos pareigos arba kyla rimta grėsmė jūsų ar kito žmogaus saugumui.',
          'Žmonėms lengviau kalbėti apie savo mintis, jausmus, rūpesčius, viltis ir pasirinkimus, kai jie jaučiasi saugūs, gerbiami ir tikri, kad jų privatumas apsaugotas.',
          'Tikiu, kad galima padėti neatimant žmogaus savarankiškumo. Mano vaidmuo nėra perimti kito gyvenimą. Padedu jį gyventi taip, kaip žmogui atrodo teisinga.',
        ],
      },
      important: {
        h2: 'Svarbi informacija',
        paras: [
          'Mano paslaugos padeda gerovei ir gyvenimo kokybei. Jos nepakeičia medicininės diagnozės, gydymo, slaugos, psichoterapijos, skubiosios pagalbos ar jūsų gydytojo patarimų.',
          'Visos paslaugos teikiamos gavus informuotą sutikimą, pagarbiai, konfidencialiai ir priimant kiekvieno žmogaus įsitikinimus, vertybes ir pasirinkimus.',
          'Ištikus nelaimei, skambinkite 999 arba kreipkitės į savo šeimos gydytoją.',
        ],
      },
      print: 'Spausdinti arba išsaugoti PDF',
    },

    notFound: {
      title: 'Puslapis nerastas',
      description: 'Šio puslapio Alba Wellbeing svetainėje nėra.',
      h1: 'Šis puslapis kažkur nuklydo.',
      lead: 'Gali būti, kad nuoroda pasenusi arba puslapis perkeltas. Grįžkime kartu.',
      home: 'Grįžti į pradžią',
    },
  },
};

export default lt;
