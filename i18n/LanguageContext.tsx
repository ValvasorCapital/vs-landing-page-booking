import React, { createContext, useContext, useMemo } from 'react';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  t: Translations;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Detect language from URL path
  const language = useMemo<Language>(() => {
    const path = window.location.pathname;
    if (path.startsWith('/sl')) {
      return 'sl';
    }
    return 'en';
  }, []);

  const t = translations[language];

  const switchLanguage = (lang: Language) => {
    const currentPath = window.location.pathname;
    let newPath: string;
    
    if (lang === 'sl') {
      // Going to Slovenian
      if (currentPath === '/' || currentPath === '') {
        newPath = '/sl';
      } else if (!currentPath.startsWith('/sl')) {
        newPath = '/sl' + currentPath;
      } else {
        newPath = currentPath;
      }
    } else {
      // Going to English
      if (currentPath.startsWith('/sl')) {
        newPath = currentPath.replace(/^\/sl/, '') || '/';
      } else {
        newPath = currentPath;
      }
    }
    
    window.location.href = newPath;
  };

  return (
    <LanguageContext.Provider value={{ language, t, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
