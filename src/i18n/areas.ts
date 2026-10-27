// England area pages (English only: families searching for care in England search in English).
// Each page must earn its place with facts that only fit that area: places, the journey from
// Louth, what living there means for care, and local questions. Shared help list and FAQs are
// added by the template. Drive times are rough, by car, from Louth. No em or en dashes.

export interface Area {
  slug: string;
  name: string;          // region as people say it
  title: string;         // <= ~42 chars, the layout adds " | Alba Wellbeing"
  description: string;
  h1: string;
  lead: string;
  places: { intro: string; items: string[] };
  journey: string[];
  local: { h2: string; paras: string[] };
  faq: { q: string; a: string }[];
}

export const areas: Area[] = [
  {
    slug: 'lincolnshire',
    name: 'Lincolnshire',
    title: 'Live-in carer in Lincolnshire',
    description: 'Live-in carer based in Louth, Lincolnshire. Personal care, dementia and stroke support and companionship at home, from Lincoln and the Wolds to the coast.',
    h1: 'A live-in carer from Louth, for Lincolnshire.',
    lead: 'Lincolnshire is home. I live in Louth, so wherever you are in the county, from the coast to the Fens, I am close by. I move in with the person I care for and stay, day and night, so they can stay in their own home.',
    places: {
      intro: 'All of Lincolnshire, including North and North East Lincolnshire. For example:',
      items: [
        'Louth, Horncastle, Market Rasen and the villages of the Lincolnshire Wolds',
        'Lincoln, Gainsborough and Sleaford',
        'Skegness, Mablethorpe, Sutton-on-Sea and the rest of the coast',
        'Grimsby, Cleethorpes and Immingham',
        'Scunthorpe, Brigg and Barton-upon-Humber',
        'Boston, Spalding and the Fens',
        'Grantham, Stamford and Bourne',
      ],
    },
    journey: [
      'Lincoln is about 45 minutes from my door, Grimsby and Skegness even less. Because I am this close, we can usually meet in person for the first chat, at your kitchen table over a cup of tea.',
    ],
    local: {
      h2: 'Caring at home in a county of small villages',
      paras: [
        'Lincolnshire is a big county with a lot of small places. In the Wolds and the Fens the houses are far apart, and visiting carers can spend more time driving than caring. A short call in the morning and another in the evening leaves a long day alone in between.',
        'Along the coast, from Cleethorpes down to Skegness, many people moved to retire by the sea and now live far from their children. Live-in care means someone is simply there: at breakfast, on the walk to the front, and through the night.',
      ],
    },
    faq: [
      { q: 'Can we meet in person before we decide?', a: 'Yes. I live in Louth, so anywhere in Lincolnshire I can usually come to you for the first chat. It is free and there is nothing to sign.' },
      { q: 'Do you cover North and North East Lincolnshire too?', a: 'Yes. Grimsby, Cleethorpes, Immingham, Scunthorpe, Brigg and Barton-upon-Humber are all close to home.' },
      { q: 'Can I have hypnotherapy in person near Louth?', a: 'Yes. Near Louth I see people in person, and anywhere in the UK we can work online.' },
    ],
  },
  {
    slug: 'yorkshire',
    name: 'Yorkshire and the Humber',
    title: 'Live-in carer in Yorkshire and the Humber',
    description: 'Self-employed live-in carer for Yorkshire and the Humber: Hull, York, Leeds, Sheffield, the Dales and the coast. Personal care, dementia support and company at home.',
    h1: 'Live-in care in Yorkshire, from Hull to the Dales.',
    lead: 'Yorkshire is my neighbour, just across the Humber. I move in with the person I care for and share their everyday life, so they can stay in the home and the town they know.',
    places: {
      intro: 'All of Yorkshire and the Humber. For example:',
      items: [
        'Hull, Beverley, Bridlington and the East Riding',
        'York, Harrogate, Ripon and Selby',
        'Scarborough, Whitby, Filey and the North York Moors',
        'Leeds, Bradford, Wakefield and Huddersfield',
        'Sheffield, Doncaster, Rotherham and Barnsley',
        'Halifax, Skipton and the Yorkshire Dales',
      ],
    },
    journey: [
      'From Louth, Hull is about an hour over the Humber Bridge. Sheffield, Leeds and York are around two hours, and the coast at Scarborough a little more. When we agree to go ahead, I come up, move in and stay.',
    ],
    local: {
      h2: 'Moors, Dales and seaside towns',
      paras: [
        'Much of Yorkshire is wide open country. In the Dales and on the Moors, villages are far apart, roads are narrow and winter can close them for days. Visiting carers struggle to reach everyone on time. When the carer already lives in the house, the weather stops being a worry.',
        'The coast, from Bridlington and Filey up to Whitby, is full of people who chose to retire by the sea. In the cities, it is often the other way round: grown children nearby, but working full time. Either way, live-in care fills the long hours of the day and the night.',
      ],
    },
    faq: [
      { q: 'Do you cover the Dales and the North York Moors?', a: 'Yes. Remote villages are where live-in care helps most, because nobody has to drive out for each visit. I hold a full driving licence, so appointments in town are no problem either.' },
      { q: 'Dad is coming home from hospital in Hull. How soon could you start?', a: 'If I am free, quickly. Hull is close to me. Tell me the discharge date as soon as you know it, and we can plan the first days around it.' },
    ],
  },
  {
    slug: 'north-east',
    name: 'North East England',
    title: 'Live-in carer in the North East',
    description: 'Self-employed live-in carer for North East England: Newcastle, Durham, Sunderland, Teesside and rural Northumberland. Personal care and companionship at home.',
    h1: 'Live-in care across the North East.',
    lead: 'From Teesside to the Scottish border, I come and live with the person I care for, so they can stay at home, near the people and places they love, with someone kind there day and night.',
    places: {
      intro: 'All of North East England. For example:',
      items: [
        'Newcastle upon Tyne, Gateshead, North and South Tyneside',
        'Sunderland and Washington',
        'Durham, Bishop Auckland and Consett',
        'Middlesbrough, Stockton-on-Tees, Hartlepool and Darlington',
        'Redcar, Saltburn and the Teesside coast',
        'Northumberland: Morpeth, Hexham, Alnwick and Berwick-upon-Tweed',
      ],
    },
    journey: [
      'From Louth, Durham and Middlesbrough are about three hours by car, Newcastle a little more, and north Northumberland about four. The distance only matters on the first day: after that I live with you.',
    ],
    local: {
      h2: 'Far from town, but not alone',
      paras: [
        'Northumberland has fewer people per square mile than any other county in England. Farms and villages can be half an hour from the nearest town, and further from the hospitals in Newcastle. For someone who needs help every day, that distance is hard for visiting care to cover.',
        'Live-in care turns it round. I am in the house, I drive to appointments, I keep the routine going, and the family in Newcastle, Leeds or London knows exactly how things are.',
      ],
    },
    faq: [
      { q: 'Is rural Northumberland too far for you?', a: 'No. Because I live in, how far the house is from town makes no difference to the care. It is exactly the kind of place where live-in care works best.' },
      { q: 'Can you drive Mum to her hospital appointments?', a: 'Yes. I hold a full driving licence. I can drive her car if her insurance covers me, or we arrange transport together.' },
    ],
  },
  {
    slug: 'north-west',
    name: 'North West England',
    title: 'Live-in carer in the North West',
    description: 'Self-employed live-in carer for North West England: Manchester, Liverpool, Lancashire, Cheshire and Cumbria. Personal care, dementia support and company at home.',
    h1: 'Live-in care in the North West, city or fells.',
    lead: 'Whether home is a terrace in Manchester, a bungalow on the Fylde coast or a cottage in the Lakes, I come and live with the person I care for, so their days stay their own.',
    places: {
      intro: 'All of North West England. For example:',
      items: [
        'Manchester, Salford, Stockport, Bolton, Oldham and Wigan',
        'Liverpool, the Wirral, St Helens and Southport',
        'Chester, Warrington, Macclesfield and Crewe',
        'Preston, Blackburn, Burnley and Lancaster',
        'Blackpool, Lytham St Annes and the Fylde coast',
        'Cumbria: Carlisle, Kendal, Penrith and the Lake District',
      ],
    },
    journey: [
      'From Louth, Manchester is about two and a half to three hours across the Pennines, Liverpool and Chester a little longer, and the Lake District around four. I come over at the start and then I am there.',
    ],
    local: {
      h2: 'When the family lives far away',
      paras: [
        'Many families have one parent in the North West and children spread across the country. Phone calls only tell you so much. With live-in care, someone you trust is in the house, and I keep you in the loop with regular calls or messages, so you know how the day really went.',
        'In Cumbria and the Lakes, the challenge is distance and weather. In the cities, it is long, lonely afternoons. Live-in care answers both in the same way: steady company and help, every day.',
      ],
    },
    faq: [
      { q: 'Mum lives alone in Blackpool and we live down south. Can you help?', a: 'Yes, that is very common. I live with her, and you hear from me regularly. You are always welcome to visit, and you always know how she is.' },
      { q: 'Do you cover Cumbria and the Lake District?', a: 'Yes. Remote fells and valleys are no obstacle when the carer lives in.' },
    ],
  },
  {
    slug: 'east-midlands',
    name: 'East Midlands',
    title: 'Live-in carer in the East Midlands',
    description: 'Self-employed live-in carer for the East Midlands: Nottingham, Derby, Leicester, Northampton, the Peak District and Rutland. Personal care and companionship at home.',
    h1: 'Live-in care in the East Midlands, close to home.',
    lead: 'The East Midlands is right next door to me. I come and live with the person I care for, help with everything from washing and dressing to cooking and company, and make sure home still feels like home.',
    places: {
      intro: 'All of the East Midlands. Lincolnshire has its own page. For example:',
      items: [
        'Nottingham, Newark, Mansfield and Worksop',
        'Derby, Chesterfield, Matlock and the Peak District',
        'Leicester, Loughborough, Melton Mowbray and Market Harborough',
        'Northampton, Kettering, Corby and Wellingborough',
        'Rutland: Oakham and Uppingham',
      ],
    },
    journey: [
      'From Louth, Newark and Nottingham are about an hour and a half to two hours, Leicester and Derby around two, and Northampton about two and a half. In most of the region I can come for the first chat in person.',
    ],
    local: {
      h2: 'Market towns, hills and busy cities',
      paras: [
        'The East Midlands mixes busy cities with quiet market towns and the steep villages of the Peak District, where a short trip to the shop can be the hardest part of the day for someone unsteady on their feet. Live-in care means those trips happen safely, with an arm to hold.',
        'Being close also helps families: if plans change, or care needs to start soon after a hospital stay, I am not far away.',
      ],
    },
    faq: [
      { q: 'Can we meet in person before you start?', a: 'In most of the East Midlands, yes. It is within a couple of hours of Louth, so I can often come for the first chat in person.' },
      { q: 'Do you cover the Peak District villages?', a: 'Yes. Steep lanes and long winters are part of why live-in care helps there.' },
    ],
  },
  {
    slug: 'west-midlands',
    name: 'West Midlands',
    title: 'Live-in carer in the West Midlands',
    description: 'Self-employed live-in carer for the West Midlands: Birmingham, Coventry, the Black Country, Staffordshire, Worcestershire, Shropshire and Herefordshire.',
    h1: 'Live-in care in the West Midlands.',
    lead: 'From the middle of Birmingham to the quiet lanes of Shropshire and Herefordshire, I come and live with the person I care for, so they can stay in the home they love, with company day and night.',
    places: {
      intro: 'All of the West Midlands. For example:',
      items: [
        'Birmingham, Solihull and Sutton Coldfield',
        'Wolverhampton, Walsall, Dudley and the Black Country',
        'Coventry, Warwick, Leamington Spa and Stratford-upon-Avon',
        'Stoke-on-Trent, Stafford, Lichfield and Burton upon Trent',
        'Worcester, Malvern, Kidderminster and Evesham',
        'Shropshire and Herefordshire: Shrewsbury, Telford, Ludlow and Hereford',
      ],
    },
    journey: [
      'From Louth, Coventry and Birmingham are about two and a half to three hours by car. Shropshire and Herefordshire are nearer four. I come at the start and then I live in, so the distance does not touch the care.',
    ],
    local: {
      h2: 'From city streets to the Welsh border',
      paras: [
        'In the cities and the Black Country, families are often close by but stretched thin between work, children and a parent who now needs more help. Live-in care takes the daily weight off, so visits can be about time together again.',
        'Out west, in Shropshire and Herefordshire, the countryside is beautiful and the villages are small. That is where having someone in the house, rather than visits squeezed into a round, makes the biggest difference.',
      ],
    },
    faq: [
      { q: 'Do you cover rural Shropshire and Herefordshire?', a: 'Yes. When the carer lives in, it does not matter how far the house is from town.' },
      { q: 'We live nearby but both work full time. Is live-in care right for us?', a: 'It often is. I take on the daily care and the nights, and you keep your time with your parent for being family. We agree the routine together.' },
    ],
  },
  {
    slug: 'east-of-england',
    name: 'East of England',
    title: 'Live-in carer in the East of England',
    description: 'Self-employed live-in carer for Norfolk, Suffolk, Cambridgeshire, Essex, Hertfordshire and Bedfordshire. Personal care, dementia support and company at home.',
    h1: 'Live-in care in East Anglia and beyond.',
    lead: 'Norfolk, Suffolk, Cambridgeshire, Essex, Hertfordshire and Bedfordshire. I come and live with the person I care for and share their days, so they can stay at home by the sea, in the Fens or in town.',
    places: {
      intro: 'All of the East of England. For example:',
      items: [
        'Norfolk: Norwich, King’s Lynn, Great Yarmouth, Cromer and the north Norfolk coast',
        'Suffolk: Ipswich, Bury St Edmunds, Lowestoft, Felixstowe and Southwold',
        'Cambridgeshire: Cambridge, Peterborough, Ely, Huntingdon and Wisbech',
        'Essex: Chelmsford, Colchester, Southend-on-Sea and Clacton-on-Sea',
        'Hertfordshire: St Albans, Watford, Stevenage and Hertford',
        'Bedfordshire: Bedford and Luton',
      ],
    },
    journey: [
      'From Louth, Peterborough is about an hour and three quarters across the Fens. Norwich and Cambridge are around two and a half to three hours, Essex and Hertfordshire around three and a half.',
    ],
    local: {
      h2: 'Where many people choose to grow older',
      paras: [
        'At the 2021 Census, North Norfolk had the oldest population of any area in England. The same coast, and Suffolk’s too, is full of people who retired there, often a long way from their children.',
        'Inland, across the Fens and the farmland, villages are spread out and buses are few. Live-in care keeps someone at home without needing a car on the drive or a carer driving in four times a day.',
      ],
    },
    faq: [
      { q: 'Do you cover the north Norfolk villages?', a: 'Yes. Small coastal and country villages are where live-in care makes the most sense.' },
      { q: 'Is Essex too far from Lincolnshire?', a: 'No. I take placements anywhere in England. I travel down at the start and then I live in.' },
    ],
  },
  {
    slug: 'london',
    name: 'London',
    title: 'Live-in carer in London',
    description: 'Self-employed live-in carer for every London borough. Personal care, dementia and stroke support, housekeeping and companionship in your own home.',
    h1: 'Live-in care in London, in your own home.',
    lead: 'London can be the loneliest city when you can no longer get out easily. I come and live with the person I care for, in any borough, and bring back the company, the routine and the confidence to go out again.',
    places: {
      intro: 'Every London borough. For example:',
      items: [
        'North: Barnet, Enfield, Haringey, Camden and Islington',
        'East: Hackney, Tower Hamlets, Newham, Redbridge and Havering',
        'South: Croydon, Bromley, Lambeth, Southwark, Lewisham and Greenwich',
        'West: Ealing, Hounslow, Richmond upon Thames, Kingston and Hammersmith',
        'Central: Westminster, Kensington and Chelsea',
      ],
    },
    journey: [
      'London is about three and a half to four hours from Louth by car, or a train ride into King’s Cross. I travel down at the start, move in and stay.',
    ],
    local: {
      h2: 'Care in a flat, a terrace or a family house',
      paras: [
        'Many Londoners live in flats or narrow terraced houses. Live-in care works in all of them. What it needs is a bedroom for the carer to sleep and rest in, and a routine that suits the person, not the building.',
        'In a busy city, the hardest thing is often going out: the stairs, the crowds, the bus. With someone steady beside you, the park, the market and the café on the corner become part of the week again.',
      ],
    },
    faq: [
      { q: 'Do I need a spare bedroom?', a: 'Yes. A live-in carer needs a room of their own to sleep and rest in. It does not have to be big.' },
      { q: 'Is London too far for a carer from Lincolnshire?', a: 'No. I live in with the person I care for, so where my own home is does not matter. I travel down at the start and stay.' },
    ],
  },
  {
    slug: 'south-east',
    name: 'South East England',
    title: 'Live-in carer in the South East',
    description: 'Self-employed live-in carer for South East England: Kent, Sussex, Surrey, Hampshire, Berkshire, Oxfordshire, Buckinghamshire and the Isle of Wight.',
    h1: 'Live-in care across the South East.',
    lead: 'From Oxford to the Kent coast, I come and live with the person I care for. Personal care, company, cooking and a calm night: everything that helps someone stay in the home they know.',
    places: {
      intro: 'All of South East England. For example:',
      items: [
        'Kent: Canterbury, Maidstone, Tunbridge Wells, Margate and Folkestone',
        'Sussex: Brighton and Hove, Eastbourne, Bexhill, Worthing and Chichester',
        'Surrey: Guildford, Woking, Epsom and Farnham',
        'Hampshire: Southampton, Portsmouth, Winchester and Basingstoke',
        'Berkshire, Oxfordshire and Buckinghamshire: Reading, Windsor, Oxford, Banbury, Milton Keynes and Aylesbury',
        'The Isle of Wight',
      ],
    },
    journey: [
      'From Louth, Milton Keynes and Oxford are about three hours by car, and the south coast four and a half to five. I travel at the start and then I live in.',
    ],
    local: {
      h2: 'Seaside towns and commuter villages',
      paras: [
        'The south coast, from Bexhill and Eastbourne to Worthing and Bognor Regis, has long been a favourite place to retire. Many people there moved for the sea air and now live hours away from their children.',
        'In the commuter towns, families are often close but short of time. Live-in care gives both the same thing: one familiar person in the house, every day and every night.',
      ],
    },
    faq: [
      { q: 'Do you cover the Isle of Wight?', a: 'Yes. The ferry is just part of the journey on the first day.' },
      { q: 'Mum is in Eastbourne and we are in London. How will we know how she is?', a: 'I keep you in the loop with regular calls or messages, and you are always welcome to visit. You will know how her days really are.' },
    ],
  },
  {
    slug: 'south-west',
    name: 'South West England',
    title: 'Live-in carer in the South West',
    description: 'Self-employed live-in carer for South West England: Bristol, Bath, Gloucestershire, Wiltshire, Dorset, Somerset, Devon and Cornwall. Care and company at home.',
    h1: 'Live-in care in the South West, all the way to Cornwall.',
    lead: 'Bristol, the Cotswolds, Dorset, Devon or the far end of Cornwall: I come and live with the person I care for, so they can stay in their own home, with someone kind there day and night.',
    places: {
      intro: 'All of South West England. For example:',
      items: [
        'Bristol, Bath and Weston-super-Mare',
        'Gloucestershire: Gloucester, Cheltenham, Stroud and the Cotswolds',
        'Wiltshire: Swindon, Salisbury and Chippenham',
        'Dorset: Bournemouth, Poole, Weymouth and Dorchester',
        'Somerset: Taunton, Yeovil and Wells',
        'Devon and Cornwall: Exeter, Plymouth, Torquay, Barnstaple, Truro and Falmouth',
      ],
    },
    journey: [
      'This is the longest trip from Louth: about four hours to Bristol and five to six and a half to Devon and Cornwall. But I make it once, at the start. After that I live with you, and the miles stop mattering.',
    ],
    local: {
      h2: 'Where the population is oldest, and the lanes are long',
      paras: [
        'Dorset, Devon and Cornwall have some of the oldest populations in England. Beautiful places to retire, but small villages, narrow lanes and long distances make visiting care hard to arrange and hard to keep steady.',
        'Live-in care does not depend on someone driving out several times a day. One familiar person is in the house, keeps the routine going, and is there through the night.',
      ],
    },
    faq: [
      { q: 'Cornwall is a long way from Lincolnshire. Is that a problem?', a: 'Not at all. I take placements anywhere in England. I come down at the start and live in, so the distance only counts once.' },
      { q: 'Do you cover the Cotswolds villages?', a: 'Yes, and every other part of the South West.' },
    ],
  },
];

/** Root-relative URL of an area page. */
export const areaHref = (slug: string) => `/live-in-care/${slug}.html`;

/** Shared FAQs added to every area page, after the local ones. */
export const areaSharedFaq = [
  { q: 'How much does live-in care cost?', a: 'My fee is agreed individually, depending on the care needed, the routine and the place. The first chat is free. For a picture of typical costs in England, see my guide to live-in care costs.' },
  { q: 'Do you work through an agency?', a: 'No. I am self-employed, so you arrange care directly with me. I am happy to share references.' },
];
