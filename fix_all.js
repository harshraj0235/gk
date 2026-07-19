const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('data').filter(f => f.endsWith('.js'));
for (const file of files) {
    const filePath = path.join('data', file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace literal `,\\n` with a real comma and newline
    content = content.replace(/,\\n/g, ',\n');
    
    fs.writeFileSync(filePath, content);
}
console.log('Fixed literal newlines in all files.');
