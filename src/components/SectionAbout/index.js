import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const HIGHLIGHT_KEYS = ['highlight1', 'highlight2', 'highlight3'];

const SectionAbout = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-about">
      <Container className="section-about__container section-container">
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="section-about__body">{t('about.body')}</p>

        <h3 className="section-about__highlights-title">{t('about.highlightsTitle')}</h3>
        <Row className="section-about__highlights">
          {HIGHLIGHT_KEYS.map((key) => (
            <Col key={key} xs={12} md={4} className="section-about__highlight-col">
              <article className="section-about__highlight">
                <h4 className="section-about__highlight-title">{t(`about.${key}Title`)}</h4>
                <p className="section-about__highlight-text">{t(`about.${key}Text`)}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SectionAbout;
