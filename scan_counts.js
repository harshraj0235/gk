const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

const results = [];

files.forEach(file => {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  // Match exported variables like: export const someData = {
  const exportRegex = /export\s+const\s+(\w+)\s*=\s*\{/g;
  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    const varName = match[1];
    
    // Find the block of this variable
    const startIndex = match.index;
    let nextExportIndex = content.indexOf('export const', startIndex + 10);
    if (nextExportIndex === -1) nextExportIndex = content.length;
    
    const block = content.slice(startIndex, nextExportIndex);
    
    // Count occurrences of 'q:' or 'question:' in the block
    const qMatches = block.match(/[\s{]q\s*:/g) || block.match(/question\s*:/g) || [];
    const count = qMatches.length;
    
    if (count < 100) {
      results.push({ file, varName, count });
    }
  }
});

console.log(JSON.stringify(results, null, 2));
