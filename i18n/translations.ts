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
      headlineStart: 'Stop Renting.',
      headlineEnd: 'Code Equity.',
      subheadline: 'We engineer bespoke software ecosystems that surgically eliminate "SaaS Bloat" and recover thousands in leaking profit.',
      encrypted: 'End-to-End Encrypted',
      secureLiaison: 'Secure Liaison',
      widgetTitle: 'Valvasor Capital Profit Audit',
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
      headlineStart: 'Vas interne aplikacije',
      headlineEnd: 'držijo na kratki vrvici?',
      subheadline: 'Gradimo sisteme po meri, ki nadomestijo draga orodja, povežejo podatke in dvignejo učinkovitost.',
      encrypted: 'Šifrirano od konca do konca',
      secureLiaison: 'Varna povezava',
      widgetTitle: 'Valvasor Capital pregled dobička',
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
