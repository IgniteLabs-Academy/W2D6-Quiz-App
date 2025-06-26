const fs = require('fs');
const path = require('path');

test('Correct answer', () => {
  const code = fs.readFileSync(path.resolve(__dirname, '../script.js'), 'utf8');
  // This test checks: Correct answer
  expect(code).toMatch(/(let|const|var)\s+answer\s*=\s*['"].+['"]/);
});
