import React from 'react';
import { Container } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SectionAbout = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-about">
      <Container className="section-about__container section-container">
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="section-about__body">{t('about.body')}</p>
      </Container>
    </section>
  );
};

export default SectionAbout;
