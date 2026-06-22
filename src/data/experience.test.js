import experience from './experience';

test('experience has four work entries', () => {
  expect(experience).toHaveLength(4);
  expect(experience[0].company).toBe('Socket 9 Co., Ltd. (HQ)');
});
