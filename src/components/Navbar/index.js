import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import images from '../../commons/images';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import LanguageToggle from '../LanguageToggle';
import './style.scss';

const NAV_SECTIONS = ['about', 'experience', 'education', 'projects', 'contact'];

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_SECTIONS);
  const isHome = location.pathname === '/';

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      history.push(`/#${sectionId}`);
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    history.push('/');
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Container className="navbar__container">
        <div
          className="navbar__brand"
          onClick={goHome}
          onKeyDown={(e) => e.key === 'Enter' && goHome()}
          role="button"
          tabIndex={0}
          aria-label="Go to home"
        >
          <img src={images.imgLogo.default} alt="" className="navbar__logo" />
          <span className="navbar__site-name">{t('nav.brand')}</span>
        </div>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={t('nav.menuToggle')}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          <div className="navbar__links">
            {NAV_SECTIONS.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`navbar__link ${isHome && activeSection === section ? 'navbar__link--active' : ''}`}
                onClick={handleNavClick(section)}
              >
                {t(`nav.${section}`)}
              </a>
            ))}
          </div>

          <div className="navbar__actions">
            <LanguageToggle />
            <a
              href={contact.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cv"
            >
              {t('nav.viewResume')}
            </a>
            <a
              href={contact.coverLetterPath}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__view-resume"
            >
              {t('nav.viewCoverLetter')}
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
