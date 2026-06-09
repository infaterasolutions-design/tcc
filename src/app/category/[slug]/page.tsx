'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../../../components/PostCard';

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
    subtags: ['ALL', 'OUTFITS', 'STYLE TIPS', 'SEASONAL', 'TRENDING', 'SALE PICKS'],
    accentColor: '#e5dfd5',
  },
  'plus-size': {
    label: 'Plus Size',
    description: 'Fashion-forward picks, outfit inspiration, and style guides for every body and every occasion.',
    postCount: 87,
    subtags: ['ALL', 'OUTFITS', 'JEANS', 'DRESSES', 'WORKWEAR', 'SWIMWEAR'],
    accentColor: '#ede7dc',
  },
  'nails': {
    label: 'Nails',
    description: 'Nail art inspo, the best nail polishes, salon reviews, and at-home manicure tips.',
    postCount: 54,
    subtags: ['ALL', 'NAIL ART', 'GEL NAILS', 'NAIL POLISH', 'TRENDS', 'DIY'],
    accentColor: '#f0e8e8',
  },
  'hairstyle': {
    label: 'Hairstyle',
    description: 'Hair inspiration, tutorials, product reviews, and the best hairstyles for every hair type.',
    postCount: 63,
    subtags: ['ALL', 'TUTORIALS', 'PRODUCTS', 'CUT & COLOR', 'NATURAL HAIR', 'UPDOS'],
    accentColor: '#e8e4da',
  },
  'blogs': {
    label: 'Blogs',
    description: 'Personal stories, life updates, travel diaries, and everything happening behind the scenes.',
    postCount: 38,
    subtags: ['ALL', 'PERSONAL', 'TRAVEL', 'LIFESTYLE', 'BEAUTY', 'REVIEWS'],
    accentColor: '#e5dfd5',
  },
};

const mockPostsData: Record<string, any[]> = {
  fashion: [
    { title: "30 Best Summer Outfits for 2026", category: "OUTFITS", date: "JUN 9, 2026", readTime: "10 min", slug: "summer-outfits-2026", imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" },
    { title: "What I Wore: A Week of Easy Outfits", category: "FASHION", date: "JUN 5, 2026", readTime: "6 min", slug: "week-of-outfits", imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=400" },
    { title: "How to Style Wide-Leg Trousers 5 Ways", category: "STYLE TIPS", date: "JUN 2, 2026", readTime: "7 min", slug: "wide-leg-trousers", imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400" },
    { title: "The Perfect Casual Friday Formula", category: "FASHION", date: "MAY 30, 2026", readTime: "5 min", slug: "casual-friday", imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400" },
    { title: "Fall Capsule Wardrobe: 10 Essential Pieces", category: "SEASONAL", date: "MAY 24, 2026", readTime: "9 min", slug: "fall-capsule", imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=400" },
    { title: "Maxi Dress Styling: 8 Ways to Wear It", category: "OUTFITS", date: "MAY 15, 2026", readTime: "6 min", slug: "maxi-dress", imageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=400" },
    { title: "The Linen Set Trend: How to Wear It Now", category: "TRENDING", date: "MAY 10, 2026", readTime: "5 min", slug: "linen-set-trend", imageUrl: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=400" },
    { title: "Best Denim Picks for Every Body Type", category: "FASHION", date: "MAY 5, 2026", readTime: "8 min", slug: "best-denim", imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400" },
    { title: "10 Outfit Ideas for Your Next Vacation", category: "FASHION", date: "APR 28, 2026", readTime: "7 min", slug: "vacation-outfits", imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400" },
  ],
  'plus-size': [
    { title: "Best Plus Size Summer Dresses 2026", category: "PLUS SIZE", date: "JUN 7, 2026", readTime: "8 min", slug: "plus-size-dresses", imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4b3fde?auto=format&fit=crop&q=80&w=400" },
    { title: "Plus Size Outfit Ideas for Every Occasion", category: "OUTFITS", date: "JUN 1, 2026", readTime: "7 min", slug: "plus-size-outfits", imageUrl: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=400" },
    { title: "Best Jeans for Curves: 12 Tested Picks", category: "JEANS", date: "MAY 22, 2026", readTime: "9 min", slug: "plus-size-jeans", imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400" },
    { title: "Swimwear Guide: Best Suits for Every Shape", category: "SWIMWEAR", date: "MAY 16, 2026", readTime: "6 min", slug: "plus-size-swimwear", imageUrl: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=400" },
    { title: "Work Outfits That Actually Fit and Flatter", category: "WORKWEAR", date: "MAY 8, 2026", readTime: "7 min", slug: "plus-size-workwear", imageUrl: "https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=400" },
    { title: "Affordable Plus Size Finds Under $50", category: "SALE PICKS", date: "APR 30, 2026", readTime: "5 min", slug: "plus-size-affordable", imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=400" },
  ],
  nails: [
    { title: "Summer Nail Trends 2026: What's Hot", category: "TRENDS", date: "JUN 6, 2026", readTime: "5 min", slug: "summer-nails-2026", imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400" },
    { title: "Best Gel Nail Polishes for Long-Lasting Wear", category: "GEL NAILS", date: "MAY 29, 2026", readTime: "6 min", slug: "gel-nail-polishes", imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400&sig=2" },
    { title: "5 Nail Art Looks I'm Obsessed With", category: "NAIL ART", date: "MAY 20, 2026", readTime: "4 min", slug: "nail-art-looks", imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400&sig=3" },
    { title: "At-Home Manicure Tips That Actually Work", category: "DIY", date: "MAY 10, 2026", readTime: "7 min", slug: "at-home-manicure", imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400&sig=4" },
    { title: "Best Nail Polish Colors for Every Skin Tone", category: "NAIL POLISH", date: "APR 28, 2026", readTime: "6 min", slug: "nail-polish-skin-tone", imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400&sig=5" },
  ],
  hairstyle: [
    { title: "Best Hair Trends for Summer 2026", category: "TRENDS", date: "JUN 8, 2026", readTime: "6 min", slug: "hair-trends-2026", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400" },
    { title: "How to Get Beachy Waves at Home", category: "TUTORIALS", date: "JUN 1, 2026", readTime: "8 min", slug: "beachy-waves", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400&sig=2" },
    { title: "Best Dry Shampoos That Actually Work", category: "PRODUCTS", date: "MAY 25, 2026", readTime: "5 min", slug: "best-dry-shampoo", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400&sig=3" },
    { title: "10 Elegant Updo Ideas for Any Occasion", category: "UPDOS", date: "MAY 15, 2026", readTime: "7 min", slug: "updo-ideas", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400&sig=4" },
    { title: "Natural Hair Care Routine for Curly Hair", category: "NATURAL HAIR", date: "MAY 5, 2026", readTime: "9 min", slug: "curly-hair-routine", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400&sig=5" },
  ],
  blogs: [
    { title: "What I Learned Styling on a Budget", category: "PERSONAL", date: "JUN 4, 2026", readTime: "5 min", slug: "styling-on-budget", imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" },
    { title: "My Spring Travel Diary: Paris Edition", category: "TRAVEL", date: "MAY 28, 2026", readTime: "10 min", slug: "paris-travel-diary", imageUrl: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=400" },
    { title: "7 Luxurious Fragrances I Can't Stop Wearing", category: "BEAUTY", date: "MAY 20, 2026", readTime: "5 min", slug: "fragrances-2026", imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400" },
    { title: "Honest Review: The Amazon Finds Everyone's Buying", category: "REVIEWS", date: "MAY 10, 2026", readTime: "7 min", slug: "amazon-finds-review", imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400" },
  ],
};

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  const [activeTab, setActiveTab] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(9);

  const config = categoryConfig[slug] ?? categoryConfig['fashion'];
  const allPosts = mockPostsData[slug] ?? mockPostsData['fashion'];
  
  const filteredPosts = activeTab === 'ALL' 
    ? allPosts 
    : allPosts.filter((p: any) => p.category === activeTab);
    
  // Slice starting from 1 to skip the featured post
  const visiblePosts = filteredPosts.slice(1, visibleCount);
  const featuredPost = allPosts[0]; // Featured is always the first post of the category

  return (
    <div>
      <style>{`
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 900px) {
          .posts-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .posts-grid { grid-template-columns: 1fr; }
        }
        .post-card-img { transition: transform 0.4s ease; }
        .post-card-img:hover { transform: scale(1.04); }
        
        .filter-tabs::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* SECTION 1 - CATEGORY HERO BANNER */}
      <div style={{ backgroundColor: config.accentColor, position: 'relative', overflow: 'hidden', minHeight: '200px' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          
          <div style={{ flex: 1, maxWidth: '560px', position: 'relative', zIndex: 10 }}>
            {/* Row 1: Breadcrumb */}
            <span className="text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888' }}>
              HOME / CATEGORY / {config.label}
            </span>
            
            {/* Row 2: Category Title */}
            <h1 className="text-serif" style={{ fontSize: '3.5rem', fontWeight: 800, margin: '1rem 0', color: '#000', lineHeight: 1 }}>
              {config.label}
            </h1>
            
            {/* Row 3: Horizontal rule */}
            <div style={{ height: '1px', backgroundColor: '#d4cfc3', width: '100%', marginBottom: '1rem' }} />
            
            {/* Row 4: Description */}
            <p className="text-sans" style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6, margin: 0 }}>
              {config.description}
            </p>
            
            {/* Row 5: Post count badge */}
            <div style={{ marginTop: '1.2rem', backgroundColor: '#fff', padding: '0.4rem 0.8rem', display: 'inline-block', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {config.postCount} POSTS
            </div>
          </div>

          {/* Decorative ghost text */}
          <div className="text-script" style={{ position: 'absolute', right: '-2rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', userSelect: 'none', zIndex: 0, fontSize: '15rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1 }}>
            {config.label.toLowerCase()}
          </div>
        </div>
      </div>

      {/* SECTION 2 - STICKY FILTER TABS */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: '#faf9f6', borderBottom: '1px solid #d4cfc3' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          
          {/* Scrollable tabs row */}
          <div className="filter-tabs" style={{ display: 'flex', overflowX: 'auto', gap: 0, scrollbarWidth: 'none', height: '100%' }}>
            {config.subtags.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="text-sans"
                style={{ 
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: activeTab === tab ? '2px solid #000' : '2px solid transparent',
                  padding: '0 1.5rem',
                  fontSize: '0.65rem',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  letterSpacing: '0.1em',
                  color: activeTab === tab ? '#000' : '#888',
                  cursor: 'pointer',
                  height: '100%',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <span className="text-sans" style={{ fontSize: '0.6rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>SORT BY:</span>
            <select className="text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', border: 'none', backgroundColor: 'transparent', outline: 'none', cursor: 'pointer' }}>
              <option>NEWEST</option>
              <option>OLDEST</option>
              <option>POPULAR</option>
            </select>
          </div>
        </div>
      </div>

      {/* SECTION 3 - FEATURED POST */}
      {featuredPost && activeTab === 'ALL' && (
        <div style={{ maxWidth: '1240px', margin: '2rem auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #e5dfd5', minHeight: '380px' }}>
            
            {/* Image side */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <Image 
                src={featuredPost.imageUrl}
                alt={featuredPost.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Content side */}
            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span className="text-sans" style={{ fontSize: '0.6rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#888', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                FEATURED POST
              </span>
              <h2 className="text-serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, lineHeight: 1.1, color: '#000', marginBottom: '1rem' }}>
                {featuredPost.title}
              </h2>
              <p className="text-sans" style={{ fontSize: '0.8rem', lineHeight: 1.7, color: '#555', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                This is a featured post offering an in-depth look into the latest trends and our top recommendations. Read more to explore the full styling guide and editor picks carefully curated for this season.
              </p>
              <span className="text-sans" style={{ fontSize: '0.6rem', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                {featuredPost.date} · {featuredPost.readTime || '8 MIN READ'}
              </span>
              <div>
                <Link href={`/post/${featuredPost.slug}`} style={{ display: 'inline-block', backgroundColor: '#000', color: '#fff', textDecoration: 'none', padding: '0.6rem 1.5rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                  READ THE POST →
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      )}

      {/* SECTION 4 - POSTS GRID */}
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem 2rem' }}>
        
        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <h2 className="text-serif" style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1, margin: 0, letterSpacing: '-0.02em', color: '#000', whiteSpace: 'nowrap' }}>
            posts:
          </h2>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#d4cfc3' }} />
          <span className="text-sans" style={{ fontSize: '0.6rem', color: '#888', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: '1.5rem' }}>
            SHOWING 1–{visiblePosts.length + (activeTab === 'ALL' ? 1 : 0)} OF {filteredPosts.length}
          </span>
        </div>

        {/* Grid */}
        <div className="posts-grid">
          {visiblePosts.map((post: any, i: number) => (
            <PostCard 
              key={post.slug + i}
              title={post.title}
              category={post.category}
              date={post.date}
              imageUrl={post.imageUrl}
              slug={post.slug}
              readTime={post.readTime}
            />
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div style={{ padding: '4rem 0', textAlign: 'center' }}>
            <p className="text-sans" style={{ color: '#888' }}>No posts found for this category.</p>
          </div>
        )}
      </div>

      {/* SECTION 5 - LOAD MORE */}
      {visibleCount < filteredPosts.length && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '3rem', marginBottom: '3rem' }}>
          <div 
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => setVisibleCount(prev => prev + 6)}
          >
            <span className="text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.15em', color: '#000', textTransform: 'uppercase', marginRight: '1rem' }}>
              LOAD MORE
            </span>
            <div style={{ position: 'relative', width: '80px', height: '1px', backgroundColor: '#d4cfc3' }}>
              <div style={{ position: 'absolute', right: 0, top: '-4px', width: '8px', height: '8px', borderTop: '1px solid #d4cfc3', borderRight: '1px solid #d4cfc3', transform: 'rotate(45deg)' }} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
