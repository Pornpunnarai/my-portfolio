import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectCard from './index';

const project = {
  name: 'ASAPH',
  description: 'Live streaming app',
  skill: 'TypeScript, React',
  image: 'test.png',
};

test('project card shows name and skill tags', () => {
  render(
    <MemoryRouter>
      <ProjectCard project={project} />
    </MemoryRouter>
  );
  expect(screen.getByText('ASAPH')).toBeInTheDocument();
  expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
});
