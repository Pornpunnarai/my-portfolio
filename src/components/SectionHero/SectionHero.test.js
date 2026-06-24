import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../context/LanguageContext';
import SectionHero from './index';

test('hero shows name and experience stat', () => {
  render(
    <LanguageProvider>
      <SectionHero />
    </LanguageProvider>
  );
  expect(screen.getByText('Pawnpunnarai Saimoonkham')).toBeInTheDocument();
  expect(screen.getByText('6+')).toBeInTheDocument();
  expect(screen.getByText(/SCB, DLT/)).toBeInTheDocument();
});
