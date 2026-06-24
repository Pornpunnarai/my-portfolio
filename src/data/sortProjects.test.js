import MyPortfolio from './MyPortfolio';
import { sortProjectsNewestFirst } from './sortProjects';

test('sortProjectsNewestFirst orders by id descending', () => {
  const sorted = sortProjectsNewestFirst(MyPortfolio.MENU);
  expect(sorted[0].name).toBe('Pikul Wallet (Release and developing)');
  expect(sorted[sorted.length - 1].name).toBe('Tokenization Platform');
});
