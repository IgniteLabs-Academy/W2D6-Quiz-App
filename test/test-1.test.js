const fs = require('fs');
const path = require('path');

test('Check function', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Check function
  expect(code).toMatch(/function\s+checkAnswer\s*\(.*\)/);
});
