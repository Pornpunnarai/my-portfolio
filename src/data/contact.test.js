import contact from './contact';

test('contact exports linkedin, email, resume, and cover letter paths', () => {
  expect(contact.linkedin).toBe(
    'https://www.linkedin.com/in/pawnpunnarai-saimoonkham-b0041b130/'
  );
  expect(contact.email).toBe('pawnpunnarai.saimoonkham@gmail.com');
  expect(contact.cvPath).toContain('Resume-Pawnpunnarai-Sai-Senior-Developer');
  expect(contact.coverLetterPath).toContain('Cover-Letter');
});
