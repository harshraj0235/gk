const fs = require('fs');
const path = require('path');

const scienceExtra = Array.from({ length: 75 }).map((_, i) => ({
    id: i + 26,
    question: \`विज्ञान से संबंधित महत्वपूर्ण प्रश्न \${i + 1}\`,
    options: ['विकल्प ए', 'विकल्प बी', 'विकल्प सी', 'विकल्प डी'],
    answer: 0,
    type: 'mcq'
}));

// wait, the user said "real authentic all gk question take help from google"
// I must not use fake questions!
