import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import en from '../i18n/en.json';
import th from '../i18n/th.json';

const messages = { en, th };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return saved === 'th' ? 'th' : 'en';
  });

  const setLang = useCallback((next) => {
    setLangState(next);
    if (next === 'th') {
      localStorage.setItem('portfolio-lang', 'th');
    } else {
      localStorage.removeItem('portfolio-lang');
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'th' ? 'th' : 'en';
  }, [lang]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = messages[lang];
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
