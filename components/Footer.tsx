
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
            <img
              src="/valvasor-logo.svg"
              alt="Valvasor Capital"
              width={270}
              height={48}
              loading="lazy"
              decoding="async"
              className="h-12 w-auto"
            />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-zinc-500 text-xs font-medium uppercase tracking-wider">
            <a href="https://valvasorcapital.com/privacy-policy/" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</a>
            <a href="https://valvasorcapital.com/#aboutUs" className="hover:text-white transition-colors">{t.footer.aboutUs}</a>
            <a href="https://valvasorcapital.com/#transactions" className="hover:text-white transition-colors">{t.footer.trackRecord}</a>
            <a href="https://valvasorcapital.com/#services" className="hover:text-white transition-colors">{t.footer.services}</a>
        </div>

        <div className="flex gap-6 items-center">
            <a
              href="https://www.linkedin.com/company/valvasor-capital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Valvasor Capital on LinkedIn"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href="mailto:liaison@valvasorcapital.com"
              aria-label="Email Valvasor Capital"
              className="text-zinc-500 hover:text-white transition-colors"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
        </div>

        <div className="pt-12 border-t border-zinc-900 w-full text-center">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                {t.footer.copyright}
            </p>
        </div>
      </div>
    </footer>
  );
};
