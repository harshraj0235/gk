'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    // Reading progress and back-to-top logic
    const handleScroll = () => {
      // Reading progress bar
      const progressEl = document.getElementById('reading-progress');
      if (progressEl) {
        const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressEl.style.width = Math.min(scrolled, 100) + '%';
      }
      
      // Back to top button visibility
      const btt = document.getElementById('back-to-top');
      if (btt) {
        btt.classList.toggle('visible', window.scrollY > 400);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Setup Back to top click
    const btt = document.getElementById('back-to-top');
    const handleBttClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (btt) {
      btt.addEventListener('click', handleBttClick);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (btt) {
        btt.removeEventListener('click', handleBttClick);
      }
    };
  }, []);

  return null;
}
