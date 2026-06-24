import React from 'react';
import { Container } from 'react-bootstrap';
import experience from '../../data/experience';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SectionExperience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-experience">
      <Container className="section-experience__container section-container">
        <h2 className="section-title">{t('experience.title')}</h2>

        <div className="section-experience__timeline">
          {experience.map((entry) => (
            <div key={`${entry.company}-${entry.period}`} className="section-experience__entry">
              <div className="section-experience__dot" />
              <div className="section-experience__content">
                <span className="section-experience__period">{entry.period}</span>
                <h3 className="section-experience__company">{entry.company}</h3>
                <p className="section-experience__role">{entry.role}</p>
                <ul className="section-experience__bullets">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="section-experience__actions">
          <a
            href={contact.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="section-experience__btn section-experience__btn--primary"
          >
            {t('experience.viewResume')}
          </a>
          <a
            href={contact.coverLetterPath}
            target="_blank"
            rel="noopener noreferrer"
            className="section-experience__btn section-experience__btn--outline"
          >
            {t('experience.viewCoverLetter')}
          </a>
        </div>
      </Container>
    </section>
  );
};

export default SectionExperience;
