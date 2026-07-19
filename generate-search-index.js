const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'categories.js' && f !== 'index.js');

let allQuestions = [];
let seen = new Set();

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Transform ES exports to CommonJS
  content = content.replace(/export\s+const\s+(\w+)\s*=/g, 'exports.$1 =');
  
  // Remove any import statements
  content = content.replace(/import\s+.*?;\n/g, '');

  try {
    const sandbox = { exports: {} };
    const script = new Function('exports', content);
    script(sandbox.exports);
    
    // Now extract questions from all exported variables
    for (const key in sandbox.exports) {
      const data = sandbox.exports[key];
      if (data && Array.isArray(data.questions)) {
        for (const q of data.questions) {
          const questionText = q.question || q.q;
          const answerText = q.answer || q.a;
          if (questionText && answerText && !seen.has(questionText)) {
            seen.add(questionText);
            allQuestions.push({ q: questionText, a: answerText });
          }
        }
      } else if (Array.isArray(data)) {
         for (const q of data) {
           const questionText = q.question || q.q;
           const answerText = q.answer || q.a;
           if (questionText && answerText && !seen.has(questionText)) {
             seen.add(questionText);
             allQuestions.push({ q: questionText, a: answerText });
           }
         }
      } else if (data && Array.isArray(data.months)) {
          for (const month of data.months) {
             if (month && Array.isArray(month.questions)) {
                for (const q of month.questions) {
                  const questionText = q.question || q.q;
                  const answerText = q.answer || q.a;
                  if (questionText && answerText && !seen.has(questionText)) {
                    seen.add(questionText);
                    allQuestions.push({ q: questionText, a: answerText });
                  }
                }
             }
          }
      }
    }
  } catch (err) {
    console.error('Error parsing file:', file, err);
  }
}

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}
fs.writeFileSync(path.join(publicDir, 'search-index.json'), JSON.stringify(allQuestions));
console.log(`Generated search-index.json with ${allQuestions.length} unique questions.`);
