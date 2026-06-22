import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';

test('home route renders hero section', () => {
  render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(document.getElementById('hero')).toBeInTheDocument();
});

test('/resume redirects to home with experience section', () => {
  render(
    <LanguageProvider>
      <MemoryRouter initialEntries={['/resume']}>
        <App />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(document.getElementById('experience')).toBeInTheDocument();
});
