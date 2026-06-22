import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import MyPortfolio from '../../data/MyPortfolio';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const PortfolioScreen = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="portfolio-page">
        <Container className="portfolio-page__container">
          <h1 className="portfolio-page__title">{t('portfolio.title')}</h1>
          <p className="portfolio-page__subtitle">{t('portfolio.subtitle')}</p>
          <Row className="portfolio-page__grid">
            {MyPortfolio.MENU.map((project) => (
              <Col key={project.id} xs={12} md={6} lg={4} className="portfolio-page__col">
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default PortfolioScreen;
