import React, { useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import ProjectTypeFilter from '../../components/ProjectTypeFilter';
import MyPortfolio from '../../data/MyPortfolio';
import { sortProjectsNewestFirst } from '../../data/sortProjects';
import { filterProjectsByType } from '../../data/projectTypes';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const PortfolioScreen = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = useMemo(() => {
    const sorted = sortProjectsNewestFirst(MyPortfolio.MENU);
    return filterProjectsByType(sorted, activeFilter);
  }, [activeFilter]);

  return (
    <Layout>
      <section className="portfolio-page">
        <Container className="portfolio-page__container">
          <h1 className="portfolio-page__title">{t('portfolio.title')}</h1>
          <p className="portfolio-page__subtitle">{t('portfolio.subtitle')}</p>

          <ProjectTypeFilter activeFilter={activeFilter} onChange={setActiveFilter} />

          {projects.length === 0 ? (
            <p className="portfolio-page__empty">{t('portfolio.empty')}</p>
          ) : (
            <Row className="portfolio-page__grid">
              {projects.map((project) => (
                <Col key={project.id} xs={12} md={6} lg={4} className="portfolio-page__col">
                  <ProjectCard project={project} />
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </section>
    </Layout>
  );
};

export default PortfolioScreen;
