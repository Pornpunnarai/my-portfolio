import React from 'react';
import { Link } from 'react-router-dom';
import { getProjectImageVariant } from '../../data/projectImageDisplay';
import projectMetadata from '../../data/projectMetadata';
import { getProjectType } from '../../data/projectTypes';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const ProjectCard = ({ project }) => {
  const { t, lang } = useLanguage();
  const metadata = projectMetadata[project.name];
  const projectType = getProjectType(project);
  const imageVariant = getProjectImageVariant(project);
  const skills = project.skill
    ? project.skill.split(',').map((s) => s.trim()).filter(Boolean)
    : [];

  const description =
    lang === 'th' && metadata?.descriptionTh
      ? metadata.descriptionTh
      : project.description;

  return (
    <Link
      to={{ pathname: '/portfolio/detail', state: { data: project } }}
      className="project-card"
      aria-label={`${project.name} — ${t('projects.viewDetails')}`}
    >
      <div className={`project-card__media project-card__media--${imageVariant}`}>
        <img
          src={project.image}
          alt={project.name}
          className="project-card__image"
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className={`project-card__badge project-card__badge--type-${projectType}`}>
            {t(`portfolio.type${projectType.charAt(0).toUpperCase()}${projectType.slice(1)}`)}
          </span>
          {metadata && (
            <>
              <span className="project-card__badge">{metadata.platform}</span>
              <span className={`project-card__badge project-card__badge--${metadata.statusKey}`}>
                {t(`projects.status.${metadata.statusKey}`)}
              </span>
            </>
          )}
        </div>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">{description}</p>
        {metadata && (
          <p className="project-card__role">
            {t('projects.role')}: {metadata.role}
          </p>
        )}
        <div className="project-card__skills">
          {skills.map((skill) => (
            <span key={skill} className="project-card__chip">
              {skill}
            </span>
          ))}
        </div>
        <span className="project-card__link">{t('projects.viewDetails')} →</span>
      </div>
    </Link>
  );
};

export default ProjectCard;
