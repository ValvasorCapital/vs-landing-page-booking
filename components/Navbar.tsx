
import React from 'react';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, t, switchLanguage } = useLanguage();

  const otherLang = language === 'en' ? 'sl' : 'en';
  const langLabel = language === 'en' ? 'SL' : 'EN';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <a href={language === 'sl' ? '/sl' : '/'} className="flex items-center gap-2">
          <img
            src="/valvasor-logo.svg"
            alt="Valvasor Capital"
            width={180}
            height={32}
            decoding="async"
            fetchPriority="high"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="https://valvasorcapital.com/#services" className="text-sm font-normal text-zinc-400 hover:text-white transition-colors tracking-wide">{t.nav.services}</a>
          <a href="https://valvasorcapital.com/#transactions" className="text-sm font-normal text-zinc-400 hover:text-white transition-colors tracking-wide">{t.nav.trackRecord}</a>
          <a href="https://valvasorcapital.com/#aboutUs" className="text-sm font-normal text-zinc-400 hover:text-white transition-colors tracking-wide">{t.nav.aboutUs}</a>
          <a href="#booking" className="text-sm font-medium px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2 tracking-wide">
            {t.nav.requestAudit} <ArrowRight size={16} />
          </a>
          
          {/* Language Switcher */}
          <button
            type="button"
            aria-label={`Switch language to ${otherLang === 'en' ? 'English' : 'Slovenian'}`}
            onClick={() => switchLanguage(otherLang)}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-600"
          >
            <Globe size={14} aria-hidden="true" />
            {langLabel}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          className="md:hidden text-zinc-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-nav-menu" className="absolute top-24 left-6 right-6 glass p-6 rounded-2xl md:hidden animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <a href="https://valvasorcapital.com/#services" className="text-lg font-medium border-b border-zinc-800 pb-2">{t.nav.services}</a>
            <a href="https://valvasorcapital.com/#transactions" className="text-lg font-medium border-b border-zinc-800 pb-2">{t.nav.trackRecord}</a>
            <a href="https://valvasorcapital.com/#aboutUs" className="text-lg font-medium border-b border-zinc-800 pb-2">{t.nav.aboutUs}</a>
            <a href="#booking" className="text-lg font-medium bg-white text-black p-3 rounded-lg text-center" onClick={() => setIsOpen(false)}>{t.nav.requestAudit}</a>
            
            {/* Mobile Language Switcher */}
            <button
              type="button"
              aria-label={`Switch language to ${otherLang === 'en' ? 'English' : 'Slovenian'}`}
              onClick={() => switchLanguage(otherLang)}
              className="flex items-center justify-center gap-2 text-lg font-medium border border-zinc-800 p-3 rounded-lg text-zinc-400"
            >
              <Globe size={18} aria-hidden="true" />
              {langLabel === 'SL' ? 'Slovenščina' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
