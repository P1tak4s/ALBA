// English copy: the source every other locale mirrors key for key (see ./index.ts).
// Voice: Lina speaking, warm and plain, like a first phone call. Sentence case, curly quotes
// and apostrophes, no em or en dashes.

export type Block =
  | { type: 'prose'; id?: string; h2: string; paras: string[] }
  | { type: 'list'; id?: string; h2: string; intro?: string; items: string[]; outro?: string }
  | { type: 'terms'; id?: string; h2: string; intro?: string; items: { title: string; text: string }[] }
  | { type: 'statement'; id?: string; h2: string; quote: string; paras: string[]; close?: string }
  | { type: 'note'; text: string }
  | { type: 'faq'; id?: string; h2: string; items: { q: string; a: string }[] };

const en = {
  lang: 'en',
  ogLocale: 'en_GB',
  langName: 'English',
  common: {
    brand: 'Alba Wellbeing',
    brandShort: 'Alba',
    brandSub: 'Wellbeing',
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close',
    navLabel: 'Main',
    langLabel: 'Language',
    homeLabel: 'Alba Wellbeing, home',
    nav: {
      liveIn: 'Live-in care',
      endOfLife: 'End of life',
      hypno: 'Hypnotherapy',
      about: 'About Lina',
      contact: 'Contact',
    },
    phoneDisplay: '07300 403632',
    phoneIntl: '+44 7300 403632',
    callShort: 'Call',
    call: 'Call 07300 403632',
    book: 'Book a free chat',
    email: 'albalinasima25@icloud.com',
    motto: 'Professional knowledge. Human presence. A happy we.',
    breadcrumbHome: 'Home',
    finale: {
      h2: 'Shall we have a chat? The first one is free.',
      text: 'There is no pressure and nothing to sign. Just tell me what is going on at home, and we will work out together whether I am the right person for you.',
      phoneLabel: 'Call or text me',
      emailLabel: 'Or write to me',
    },
    footer: {
      pagesLabel: 'Pages',
      area: 'I live in Louth, Lincolnshire, and care for people in the surrounding area and further afield. Hypnotherapy is also available online, anywhere in the UK.',
      coords: 'Louth sits right on the Greenwich meridian: 53.37° N, 0° 0′.',
      agreement: 'Client agreement and confidentiality',
      disclaimer: 'Alba Wellbeing offers care, companionship and wellbeing support. It does not replace medical, nursing or emergency care. In an emergency, call 999.',
      rights: 'Lina Simavičiūtė, known as Alba.',
    },
    figure: {
      lina: 'Lina',
      you: 'and you',
      alt: 'Lina Simavičiūtė, known as Alba, in a linen blouse at home, looking out of the window',
    },
    faqLabel: 'Questions',
  },

  pages: {
    home: {
      title: 'Live-in carer in Louth, Lincolnshire',
      description: 'Lina (Alba) is a medically trained, self-employed live-in carer in Louth, Lincolnshire: dementia, Parkinson’s, stroke, palliative care and companionship at home.',
      ask: '“Can Mum stay in her own home?”',
      h1: 'Yes, she can. I’ll move in and care for her at home.',
      lead: 'I’m Lina, though most people call me Alba. I’m a medically trained carer, and for five years I have lived alongside people in their own homes here in the UK. I help with everything from personal care to a cup of tea and a proper chat, and I stay for the long term, so your family always knows who is there.',
      heroNote: 'Based in Louth, Lincolnshire. I drive, and I’m happy to travel.',
      questions: {
        h2: 'The questions families ask me',
        intro: 'Most first phone calls begin with a worry. These are the ones I hear most often, and how I usually help.',
        items: [
          { q: 'Mum has dementia. Could someone live with her?', a: 'Yes. I move in and keep her days familiar: the food she likes, her own little routines, calm company and personal care. Home stays home, and she stays herself.', link: 'liveIn', more: 'Live-in care' },
          { q: 'Dad has come home from hospital after a stroke.', a: 'I follow the plan from his physiotherapists, cheer him on with the exercises every day, and notice the small changes early. We go at his pace, never mine.', link: 'liveIn', more: 'Help with recovery' },
          { q: 'Who will be with her at night?', a: 'With live-in care, I am in the house through the night, so she is never on her own. If you only need someone overnight, we can arrange that too.', link: 'liveIn', more: 'Night-time care' },
          { q: 'He mostly needs company, and a hand with the house.', a: 'That matters just as much. I cook, do the shopping, keep the house tidy, go to appointments with him and always make time to sit down and talk.', link: 'liveIn', more: 'Companionship' },
          { q: 'We are near the end. Could you sit with us?', a: 'Yes. I can be a quiet, gentle presence for the person, and give the family a chance to rest, alongside the GP, district nurses and hospice team.', link: 'endOfLife', more: 'End-of-life care' },
          { q: 'I’m anxious all the time and can’t switch off.', a: 'Hypnotherapy, relaxation and breathing sessions can help you rest again. We can meet online from anywhere in the UK, or in person near Louth.', link: 'hypno', more: 'Hypnotherapy' },
        ],
      },
      window: {
        caption: 'It’s the small things that make a house feel like home: the morning tea, the favourite chair, the window she likes to sit by. I keep those things just as they are.',
        alt: 'A cup of tea and dried flowers on a windowsill in soft morning light',
      },
      about: {
        h2: 'A carer who listens first',
        paras: [
          'I trained in medicine and I am professionally qualified, so I understand what is happening with someone’s health. But what I care about most is the person: their habits, their stories, what makes them laugh, and what they want from each day.',
          'Over five years I have looked after people living with dementia, Parkinson’s, stroke, cancer, Down syndrome and reduced mobility, and I have sat with families through palliative care. Every day is a little different, and I adapt with patience, common sense and respect.',
        ],
        facts: [
          { k: 'Five years', v: 'caring for people in their own homes in the UK' },
          { k: 'Self-employed', v: 'you arrange everything directly with me' },
          { k: 'Full driving licence', v: 'happy to drive and to travel' },
          { k: 'References', v: 'gladly shared on request' },
        ],
        more: 'Read more about me',
        alt: 'Lina Simavičiūtė in a pale tweed jacket, resting her chin on her hand',
      },
      promises: {
        h2: 'My promise to you',
        items: [
          'I will never rush you. We go at your pace.',
          'You will be met with kindness, never judgement.',
          'Your choices stay yours. I am here to help, not to take over.',
        ],
      },
      steps: {
        h2: 'How we get started',
        items: [
          { title: 'Give me a call', text: 'Or send a text or an email. Tell me as much or as little as you like; there is no wrong way to begin.' },
          { title: 'We sit down and talk', text: 'Usually at home, over a cup of tea. It is free, there are no forms, and nobody is in a hurry.' },
          { title: 'We shape it together', text: 'The hours, the routine and a fair fee, agreed directly between us. Then I come and we begin.' },
        ],
      },
    },

    liveIn: {
      title: 'Live-in care and companionship in Lincolnshire',
      description: 'Self-employed live-in carer based in Louth: personal care, dementia and stroke support, rehabilitation, housekeeping and companionship in your own home.',
      crumb: 'Live-in care',
      ask: '“What does live-in care actually mean?”',
      h1: 'Someone kind and trained, living with you at home.',
      lead: 'There is no need to move into a care home, or to meet a new face at every visit. I come and live with the person I look after, share their everyday life, day and night, and work closely with the family so that home still feels like home.',
      image: { alt: 'A cosy living room with an armchair, a soft throw and morning light through the curtains', caption: 'Familiar rooms, familiar routines.' },
      serviceName: 'Live-in care and companionship',
      blocks: [
        {
          type: 'list', id: 'help', h2: 'What I help with',
          items: [
            'Washing, dressing and personal care, always with dignity and privacy',
            'Company and conversation, every single day',
            'Cooking, shopping and keeping the house in order',
            'Going along to appointments together',
            'Gentle daily routines that keep life comfortable and independent',
            'Recovery exercises, following the agreed care plan',
            'Reassurance and encouragement on the harder days',
            'Someone in the house through the night',
          ],
        },
        {
          type: 'list', id: 'conditions', h2: 'Conditions I have cared for',
          intro: 'I have supported people living with each of these. I follow medical advice and the care plan, and I take each day as it comes, adapting to how the person feels today.',
          items: ['Dementia', 'Parkinson’s disease', 'Stroke', 'Cancer', 'Down syndrome', 'Reduced mobility', 'Complex care needs', 'Palliative and end-of-life care'],
        },
        {
          type: 'prose', id: 'steady', h2: 'The same face every day',
          paras: [
            'I am looking for long-term arrangements, and I have no plans for long holidays. I much prefer a steady routine agreed with the family to changing shifts, because it gives everyone in the house a real sense of security.',
            'Within that routine I stay flexible. Needs change from week to week, sometimes from hour to hour, and good care changes with them.',
          ],
        },
        {
          type: 'prose', id: 'rehab', h2: 'Getting stronger after hospital',
          paras: [
            'After a stroke, a fall or a stay in hospital, progress comes from small things done every day. I follow the plan from the physiotherapists and the care team, encourage the exercises, celebrate the little wins, and let the family know what I notice.',
          ],
        },
        {
          type: 'prose', id: 'team', h2: 'Working with your family and the doctors',
          paras: [
            'I keep the family in the loop and work alongside GPs, district nurses and other professionals. You arrange care directly with me, as a self-employed carer, not through an agency.',
          ],
        },
        { type: 'note', text: 'Please note: I do not provide regulated nursing or medical treatment. I work alongside the professionals who do.' },
        {
          type: 'faq', id: 'faq', h2: 'Questions about live-in care',
          items: [
            { q: 'What is live-in care?', a: 'A carer lives in the person’s home and supports them through the day and night, so they can stay at home instead of moving into a care home.' },
            { q: 'How is it different from visiting carers?', a: 'Visiting carers come for short calls, often a different person each time. With live-in care, one familiar person is there all day and in the house overnight.' },
            { q: 'Which areas do you cover?', a: 'I live in Louth, Lincolnshire, and work in the surrounding area and further afield. I have a full driving licence and I am happy to travel for the right long-term arrangement.' },
            { q: 'How much does live-in care cost?', a: 'Fees are agreed individually, depending on how much support is needed, the hours, the routine and the location. The first chat is free, and once I understand what is needed I will give you a clear figure.' },
            { q: 'Do you work through an agency?', a: 'No. I am self-employed, so you arrange care directly with me. I am happy to share references.' },
            { q: 'Do you also offer wellbeing sessions?', a: 'Yes, if they are welcome: hypnotherapy, therapeutic massage, Reiki and breathing sessions, always with the agreement of the person and their family.' },
          ],
        },
      ] as Block[],
    },

    endOfLife: {
      title: 'End-of-life and palliative companionship in Louth',
      description: 'Calm, unhurried companionship at the end of life, and respite for the family, at home in Lincolnshire. Alongside GPs, district nurses and hospice teams.',
      crumb: 'End of life',
      ask: '“Could someone sit with us?”',
      h1: 'A gentle presence at the end of life, so no one has to be alone.',
      lead: 'Quiet company for the person you love, and a steady pair of hands for you. At home, and at whatever pace feels right.',
      image: { alt: 'Dried flowers in a vase on a quiet windowsill', caption: 'Time to sit, and simply be together.' },
      serviceName: 'End-of-life and palliative companionship',
      blocks: [
        {
          type: 'prose', id: 'comfort', h2: 'Comfort, dignity and connection',
          paras: [
            'The end of life is one of the most profound times we go through. My role is simply to be there: to sit with the person, listen, read together, ease the loneliness, and honour their wishes, their values and their dignity.',
            'My medical training helps me understand what is happening. But here, above all, I come as one human being sitting beside another.',
          ],
        },
        {
          type: 'list', id: 'help', h2: 'How I can help',
          items: [
            'Quiet company, conversation and reading together',
            'Gentle reassurance, and someone to hold a hand',
            'Sitting with the person so they are never alone',
            'Respite, so the family can rest and sleep',
            'Being there overnight, by arrangement',
            'A steady, trusted person for the whole family',
          ],
        },
        {
          type: 'prose', id: 'family', h2: 'Looking after the family, too',
          paras: [
            'Caring for someone you love at the end of their life is exhausting, tender work. Families need rest, and another pair of hands they can trust. I am there for you as well, so you can step outside, breathe, and know your loved one is in gentle company.',
          ],
        },
        { type: 'note', text: 'Please note: this is companionship and practical and emotional support, not regulated nursing or medical care. I work alongside your GP, district nurses and hospice team.' },
        {
          type: 'faq', id: 'faq', h2: 'Questions about end-of-life companionship',
          items: [
            { q: 'Is this the same as nursing care?', a: 'No. It is company, with practical and emotional help, rather than regulated nursing or medical care. Your GP, district nurses and hospice stay in charge of treatment, and I keep in touch with them.' },
            { q: 'What does it actually involve?', a: 'Quiet company and conversation, reading together, gentle reassurance, sitting with someone so they are not alone, and giving the family time to rest. Everything follows the person’s wishes.' },
            { q: 'Can you support us as a family?', a: 'Yes. Families need looking after too. I can give you respite and be a steady, trusted presence, so you can step away when you need to.' },
            { q: 'Can you stay overnight?', a: 'Yes, by arrangement. Overnight and live-in support are talked through individually, to suit your situation.' },
            { q: 'How do we start?', a: 'Just call or message me. You don’t need to find the right words. We will talk gently about what would help, and the first chat is free.' },
          ],
        },
      ] as Block[],
    },

    hypno: {
      title: 'Hypnotherapy online and in Louth, Lincolnshire',
      description: 'Gentle hypnotherapy for anxiety, stress, sleep and confidence, online across the UK or in person near Louth. Also therapeutic massage, Reiki and breathing.',
      crumb: 'Hypnotherapy',
      ask: '“I just want to feel calm again.”',
      h1: 'Gentle hypnotherapy, at your own pace, online or near Louth.',
      lead: 'A quiet, guided space to ease anxiety and tension, sleep better and feel more like yourself again. You stay aware and in control the whole time.',
      image: { alt: 'Rolled white towels, smooth stones and a lit candle on a wooden table', caption: 'An hour that is only for you.' },
      serviceName: 'Hypnotherapy and wellbeing sessions',
      blocks: [
        {
          type: 'prose', id: 'what', h2: 'What hypnotherapy is',
          paras: [
            'Hypnotherapy is a relaxed, focused state, a bit like that calm moment between waking and sleeping. In it, the mind becomes more open to helpful suggestions, and it becomes easier to let go of tension and old habits.',
            'For me, it is never about losing control or handing over your power. It rests on trust, comfort, consent and free will, and on giving yourself a little time and attention.',
          ],
        },
        {
          type: 'list', id: 'helps', h2: 'It may help with',
          items: [
            'Anxiety, worry and feeling overwhelmed',
            'Stress, and finding it hard to switch off',
            'Sleep and deep relaxation',
            'Confidence and believing in yourself',
            'Letting go of habits that no longer help you',
            'Change, loss or a difficult time',
          ],
        },
        {
          type: 'prose', id: 'session', h2: 'What a session is like',
          paras: [
            'We start with a relaxed chat about what matters to you. Then I guide you into a calm, comfortable state, and all you need to do is rest and listen. Afterwards we talk for a little while about how it felt. No pressure, and no jargon.',
            'Online sessions take place on a private video call, and many people find they relax most easily in their own home. We can also meet in person near Louth.',
          ],
        },
        {
          type: 'terms', id: 'wellbeing', h2: 'Other wellbeing support',
          intro: 'For the people I care for, these are always optional, and only ever offered with the agreement of the person and their family.',
          items: [
            { title: 'Clinical hypnotherapy', text: 'Calming the mind, in guided sessions at your own pace.' },
            { title: 'Therapeutic massage', text: 'Comfort, relief and relaxation for the body.' },
            { title: 'Reiki', text: 'Softening tension and inviting calm.' },
            { title: 'Relaxation and breathing', text: 'Simple practices that steady the breath and quiet the mind.' },
          ],
        },
        { type: 'note', text: 'Please note: hypnotherapy supports wellbeing and relaxation. It does not replace medical diagnosis, treatment or psychological therapy, so please keep following the advice of your GP or healthcare team.' },
        {
          type: 'faq', id: 'faq', h2: 'Questions about hypnotherapy',
          items: [
            { q: 'Is hypnotherapy safe?', a: 'Yes. It is a gentle, relaxed state of focused attention. You stay aware and in control throughout, and you can pause or stop at any time.' },
            { q: 'Will I lose control?', a: 'No. You cannot be made to do anything against your wishes. We work together, and nothing happens without your consent.' },
            { q: 'Does it work online?', a: 'For most people, yes. A private video call is all you need, and being in your own familiar space often helps you relax even more deeply.' },
            { q: 'How many sessions will I need?', a: 'It is different for everyone. We talk it through in the free first chat and shape a plan that suits you, with no pressure to commit.' },
          ],
        },
      ] as Block[],
    },

    about: {
      title: 'About Lina Simavičiūtė (Alba), live-in carer',
      description: 'Lina, known as Alba: a medically trained live-in carer from Lithuania with five years of care in UK homes. Her story, experience, values and way of working.',
      crumb: 'About Lina',
      ask: '“Who will be living with us?”',
      h1: 'Hello, I’m Lina. Most people call me Alba.',
      lead: 'I’m a live-in carer and wellbeing companion. I grew up in Lithuania, and today I live in Louth, Lincolnshire.',
      alt: 'Lina Simavičiūtė in a pale tweed jacket, resting her chin on her hand',
      story: {
        h2: 'A little about me',
        paras: [
          'I am medically trained, professionally qualified and self-employed. I have five years of care experience here in the UK, and permanent permission to live and work here.',
          'I try to live with an open heart and a deep respect for life, people, nature and animals. Sharing someone’s home is a special kind of relationship: it is built on trust, respect, understanding and ordinary everyday life together.',
          'That is why I prefer long, settled arrangements to short placements. They bring calm to the person, peace of mind to the family, and they let me get to know someone properly.',
        ],
        facts: [
          { k: 'Training', v: 'Medically trained and professionally qualified' },
          { k: 'Experience', v: 'Five years of care in the UK' },
          { k: 'Work', v: 'Self-employed, with permanent right to work in the UK' },
          { k: 'Travel', v: 'Full driving licence, happy to travel' },
          { k: 'Languages', v: 'English and Lithuanian' },
        ],
      },
      name: {
        h2: 'Why “Alba”?',
        text: 'Alba is the name most people know me by. In Italian and Spanish it means dawn. The little mark beside it is two arcs rising on one horizon, one filled and one open: me, and the person I care for, together making a happy we.',
      },
      blocks: [
        {
          type: 'terms', id: 'principles', h2: 'Five things that guide me',
          items: [
            { title: 'Respect', text: 'For each person’s character, dignity, family, culture and beliefs. Never just a diagnosis or an age.' },
            { title: 'Your choice', text: 'It isn’t my place to decide for you. I help you understand the options, so you can choose what feels right.' },
            { title: 'Flexibility', text: 'Support fits around your needs, wishes, abilities, routines and stage of life, not the other way round.' },
            { title: 'Independence', text: 'Wherever possible, care should protect your confidence and your say in your own life.' },
            { title: 'Human connection', text: 'Built on trust, consent and confidentiality. Sometimes I am another pair of hands, eyes or ears; sometimes simply a calm presence.' },
          ],
        },
        {
          type: 'statement', id: 'philosophy', h2: 'What I believe',
          quote: 'Life is not lived by protocol alone.',
          paras: [
            'Medical knowledge, care plans and good practice are the foundation. But good care also needs flexibility, understanding and warmth, because every person is unique and every day brings something different.',
            'To look after others well, I look after myself too. A healthy daily routine helps me bring calm, good energy and consistency to the people I support.',
          ],
          close: 'Happiness grows when it is shared.',
        },
        {
          type: 'prose', id: 'personal', h2: 'Outside of work',
          paras: [
            'I love nature, animals, good conversations and staying active. Art is a big part of my life: I draw and make things whenever I can, and I never stop learning.',
            'Family means a great deal to me. I respect every person’s culture, language, traditions, beliefs and privacy, and I treat the home I live and work in with care, as if it were my own.',
          ],
        },
        {
          type: 'prose', id: 'mission', h2: 'Why I do this',
          paras: [
            'I want to bring together professional knowledge and real human warmth, so that the people I care for can live each day with dignity, comfort, independence and hope. Together, creating a happy we.',
          ],
        },
      ] as Block[],
    },

    contact: {
      title: 'Contact Lina for a free first chat',
      description: 'Call, text or email Lina (Alba) in Louth, Lincolnshire about live-in care, end-of-life companionship or hypnotherapy. The first conversation is free.',
      crumb: 'Contact',
      ask: '“Where do we even start?”',
      h1: 'Let’s start with a cup of tea and a chat.',
      lead: 'Tell me a little about what is happening at home. I will get back to you myself, and there is no obligation at all.',
      image: { alt: 'Soft folded blankets on a comfortable armchair by a window', caption: 'Pull up a chair.' },
      direct: {
        h2: 'Call, text or email',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        note: 'If I can’t pick up, I may be with someone I care for. Leave a message or send a text and I will call you back.',
      },
      form: {
        h2: 'Or jot it down here',
        intro: 'Fill this in and press the button: your email app will open with the message ready to go. Nothing is sent until you press send there.',
        name: 'Your name',
        reach: 'Phone or email, so I can reply',
        who: 'Who is the support for?',
        whoOptions: ['Choose one', 'Myself', 'My mum or dad', 'My partner', 'Another family member', 'Someone else'],
        service: 'What would help?',
        serviceOptions: ['Choose one', 'Live-in care', 'Help after hospital or a stroke', 'Company and help at home', 'End-of-life companionship', 'Hypnotherapy or wellbeing sessions', 'I’m not sure yet'],
        message: 'Your message',
        messageHint: 'A few lines is plenty.',
        submit: 'Open in my email app',
        subject: 'Enquiry from albawellbeing.co.uk',
        required: 'Please add your name and a way to reach you.',
        opened: 'Your email app should now be open with your message. If nothing happened, please email albalinasima25@icloud.com directly.',
      },
      next: {
        h2: 'What happens next',
        items: [
          { title: 'I reply myself', text: 'By phone or email, whichever you prefer.' },
          { title: 'We have a free chat', text: 'About the person, their routine and what would help most.' },
          { title: 'If it feels right', text: 'We agree the arrangement and the fee directly, and I come.' },
        ],
      },
      fees: {
        h2: 'About fees',
        text: 'Every situation is different, so fees are agreed individually. They depend on how much support is needed, the hours, the routine, the location and any wellbeing sessions. Daytime, evenings, weekends, overnight and live-in care are all possible, depending on availability.',
      },
      privacy: 'Everything you tell me stays between us.',
      privacyLink: 'Read the client agreement',
      emergency: 'In an emergency, please call 999. For urgent medical advice, call NHS 111.',
    },

    consent: {
      title: 'Client agreement and confidentiality',
      description: 'How Alba Wellbeing works: the nature of the services, consent, confidentiality and how your information is handled. Printable client agreement.',
      crumb: 'Client agreement',
      h1: 'Client information, consent and agreement',
      lead: 'Trust, respect and clarity matter to me. This page explains what my services are, how your information is looked after, and the agreement we make together.',
      before: {
        h2: 'Before we begin',
        intro: 'Before taking part in any care, companionship, wellbeing, hypnotherapy, relaxation, Reiki or complementary support session, I understand and agree that:',
        items: [
          'The services provided by Alba Wellbeing are intended to support wellbeing, quality of life, self-awareness, relaxation, personal development, companionship and emotional support.',
          'These services do not replace medical diagnosis, medical treatment, nursing care, psychological therapy, emergency services, or advice from a GP, consultant or other healthcare professional.',
          'I should continue to follow the advice and treatment plans provided by my healthcare professionals.',
          'No guarantee of specific outcomes, results, improvements or benefits has been made.',
          'All decisions about my health, wellbeing, treatment and personal circumstances remain my own responsibility.',
          'I will provide relevant information about my health and wellbeing where appropriate, and tell the practitioner about any significant changes.',
          'Taking part is voluntary, and I may stop a session or withdraw consent at any time.',
          'The practitioner may decide that a service is not suitable for my circumstances and may recommend support from another professional or service.',
          'Wellbeing, hypnotherapy, Reiki, companionship and supportive conversations are collaborative, and outcomes vary from person to person.',
          'Information shared during sessions is treated confidentially, unless a legal, safeguarding or serious safety concern requires disclosure.',
          'I have had the opportunity to ask questions and I understand the nature of the services offered.',
          'I freely choose to take part and give informed consent.',
        ],
        sign: { name: 'Client name', signature: 'Signature', date: 'Date' },
      },
      confidentiality: {
        h2: 'Confidentiality',
        paras: [
          'Respect, trust and confidentiality are the foundations of my work. Anything shared during conversations and sessions is treated with care, respect and confidentiality.',
          'Personal information will not be shared with anyone without your permission, except where the law or safeguarding duties require it, or where there is a serious concern for the safety of you or another person.',
          'People find it easier to talk about their thoughts, feelings, worries, hopes and choices when they feel safe, respected and sure that their privacy is protected.',
          'I believe in helping people without taking away their independence. My role is not to take over someone’s life, but to support them in living it in the way that feels right for them.',
        ],
      },
      important: {
        h2: 'Important information',
        paras: [
          'My services support wellbeing and quality of life. They do not replace medical diagnosis, treatment, nursing care, psychological therapy, emergency services or advice from your GP or healthcare team.',
          'All services are provided with informed consent, respect, confidentiality and acceptance of each person’s beliefs, values and choices.',
          'In an emergency, please call 999 or contact your GP.',
        ],
      },
      print: 'Print or save as PDF',
    },

    notFound: {
      title: 'Page not found',
      description: 'This page could not be found on Alba Wellbeing.',
      h1: 'Oh dear, this page has wandered off.',
      lead: 'The link may be old, or the page has moved. Let’s find our way back together.',
      home: 'Back to the home page',
    },
  },
};

export default en;
export type Dict = typeof en;
