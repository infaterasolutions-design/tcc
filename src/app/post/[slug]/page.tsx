'use client';

import React, { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../../../components/PostCard';

function formatSlugToTitle(slug: string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const title = formatSlugToTitle(slug);

  return (
    <div style={{ backgroundColor: '#faf9f6', minHeight: '100vh', paddingBottom: '4rem' }}>
      <style>{`
        .article-content p {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 2rem;
        }
        .article-content h2, .article-content h3 {
          font-family: 'Playfair Display', serif;
          color: #000;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .article-content h2 {
          font-size: 2.2rem;
        }
        .article-content h3 {
          font-size: 1.6rem;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 3rem 0;
        }
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: 1fr; }
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        @media (max-width: 900px) {
          .related-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .related-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ARTICLE HEADER */}
      <header style={{ maxWidth: '1240px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        {/* Breadcrumb */}
        <div className="text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '1.5rem', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>HOME</Link> / POST / {title.toUpperCase()}
        </div>

        {/* Title */}
        <h1 className="text-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: '#000', textAlign: 'center', marginBottom: '1.5rem' }}>
          {title}
        </h1>

        {/* Meta Info */}
        <div className="text-sans" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: '#666', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          <span>By The Combo Closet</span>
          <span>·</span>
          <span>JUN 10, 2026</span>
          <span>·</span>
          <span>8 MIN READ</span>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div style={{ maxWidth: '1240px', margin: '0 auto 4rem', padding: '0 2rem' }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '55%', backgroundColor: '#e5e5e5' }}>
          <Image 
            src={`https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200&sig=${slug.length}`}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="article-content" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        <p>
          Welcome to another deep dive into our favorite seasonal staples. Finding the right balance between comfort and style can sometimes feel like a daunting task, but it doesn't have to be. Today, we're breaking down the essential pieces that will elevate your everyday wardrobe.
        </p>
        <p>
          We've all experienced that moment of staring into a full closet and feeling like we have absolutely nothing to wear. The secret to effortless dressing lies in investing in versatile, high-quality basics that can be mixed and matched. Whether you're curating a capsule collection or just looking to refresh your look, these selections are designed to carry you through the season with ease.
        </p>

        <h2>What Makes a Great Investment Piece?</h2>
        <p>
          Before we get to the editor's top picks, let's talk about what actually makes a piece worth buying. The most important element is obviously comfort. If a garment doesn't feel good and you're unable to wear it all day, it will likely end up collecting dust at the back of your closet.
        </p>
        <p>
          Next is versatility. Look for neutral tones like black, white, tan, and soft beige, which serve as an excellent foundation. Add in pops of seasonal colors like rich reds or deep greens to keep things interesting. A timeless silhouette ensures your outfit remains modern without feeling overly trendy or dated.
        </p>

        {/* PRODUCT GRID / EDITOR PICKS */}
        <h2>Editor's Top Picks</h2>
        <p>
          Here are three of our current absolute favorites that perfectly blend high-end aesthetics with everyday wearability. We've vetted these carefully to ensure they meet our standards for quality and style.
        </p>
        
        <div className="product-grid">
          {/* Product 1 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', paddingBottom: '120%', marginBottom: '1rem', backgroundColor: '#e8e4da' }}>
              <Image src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400" alt="Product 1" fill style={{ objectFit: 'cover' }} />
            </div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>The Classic Essential</h3>
            <span className="text-sans" style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.8rem' }}>An absolute wardrobe staple.</span>
            <span className="text-sans" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>$120.00</span>
          </div>
          {/* Product 2 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', paddingBottom: '120%', marginBottom: '1rem', backgroundColor: '#e5dfd5' }}>
              <Image src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=400" alt="Product 2" fill style={{ objectFit: 'cover' }} />
            </div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>Elevated Everyday</h3>
            <span className="text-sans" style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.8rem' }}>For dressing up or down.</span>
            <span className="text-sans" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>$245.00</span>
          </div>
          {/* Product 3 */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', paddingBottom: '120%', marginBottom: '1rem', backgroundColor: '#ede7dc' }}>
              <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400" alt="Product 3" fill style={{ objectFit: 'cover' }} />
            </div>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>The Statement Maker</h3>
            <span className="text-sans" style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.8rem' }}>A bold addition to any look.</span>
            <span className="text-sans" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>$85.00</span>
          </div>
        </div>

        <h2>How to Style It</h2>
        <p>
          When styling these pieces, the key is balance. If you're wearing something voluminous on the bottom, keep the top more fitted, and vice versa. Accessories can completely transform the look—swapping casual flats for an elevated heel takes the outfit from day to night effortlessly.
        </p>
        <p>
          Remember, fashion is meant to be fun. Use these guidelines as a starting point, but don't be afraid to experiment with textures, layering, and accessories to make the look uniquely yours.
        </p>

        {/* Share / Tags */}
        <div style={{ marginTop: '4rem', paddingBottom: '2rem', borderBottom: '1px solid #d4cfc3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="text-sans" style={{ display: 'flex', gap: '0.5rem', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span style={{ color: '#888' }}>TAGS:</span>
            <span style={{ cursor: 'pointer' }}>FASHION</span>
            <span style={{ cursor: 'pointer' }}>STYLE TIPS</span>
          </div>
          <div className="text-sans" style={{ display: 'flex', gap: '1rem', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <span style={{ cursor: 'pointer' }}>SHARE</span>
            <span style={{ cursor: 'pointer' }}>PIN IT</span>
          </div>
        </div>
      </article>

      {/* RELATED POSTS SECTION */}
      <div style={{ maxWidth: '1240px', margin: '4rem auto 0', padding: '0 2rem' }}>
        <h2 className="text-serif" style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '3rem' }}>
          You Might Also Like
        </h2>
        <div className="related-grid">
          <PostCard 
            title="Fall Capsule Wardrobe: 10 Essential Pieces"
            category="SEASONAL"
            date="MAY 24, 2026"
            readTime="9 min"
            slug="fall-capsule"
            imageUrl="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=400"
          />
          <PostCard 
            title="How to Style Wide-Leg Trousers 5 Ways"
            category="STYLE TIPS"
            date="JUN 2, 2026"
            readTime="7 min"
            slug="wide-leg-trousers"
            imageUrl="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=400"
          />
          <PostCard 
            title="The Linen Set Trend: How to Wear It Now"
            category="TRENDING"
            date="MAY 10, 2026"
            readTime="5 min"
            slug="linen-set-trend"
            imageUrl="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=400"
          />
        </div>
      </div>

    </div>
  );
}
