export type Language = 'en' | 'sl';

export const translations = {
  en: {
    // Navbar
    nav: {
      services: 'Services',
      trackRecord: 'Track Record',
      aboutUs: 'About Us',
      requestAudit: 'Request Audit',
    },
    // Hero/Booking Section
    hero: {
      badge: 'Architecting Operational Assets',
      headlineStart: 'Infrastructure for',
      headlineEnd: 'Those Playing to Win.',
      subheadline: 'We architect the infrastructure, systems, and software for operators who want to close more deals, scale your marketing, and compound your advantage.',
      encrypted: 'End-to-End Encrypted',
      secureLiaison: 'Secure Liaison',
      widgetTitle: 'Valvasor Capital Profit Audit',
    },
    // Features / Audit
    features: {
      title: 'Inside the 45-Minute Growth Audit:',
      items: [
        {
          title: 'Finding the Leaks',
          desc: 'We map your current systems to pinpoint exactly where you\'re losing time, bleeding margin, and unnecessarily capping your own growth.'
        },
        {
          title: 'The Custom Blueprint',
          desc: 'We design a clear path to replace rented, duct-taped tools with a single, high-performance proprietary engine built specifically for your operations.'
        },
        {
          title: 'Uncapping Capacity',
          desc: 'We identify where custom software can automate the heavy lifting, allowing you to multiply revenue without linearly multiplying your headcount.'
        },
        {
          title: 'The Partnership Filter',
          desc: 'We don\'t build for everyone. We\'ll give you a direct, honest assessment of whether our engineering and growth capital can actually move the needle for you.'
        }
      ]
    },
    // Founder
    founder: {
      badge: 'From the Trenches',
      title: 'More Marketing Is The Most Expensive Mistake You Can Make.',
      paragraphs: [
        'For the last 8 years, after looking inside the operations of over 62 high-ticket companies, I discovered a brutal truth: pouring more leads into a broken sales system is like pouring gas into a car without an engine. It just makes a bigger puddle.',
        'At Valvasor Capital, we don\'t sell marketing. We build the operational protocols that convert your existing demand into predictable revenue. We replace your team\'s "inspiration" with a relentless, high-performance machine—giving you an unfair advantage that your competitors simply cannot replicate.'
      ],
      name: 'Rei Topol',
      role: 'Founder, Valvasor Capital Partners'
    },
    // Footer
    footer: {
      privacyPolicy: 'Privacy Policy',
      aboutUs: 'About Us',
      trackRecord: 'Track Record',
      services: 'Services',
      copyright: '© 2026 VALVASOR CAPITAL. ALL RIGHTS RESERVED.',
      disclaimer: 'Investing involves risk. Content on this site is for informational purposes only. Turn your operational bottlenecks into high-performance proprietary assets.',
    },
  },
  sl: {
    // Navbar
    nav: {
      services: 'Storitve',
      trackRecord: 'Dosežki',
      aboutUs: 'O nas',
      requestAudit: 'Zahtevaj revizijo',
    },
    // Hero/Booking Section
    hero: {
      badge: 'Gradimo operativna sredstva',
      headlineStart: 'Infrastruktura za tiste,',
      headlineEnd: 'ki igrajo na zmago.',
      subheadline: 'Razvijamo infrastrukturo, sisteme in programsko opremo za podjetja, ki želijo povečati prodajo, skalirati marketing in si zagotoviti nedosegljivo tržno prednost.',
      encrypted: 'Šifrirano od konca do konca',
      secureLiaison: 'Varna povezava',
      widgetTitle: 'Valvasor Capital pregled dobička',
    },
    // Features / Audit
    features: {
      title: 'Anatomija 45-minutne operativne diagnostike:',
      items: [
        {
          title: 'Iskanje skritih izgub',
          desc: 'Analiziramo vaše trenutne sisteme in procese, da točno določimo, kje izgubljate čas, topite marže in po nepotrebnem omejujete svojo rast.'
        },
        {
          title: 'Načrt lastniškega motorja',
          desc: 'Oblikujemo jasno pot, kako najeta in nepovezana orodja zamenjati z enim, visoko zmogljivim lastniškim sistemom, zgrajenim posebej za vas.'
        },
        {
          title: 'Odklepanje kapacitet',
          desc: 'Identificiramo točke, kjer lahko programska oprema prevzame glavno breme. Cilj? Večkratno povečanje prihodkov, brez sorazmernega večanja ekipe.'
        },
        {
          title: 'Partnerski filter',
          desc: 'Ne gradimo za vsakogar. Dali vam bomo direktno in pošteno oceno, ali lahko naše inženirsko znanje in kapital dejansko ustvarita opazno razliko v vašem poslu.'
        }
      ]
    },
    // Founder
    founder: {
      badge: 'S fronte prodajnih jarkov',
      title: 'Več marketinga je najdražja napaka, ki jo trenutno lahko naredite.',
      paragraphs: [
        'V zadnjih 8 letih smo skozi delo z več kot 62 podjetji odkrili brutalno resnico: če agencija pripelje še več povpraševanj v sistem, ki pušča, je to kot dolivanje bencina v avto brez motorja. Pod njim bo nastala samo še večja luža.',
        'Pri Valvasor Capital se ne ukvarjamo z marketingom. Gradimo operativne protokole, ki vaše obstoječe povpraševanje pretvorijo v predvidljiv prihodek. "Trenutni navdih" vaše ekipe zamenjamo z neizprosnim, visoko zmogljivim strojem — in vam zagotovimo nepravično prednost, ki je konkurenca preprosto ne more kopirati.'
      ],
      name: 'Rei Topol',
      role: 'Ustanovitelj, Valvasor Capital Partners'
    },
    // Footer
    footer: {
      privacyPolicy: 'Politika zasebnosti',
      aboutUs: 'O nas',
      trackRecord: 'Dosežki',
      services: 'Storitve',
      copyright: '© 2026 VALVASOR CAPITAL. VSE PRAVICE PRIDRŽANE.',
      disclaimer: 'Vlaganje vključuje tveganje. Vsebina na tej strani je samo informativne narave. Spremenite vaše operativne ozke grla v visoko zmogljiva lastniška sredstva.',
    },
  },
} as const;

export type Translations = typeof translations.en;
