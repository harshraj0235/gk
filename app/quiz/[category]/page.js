import { categories, getCategoryBySlug } from '../../../data/categories';
import { indiaGKData } from '../../../data/india-gk';
import { scienceGKData, historyGKData } from '../../../data/general-gk';
import { computerGKData, geographyGKData, sportsGKData, economicsGKData, polityGKData } from '../../../data/subject-gk';
import { sscGKData, upscGKData, bankGKData, railGKData, biharGKData, armyGKData } from '../../../data/exam-gk';
import { rajasthanGKData, upGKData, mpGKData, hindiGrammarGKData, reasoningGKData, mathGKData, oneLineGKData } from '../../../data/more-gk';
import QuizClient from './QuizClient';

const QUIZ_TIME = 30; // seconds per question

const dataMap = {
  'india-gk': indiaGKData,
  'science-gk': scienceGKData,
  'history-gk': historyGKData,
  'computer-gk': computerGKData,
  'geography-gk': geographyGKData,
  'sports-gk': sportsGKData,
  'economics-gk': economicsGKData,
  'political-gk': polityGKData,
  'indian-polity-gk': polityGKData,
  'ssc-gk': sscGKData,
  'upsc-gk': upscGKData,
  'bank-gk': bankGKData,
  'rail-gk': railGKData,
  'bihar-gk': biharGKData,
  'indian-army-gk': armyGKData,
  'rajasthan-gk': rajasthanGKData,
  'up-gk': upGKData,
  'mp-gk': mpGKData,
  'hindi-grammar-gk': hindiGrammarGKData,
  'reasoning': reasoningGKData,
  'math-gk': mathGKData,
  'one-line-gk': oneLineGKData,
};

function getCategoryQuestions(slug) {
  const data = dataMap[slug];
  if (data?.questions) {
    const mcqs = data.questions.filter(q => q.type === 'mcq');
    if (mcqs.length > 0) return mcqs;
  }
  // fallback
  const cat = getCategoryBySlug(slug);
  return [
    { id: 1, question: `${cat?.title || slug} - प्रश्न 1: सामान्य ज्ञान क्या है?`, options: ['ज्ञान', 'विज्ञान', 'पढ़ाई', 'उपरोक्त सभी'], answer: 3, type: 'mcq' },
    { id: 2, question: `${cat?.title || slug} - प्रश्न 2: परीक्षा की तैयारी कैसे करें?`, options: ['रोज पढ़ें', 'MCQ अभ्यास', 'वीडियो देखें', 'उपरोक्त सभी'], answer: 3, type: 'mcq' },
    { id: 3, question: `${cat?.title || slug} - प्रश्न 3: GK याद करने का सबसे अच्छा तरीका?`, options: ['फ्लैशकार्ड', 'दोहराव', 'नोट्स', 'सभी तरीके काम करते हैं'], answer: 3, type: 'mcq' },
  ];
}

export async function generateStaticParams() {
  return categories.map(cat => ({ category: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  return {
    title: `${cat?.title || category} Quiz In Hindi | GK Hindi Pro`,
    description: `Online test for ${cat?.title || category}. Practice free mock tests and MCQs.`,
  };
}

export default async function QuizPage({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  const allQuestions = getCategoryQuestions(category);

  return (
    <QuizClient
      category={category}
      cat={cat}
      allQuestions={allQuestions}
      categories={categories}
    />
  );
}
