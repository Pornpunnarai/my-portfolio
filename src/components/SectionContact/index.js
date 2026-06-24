import React from 'react';
import { Container } from 'react-bootstrap';
import { faEnvelope, faExternalLinkAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from '../../data/contact';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const SectionContact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-contact">
      <Container className="section-contact__container section-container">
        <h2 className="section-contact__title">{t('contact.title')}</h2>
        <p className="section-contact__subtitle">{t('contact.subtitle')}</p>

        <div className="section-contact__links">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="section-contact__link"
            aria-label={t('contact.linkedin')}
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>{t('contact.linkedin')}</span>
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="section-contact__link"
            aria-label={t('contact.email')}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{contact.email}</span>
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="section-contact__link"
            aria-label={t('contact.phone')}
          >
            <FontAwesomeIcon icon={faPhone} />
            <span>{contact.phoneDisplay}</span>
          </a>
        </div>

        <div className="section-contact__documents">
          <a
            href={contact.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="section-contact__link"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span>{t('nav.viewResume')}</span>
          </a>
          <a
            href={contact.coverLetterPath}
            target="_blank"
            rel="noopener noreferrer"
            className="section-contact__link"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            <span>{t('contact.viewCoverLetter')}</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default SectionContact;
