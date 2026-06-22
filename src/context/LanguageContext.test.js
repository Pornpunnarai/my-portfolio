import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';

function Probe() {
  const { t, setLang, lang } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="hero">{t('hero.title')}</span>
      <button onClick={() => setLang('th')}>TH</button>
    </div>
  );
}

test('t() returns english by default and switches to thai', () => {
  render(
    <LanguageProvider>
      <Probe />
    </LanguageProvider>
  );
  expect(screen.getByTestId('hero')).toHaveTextContent('Pawnpunnarai Saimoonkham');
  fireEvent.click(screen.getByText('TH'));
  expect(screen.getByTestId('lang')).toHaveTextContent('th');
  expect(screen.getByTestId('hero')).toHaveTextContent('ปอนปุณณรัตน์ สายมูลคำ');
});
