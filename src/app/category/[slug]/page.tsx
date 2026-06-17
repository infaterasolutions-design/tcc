'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../../../components/PostCard';
import ElsewhereSection from '../../../components/ElsewhereSection';

const categoryConfig: Record<string, {
  label: string;
  description: string;
  postCount: number;
  subtags: string[];
  accentColor: string;
}> = {
  'fashion': {
    label: 'Fashion',
    description: 'Outfit ideas, style guides, seasonal trends, and the best fashion finds across every budget.',
    postCount: 142,
    subtags: ['ALL', 'sneakers', 'black leather jacket', 'dresses', 'jeans'],
    accentColor: '#e5dfd5',
  },
  'plus-size': {
    label: 'Plus Size',
    description: 'Fashion-forward picks, outfit inspiration, and style guides for every body and every occasion.',
    postCount: 87,
    subtags: ['ALL', 'dresses', 'jeans', 'workwear', 'swimwear'],
    accentColor: '#ede7dc',
  },
  'nails': {
    label: 'Nails',
    description: 'Nail art inspo, the best nail polishes, salon reviews, and at-home manicure tips.',
    postCount: 54,
    subtags: ['ALL', 'nail art', 'gel nails', 'nail polish', 'trends'],
    accentColor: '#f0e8e8',
  },
  'hairstyle': {
    label: 'Hairstyle',
    description: 'Hair inspiration, tutorials, product reviews, and the best hairstyles for every hair type.',
    postCount: 63,
    subtags: ['ALL', 'tutorials', 'products', 'cut & color', 'updos'],
    accentColor: '#e8e4da',
  },
  'blogs': {
    label: 'Blogs',
    description: 'Personal stories, life updates, travel diaries, and everything happening behind the scenes.',
    postCount: 38,
    subtags: ['ALL', 'personal', 'travel', 'lifestyle', 'beauty'],
    accentColor: '#e5dfd5',
  },
};

const mockPostsData: Record<string, any[]> = {
  fashion: [
    { title: "The Best Summer Sandals of 2026: Designer, Mid-Range, and Budget", category: "sneakers", date: "06.01.26", readTime: "10 min", slug: "summer-sandals-2026", imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" },
    { title: "What to Wear in Paris Summer 2025: Effortless French Girl Style", category: "dresses", date: "08.12.25", readTime: "6 min", slug: "paris-summer-style", imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600" },
    { title: "These are My Most-Used Handbags in My Closet", category: "black leather jacket", date: "MAY 2, 2026", readTime: "7 min", slug: "most-used-handbags", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" },
    { title: "Suede Trench Coat Outfit: A Classic Layer for Effortless Style", category: "dresses", date: "03.16.26", readTime: "5 min", slug: "suede-trench-coat", imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400" },
    { title: "How to Style a Cropped Trench Coat for a Polished Look", category: "black leather jacket", date: "02.23.26", readTime: "9 min", slug: "cropped-trench-coat", imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=400" },
    { title: "Winter Trench Coat Outfit: A Polished, Everyday Look", category: "dresses", date: "02.09.26", readTime: "6 min", slug: "winter-trench-outfit", imageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=400" },
    { title: "How to Style a Winter Coat With Sneakers | Polished Style", category: "sneakers", date: "02.03.26", readTime: "5 min", slug: "winter-coat-sneakers", imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=400" },
    { title: "How to Style White Jeans for a Polished Everyday Look", category: "jeans", date: "01.21.26", readTime: "8 min", slug: "white-jeans-style", imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400" },
    { title: "Classic + Elevated: A High-Low Winter Outfit You’ll Love", category: "dresses", date: "01.19.26", readTime: "7 min", slug: "high-low-winter", imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400" },
    { title: "Copy This Neutral Winter Outfit to Stay Warm and Chic", category: "dresses", date: "01.16.26", readTime: "7 min", slug: "neutral-winter-outfit", imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" },
    { title: "Your Ultimate Fall Capsule Wardrobe 2025: What to Buy", category: "dresses", date: "10.13.25", readTime: "7 min", slug: "fall-capsule-wardrobe", imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=400" },
    { title: "What to Buy During the Shopbop Style Event", category: "dresses", date: "09.29.25", readTime: "7 min", slug: "shopbop-event", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400" },
    { title: "What to Wear to a Fall Wedding: Chic Wedding Guest", category: "dresses", date: "08.21.25", readTime: "7 min", slug: "fall-wedding-guest", imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=400" },
  ],
  // Fallback data for other categories using same structure
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const [activeTab, setActiveTab] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(8);

  const config = categoryConfig[slug] ?? categoryConfig['fashion'];
  // Fallback to fashion data if slug not explicitly mocked, to avoid empty arrays
  const allPosts = mockPostsData[slug] ?? mockPostsData['fashion'];
  
  const filteredPosts = activeTab === 'ALL' 
    ? allPosts 
    : allPosts.filter((p: any) => p.category.toLowerCase() === activeTab.toLowerCase());
    
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
              <Link href={`/post/${post.slug}`} key={`top-${i}`} style={{ textDecoration: 'none' }}>
                <div className="top-card group">
                  <div className="top-card-image" style={{ overflow: 'hidden' }}>
                    <Image 
                      src={post.imageUrl} 
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
            {config.subtags.map(tab => (
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
              <Link href={`/post/${post.slug}`} key={`bottom-${i}`} style={{ textDecoration: 'none' }}>
                <div className="bottom-card group">
                  <div className="bottom-card-image" style={{ overflow: 'hidden' }}>
                    <Image 
                      src={post.imageUrl} 
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
