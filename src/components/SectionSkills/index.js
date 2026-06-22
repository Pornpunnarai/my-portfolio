import React from 'react';
import { Container } from 'react-bootstrap';
import skills from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SKILL_GROUPS = [
  { key: 'languages', items: skills.languages },
  { key: 'frameworks', items: skills.frameworks },
  { key: 'tools', items: skills.tools },
];

const SectionSkills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-skills">
      <Container className="section-skills__container">
        <h2 className="section-skills__title">{t('skills.title')}</h2>

        {SKILL_GROUPS.map(({ key, items }) => (
          <div key={key} className="section-skills__group">
            <h3 className="section-skills__group-title">{t(`skills.${key}`)}</h3>
            <div className="section-skills__chips">
              {items.map((skill) => (
                <span key={skill} className="section-skills__chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default SectionSkills;
