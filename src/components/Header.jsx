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
          <Link href="/category/wardrobe">wardrobe</Link>
          <Link href="/category/nails">nails</Link>
          <Link href="/category/hairstyle">hairstyle</Link>
          <Link href="/category/blogs">blogs</Link>
        </nav>
        
        <div className="flex items-center gap-sm">
          <button className="desktop-shop-btn uppercase text-sans" style={{ backgroundColor: '#e8e0d5', border: 'none', padding: '0.5rem 1.2rem', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }}>Shop</button>
          <div className="desktop-socials flex" style={{ position: 'relative', width: '152.48px', height: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#000', cursor: 'pointer' }}>
            {/* Instagram */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            {/* Pinterest */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="10" x2="12" y2="22"></line>
              <path d="M12 10a4 4 0 0 0-4 4c0 1.5.8 2.5 1 3l1-4a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-8 0"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            {/* Twitter (X) */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 12c.5.1 1.1.2 1.6.1C2 10 2 6 2 6c.6.3 1.2.5 1.9.5C2 5 3 2 4 1c2.6 3.1 6.5 5.1 10.7 5.3.1-2.4 1.9-4.3 4.3-4.3 1.2 0 2.3.5 3.1 1.3 1 .2 1.9-.2 2.9-.8-.3 1-1 1.8-1.9 2.5z"></path>
            </svg>
            {/* Email */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {/* Search */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
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
            <Link href="/category/wardrobe" onClick={() => setIsOpen(false)}>wardrobe</Link>
            <Link href="/category/nails" onClick={() => setIsOpen(false)}>nails</Link>
            <Link href="/category/hairstyle" onClick={() => setIsOpen(false)}>hairstyle</Link>
            <Link href="/category/blogs" onClick={() => setIsOpen(false)}>blogs</Link>
          </nav>
          
          <div style={{ height: '1px', backgroundColor: 'var(--color-border)', width: '100%' }}></div>
          
          <div className="flex" style={{ flexDirection: 'column', gap: '1.5rem' }}>
            <button className="uppercase text-sans w-full" style={{ backgroundColor: '#e8e0d5', border: 'none', padding: '1rem', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }}>Shop Now</button>
            
            <div className="flex justify-center" style={{ gap: '1.5rem', color: '#000', cursor: 'pointer', marginTop: '1rem' }}>
              {/* Instagram */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              {/* Pinterest */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="10" x2="12" y2="22"></line>
                <path d="M12 10a4 4 0 0 0-4 4c0 1.5.8 2.5 1 3l1-4a4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-8 0"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
              {/* Twitter (X) */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 12c.5.1 1.1.2 1.6.1C2 10 2 6 2 6c.6.3 1.2.5 1.9.5C2 5 3 2 4 1c2.6 3.1 6.5 5.1 10.7 5.3.1-2.4 1.9-4.3 4.3-4.3 1.2 0 2.3.5 3.1 1.3 1 .2 1.9-.2 2.9-.8-.3 1-1 1.8-1.9 2.5z"></path>
              </svg>
              {/* Email */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
