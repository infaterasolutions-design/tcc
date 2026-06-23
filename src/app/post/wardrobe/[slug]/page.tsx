import React from 'react';
import Link from 'next/link';
import { supabase } from '../../../../lib/supabase';
import { notFound } from 'next/navigation';
import { ShopThePostSlider } from '../../../../components/ShopThePostSlider';

export const revalidate = 60;

export default async function WardrobeBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const { data: post, error } = await supabase
    .from('posts')
    .select('*, categories(label)')
    .eq('slug', slug)
    .single();

  if (error || !post) {
    return notFound();
  }

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingBottom: '4rem' }}>
      <style>{`
        /* Global variables based on Figma design */
        :root {
          --text-color: #2C2C2C;
          --accent-yellow: #F3B41B;
          --accent-green: #C5DAD4;
          --accent-bg: #FAF6EE;
          --accent-border: #EC9277;
        }
        
        .page-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 3rem 1rem;
          display: flex;
          gap: 60px;
          align-items: flex-start;
        }

        .article-container {
          width: 100%;
          max-width: 837px;
          flex-shrink: 0;
        }

        .sidebar-container {
          flex: 1;
        }

        @media (max-width: 1024px) {
          .page-container {
            flex-direction: column;
            padding: 2rem 1rem;
            gap: 40px;
          }
          .sidebar-container {
            width: 100%;
            margin-top: 1rem;
          }
          .article-title {
            font-size: 28px;
          }
          .article-intro {
            font-size: 16px;
            margin-bottom: 32px;
          }
          .article-body h2 {
            font-size: 24px;
            margin-top: 40px;
          }
          .article-body h3 {
            font-size: 20px;
            margin-top: 32px;
          }
          .article-body p,
          .article-body ul li {
            font-size: 16px;
          }
          .accent-box {
            padding: 24px 16px;
            margin: 32px 0;
          }
          .toc-box-content {
            padding: 24px 24px 0;
          }
          .toc-header h2 {
            font-size: 24px;
          }
          .toc-expand {
            padding: 12px 24px;
          }
        }

        .article-breadcrumb {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          color: var(--text-color);
          margin-bottom: 24px;
        }

        .article-breadcrumb a {
          color: var(--text-color);
          text-decoration: none;
        }

        .article-title {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          line-height: 1.3;
          color: var(--text-color);
          margin-bottom: 24px;
        }

        .article-meta {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          color: var(--text-color);
          margin-bottom: 32px;
        }

        .article-intro {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-color);
          margin-bottom: 48px;
        }

        .article-hero-image {
          width: 100%;
          height: auto;
          margin-bottom: 48px;
        }

        .article-body h2 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          line-height: 1.4;
          color: var(--text-color);
          margin-top: 56px;
          margin-bottom: 24px;
        }

        .article-body h3 {
          font-family: 'Inter', sans-serif;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.4;
          color: var(--text-color);
          margin-top: 48px;
          margin-bottom: 20px;
        }

        .article-body p {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-color);
          margin-bottom: 32px;
        }

        .article-body a {
          color: var(--text-color);
          text-decoration: none;
          background: linear-gradient(180deg, transparent 60%, var(--accent-green) 60%);
          font-weight: 500;
          transition: background 0.2s;
        }
        
        .article-body a:hover {
          background: linear-gradient(180deg, transparent 20%, var(--accent-green) 20%);
        }

        .article-body ul {
          list-style: none;
          padding-left: 20px;
          margin-bottom: 40px;
        }

        .article-body ul li {
          position: relative;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.7;
          color: var(--text-color);
          margin-bottom: 16px;
          padding-left: 24px;
        }

        .article-body ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 12px;
          width: 12px;
          height: 12px;
          background-color: var(--accent-yellow);
          border-radius: 50%;
        }

        .accent-box {
          background-color: var(--accent-bg);
          padding: 40px 24px;
          margin: 48px 0;
        }
        
        .accent-box.bordered {
          border: 3px solid var(--accent-border);
        }

        .toc-box {
          border: 1.6px solid #EDE0C8;
          background: #FFFFFF;
          margin-bottom: 48px;
        }
        .toc-box-content {
          padding: 30px 30px 0;
        }
        .toc-header {
          border-bottom: 0.8px solid #EDE0C8;
          padding-bottom: 16px;
          margin-bottom: 20px;
        }
        .toc-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          color: #131313;
          margin: 0;
        }
        .toc-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-left: 20px;
          margin-bottom: 30px;
        }
        .toc-nav a {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          font-weight: 500;
          color: #131313;
          text-decoration: none;
          background: none;
        }
        .toc-nav a:hover {
          text-decoration: underline;
          opacity: 1;
        }
        .toc-expand {
          background: #FAF6EE;
          padding: 12px 30px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }
        .toc-expand span {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 18px;
          text-transform: uppercase;
          color: #131313;
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
        .shop-post-items {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          flex: 1;
          height: 120px;
          align-items: center;
          justify-content: center;
        }
        .shop-post-items::-webkit-scrollbar {
          display: none;
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

      <div className="page-container">
        <div className="article-container">
          {/* Breadcrumb */}
        <div className="article-breadcrumb">
          <Link href="/">Home</Link> » <Link href={`/category/${post.category_slug}`}>{post.categories?.label || 'Category'}</Link>
        </div>

        {/* Title */}
        <h1 className="article-title">{post.title}</h1>

        {/* Meta */}
        <div className="article-meta">
          By {post.author} | {post.date}
        </div>

        {/* Intro */}
        <p className="article-intro">{post.intro}</p>

        {/* Hero Image */}
        <img src={post.hero_image} alt={post.title} className="article-hero-image" />

        {/* Article Body */}
        <article className="article-body">
          
          {/* Table of Contents Box */}
          <div className="toc-box">
            <div className="toc-box-content">
              <div className="toc-header">
                <h2>Table of Contents</h2>
              </div>
              <nav className="toc-nav">
                <Link href="#">A simple formula to declutter your home (and keep it that way)</Link>
                <Link href="#">Choose a decluttering timeline that fits your life</Link>
                <Link href="#">Where to start decluttering your home (and why the order matters)</Link>
              </nav>
            </div>
            <div className="toc-expand">
              <span>+</span>
              <span>VIEW MORE</span>
            </div>
          </div>

          {post.sections.map((section, idx) => {
            switch (section.type) {
              case 'h2':
                return <h2 key={idx} id={section.id}>{section.text}</h2>;
              case 'h3':
                return <h3 key={idx}>{section.text}</h3>;
              case 'p':
                return <p key={idx} dangerouslySetInnerHTML={{ __html: section.text || '' }} />;
              case 'ul':
                return (
                  <ul key={idx}>
                    {section.items?.map((item, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                );
              case 'accent-box':
                return (
                  <div key={idx} className={`accent-box ${section.bordered ? 'bordered' : ''}`}>
                    <h2 style={{ marginTop: 0 }}>{section.heading}</h2>
                    <p>{section.text}</p>
                    <ul>
                      {section.items?.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </div>
                );
              case 'shop-the-post':
                return <ShopThePostSlider key={idx} products={section.products || []} />;
              default:
                return null;
            }
          })}
        </article>
        </div>

        {/* Sidebar */}
        <aside className="sidebar-container">
          <div style={{ backgroundColor: '#FAF6EE', padding: '24px', marginBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300" alt="Elle Penner" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', marginBottom: '20px' }} />
            <h3 className="text-serif" style={{ fontSize: '30px', margin: '0 0 16px 0', textAlign: 'center', fontWeight: 400, color: '#2C2C2C' }}>Hey there, I’m Elle.</h3>
            <p className="text-sans" style={{ fontSize: '20px', lineHeight: '32px', color: '#2C2C2C', textAlign: 'center', margin: '0 0 24px 0' }}>
              Simplifying and organizing expert, dietitian, and mom of two. I'm here to help you declutter your home so you have more time and energy for the things that truly matter.
            </p>
            <Link href="#" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', padding: '7px 18px', backgroundColor: '#FFFFFF', border: '1.6px solid #EC9277', textDecoration: 'none', color: '#2C2C2C' }}>
              <span className="text-sans" style={{ fontSize: '18px', fontWeight: 400, textTransform: 'uppercase' }}>About Me</span>
            </Link>
          </div>
          <div style={{ backgroundColor: '#C5DAD4', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
             <h3 className="text-sans" style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '1rem', marginTop: 0 }}>Join the Newsletter</h3>
             <p className="text-sans" style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Get weekly decluttering tips straight to your inbox.</p>
             <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #48647E' }} />
             <button style={{ width: '100%', padding: '0.8rem', backgroundColor: '#F3B41B', border: 'none', fontWeight: 'bold', cursor: 'pointer', color: '#2C2C2C' }}>SUBSCRIBE</button>
          </div>

          <div style={{ padding: '1rem 0', width: '100%', maxWidth: '290px', margin: '0 auto' }}>
            <h3 className="text-serif" style={{ fontSize: '30px', marginBottom: '1.5rem', marginTop: 0, textAlign: 'center', fontWeight: 400 }}>Popular Posts</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {(post.popular_posts || []).map((item: any, i: number) => (
                <Link key={i} href={`/post/${item.slug}`} style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', alignItems: 'center' }}>
                  <img src={item.imageUrl} alt={item.title} style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', marginBottom: '10px' }} />
                  <h4 className="text-sans" style={{ fontSize: '18px', fontWeight: 500, color: '#2C2C2C', lineHeight: '24px', margin: 0, textAlign: 'center', textTransform: 'capitalize' }}>{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
}
