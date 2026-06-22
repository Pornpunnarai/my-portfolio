import React from 'react';
import { Container } from 'react-bootstrap';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SectionContact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-contact">
      <Container className="section-contact__container">
        <h2 className="section-contact__title">{t('contact.title')}</h2>

        <div className="section-contact__links">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="section-contact__link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>{t('contact.linkedin')}</span>
          </a>
          <a href={`mailto:${contact.email}`} className="section-contact__link">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{t('contact.email')}</span>
          </a>
          <a href={contact.cvPath} download className="section-contact__link">
            <FontAwesomeIcon icon={faFileDownload} />
            <span>{t('nav.downloadCv')}</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default SectionContact;
