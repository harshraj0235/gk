const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

let allQuestions = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  
  // Extract questions with q/a
  const qaRegex = /q:\s*[`'"]([\s\S]*?)[`'"],\s*a:\s*[`'"]([\s\S]*?)[`'"]/g;
  let match;
  while ((match = qaRegex.exec(content)) !== null) {
    allQuestions.push({ q: match[1].trim(), a: match[2].trim() });
  }

  // Extract questions with question/answer
  const questionAnswerRegex = /question:\s*[`'"]([\s\S]*?)[`'"],\s*answer:\s*[`'"]([\s\S]*?)[`'"]/g;
  while ((match = questionAnswerRegex.exec(content)) !== null) {
    allQuestions.push({ q: match[1].trim(), a: match[2].trim() });
  }
}

console.log('Total questions found:', allQuestions.length);
