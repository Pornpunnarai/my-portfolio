import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import Navbar from './index';

test('navbar renders view resume and language toggle', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(screen.getByText(/View Resume/i)).toBeInTheDocument();
  expect(screen.getByText('EN')).toBeInTheDocument();
  expect(screen.getByText('TH')).toBeInTheDocument();
});
