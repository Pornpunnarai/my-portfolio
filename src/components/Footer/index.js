import React from 'react';
import { Container } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <Container className="footer__container">
        <p className="footer__copyright">{t('footer.copyright')}</p>
      </Container>
    </footer>
  );
};

export default Footer;
