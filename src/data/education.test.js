import education from './education';

test('education has two entries', () => {
  expect(education).toHaveLength(2);
  expect(education[0].school).toContain('Chiang Mai University');
});
