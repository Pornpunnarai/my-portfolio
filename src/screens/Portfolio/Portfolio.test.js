import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import PortfolioScreen from './index';

test('portfolio page lists all projects', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <PortfolioScreen />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(screen.getByText('ASAPH')).toBeInTheDocument();
  expect(screen.getByText('Tokenization Platform')).toBeInTheDocument();
});
