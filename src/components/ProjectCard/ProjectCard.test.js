import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import ProjectCard from './index';

const project = {
  name: 'ASAPH',
  description: 'Live streaming app',
  skill: 'TypeScript, React',
  image: 'test.png',
};

test('project card shows name, status badge, and skill tags', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <ProjectCard project={project} />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(screen.getByText('ASAPH')).toBeInTheDocument();
  expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
  expect(screen.getByText('Live')).toBeInTheDocument();
});
