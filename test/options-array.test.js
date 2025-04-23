const fs = require('fs');
const path = require('path');

test('Options array', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Options array
  expect(code).toMatch(/let\s+options\s*=\s*\[.*\]/);
});
