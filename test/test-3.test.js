const fs = require('fs');
const path = require('path');

test('Log output', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Log output
  expect(code).toMatch(/console\.log\(.*\)/);
});
