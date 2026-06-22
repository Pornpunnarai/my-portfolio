import fs from 'fs';
import path from 'path';

test('variables scss defines navy palette tokens', () => {
  const content = fs.readFileSync(
    path.join(__dirname, '_variables.scss'),
    'utf8'
  );
  expect(content).toContain('--color-navy: #1e3a5f');
  expect(content).toContain('--color-bg-alt: #f7f8fa');
  expect(content).toContain('--color-text-muted: #718096');
});
