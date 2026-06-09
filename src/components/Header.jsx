'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-shop-btn { display: none !important; }
          .desktop-socials { display: none !important; }
          .mobile-search-icon { display: block !important; }
          .hamburger-icon { display: block !important; }
        }
        @media (min-width: 901px) {
          .hamburger-icon { display: none !important; }
        }
      `}</style>
      <header className="container flex justify-between items-center header-main" style={{ padding: '1.5rem var(--spacing-sm)', borderBottom: '1px solid var(--color-border)', marginBottom: '0', position: 'relative', zIndex: 100, backgroundColor: 'var(--color-bg)' }}>
        <div className="flex items-center gap-sm">
          <span onClick={() => setIsOpen(!isOpen)} className="hamburger-icon" style={{ fontSize: '1.8rem', cursor: 'pointer', userSelect: 'none', width: '30px', textAlign: 'center' }}>
            {isOpen ? '✕' : '≡'}
          </span>
          <Link href="/" className="flex items-center header-logo-link" style={{ gap: '0.5rem', textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
             <span className="text-script header-logo-tcc" style={{ fontSize: '2.5rem', color: '#b0afa9', lineHeight: '1' }}>tcc</span>
             <span className="text-serif header-logo-text" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px', color: '#000' }}>the combo closet</span>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav flex gap-md text-sans uppercase" style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.05em', color: '#000' }}>
          <Link href="/category/fashion">fashion</Link>
          <Link href="/category/plus-size">plus size</Link>
          <Link href="/category/nails">nails</Link>
          <Link href="/category/hairstyle">hairstyle</Link>
          <Link href="/category/blogs">blogs</Link>
        </nav>
        
        <div className="flex items-center gap-sm">
          <button className="desktop-shop-btn uppercase text-sans" style={{ backgroundColor: '#e8e0d5', border: 'none', padding: '0.5rem 1.2rem', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }}>Shop</button>
          <div className="desktop-socials flex" style={{ gap: '0.8rem', fontSize: '0.9rem', color: '#000', cursor: 'pointer' }}>
            <span>IG</span>
            <span>PI</span>
            <span>TW</span>
            <span>EM</span>
            <span>🔍</span>
          </div>
          {/* Mobile search icon */}
          <div className="mobile-search-icon" style={{ display: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>
            🔍
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="mobile-drawer-overlay" 
          onClick={() => setIsOpen(false)} 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 98 }}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`} style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '300px', 
        maxWidth: '85vw', 
        height: '100%', 
        backgroundColor: 'var(--color-bg)', 
        zIndex: 101, 
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', 
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex', 
        flexDirection: 'column', 
        boxShadow: isOpen ? '2px 0 10px rgba(0,0,0,0.1)' : 'none'
      }}>
        <div style={{ padding: '1.5rem var(--spacing-sm)', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center' }}>
          <span onClick={() => setIsOpen(false)} style={{ fontSize: '1.8rem', cursor: 'pointer', userSelect: 'none', width: '30px', textAlign: 'center' }}>
            ✕
          </span>
        </div>
        
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', overflowY: 'auto' }}>
          <nav className="flex text-sans uppercase" style={{ flexDirection: 'column', gap: '1.5rem', fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.05em', color: '#000' }}>
            <Link href="/category/fashion" onClick={() => setIsOpen(false)}>fashion</Link>
            <Link href="/category/plus-size" onClick={() => setIsOpen(false)}>plus size</Link>
            <Link href="/category/nails" onClick={() => setIsOpen(false)}>nails</Link>
            <Link href="/category/hairstyle" onClick={() => setIsOpen(false)}>hairstyle</Link>
            <Link href="/category/blogs" onClick={() => setIsOpen(false)}>blogs</Link>
          </nav>
          
          <div style={{ height: '1px', backgroundColor: 'var(--color-border)', width: '100%' }}></div>
          
          <div className="flex" style={{ flexDirection: 'column', gap: '1.5rem' }}>
            <button className="uppercase text-sans w-full" style={{ backgroundColor: '#e8e0d5', border: 'none', padding: '1rem', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }}>Shop Now</button>
            
            <div className="flex justify-center" style={{ gap: '1.5rem', fontSize: '1.2rem', color: '#000', cursor: 'pointer', marginTop: '1rem' }}>
              <span>IG</span>
              <span>PI</span>
              <span>TW</span>
              <span>EM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
