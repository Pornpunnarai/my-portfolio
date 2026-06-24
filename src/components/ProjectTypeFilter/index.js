import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './style.scss';

const FILTERS = ['all', 'mobile', 'web'];

const ProjectTypeFilter = ({ activeFilter, onChange, ariaLabel }) => {
  const { t } = useLanguage();

  return (
    <div className="project-type-filter" role="tablist" aria-label={ariaLabel || t('portfolio.title')}>
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          role="tab"
          aria-selected={activeFilter === filter}
          className={`project-type-filter__btn ${activeFilter === filter ? 'project-type-filter__btn--active' : ''}`}
          onClick={() => onChange(filter)}
        >
          {t(`portfolio.filter${filter.charAt(0).toUpperCase()}${filter.slice(1)}`)}
        </button>
      ))}
    </div>
  );
};

export default ProjectTypeFilter;
