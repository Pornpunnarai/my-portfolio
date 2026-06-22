import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../../context/LanguageContext';
import HomeScreen from './index';

test('home renders all main sections', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <HomeScreen />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(document.getElementById('hero')).toBeInTheDocument();
  expect(document.getElementById('about')).toBeInTheDocument();
  expect(document.getElementById('experience')).toBeInTheDocument();
  expect(document.getElementById('skills')).toBeInTheDocument();
  expect(document.getElementById('projects')).toBeInTheDocument();
  expect(document.getElementById('contact')).toBeInTheDocument();
});
