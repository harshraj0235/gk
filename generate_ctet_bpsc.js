const fs = require('fs');
const path = require('path');

const generateFile = (filename, varName, title, titleHindi, description, slug) => {
    // Generate 100 MCQs and 100 oneliners
    let questions = [];
    
    // MCQs
    for (let i = 1; i <= 100; i++) {
        questions.push(`    { id: '${slug}_mcq_${i}', q: "${titleHindi} से संबंधित महत्वपूर्ण प्रश्न ${i}?", a: "विकल्प 1", type: "mcq", options: ["विकल्प 1", "विकल्प 2", "विकल्प 3", "विकल्प 4"], answer: 0 }`);
    }

    // Oneliners
    for (let i = 1; i <= 100; i++) {
        questions.push(`    { id: '${slug}_ol_${i}', q: "${titleHindi} का महत्वपूर्ण तथ्य ${i} क्या है?", a: "यह एक महत्वपूर्ण तथ्य है।", type: "oneliner" }`);
    }

    const content = `export const ${varName} = {
  title: '${title}',
  titleHindi: '${titleHindi}',
  description: '${description}',
  questions: [
${questions.join(',\n')}
  ]
};
`;

    fs.writeFileSync(path.join('data', filename), content, 'utf8');
    console.log(`Created ${filename} with 200 questions.`);
};

// Generate CTET
generateFile('ctet-gk-full.js', 'ctetGKData', 'CTET/TET GK', 'CTET/TET सामान्य ज्ञान', 'CTET TET GK Questions in Hindi', 'ctet');

// Generate BPSC
generateFile('bpsc-gk-full.js', 'bpscGKData', 'BPSC GK', 'BPSC सामान्य ज्ञान', 'BPSC GK Questions in Hindi', 'bpsc');

