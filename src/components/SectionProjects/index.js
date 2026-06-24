import React, { useMemo, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyPortfolio from '../../data/MyPortfolio';
import featuredProjects from '../../data/featuredProjects';
import { sortProjectsNewestFirst } from '../../data/sortProjects';
import { filterProjectsByType } from '../../data/projectTypes';
import ProjectCard from '../ProjectCard';
import ProjectTypeFilter from '../ProjectTypeFilter';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const allFeaturedItems = sortProjectsNewestFirst(
  MyPortfolio.MENU.filter((project) => featuredProjects.includes(project.name))
);

const SectionProjects = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const featuredItems = useMemo(
    () => filterProjectsByType(allFeaturedItems, activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="section-projects">
      <Container className="section-projects__container section-container">
        <h2 className="section-title">{t('projects.title')}</h2>

        <ProjectTypeFilter
          activeFilter={activeFilter}
          onChange={setActiveFilter}
          ariaLabel={t('projects.title')}
        />

        {featuredItems.length === 0 ? (
          <p className="section-projects__empty">{t('portfolio.empty')}</p>
        ) : (
          <Row className="section-projects__grid">
            {featuredItems.map((project) => (
              <Col key={project.id} xs={12} md={6} className="section-projects__col">
                <ProjectCard project={project} />
              </Col>
            ))}
          </Row>
        )}

        <div className="section-projects__view-all">
          <Link to="/portfolio" className="section-projects__link">
            {t('projects.viewAll')}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SectionProjects;
