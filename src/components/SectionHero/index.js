import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import images from '../../commons/images';
import icons from '../../commons/icons';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SectionHero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section-hero">
      <Container className="section-hero__container">
        <Row className="section-hero__row">
          <Col xs={12} md={6} className="section-hero__image-col">
            <img
              src={images.imgIntro.default}
              alt={t('hero.title')}
              className="section-hero__image"
            />
          </Col>
          <Col xs={12} md={6} className="section-hero__content">
            <h1 className="section-hero__title">{t('hero.title')}</h1>
            <p className="section-hero__subtitle">{t('hero.subtitle')}</p>

            <div className="section-hero__stats">
              <div className="section-hero__stat">
                <img src={icons.iconExperience.default} alt="" className="section-hero__stat-icon" />
                <div>
                  <span className="section-hero__stat-value">{t('hero.years')}</span>
                  <span className="section-hero__stat-label">{t('hero.experienceLabel')}</span>
                </div>
              </div>
              <div className="section-hero__stat">
                <img src={icons.iconAchieve.default} alt="" className="section-hero__stat-icon" />
                <div>
                  <span className="section-hero__stat-value">{t('hero.projects')}</span>
                  <span className="section-hero__stat-label">{t('hero.projectsLabel')}</span>
                </div>
              </div>
              <div className="section-hero__stat">
                <img src={icons.iconCV.default} alt="" className="section-hero__stat-icon" />
                <a href={contact.cvPath} download className="section-hero__cv-link">
                  {t('hero.downloadCv')}
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SectionHero;
