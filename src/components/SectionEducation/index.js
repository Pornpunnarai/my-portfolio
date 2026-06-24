import React from 'react';
import { Container } from 'react-bootstrap';
import education from '../../data/education';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SectionEducation = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="education" className="section-education">
      <Container className="section-education__container section-container">
        <h2 className="section-title">{t('education.title')}</h2>

        <div className="section-education__list">
          {education.map((entry) => (
            <div key={entry.period} className="section-education__item">
              <span className="section-education__period">{entry.period}</span>
              <h3 className="section-education__school">
                {lang === 'th' ? entry.schoolTh : entry.school}
              </h3>
              <p className="section-education__degree">
                {lang === 'th' ? entry.degreeTh : entry.degree}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SectionEducation;
