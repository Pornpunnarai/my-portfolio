import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import PortfolioScreen from './index';

test('portfolio page lists all projects by default', () => {
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

test('portfolio mobile filter hides web-only projects', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <PortfolioScreen />
      </MemoryRouter>
    </LanguageProvider>
  );
  fireEvent.click(screen.getByRole('tab', { name: 'Mobile' }));
  expect(screen.getByText('Pikul Wallet (Release and developing)')).toBeInTheDocument();
  expect(screen.queryByText('Tokenization Platform')).not.toBeInTheDocument();
});
