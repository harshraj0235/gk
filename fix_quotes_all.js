const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('data').filter(f => f.endsWith('.js'));

for (const file of files) {
  const filePath = path.join('data', file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // We look for question: '...something...', options:
  // Using a replace function to escape inner single quotes
  let modified = false;
  content = content.replace(/(question:\s*')([\s\S]*?)(',\s*options:)/g, (match, p1, p2, p3) => {
    // If p2 contains unescaped single quotes, escape them
    // An unescaped single quote is one not preceded by a backslash
    const escaped = p2.replace(/(?<!\\)'/g, "\\'");
    if (escaped !== p2) modified = true;
    return p1 + escaped + p3;
  });

  // Also do it for answer: '...' or oneliners
  content = content.replace(/(question:\s*')([\s\S]*?)(',\s*answer:)/g, (match, p1, p2, p3) => {
    const escaped = p2.replace(/(?<!\\)'/g, "\\'");
    if (escaped !== p2) modified = true;
    return p1 + escaped + p3;
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log('Fixed quotes in', file);
  }
}
console.log('Done fixing quotes.');
