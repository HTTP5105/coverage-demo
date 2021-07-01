const randomColour = require('./random-colour.js');

test('returns a valid hex code', () => {
  expect(randomColour()).toMatch(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
});