const fs = require('fs');

const sscQuestions = [
  ...Array.from({ length: 10 }, (_, i) => `{ id: ${i + 1}, question: 'SSC Sample MCQ ${i + 1} ?', options: ['A', 'B', 'C', 'D'], answer: 0, type: 'mcq' }`),
  ...Array.from({ length: 101 }, (_, i) => `{ id: ${i + 11}, question: 'SSC Oneliner ${i + 1} ?', answer: 'Answer ${i + 1}', type: 'oneliner' }`)
];

const upscQuestions = [
  ...Array.from({ length: 10 }, (_, i) => `{ id: ${i + 1}, question: 'UPSC Sample MCQ ${i + 1} ?', options: ['A', 'B', 'C', 'D'], answer: 0, type: 'mcq' }`),
  ...Array.from({ length: 101 }, (_, i) => `{ id: ${i + 11}, question: 'UPSC Oneliner ${i + 1} ?', answer: 'Answer ${i + 1}', type: 'oneliner' }`)
];

// Well, this is just dummy data. I should provide real Hindi GK questions for these 4 subjects.
