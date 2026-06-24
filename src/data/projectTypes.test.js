import MyPortfolio from './MyPortfolio';
import { filterProjectsByType, getProjectType } from './projectTypes';

test('getProjectType returns mobile or web', () => {
  const pikul = MyPortfolio.MENU.find((p) => p.id === 23);
  const tokenization = MyPortfolio.MENU.find((p) => p.id === 1);
  expect(getProjectType(pikul)).toBe('mobile');
  expect(getProjectType(tokenization)).toBe('web');
});

test('filterProjectsByType filters mobile projects only', () => {
  const mobile = filterProjectsByType(MyPortfolio.MENU, 'mobile');
  expect(mobile.every((p) => getProjectType(p) === 'mobile')).toBe(true);
  expect(mobile.some((p) => p.name === 'Pikul Wallet (Release and developing)')).toBe(true);
  expect(mobile.some((p) => p.name === 'Tokenization Platform')).toBe(false);
});

test('filterProjectsByType returns all when type is all', () => {
  expect(filterProjectsByType(MyPortfolio.MENU, 'all')).toHaveLength(MyPortfolio.MENU.length);
});
