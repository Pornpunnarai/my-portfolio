import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const ProjectCard = ({ project }) => {
  const skills = project.skill
    ? project.skill.split(',').map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <Link
      to={{ pathname: '/portfolio/detail', state: { data: project } }}
      className="project-card"
    >
      <img src={project.image} alt={project.name} className="project-card__image" />
      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__skills">
          {skills.map((skill) => (
            <span key={skill} className="project-card__chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
