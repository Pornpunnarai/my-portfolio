import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import images from '../../commons/images';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import LanguageToggle from '../LanguageToggle';
import './style.scss';

const NAV_SECTIONS = ['about', 'experience', 'projects', 'contact'];

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  const { t } = useLanguage();

  const handleNavClick = (sectionId) => (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      history.push(`/#${sectionId}`);
    }
  };

  return (
    <nav className="navbar">
      <Container className="navbar__container">
        <div className="navbar__brand" onClick={() => history.push('/')} role="button" tabIndex={0}>
          <img src={images.imgLogo.default} alt="Logo" className="navbar__logo" />
          <span className="navbar__site-name">Pawnpunnarai&apos;s Portfolio</span>
        </div>

        <div className="navbar__links">
          {NAV_SECTIONS.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="navbar__link"
              onClick={handleNavClick(section)}
            >
              {t(`nav.${section}`)}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <LanguageToggle />
          <a href={contact.cvPath} download className="navbar__cv">
            {t('nav.downloadCv')}
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
