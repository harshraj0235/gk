const fs = require('fs');

const files = ['data/ssc-gk-full.js', 'data/upsc-gk-full.js'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let lines = content.split('\n');
  let changed = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    // Match line that contains question: '... something ...'
    // Specifically looking for `{ id: ..., question: '`
    const match = line.match(/(question:\s*')(.+?)(',\s*options:)/);
    if (match) {
      const qText = match[2];
      // Escape all single quotes not preceded by backslash
      const escaped = qText.replace(/(?<!\\)'/g, "\\'");
      if (escaped !== qText) {
        lines[i] = line.replace(/(question:\s*')(.+?)(',\s*options:)/, `$1${escaped}$3`);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(file, lines.join('\n'));
    console.log('Fixed quotes in', file);
  }
}
