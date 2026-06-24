import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import SectionProjects from './index';

const renderSection = () =>
  render(
    <LanguageProvider>
      <MemoryRouter>
        <SectionProjects />
      </MemoryRouter>
    </LanguageProvider>
  );

test('featured projects section has type filters', () => {
  renderSection();
  expect(screen.getByRole('tab', { name: 'All' })).toBeInTheDocument();
  expect(screen.getByText('Pikul Wallet (Release and developing)')).toBeInTheDocument();
});

test('featured web filter shows empty state', () => {
  renderSection();
  fireEvent.click(screen.getByRole('tab', { name: 'Web' }));
  expect(screen.getByText('No projects in this category.')).toBeInTheDocument();
});
