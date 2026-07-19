'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/current-affairs', label: 'Current Affairs' },
    { href: '/india-gk', label: 'India GK' },
    { href: '/science-gk', label: 'Science GK' },
    { href: '/quiz', label: '🎯 Quiz' },
    { href: '/about', label: 'About' },
  ];

  const categories = [
    { href: '/india-gk', label: '🇮🇳 India GK' },
    { href: '/current-affairs', label: '📰 Current Affairs' },
    { href: '/science-gk', label: '🔬 Science GK' },
    { href: '/history-gk', label: '🏛️ History GK' },
    { href: '/geography-gk', label: '🗺️ Geography GK' },
    { href: '/sports-gk', label: '🏆 Sports GK' },
    { href: '/computer-gk', label: '💻 Computer GK' },
    { href: '/ssc-gk', label: '📝 SSC GK' },
    { href: '/bank-gk', label: '🏦 Banking GK' },
    { href: '/upsc-gk', label: '🎓 UPSC GK' },
    { href: '/quiz', label: '🎯 Online Quiz' },
  ];

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    document.body.style.overflow = newIsOpen ? 'hidden' : '';
  };

  // Close menu on route change or when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <header>
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        <div className="container">
          <div className="navbar-inner">
            {/* Logo */}
            <a href="/" className="navbar-logo" aria-label="GK Hindi Pro Home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="logo-icon" style={{ 
                  background: 'var(--primary)', 
                  color: 'white', 
                  borderRadius: '8px', 
                  width: '32px', 
                  height: '32px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.2rem',
                  boxShadow: '0 2px 8px rgba(255, 107, 53, 0.4)'
                }}>
                  📚
                </div>
                <span style={{ fontWeight: '900', fontSize: '1.4rem', color: 'var(--primary)', letterSpacing: '-0.5px' }}>GK Hindi Pro</span>
              </div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginLeft: '40px', marginTop: '-2px', fontWeight: '500', letterSpacing: '0.5px' }}>by moneycal</span>
            </a>

            {/* Search */}
            <form className="navbar-search" action="/search" method="GET" role="search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="search"
                name="q"
                placeholder="GK खोजें... (Search GK)"
                aria-label="Search GK questions"
                autoComplete="off"
              />
            </form>

            {/* Nav */}
            <ul className="navbar-nav" role="list">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>

            <ThemeToggle />

            {/* Mobile toggle */}
            <button
              onClick={toggleMenu}
              className="menu-toggle"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu ${isOpen ? 'open' : ''}`} role="dialog" aria-label="Navigation menu">
        <nav>
          <div style={{ padding: '16px 0', borderBottom: '1px solid var(--border)', marginBottom: '16px' }}>
            <form action="/search" method="GET" style={{ marginBottom: '20px', display: 'flex', gap: '8px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '50px', padding: '10px 16px', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-dim)' }}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="search" name="q" placeholder="GK खोजें... (Search GK)" style={{ background: 'none', border: 'none', outline: 'none', color: 'var(--text)', width: '100%', fontSize: '1rem', fontFamily: 'var(--font-hindi)' }} />
            </form>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{ display: 'block', padding: '12px 8px', color: 'var(--text)', fontSize: '1rem', fontWeight: '600' }}>
                {link.label}
              </a>
            ))}
          </div>
          <h4 style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '600', letterSpacing: '1px', marginBottom: '12px' }}>
            ALL CATEGORIES
          </h4>
          {categories.map(cat => (
            <a key={cat.href} href={cat.href} style={{ display: 'block', padding: '10px 8px', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {cat.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
