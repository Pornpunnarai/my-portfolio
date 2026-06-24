import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyPortfolio from '../../data/MyPortfolio';
import featuredProjects from '../../data/featuredProjects';
import { sortProjectsNewestFirst } from '../../data/sortProjects';
import ProjectCard from '../ProjectCard';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const featuredItems = sortProjectsNewestFirst(
  MyPortfolio.MENU.filter((project) => featuredProjects.includes(project.name))
);

const SectionProjects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-projects">
      <Container className="section-projects__container section-container">
        <h2 className="section-title">{t('projects.title')}</h2>

        <Row className="section-projects__grid">
          {featuredItems.map((project) => (
            <Col key={project.id} xs={12} md={6} className="section-projects__col">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

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
