// All 50+ GK categories with metadata
export const categories = [
  // General Knowledge
  { slug: 'india-gk', title: 'India GK', titleHindi: 'भारत सामान्य ज्ञान', description: 'India GK Questions in Hindi for all competitive exams', icon: '🇮🇳', color: '#FF6B35', group: 'general' },
  { slug: 'world-gk', title: 'World GK', titleHindi: 'विश्व सामान्य ज्ञान', description: 'World General Knowledge Questions in Hindi', icon: '🌍', color: '#004E92', group: 'general' },
  { slug: 'current-affairs', title: 'Current Affairs', titleHindi: 'करेंट अफेयर्स', description: 'Daily Current Affairs GK in Hindi 2025-2026', icon: '📰', color: '#7B2FBE', group: 'general' },
  { slug: 'science-gk', title: 'Science GK', titleHindi: 'विज्ञान सामान्य ज्ञान', description: 'Science GK Questions in Hindi', icon: '🔬', color: '#00B4D8', group: 'science' },
  { slug: 'biology-gk', title: 'Biology GK', titleHindi: 'जीव विज्ञान सामान्य ज्ञान', description: 'Biology GK Questions in Hindi', icon: '🧬', color: '#2DC653', group: 'science' },
  { slug: 'physics-gk', title: 'Physics GK', titleHindi: 'भौतिक विज्ञान सामान्य ज्ञान', description: 'Physics GK Questions in Hindi', icon: '⚡', color: '#FFD700', group: 'science' },
  { slug: 'chemistry-gk', title: 'Chemistry GK', titleHindi: 'रसायन विज्ञान सामान्य ज्ञान', description: 'Chemistry GK Questions in Hindi', icon: '⚗️', color: '#FF4D6D', group: 'science' },
  { slug: 'computer-gk', title: 'Computer GK', titleHindi: 'कंप्यूटर सामान्य ज्ञान', description: 'Computer GK Questions in Hindi', icon: '💻', color: '#0077B6', group: 'science' },
  { slug: 'history-gk', title: 'History GK', titleHindi: 'इतिहास सामान्य ज्ञान', description: 'History GK Questions in Hindi', icon: '🏛️', color: '#D4A017', group: 'general' },
  { slug: 'geography-gk', title: 'Geography GK', titleHindi: 'भूगोल सामान्य ज्ञान', description: 'Geography GK Questions in Hindi', icon: '🗺️', color: '#2DC653', group: 'general' },
  { slug: 'sports-gk', title: 'Sports GK', titleHindi: 'खेल सामान्य ज्ञान', description: 'Sports GK Questions in Hindi', icon: '🏆', color: '#FF6B35', group: 'general' },
  { slug: 'economics-gk', title: 'Economics GK', titleHindi: 'अर्थशास्त्र सामान्य ज्ञान', description: 'Economics GK Questions in Hindi', icon: '📊', color: '#7B2FBE', group: 'general' },
  { slug: 'political-gk', title: 'Political GK', titleHindi: 'राजनीति सामान्य ज्ञान', description: 'Political GK Questions in Hindi', icon: '🗳️', color: '#FF4D6D', group: 'general' },
  { slug: 'general-awareness', title: 'General Awareness', titleHindi: 'जनरल अवेयरनेस', description: 'General Awareness Questions in Hindi', icon: '🧠', color: '#004E92', group: 'general' },
  // Competitive Exams
  { slug: 'ssc-gk', title: 'SSC GK', titleHindi: 'SSC सामान्य ज्ञान', description: 'SSC GK Questions in Hindi', icon: '📝', color: '#FF6B35', group: 'exam' },
  { slug: 'upsc-gk', title: 'UPSC GK', titleHindi: 'UPSC सामान्य ज्ञान', description: 'UPSC GK Questions in Hindi', icon: '🎓', color: '#004E92', group: 'exam' },
  { slug: 'bank-gk', title: 'Banking GK', titleHindi: 'बैंकिंग सामान्य ज्ञान', description: 'Banking GK Questions in Hindi', icon: '🏦', color: '#2DC653', group: 'exam' },
  { slug: 'rail-gk', title: 'Railway GK', titleHindi: 'रेलवे सामान्य ज्ञान', description: 'Railway GK Questions in Hindi', icon: '🚂', color: '#00B4D8', group: 'exam' },
  { slug: 'ctet-gk', title: 'CTET/TET GK', titleHindi: 'CTET/TET सामान्य ज्ञान', description: 'CTET TET GK Questions in Hindi', icon: '👨‍🏫', color: '#FFD700', group: 'exam' },
  { slug: 'indian-army-gk', title: 'Indian Army GK', titleHindi: 'भारतीय सेना सामान्य ज्ञान', description: 'Indian Army GK Questions in Hindi', icon: '🪖', color: '#2DC653', group: 'exam' },
  { slug: 'bpsc-gk', title: 'BPSC GK', titleHindi: 'BPSC सामान्य ज्ञान', description: 'BPSC GK Questions in Hindi', icon: '📋', color: '#FF4D6D', group: 'exam' },
  { slug: 'bed-entrance-gk', title: 'B.Ed Entrance GK', titleHindi: 'बीएड एंट्रेंस सामान्य ज्ञान', description: 'B.Ed Entrance GK Questions in Hindi', icon: '📚', color: '#7B2FBE', group: 'exam' },
  // State GK
  { slug: 'bihar-gk', title: 'Bihar GK', titleHindi: 'बिहार सामान्य ज्ञान', description: 'Bihar GK Questions in Hindi', icon: '🗺️', color: '#D4A017', group: 'state' },
  { slug: 'rajasthan-gk', title: 'Rajasthan GK', titleHindi: 'राजस्थान सामान्य ज्ञान', description: 'Rajasthan GK Questions in Hindi', icon: '🏜️', color: '#FF6B35', group: 'state' },
  { slug: 'up-gk', title: 'UP GK', titleHindi: 'उत्तर प्रदेश सामान्य ज्ञान', description: 'UP GK Questions in Hindi', icon: '🕌', color: '#004E92', group: 'state' },
  { slug: 'mp-gk', title: 'MP GK', titleHindi: 'मध्यप्रदेश सामान्य ज्ञान', description: 'Madhya Pradesh GK Questions in Hindi', icon: '🌳', color: '#2DC653', group: 'state' },
  { slug: 'haryana-gk', title: 'Haryana GK', titleHindi: 'हरियाणा सामान्य ज्ञान', description: 'Haryana GK Questions in Hindi', icon: '🌾', color: '#FFD700', group: 'state' },
  { slug: 'delhi-gk', title: 'Delhi GK', titleHindi: 'दिल्ली सामान्य ज्ञान', description: 'Delhi GK Questions in Hindi', icon: '🏛️', color: '#7B2FBE', group: 'state' },
  { slug: 'jharkhand-gk', title: 'Jharkhand GK', titleHindi: 'झारखंड सामान्य ज्ञान', description: 'Jharkhand GK Questions in Hindi', icon: '⛰️', color: '#00B4D8', group: 'state' },
  { slug: 'himachal-gk', title: 'HP GK', titleHindi: 'हिमाचल प्रदेश सामान्य ज्ञान', description: 'Himachal Pradesh GK Questions in Hindi', icon: '🏔️', color: '#FF4D6D', group: 'state' },
  { slug: 'maharashtra-gk', title: 'Maharashtra GK', titleHindi: 'महाराष्ट्र सामान्य ज्ञान', description: 'Maharashtra GK Questions in Hindi', icon: '🌊', color: '#D4A017', group: 'state' },
  { slug: 'karnataka-gk', title: 'Karnataka GK', titleHindi: 'कर्नाटक सामान्य ज्ञान', description: 'Karnataka GK Questions in Hindi', icon: '🌺', color: '#FF6B35', group: 'state' },
  { slug: 'chhattisgarh-gk', title: 'Chhattisgarh GK', titleHindi: 'छत्तीसगढ़ सामान्य ज्ञान', description: 'Chhattisgarh GK Questions in Hindi', icon: '🌿', color: '#2DC653', group: 'state' },
  // Special Topics
  { slug: 'hindi-grammar-gk', title: 'Hindi Grammar GK', titleHindi: 'हिंदी व्याकरण सामान्य ज्ञान', description: 'Hindi Grammar GK Questions', icon: '✍️', color: '#7B2FBE', group: 'special' },
  { slug: 'reasoning', title: 'Reasoning', titleHindi: 'रीजनिंग', description: 'Reasoning Questions in Hindi', icon: '🧩', color: '#004E92', group: 'special' },
  { slug: 'math-gk', title: 'Math GK', titleHindi: 'गणित सामान्य ज्ञान', description: 'Math GK Questions in Hindi', icon: '➗', color: '#FF4D6D', group: 'special' },
  { slug: 'agriculture-gk', title: 'Agriculture GK', titleHindi: 'कृषि सामान्य ज्ञान', description: 'Agriculture GK Questions in Hindi', icon: '🌾', color: '#2DC653', group: 'special' },
  { slug: 'electronics-gk', title: 'Electronics GK', titleHindi: 'इलेक्ट्रॉनिक्स सामान्य ज्ञान', description: 'Electronics GK Questions in Hindi', icon: '🔌', color: '#00B4D8', group: 'special' },
  { slug: 'kbc-gk', title: 'KBC GK', titleHindi: 'KBC सामान्य ज्ञान', description: 'KBC GK Questions in Hindi', icon: '💡', color: '#FFD700', group: 'special' },
  { slug: 'bollywood-gk', title: 'Bollywood GK', titleHindi: 'बॉलीवुड सामान्य ज्ञान', description: 'Bollywood GK Questions in Hindi', icon: '🎬', color: '#FF6B35', group: 'special' },
  { slug: 'ramayan-gk', title: 'Ramayan GK', titleHindi: 'रामायण सामान्य ज्ञान', description: 'Ramayan GK Questions in Hindi', icon: '🏹', color: '#D4A017', group: 'special' },
  { slug: 'technology-gk', title: 'Technology GK', titleHindi: 'टेक्नोलॉजी सामान्य ज्ञान', description: 'Technology GK Questions in Hindi', icon: '🚀', color: '#7B2FBE', group: 'special' },
  { slug: 'static-gk', title: 'Static GK', titleHindi: 'स्टेटिक सामान्य ज्ञान', description: '5000+ Static GK Questions in Hindi', icon: '📌', color: '#004E92', group: 'special' },
  { slug: 'famous-person-gk', title: 'Famous Person GK', titleHindi: 'प्रसिद्ध व्यक्ति सामान्य ज्ञान', description: 'Famous Person GK Questions in Hindi', icon: '👤', color: '#FF4D6D', group: 'special' },
  { slug: 'indian-polity-gk', title: 'Indian Polity GK', titleHindi: 'भारतीय राजव्यवस्था सामान्य ज्ञान', description: 'Indian Polity GK Questions in Hindi', icon: '⚖️', color: '#FF6B35', group: 'general' },
  { slug: 'states-capitals-gk', title: 'States/Capitals GK', titleHindi: 'राज्य/राजधानी सामान्य ज्ञान', description: 'Indian States and Capitals GK in Hindi', icon: '🗺️', color: '#2DC653', group: 'general' },
  { slug: 'one-line-gk', title: 'One Line GK', titleHindi: 'वन लाइन सामान्य ज्ञान', description: '20,000+ One Line GK Questions in Hindi', icon: '⚡', color: '#FFD700', group: 'general' },
];

export const getCategoryBySlug = (slug) => categories.find(c => c.slug === slug);
export const getGroupCategories = (group) => categories.filter(c => c.group === group);
export const groups = {
  general: 'सामान्य ज्ञान',
  science: 'विज्ञान',
  exam: 'प्रतियोगी परीक्षाएं',
  state: 'राज्य GK',
  special: 'विशेष विषय',
};
