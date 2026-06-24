import React from 'react';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../context/LanguageContext';
import SectionHero from './index';

test('hero shows senior title and key stats', () => {
  render(
    <LanguageProvider>
      <SectionHero />
    </LanguageProvider>
  );
  expect(screen.getByText('Pawnpunnarai Saimoonkham')).toBeInTheDocument();
  expect(screen.getByText('Senior React Native & React Developer')).toBeInTheDocument();
  expect(screen.getByText('7+')).toBeInTheDocument();
  expect(screen.getByText('Available immediately')).toBeInTheDocument();
});
