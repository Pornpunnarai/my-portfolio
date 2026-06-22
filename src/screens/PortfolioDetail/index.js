import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Layout from '../../components/Layout';
import { useLanguage } from '../../context/LanguageContext';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.scss';

const parseStoreLinks = (route) => {
  if (!route) return [];
  return route
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url) => {
      if (url.includes('play.google.com')) {
        return { label: 'Google Play', href: url };
      }
      if (url.includes('apps.apple.com')) {
        return { label: 'App Store', href: url };
      }
      return { label: url, href: url };
    });
};

const PortfolioDetailScreen = (props) => {
  const { t } = useLanguage();
  const data = props.location.state?.data;

  if (!data) {
    return (
      <Layout>
        <Container className="portfolio-detail">
          <p className="portfolio-detail__missing">{t('portfolio.subtitle')}</p>
          <Link to="/portfolio" className="portfolio-detail__back">
            ← {t('projects.viewAll')}
          </Link>
        </Container>
      </Layout>
    );
  }

  const skills = data.skill
    ? data.skill.split(',').map((s) => s.trim()).filter(Boolean)
    : [];
  const links = parseStoreLinks(data.route);

  return (
    <Layout>
      <Container className="portfolio-detail">
        <nav className="portfolio-detail__breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link to="/portfolio">{t('portfolio.title')}</Link>
          <span aria-hidden="true"> / </span>
          <span className="portfolio-detail__breadcrumb-current">{data.name}</span>
        </nav>

        <h1 className="portfolio-detail__title">{data.name}</h1>
        <p className="portfolio-detail__description">{data.description}</p>

        <div className="portfolio-detail__skills">
          {skills.map((skill) => (
            <span key={skill} className="portfolio-detail__chip">
              {skill}
            </span>
          ))}
        </div>

        {links.length > 0 && (
          <div className="portfolio-detail__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="portfolio-detail__link-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {data.img && data.img.length > 0 && (
          <div className="portfolio-detail__carousel">
            <Carousel autoPlay showThumbs={false}>
              {data.img.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`${data.name} screenshot ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
        )}

        <Link to="/portfolio" className="portfolio-detail__back">
          ← {t('projects.viewAll')}
        </Link>
      </Container>
    </Layout>
  );
};

export default PortfolioDetailScreen;
