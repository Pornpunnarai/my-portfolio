import React from 'react';
import { Container } from 'react-bootstrap';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <Container className="footer__container">
        <p className="footer__copyright">{t('footer.copyright')}</p>

        <div className="footer__primary-links">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--primary">
            <FontAwesomeIcon icon={faLinkedin} />
            <span>{t('contact.linkedin')}</span>
          </a>
          <a href={`mailto:${contact.email}`} className="footer__link footer__link--primary">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{t('contact.email')}</span>
          </a>
        </div>

        <div className="footer__social-links">
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--social" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--social" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
