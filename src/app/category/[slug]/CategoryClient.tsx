'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ElsewhereSection from '../../../components/ElsewhereSection';

export default function CategoryClient({ config, allPosts, slug }: { config: any, allPosts: any[], slug: string }) {
  const [activeTab, setActiveTab] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredPosts = activeTab === 'ALL' 
    ? allPosts 
    : allPosts.filter((p: any) => (p.category || p.categories?.label || '').toLowerCase() === activeTab.toLowerCase());
    
  const topPosts = filteredPosts.slice(0, 3);
  const bottomPosts = filteredPosts.slice(3, 3 + visibleCount);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <style>{`
        /* Container padding */
        .page-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 30px 20px 0;
        }

        /* Top 3 Grid */
        .top-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px 30px;
          margin-bottom: 50px;
        }

        .top-card {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .top-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 385 / 516;
        }

        .top-card-overlay {
          position: relative;
          background: #FFFFFF;
          margin: -30px auto 0;
          padding: 15px 20px;
          z-index: 10;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          width: calc(100% - 60px);
        }

        /* Middle Section: Title & Tags */
        .middle-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 40px 0 60px;
          width: 100%;
        }

        .script-title {
          font-family: 'Georgia', serif;
          font-style: italic;
          font-size: clamp(4rem, 10vw, 144px);
          line-height: 1;
          color: #000;
          text-align: center;
          margin: 0 0 20px 0;
        }

        .filter-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
          width: 100%;
        }

        .filter-tag {
          font-family: 'canada-type-gibson', sans-serif;
          font-size: 10px;
          line-height: 10px;
          letter-spacing: 1.67px;
          text-transform: uppercase;
          color: #000;
          cursor: pointer;
          background: transparent;
          border: none;
          padding-bottom: 4px;
        }

        .filter-tag.active {
          border-bottom: 2px solid #000;
          font-weight: bold;
        }

        /* Bottom 4-Column Grid */
        .bottom-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px 20px;
          margin-bottom: 60px;
          width: 100%;
        }

        .bottom-card {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .bottom-card-image {
          position: relative;
          width: 100%;
          aspect-ratio: 290 / 389;
          margin-bottom: 15px;
        }

        /* Load More */
        .load-more-btn {
          font-family: 'canada-type-gibson', sans-serif;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #605C5C;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          margin: 0 auto 80px;
          background: transparent;
          border: none;
        }

        .load-more-line {
          width: 75px;
          height: 1px;
          background-color: #605C5C;
          position: relative;
        }
        .load-more-line::after {
          content: '';
          position: absolute;
          right: 0;
          top: -3px;
          width: 6px;
          height: 6px;
          border-top: 1px solid #605C5C;
          border-right: 1px solid #605C5C;
          transform: rotate(45deg);
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .top-grid { grid-template-columns: repeat(2, 1fr); }
          .bottom-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .top-grid { grid-template-columns: 1fr; }
          .top-card-overlay { margin: -20px auto 0; width: calc(100% - 30px); padding: 15px; }
          .bottom-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 500px) {
          .bottom-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page-container">
        
        {/* TOP SECTION: 3 FEATURED POSTS */}
        {topPosts.length > 0 && (
          <div className="top-grid">
            {topPosts.map((post: any, i: number) => (
              <Link href={slug === 'wardrobe' ? `/post/${post.slug}` : `/post/wardrobe/${post.slug}`} key={`top-${i}`} style={{ textDecoration: 'none' }}>
                <div className="top-card group">
                  <div className="top-card-image" style={{ overflow: 'hidden' }}>
                    <Image 
                      src={post.hero_image || post.imageUrl} 
                      alt={post.title} 
                      fill 
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="group-hover:scale-105"
                    />
                  </div>
                  <div className="top-card-overlay">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 900, fontFamily: 'sans-serif' }}>→</span>
                      <span style={{ fontFamily: 'canada-type-gibson', fontSize: '9px', letterSpacing: '1.51px', color: '#000', textTransform: 'uppercase' }}>
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-serif" style={{ fontSize: '20px', lineHeight: '25px', letterSpacing: '0.17px', color: '#000', margin: 0 }}>
                      {post.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* MIDDLE SECTION: TITLE & TABS */}
        <div className="middle-section">
          <h1 className="script-title">
            {config.label.toLowerCase()}
          </h1>
          <div className="filter-tags">
            {config.subtags.map((tab: string) => (
              <button 
                key={tab}
                className={`filter-tag ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION: 4 COLUMN GRID */}
        {bottomPosts.length > 0 ? (
          <div className="bottom-grid">
            {bottomPosts.map((post: any, i: number) => (
              <Link href={slug === 'wardrobe' ? `/post/${post.slug}` : `/post/wardrobe/${post.slug}`} key={`bottom-${i}`} style={{ textDecoration: 'none' }}>
                <div className="bottom-card group">
                  <div className="bottom-card-image" style={{ overflow: 'hidden' }}>
                    <Image 
                      src={post.hero_image || post.imageUrl} 
                      alt={post.title} 
                      fill 
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                      className="group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span style={{ fontFamily: 'canada-type-gibson', fontSize: '9px', letterSpacing: '1.51px', color: '#605C5C', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      {post.date}
                    </span>
                    <h2 className="text-serif" style={{ fontSize: '20px', lineHeight: '25px', letterSpacing: '0.17px', color: '#000', margin: 0 }}>
                      {post.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 0 80px', color: '#888' }}>
            No additional posts found.
          </div>
        )}

        {/* LOAD MORE BUTTON */}
        {bottomPosts.length + topPosts.length < filteredPosts.length && (
          <button className="load-more-btn" onClick={() => setVisibleCount(prev => prev + 8)}>
            LOAD MORE
            <div className="load-more-line"></div>
          </button>
        )}

        {/* Elsewhere Section */}
        <ElsewhereSection />

      </div>
    </div>
  );
}
