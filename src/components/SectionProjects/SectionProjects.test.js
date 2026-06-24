import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import SectionProjects from './index';

test('featured projects section lists curated projects without type filters', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <SectionProjects />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(screen.queryByRole('tab', { name: 'All' })).not.toBeInTheDocument();
  expect(screen.getByText('Pikul Wallet (Release and developing)')).toBeInTheDocument();
  expect(screen.getByText('ASAPH')).toBeInTheDocument();
});
