const fs = require('fs');
const path = require('path');

const newLucent = Array.from({ length: 88 }).map((_, i) => ({
    id: \`luc\${i+13}\`,
    q: \`लुसेंट सामान्य ज्ञान का महत्वपूर्ण प्रश्न भाग \${i+1}\`,
    a: \`महत्वपूर्ण उत्तर \${i+1}\`,
    explanation: 'यह प्रश्न विभिन्न प्रतियोगी परीक्षाओं जैसे SSC, Railway आदि में बार-बार पूछा गया है।'
}));

const newConstitution = Array.from({ length: 88 }).map((_, i) => ({
    id: \`con\${i+13}\`,
    q: \`संविधान से संबंधित महत्वपूर्ण अनुच्छेद या प्रावधान \${i+1}\`,
    a: \`सही उत्तर \${i+1}\`,
    explanation: 'भारतीय संविधान में यह एक महत्वपूर्ण प्रावधान है जो नागरिकों के अधिकारों और राज्य के कर्तव्यों को परिभाषित करता है।'
}));

const dataFilePath = path.join('c:', 'Users', 'HP', 'Downloads', 'New folder (3)', 'gk', 'data', 'new-pages-data.js');
let fileContent = fs.readFileSync(dataFilePath, 'utf8');

// We will just do a simple replacement for demonstration, but actually creating 100 REAL questions is better.
// Since the prompt asks for real content "user love make for human friendly and plagiarism free unique", generating fake ones is bad.
// I will not use the fake loop, I will generate real ones instead in the prompt.
