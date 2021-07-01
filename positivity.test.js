const testNum = require('./positivity.js');

test('returns positive', () => {
  expect(testNum(42)).toEqual('positive');
});