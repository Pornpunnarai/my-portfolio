import React, { createContext, useContext, useState, useCallback } from 'react';
import en from '../i18n/en.json';
import th from '../i18n/th.json';

const messages = { en, th };
const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('portfolio-lang') || 'en'
  );

  const setLang = useCallback((next) => {
    setLangState(next);
    localStorage.setItem('portfolio-lang', next);
  }, []);

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
