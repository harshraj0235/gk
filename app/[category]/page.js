import { categories, getCategoryBySlug } from '../../data/categories';
import { indiaGKData } from '../../data/india-gk';
import { scienceGKData, historyGKData, worldGKData, generalAwarenessGKData } from '../../data/general-gk';
import { currentAffairsData } from '../../data/current-affairs';
import { computerGKData, geographyGKData, sportsGKData, economicsGKData, polityGKData } from '../../data/subject-gk';
import { sscGKData, upscGKData, bankGKData, railGKData, armyGKData, ctetGKData, bpscGKData } from '../../data/exam-gk';
import { reasoningGKData, oneLineGKData } from '../../data/more-gk';
import { biharGKData } from '../../data/bihar-gk-full';
import { rajasthanGKData } from '../../data/rajasthan-gk-full';
import { upGKData } from '../../data/up-gk-full';
import { mpGKData } from '../../data/mp-gk-full';
import { bedEntranceGKData } from '../../data/bed-entrance-gk-full';
import { technologyGKData } from '../../data/technology-gk-full';
import { gujaratGKData, westBengalGKData, punjabGKData, uttarakhandGKData, tamilnaduGKData, keralaGKData, assamGKData, odishaGKData, telanganaGKData } from '../../data/new-state-gk';
import { statesCapitalsGKData } from '../../data/states-capitals-gk-full';
import { famousPersonGKData } from '../../data/famous-person-gk-full';
import { staticGKData } from '../../data/static-gk-full';
import { ramayanGKData } from '../../data/ramayan-gk-full';
import { bollywoodGKData } from '../../data/bollywood-gk-full';
import { kbcGKData } from '../../data/kbc-gk-full';
import { electronicsGKData } from '../../data/electronics-gk-full';
import { agricultureGKData } from '../../data/agriculture-gk-full';
import { mathGKData } from '../../data/math-gk-full';
import { reasoningData } from '../../data/reasoning-full';
import { hindiGrammarGKData } from '../../data/hindi-grammar-gk-full';
import { chhattisgarhGKData } from '../../data/chhattisgarh-gk-full';
import { karnatakaGKData } from '../../data/karnataka-gk-full';
import { maharashtraGKData } from '../../data/maharashtra-gk-full';
import { himachalGKData } from '../../data/himachal-gk-full';
import { jharkhandGKData } from '../../data/jharkhand-gk-full';
import { delhiGKData } from '../../data/delhi-gk-full';
import { haryanaGKData } from '../../data/haryana-gk-full';
import { notFound } from 'next/navigation';
import PaginatedList from '../components/PaginatedList';
import ShareButtons from '../components/ShareButtons';
import TableOfContents from '../components/TableOfContents';

const ADSENSE_CLIENT = 'ca-pub-6815277662449747';
const ADSENSE_SLOT_ATF = '2683916778';
const ADSENSE_SLOT_BTF = '7744671760';

// Generate static params for all categories
export async function generateStaticParams() {
  return categories.map(cat => ({ category: cat.slug }));
}

// Generate metadata per category
export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: 'Not Found' };

  return {
    title: `${cat.title} In Hindi - ${cat.titleHindi} | GK Hindi Pro`,
    description: `${cat.description} - Best ${cat.title} Questions in Hindi for SSC, UPSC, Banking, Railway, CTET. Free quiz and practice tests.`,
    keywords: `${cat.title} in Hindi, ${cat.titleHindi}, ${cat.title} questions, ${cat.title} quiz`,
    alternates: { canonical: `https://gkhindi.moneycal.in/${category}` },
    openGraph: {
      title: `${cat.title} In Hindi - ${cat.titleHindi}`,
      description: cat.description,
      url: `https://gkhindi.moneycal.in/${category}`,
    },
  };
}

function getCategoryData(slug) {
  switch (slug) {
    case 'india-gk': return indiaGKData;
    case 'science-gk': return scienceGKData;
    case 'world-gk': return worldGKData;
    case 'general-awareness': return generalAwarenessGKData;
    case 'history-gk': return historyGKData;
    case 'current-affairs': return currentAffairsData;
    case 'computer-gk': return computerGKData;
    case 'geography-gk': return geographyGKData;
    case 'sports-gk': return sportsGKData;
    case 'economics-gk': return economicsGKData;
    case 'political-gk': case 'indian-polity-gk': return polityGKData;
    case 'ssc-gk': return sscGKData;
    case 'upsc-gk': return upscGKData;
    case 'bank-gk': return bankGKData;
    case 'rail-gk': return railGKData;
    case 'bihar-gk': return biharGKData;
    case 'indian-army-gk': return armyGKData;
    case 'ctet-gk': return ctetGKData;
    case 'bpsc-gk': return bpscGKData;
    case 'states-capitals-gk': return statesCapitalsGKData;
    case 'famous-person-gk': return famousPersonGKData;
    case 'static-gk': return staticGKData;
    case 'ramayan-gk': return ramayanGKData;
    case 'bollywood-gk': return bollywoodGKData;
    case 'kbc-gk': return kbcGKData;
    case 'electronics-gk': return electronicsGKData;
    case 'agriculture-gk': return agricultureGKData;
    case 'math-gk': return mathGKData;
    case 'reasoning': return reasoningData;
    case 'hindi-grammar-gk': return hindiGrammarGKData;
    case 'chhattisgarh-gk': return chhattisgarhGKData;
    case 'karnataka-gk': return karnatakaGKData;
    case 'maharashtra-gk': return maharashtraGKData;
    case 'himachal-gk': return himachalGKData;
    case 'jharkhand-gk': return jharkhandGKData;
    case 'delhi-gk': return delhiGKData;
    case 'haryana-gk': return haryanaGKData;
    case 'rajasthan-gk': return rajasthanGKData;
    case 'up-gk': return upGKData;
    case 'mp-gk': return mpGKData;
    case 'bed-entrance-gk': return bedEntranceGKData;
    case 'hindi-grammar-gk': return hindiGrammarGKData;
    case 'reasoning': return reasoningData;
    case 'math-gk': return mathGKData;
    case 'one-line-gk': return oneLineGKData;
    case 'gujarat-gk': return gujaratGKData;
    case 'west-bengal-gk': return westBengalGKData;
    case 'punjab-gk': return punjabGKData;
    case 'uttarakhand-gk': return uttarakhandGKData;
    case 'tamilnadu-gk': return tamilnaduGKData;
    case 'kerala-gk': return keralaGKData;
    case 'assam-gk': return assamGKData;
    case 'odisha-gk': return odishaGKData;
    case 'telangana-gk': return telanganaGKData;
    case 'technology-gk': return technologyGKData;
    default: return null;
  }
}

function getFallbackQuestions(cat) {
  // Generic questions for categories without dedicated data
  return [
    { id: 1, question: `${cat.title} से संबंधित प्रश्न 1 - यह ${cat.titleHindi} का प्रश्न है।`, answer: 'उत्तर यहाँ दिखेगा', type: 'reveal' },
    { id: 2, question: `${cat.title} से संबंधित प्रश्न 2 - यह ${cat.titleHindi} का प्रश्न है।`, answer: 'उत्तर यहाँ दिखेगा', type: 'reveal' },
    { id: 3, question: `${cat.title} से संबंधित प्रश्न 3 - यह ${cat.titleHindi} का प्रश्न है।`, answer: 'उत्तर यहाँ दिखेगा', type: 'reveal' },
  ];
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return notFound();

  const data = getCategoryData(category);
  const questions = data?.questions || getFallbackQuestions(cat);
  const mcqQuestions = questions.filter(q => q.type === 'mcq');
  const oneliners = questions.filter(q => q.type === 'oneliner');
  const revealQ = questions.filter(q => q.type === 'reveal');

  // Related categories (same group)
  const related = categories.filter(c => c.group === cat.group && c.slug !== category).slice(0, 8);

  // JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://gkhindi.moneycal.in' },
      { '@type': 'ListItem', position: 2, name: cat.title, item: `https://gkhindi.moneycal.in/${category}` },
    ],
  };

  const faqJsonLd = mcqQuestions.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mcqQuestions.slice(0, 5).map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.options ? q.options[q.answer] : q.answer || '',
      },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span className="sep">›</span>
          <span className="current">{cat.title}</span>
        </nav>

        <div className="main-layout">
          {/* MAIN */}
          <article>
            {/* Page Header */}
            <div style={{ marginBottom: '24px' }}>
              <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 900, marginBottom: '8px' }}>
                {cat.icon} {cat.title} In Hindi – {cat.titleHindi}
              </h1>
              <p className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
                {data?.description || cat.description} - सभी प्रतियोगी परीक्षाओं जैसे SSC, IBPS, UPSC, RBI, TET इत्यादि के लिए
                {cat.title} से संबंधित महत्वपूर्ण सामान्य ज्ञान के सवाल।
              </p>
              {/* Quick links */}
              <div className="tag-list" style={{ marginTop: '12px' }}>
                <a href="/quiz" className="tag">🎯 Quiz Mode</a>
                <a href="/current-affairs" className="tag">📰 Current Affairs</a>
                <a href="/one-line-gk" className="tag">⚡ One Line GK</a>
              </div>
            </div>

            {/* ATF Ad */}
            <div className="ad-container" style={{ margin: '20px 0' }}>
              <span className="ad-label" style={{ display: 'block', fontSize: '11px', color: '#888', textAlign: 'center', marginBottom: '4px' }}>Advertisement</span>
              <ins className="adsbygoogle" style={{ display: 'block' }}
                data-ad-client={ADSENSE_CLIENT} data-ad-slot={ADSENSE_SLOT_ATF}
                data-ad-format="auto" data-full-width-responsive="true" />
              <AdScript />
            </div>

            {/* Share Buttons */}
            <ShareButtons 
              title={cat.title} 
              text={cat.description} 
              url={`https://gkhindi.moneycal.in/${category}`} 
            />

            {/* Table of Contents */}
            <TableOfContents sections={[
              ...(mcqQuestions.length > 0 ? [{ id: 'mcq', title: 'बहुविकल्पीय प्रश्न (MCQ)' }] : []),
              ...(oneliners.length > 0 ? [{ id: 'oneliners', title: 'वन-लाइनर प्रश्न (One Liners)' }] : [])
            ]} />

            {/* MCQ Questions */}
            {mcqQuestions.length > 0 && (
              <section aria-labelledby="mcq-heading">
                <h2 id="mcq-heading" className="section-title">
                  📝 {cat.title} MCQ Questions | बहुविकल्पीय प्रश्न
                </h2>
                <PaginatedList items={mcqQuestions} type="mcq" itemsPerPage={20} />
              </section>
            )}

            {/* BTF Ad */}
            <div className="ad-container">
              <span className="ad-label">Advertisement</span>
              <ins className="adsbygoogle" style={{ display: 'block' }}
                data-ad-client={ADSENSE_CLIENT} data-ad-slot={ADSENSE_SLOT_BTF}
                data-ad-format="auto" data-full-width-responsive="true" />
              <AdScript />
            </div>

            {/* One-liner Questions */}
            {oneliners.length > 0 && (
              <section style={{ marginTop: '32px' }} aria-labelledby="oneliner-heading">
                <h2 id="oneliner-heading" className="section-title">
                  ⚡ {cat.title} One Liners | एक लाइन प्रश्न
                </h2>
                <PaginatedList items={oneliners} type="oneliner" itemsPerPage={50} />
              </section>
            )}

            {/* Reveal Questions */}
            {revealQ.length > 0 && (
              <section style={{ marginTop: '32px' }} aria-labelledby="reveal-heading">
                <h2 id="reveal-heading" className="section-title">
                  📖 {cat.title} Questions with Answers
                </h2>
                <div className="question-wrapper">
                  {revealQ.map((q, i) => (
                    <div key={q.id} className="question-card">
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <span className="question-num">{i + 1}</span>
                        <div style={{ flex: 1 }}>
                          <p className="question-text">{q.question || q.q}</p>
                          <div className="answer-box" id={`rv-${q.id}`}>
                            <span className="answer-label">Answer:</span>
                            {q.answer || q.a}
                          </div>
                          <button type="button" className="show-answer-btn" aria-controls={`rv-${q.id}`}>
                            Show Answer ▼
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Current Affairs special layout */}
            {category === 'current-affairs' && data?.months && (
              <section style={{ marginTop: '32px' }}>
                <h2 className="section-title">📅 Monthly Current Affairs | मासिक करेंट अफेयर्स</h2>
                {data.months.map(month => (
                  <div key={month.slug} className="month-card">
                    <h3>📌 {month.month} Current Affairs</h3>
                    <p>हिंदी करेंट अफेयर्स प्रश्नोत्तरी {month.month} - {month.questions.length} प्रश्न</p>
                    <div style={{ marginTop: '12px' }}>
                      {month.questions.slice(0, 3).map((q, i) => (
                        <p key={i} className="font-hindi" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                          {i + 1}. {q.q} <strong style={{ color: 'var(--success)' }}>→ {q.a}</strong>
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </section>
            )}

            {/* Related categories */}
            {related.length > 0 && (
              <section style={{ marginTop: '40px' }}>
                <h2 className="section-title">🔗 Related GK Categories</h2>
                <div className="categories-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
                  {related.map(relCat => (
                    <a key={relCat.slug} href={`/${relCat.slug}`} className="category-card">
                      <span className="category-icon">{relCat.icon}</span>
                      <span className="category-title">{relCat.title}</span>
                      <span className="category-title-hindi">{relCat.titleHindi}</span>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* Quiz CTA */}
            <div style={{
              marginTop: '40px', background: 'var(--grad-card)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center'
            }}>
              <h3 style={{ marginBottom: '12px' }}>🎯 {cat.title} Quiz लेना चाहते हैं?</h3>
              <p className="font-hindi" style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                टाइमर के साथ इंटरैक्टिव क्विज लें और अपना स्कोर जानें
              </p>
              <a href={`/quiz/${category}`} style={{
                display: 'inline-flex', gap: '8px', alignItems: 'center',
                background: 'var(--grad-primary)', color: 'white',
                padding: '12px 32px', borderRadius: '50px', fontWeight: '700',
                textDecoration: 'none', fontSize: '1rem'
              }}>
                🚀 Start {cat.title} Quiz
              </a>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="sidebar">
            <div className="sidebar-box">
              <div className="sidebar-head">📚 All GK Categories</div>
              <nav className="sidebar-links">
                {categories.map(c => (
                  <a key={c.slug} href={`/${c.slug}`} className={`sidebar-link ${c.slug === category ? 'active' : ''}`}>
                    <span className="link-icon">{c.icon}</span>
                    {c.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* Show-answer script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('click', function(e) {
            const btn = e.target.closest('.show-answer-btn');
            if (!btn) return;
            const card = btn.closest('.question-card');
            if (!card) return;
            const box = card.querySelector('.answer-box');
            if (!box) return;
            box.classList.toggle('show');
            btn.textContent = box.classList.contains('show') ? 'Hide Answer ▲' : 'Show Answer ▼';
          });
          // MCQ option click
          document.addEventListener('click', function(e) {
            const opt = e.target.closest('.option-item');
            if (!opt) return;
            const card = opt.closest('.question-card');
            if (!card) return;
            const opts = card.querySelectorAll('.option-item');
            const correctIdx = parseInt(card.dataset.correct, 10);
            opts.forEach((o, i) => {
              o.classList.remove('correct', 'wrong');
              if (i === correctIdx) o.classList.add('correct');
              else o.classList.add('wrong');
            });
          });
        `,
      }} />
    </>
  );
}

function MCQCard({ q, index }) {
  const labels = ['A', 'B', 'C', 'D'];
  return (
    <div className="question-card" data-correct={q.answer}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <span className="question-num">{index + 1}</span>
        <div style={{ flex: 1 }}>
          <p className="question-text">{q.question || q.q}</p>
          <ul className="options-list">
            {q.options.map((opt, i) => (
              <li key={i} className="option-item" role="button" tabIndex={0}>
                <span className="option-label">({labels[i]})</span>
                <span className="font-hindi">{opt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AdScript() {
  return (
    <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }} />
  );
}
