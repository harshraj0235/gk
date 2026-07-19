import { gkTricksData } from '../../data/new-pages-data';

export const metadata = {
  title: 'GK Tricks In Hindi 2026 - सामान्य ज्ञान याद करने की ट्रिक्स | GK Shortcut',
  description: 'GK Tricks in Hindi (सामान्य ज्ञान ट्रिक्स) - GK याद करने की आसान ट्रिक्स और शॉर्टकट्स। विटामिन, नदियाँ, ग्रह, संविधान, इतिहास सब ट्रिक से याद करें। SSC, UPSC, Banking परीक्षाओं के लिए।',
  keywords: 'gk tricks in hindi, gk याद करने की ट्रिक, gk shortcut, samanya gyan trick, gk trick 2026, gk tricks for ssc, gk tricks for upsc',
  alternates: { canonical: 'https://gkhindi.moneycal.in/gk-tricks' },
  openGraph: { title: 'GK Tricks In Hindi - सामान्य ज्ञान ट्रिक्स', description: 'GK याद करने की आसान ट्रिक्स', url: 'https://gkhindi.moneycal.in/gk-tricks' },
};

export default function GKTricksPage() {
  return (
    <>
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a><span className="sep">›</span><span className="current">GK Tricks</span>
        </nav>
        <div className="main-layout">
          <article>
            <h1 style={{ fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '8px' }}>
              🧠 GK Tricks In Hindi - सामान्य ज्ञान याद करने की ट्रिक्स
            </h1>
            <p className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
              सामान्य ज्ञान याद करना मुश्किल लगता है? चिंता न करें! यहाँ आपको <strong>GK याद करने की आसान ट्रिक्स, शॉर्टकट्स और मेमोनिक्स</strong> मिलेंगे 
              जो आपकी तैयारी को 10 गुना आसान बना देंगे। इन ट्रिक्स से आप विटामिन, नदियाँ, ग्रह, संविधान, इतिहास सब चुटकियों में याद कर सकते हैं।
            </p>
            <div className="tag-list" style={{ marginBottom: '24px' }}>
              <a href="/top-100-gk" className="tag">🏆 Top 100 GK</a>
              <a href="/gk-notes" className="tag">📓 GK Notes</a>
              <a href="/first-in-india" className="tag">🥇 First in India</a>
            </div>

            <section>
              <h2 className="section-title">🎯 Best GK Tricks & Shortcuts</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {gkTricksData.tricks.map((trick, i) => (
                  <div key={trick.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '24px', transition: 'var(--transition)' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ background: 'var(--grad-primary)', color: 'white', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '0.9rem', flexShrink: 0 }}>{i + 1}</span>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text)' }}>{trick.title}</h3>
                        {trick.category && (
                          <span style={{ display: 'inline-block', background: 'rgba(255,107,53,0.1)', color: 'var(--primary)', padding: '2px 10px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: '600', marginBottom: '10px' }}>{trick.category}</span>
                        )}
                        <div style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.2)', borderRadius: '8px', padding: '12px 16px', marginBottom: '10px' }}>
                          <p className="font-hindi" style={{ fontWeight: 600, color: 'var(--accent)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                            ✨ Trick: {trick.trick}
                          </p>
                        </div>
                        {trick.explanation && (
                          <p className="font-hindi" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                            💡 {trick.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginTop: '40px' }}>
              <h2 className="section-title">📝 GK Tricks क्यों ज़रूरी हैं?</h2>
              <div className="font-hindi" style={{ color: 'var(--text-muted)', lineHeight: '1.9', fontSize: '0.95rem' }}>
                <p style={{ marginBottom: '12px' }}>प्रतियोगी परीक्षाओं में <strong>सामान्य ज्ञान (GK)</strong> से बहुत सारे प्रश्न आते हैं और इन्हें रटना मुश्किल होता है। GK Tricks और Mnemonics का उपयोग करके आप:</p>
                <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
                  <li>जटिल जानकारी को आसानी से याद कर सकते हैं</li>
                  <li>परीक्षा के दौरान तेज़ी से उत्तर recall कर सकते हैं</li>
                  <li>लंबी सूचियों (नदियाँ, पर्वत, राज्य) को मिनटों में याद कर सकते हैं</li>
                  <li>अपनी तैयारी का समय बचा सकते हैं</li>
                </ul>
                <p>इस पेज को बुकमार्क करें और नियमित रूप से इन ट्रिक्स का अभ्यास करें!</p>
              </div>
            </section>
          </article>
          <aside className="sidebar">
            <div className="sidebar-box">
              <div className="sidebar-head">🔗 Related Pages</div>
              <nav className="sidebar-links">
                {[{href:'/top-100-gk',icon:'🏆',title:'Top 100 GK'},{href:'/daily-gk',icon:'📅',title:'Daily GK'},{href:'/gk-notes',icon:'📓',title:'GK Notes'},{href:'/first-in-india',icon:'🥇',title:'First in India'},{href:'/lucent-gk',icon:'📘',title:'Lucent GK'},{href:'/important-days',icon:'📅',title:'Important Days'},{href:'/constitution-gk',icon:'⚖️',title:'Constitution GK'},{href:'/india-gk',icon:'🇮🇳',title:'India GK'},{href:'/science-gk',icon:'🔬',title:'Science GK'}].map(l=>(
                  <a key={l.href} href={l.href} className="sidebar-link"><span className="link-icon">{l.icon}</span>{l.title}</a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
