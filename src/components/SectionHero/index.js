import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../../commons/images';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SectionHero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section-hero">
      <Container className="section-hero__container section-container">
        <Row className="section-hero__row">
          <Col xs={12} md={5} className="section-hero__image-col">
            <div className="section-hero__image-frame">
              <img
                src={images.imgIntro.default}
                alt={t('hero.title')}
                className="section-hero__image"
              />
            </div>
          </Col>
          <Col xs={12} md={7} className="section-hero__content">
            <h1 className="section-hero__title">{t('hero.title')}</h1>
            <p className="section-hero__subtitle">{t('hero.subtitle')}</p>
            <p className="section-hero__tagline">{t('hero.tagline')}</p>

            <div className="section-hero__stats">
              <div className="section-hero__stat">
                <span className="section-hero__stat-value">{t('hero.years')}</span>
                <span className="section-hero__stat-label">{t('hero.experienceLabel')}</span>
              </div>
              <div className="section-hero__stat-divider" aria-hidden="true" />
              <div className="section-hero__stat">
                <span className="section-hero__stat-value">{t('hero.projects')}</span>
                <span className="section-hero__stat-label">{t('hero.projectsLabel')}</span>
              </div>
            </div>

            <div className="section-hero__actions">
              <a
                href={contact.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="section-hero__btn section-hero__btn--primary"
              >
                {t('hero.viewResume')}
              </a>
              <a
                href={contact.coverLetterPath}
                target="_blank"
                rel="noopener noreferrer"
                className="section-hero__btn section-hero__btn--outline"
              >
                {t('hero.viewCoverLetter')}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionHero;
