import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../../../components/PostCard';
import { ShopThePostSlider } from '../../../components/ShopThePostSlider';
import { supabase } from '../../../lib/supabase';
import { notFound } from 'next/navigation';

export const revalidate = 60; // Revalidate cache every 60 seconds

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch post from Supabase
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    return notFound();
  }

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

        .capsule-lookbook-container {
          width: 100%;
          margin: 4rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
        }
        .shop-post-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 48px 0;
          width: 100%;
        }
        .shop-post-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 600px;
          width: 100%;
          height: 120px;
          position: relative;
        }
        .shop-post-btn {
          width: 25px;
          height: 120px;
          background-color: #FFFFFF;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          font-size: 24px;
          color: #888;
        }
        .shop-post-btn:hover {
          color: #000;
        }
        .shop-post-item {
          display: block;
          flex-shrink: 0;
          width: 100px;
          height: 100px;
          background-color: #f5f5f5;
          transition: transform 0.2s;
        }
        .shop-post-item:hover {
          transform: translateY(-2px);
        }
        .shop-post-item img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      `}</style>

      {/* ARTICLE HEADER */}
      <header style={{ maxWidth: '1240px', margin: '0 auto', padding: '4rem 2rem 2rem' }}>
        {/* Breadcrumb */}
        <div className="text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '1.5rem', textAlign: 'center' }}>
          <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>HOME</Link> / POST / {post.title.toUpperCase()}
        </div>

        {/* Title */}
        <h1 className="text-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, color: '#000', textAlign: 'center', marginBottom: '1.5rem' }}>
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="text-sans" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', color: '#666', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          <span>By {post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.read_time}</span>
        </div>
      </header>

      {/* FEATURED IMAGE */}
      <div style={{ maxWidth: '1240px', margin: '0 auto 4rem', padding: '0 2rem' }}>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '55%', backgroundColor: '#e5e5e5' }}>
          <Image 
            src={post.hero_image || `https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200&sig=${slug.length}`}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </div>

      {/* ARTICLE BODY */}
      <article className="article-content" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
        <p>{post.intro}</p>

        {(post.sections || []).map((section: any, idx: number) => {
          switch (section.type) {
            case 'h2':
              return <h2 key={idx} id={section.id}>{section.text}</h2>;
            case 'h3':
              return <h3 key={idx}>{section.text}</h3>;
            case 'p':
              return <p key={idx} dangerouslySetInnerHTML={{ __html: section.text || '' }} />;
            case 'ul':
              return (
                <ul key={idx} style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '2rem' }}>
                  {section.items?.map((item: string, i: number) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                </ul>
              );
            case 'accent-box':
              return (
                <div key={idx} style={{ backgroundColor: '#FAF6EE', padding: '2rem', margin: '2rem 0', border: section.bordered ? '2px solid #EC9277' : 'none' }}>
                  <h2 style={{ marginTop: 0 }}>{section.heading}</h2>
                  <p>{section.text}</p>
                  <ul style={{ paddingLeft: '20px' }}>
                    {section.items?.map((item: string, i: number) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </div>
              );
            case 'shop-the-post':
              return (
                <div key={idx}>
                  <h2>Shop the Post</h2>
                  <ShopThePostSlider products={section.products || []} />
                </div>
              );
            case 'image-lookbook':
              return (
                <div key={idx} className="capsule-lookbook-container">
                  <Image 
                    src={section.src} 
                    alt={section.alt || "Lookbook image"}
                    width={1200}
                    height={2400}
                    style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '1/2', objectFit: 'cover' }}
                    priority={false}
                  />
                </div>
              );
            case 'product-grid':
              return (
                <div key={idx} className="product-grid">
                  {section.items?.map((item: any, i: number) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ position: 'relative', paddingBottom: '120%', marginBottom: '1rem', backgroundColor: '#e8e4da' }}>
                        <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem' }}>{item.title}</h3>
                      <span className="text-sans" style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.8rem' }}>{item.description}</span>
                      <span className="text-sans" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              );
            default:
              return null;
          }
        })}

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
