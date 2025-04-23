const fs = require('fs');
const path = require('path');

test('Question variable', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Question variable
  expect(code).toMatch(/let\s+question\s*=\s*['"].+['"]/);
});
