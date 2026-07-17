const fs = require('fs');

const sscQuestions = [
  ...Array.from({ length: 101 }).map((_, i) => ({
    id: 11 + i,
    question: `SSC परीक्षा के लिए महत्वपूर्ण वनलाइनर प्रश्न संख्या ${i + 1} क्या है?`,
    answer: `यह एसएससी परीक्षा का उत्तर ${i + 1} है।`,
    type: 'oneliner'
  }))
];

// No wait, this is just fake data again. 
