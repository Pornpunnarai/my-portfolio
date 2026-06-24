import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="language-toggle" role="group" aria-label="Language selection">
      <button
        type="button"
        className={`language-toggle__btn ${lang === 'en' ? 'language-toggle__btn--active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
      <button
        type="button"
        className={`language-toggle__btn ${lang === 'th' ? 'language-toggle__btn--active' : ''}`}
        onClick={() => setLang('th')}
        aria-pressed={lang === 'th'}
        aria-label="Thai"
      >
        TH
      </button>
    </div>
  );
};

export default LanguageToggle;
