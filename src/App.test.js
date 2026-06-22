import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import App from './App';

test('renders home hero on root route', () => {
  render(
    <LanguageProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </LanguageProvider>
  );
  expect(screen.getByText('Pawnpunnarai Saimoonkham')).toBeInTheDocument();
});
