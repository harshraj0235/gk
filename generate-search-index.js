const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'categories.js' && f !== 'index.js');

let allQuestions = [];
let seen = new Set();
let allCategories = [];

// 1. Extract Categories
try {
  let catContent = fs.readFileSync(path.join(dataDir, 'categories.js'), 'utf8');
  catContent = catContent.replace(/export\s+const\s+(\w+)\s*=/g, 'exports.$1 =');
  // Remove inner functions like getCategoryBySlug that cause issues
  catContent = catContent.replace(/export\s+function[\s\S]*?^}/gm, '');
  const sandbox = { exports: {} };
  const script = new Function('exports', catContent);
  script(sandbox.exports);
  if (sandbox.exports.categories) {
    allCategories = sandbox.exports.categories.map(c => ({
      slug: c.slug,
      title: c.title,
      titleHindi: c.titleHindi,
      description: c.description,
      icon: c.icon
    }));
  }
} catch (err) {
  console.error('Error parsing categories.js:', err);
}

// 2. Extract Questions
for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Transform ES exports to CommonJS
  content = content.replace(/export\s+const\s+(\w+)\s*=/g, 'exports.$1 =');
  // Remove any import statements and export { ... } from statements
  content = content.replace(/import\s+.*?;\n/g, '');
  content = content.replace(/export\s+\{.*?\}.*?;\n/g, '');

  try {
    const sandbox = { exports: {} };
    const script = new Function('exports', content);
    script(sandbox.exports);
    
    // Now extract questions from all exported variables
    for (const key in sandbox.exports) {
      const data = sandbox.exports[key];
      let catTitle = data.title || data.titleHindi || '';
      
      const addQuestion = (q) => {
          const questionText = q.question || q.q;
          const answerText = q.answer || q.a;
          if (questionText && answerText && !seen.has(questionText)) {
            seen.add(questionText);
            allQuestions.push({ q: questionText, a: answerText, c: catTitle });
          }
      };

      if (data && Array.isArray(data.questions)) {
        data.questions.forEach(addQuestion);
      } else if (Array.isArray(data)) {
        data.forEach(addQuestion);
      } else if (data && Array.isArray(data.months)) {
        data.months.forEach(month => {
             if (month && Array.isArray(month.questions)) {
                month.questions.forEach(addQuestion);
             }
        });
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

const indexData = {
  categories: allCategories,
  questions: allQuestions
};

fs.writeFileSync(path.join(publicDir, 'search-index.json'), JSON.stringify(indexData));
console.log(`Generated search-index.json with ${allCategories.length} categories and ${allQuestions.length} unique questions.`);
