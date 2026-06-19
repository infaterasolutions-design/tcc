'use client';

import React, { use } from 'react';
import Link from 'next/link';

interface ArticleSection {
  type: 'h2' | 'h3' | 'p' | 'ul' | 'tip' | 'pullquote' | 'what-works' | 'image' | 'form' | 'accent-box';
  id?: string;
  text?: string;
  heading?: string;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  bordered?: boolean;
}
interface RelatedPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}
interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  heroImage: string;
  sections: ArticleSection[];
  relatedPosts: RelatedPost[];
  popularPosts: RelatedPost[];
}

const mockPost: Post = {
  slug: 'how-to-declutter-your-home',
  title: 'How to Declutter Your Home: A Complete Room-by-Room Guide',
  author: 'Elle Penner M.P.H., R.D.',
  date: 'December 19, 2025',
  readTime: '15 min',
  category: 'Decluttering Tips',
  intro: "Too much stuff, not enough space, and no idea where to start? When I first started decluttering, I made all the mistakes. It wasn’t pretty, but I got through it, and once I did, I decluttered our entire home.",
  heroImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200',
  sections: [
    { type: 'h2', text: 'A simple formula to declutter your home (and keep it that way)' },
    { type: 'p', text: 'Most decluttering advice tells you what to do (get rid of things) but rarely how to actually execute it. That’s where my <a href="#">SOS Declutter Method</a> comes in. It’s a repeatable process you can use in any room:' },
    { type: 'ul', items: ['Simplify: This is decluttering to the core. Keep what you need and love.', 'Organize: Assign a logical home to everything left.', 'Systematize: Implement boundaries and small habits.'] },
    { type: 'p', text: 'This guide will show you how to apply the <a href="#">SOS Method</a> in every room of your home—and more importantly, keep it that way. Check out the <a href="#">SOS Declutter Method Guide</a> for a deeper dive and the questions I find most helpful.' },
    { type: 'p', text: 'If you’re looking for a clear place to start, I put together a <a href="#">room-by-room declutter checklist</a> that walks you through exactly what to let go of.' },
    { type: 'h2', text: 'Choose a decluttering timeline that fits your life' },
    { type: 'p', text: 'Every home (and season) looks a little different. Don’t feel pressured to finish your entire house in a weekend if you have kids running around.' },
    { type: 'h3', text: 'If you live in an apartment or a smaller home' },
    { type: 'ul', items: ['Three-month plan: Focus on one area every 1-2 weeks.', 'Two-month plan: Declutter one room or category per week.', 'One-month plan: Commit 20 minutes each day to a small area.'] },
    { type: 'h3', text: 'If you live in a family home (3+ bedrooms)' },
    { type: 'p', text: 'Larger homes naturally take longer—there’s more stuff and usually more people creating messes.' },
    { type: 'ul', items: ['One-year plan: Declutter one room or category per month.', 'Six-month plan: Two rooms or categories per month.', 'Three-month plan: One room or category per week.', 'One-month sprint: Dedicate 15–30 minutes each day.'] },
    { type: 'p', text: '<strong>Tip: Focus on momentum, not perfection. Progress is progress.</strong>' },
    { type: 'p', text: 'Once you’ve chosen your pace, it’s time to begin!' },
    { type: 'accent-box', heading: 'Where to start decluttering your home (and why the order matters)', text: 'Not all rooms are equal when it comes to decluttering. Here’s the order I often recommend, but tailor it to what makes the most sense for you.', items: ['Entryway & mudroom: Clears the path in and out.', 'Bathrooms: Small spaces, quick wins, and lots of expired products.', 'Kitchen: The heart of the home. Simplifying here makes life easier.', 'Toys: If you have kids, do this next.', 'Living spaces: Easier after toys are pared down.', 'Closets & clothing: High-impact but time-consuming.', 'Bedrooms: With closets simplified, this step resets the space.', 'Home office & paper: Mentally harder but high-impact.', 'Storage areas: Save these for last once your decluttering muscles are strong.'] },
    { type: 'accent-box', bordered: true, heading: 'Helpful decluttering supplies', text: 'Having a few basic supplies handy will make the decluttering process faster and more efficient.', items: ['Trash bag: For obvious tosses and broken items.', 'Donation box or bag: For the things you no longer need.', 'Recycle bin: For paper and packaging.', 'Vacuum or handheld cleaner: For those crumbs and dust.', 'All-purpose spray + cloth: Give surfaces a quick wipe.', 'Timer: Keeps you focused and helps you avoid burnout.'] }
  ],
  relatedPosts: [
    { slug: 'capsule-wardrobe-guide', title: 'Your Ultimate Fall Capsule Wardrobe 2026', category: 'FASHION', date: 'May 24, 2026', imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=400' },
  ],
  popularPosts: [
    { slug: 'organization-bins', title: 'The 10 Best Organization Bins', category: 'HOME', date: 'June 1, 2026', imageUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=150' },
    { slug: 'minimalist-kitchen', title: 'A Minimalist Guide to Kitchen Gadgets', category: 'KITCHEN', date: 'May 28, 2026', imageUrl: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=150' },
    { slug: 'spring-edit', title: 'Capsule Wardrobe: The Spring Edit', category: 'FASHION', date: 'May 15, 2026', imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=150' },
    { slug: 'minimalist-clothing-brands', title: '30 Best Minimalist Clothing Brands', category: 'FASHION', date: 'May 10, 2026', imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=150' },
  ],
};

const getPost = (slug: string): Post => ({ ...mockPost, slug });

export default function WardrobeBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getPost(slug);

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
      `}</style>

      <div className="page-container">
        <div className="article-container">
          {/* Breadcrumb */}
        <div className="article-breadcrumb">
          <Link href="/">Home</Link> » <Link href={`/category/${post.category.toLowerCase().replace(' ', '-')}`}>{post.category}</Link>
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
        <img src={post.heroImage} alt={post.title} className="article-hero-image" />

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
              {post.popularPosts.map((item, i) => (
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
