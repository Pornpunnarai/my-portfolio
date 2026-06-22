import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        type="button"
        className={`language-toggle__btn ${lang === 'en' ? 'language-toggle__btn--active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <button
        type="button"
        className={`language-toggle__btn ${lang === 'th' ? 'language-toggle__btn--active' : ''}`}
        onClick={() => setLang('th')}
      >
        TH
      </button>
    </div>
  );
};

export default LanguageToggle;
