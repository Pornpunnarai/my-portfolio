import MyPortfolio from './MyPortfolio';
import { getProjectImageVariant } from './projectImageDisplay';

test('getProjectImageVariant matches legacy display rules', () => {
  const urbanTransit = MyPortfolio.MENU.find((p) => p.name === 'Urban Transit');
  const omWallet = MyPortfolio.MENU.find((p) => p.id === 7);
  const scb = MyPortfolio.MENU.find((p) => p.name === 'SCB Business Anywhere');

  expect(getProjectImageVariant(urbanTransit)).toBe('full');
  expect(getProjectImageVariant(omWallet)).toBe('square');
  expect(getProjectImageVariant(scb)).toBe('default');
});
