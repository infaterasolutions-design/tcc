import Image from "next/image";

export default function Home() {
  return (
    <div className="home-wrapper">
      <style>{`
        @media (max-width: 900px) {
          .hero-section { flex-direction: column-reverse !important; }
          .hero-left { padding: 3rem 1.5rem !important; text-align: center; }
          .hero-left h1 { fontSize: 2.5rem !important; }
          .hero-right { padding: 2rem !important; }
          .trending-grid { grid-template-columns: 1fr !important; padding: 1.5rem !important; }
          .trending-featured { flex-direction: column !important; margin-right: 0 !important; max-height: none !important; }
          .trending-featured-text { padding: 1.5rem !important; }
          .trending-list { border-left: none !important; padding-left: 0 !important; margin-top: 2rem !important; }
          .trending-nav, .recent-nav { display: none !important; }
          .recent-grid { grid-template-columns: 1fr !important; }
          .subscribe-section { flex-direction: column !important; text-align: center; gap: 1.5rem !important; }
          .subscribe-input-group { width: 100%; justify-content: center; }
          .shop-videos-row { flex-wrap: nowrap !important; overflow-x: auto; scroll-snap-type: x mandatory; justify-content: flex-start !important; scrollbar-width: none; }
          .shop-videos-row::-webkit-scrollbar { display: none; }
          .shop-videos-item { min-width: 65% !important; scroll-snap-align: center; margin-bottom: 0 !important; flex-shrink: 0; }
          .shop-videos-title { min-width: 35% !important; flex-shrink: 0; scroll-snap-align: start; }
        }
        @media (min-width: 601px) and (max-width: 1024px) {
          .recent-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .shop-videos-row {
          display: flex;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
          scroll-snap-type: x mandatory;
        }
        .shop-videos-row::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        .shop-videos-item {
          scroll-snap-align: start;
          flex-shrink: 0;
        }
      `}</style>
      <main className="container" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        
        {/* Hero Section */}
        <section className="flex hero-section" style={{ minHeight: '550px' }}>
          {/* Left Half (Text) */}
          <div className="w-full flex items-center justify-center hero-left" style={{ backgroundColor: '#faf9f6', padding: '3rem' }}>
            <div style={{ maxWidth: '480px' }}>
              <h1 className="text-serif" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '800', lineHeight: '1.05', marginBottom: '1.5rem', color: '#000', letterSpacing: '-1px' }}>
                Welcome to<br/>Minimalist<br/>Sophistication with<br/>Maximum Style
              </h1>
              <p className="text-sans" style={{ color: '#000', fontSize: '0.9rem', lineHeight: '1.8', fontWeight: '400' }}>
                The Combo Closet is an inspired style, home, and beauty destination for those who prefer quality over quantity, subtle over obvious, and ease over complexity.
              </p>
            </div>
          </div>
          {/* Right Half (Image) */}
          <div className="w-full flex items-center justify-center hero-right" style={{ backgroundColor: '#e5dfd5', padding: '4rem' }}>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600" alt="Hero model" className="object-cover" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
          </div>
        </section>

        {/* Trending Section */}
        <section style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          {/* Section Header */}
          <div className="flex justify-between items-end" style={{ marginBottom: '1rem', position: 'relative', zIndex: 10 }}>
            <div className="flex items-center" style={{ gap: '0.5rem', marginBottom: '-2.5rem' }}>
               <span className="text-serif" style={{ fontSize: '2rem', fontWeight: 'bold', letterSpacing: '-1px' }}>tcc</span>
               <span className="text-script" style={{ fontSize: '4rem', color: '#000', lineHeight: '0.5' }}>trending</span>
            </div>
            <nav className="flex uppercase text-sans trending-nav" style={{ gap: '1.5rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.05em', color: 'var(--color-gray)' }}>
               <span style={{ backgroundColor: '#000', color: '#fff', padding: '0.5rem 1rem' }}>POPULAR</span>
               <span style={{ padding: '0.5rem 0' }}>TRAVEL TIPS</span>
               <span style={{ padding: '0.5rem 0' }}>OUTFIT GUIDES</span>
               <span style={{ padding: '0.5rem 0' }}>REVIEWS</span>
            </nav>
          </div>

          {/* Main Container */}
          <div className="trending-grid" style={{ backgroundColor: '#e5dfd5', padding: '2rem', display: 'grid', gridTemplateColumns: '70% 30%' }}>
            
            {/* Left Column: Featured Post */}
            <div className="trending-featured" style={{ backgroundColor: '#fff', display: 'flex', maxHeight: '380px', marginRight: '2.5rem' }}>
               {/* Featured Image with overlay */}
               <div style={{ flex: '1', position: 'relative' }}>
                 <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400" alt="Interior" className="object-cover w-full h-full" />
                 <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.4)' }}>
                    <span className="uppercase text-sans" style={{ fontSize: '0.55rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>AMAZON</span>
                    <h3 className="text-serif text-center" style={{ fontSize: '1.5rem', lineHeight: '1', margin: '0.5rem 0' }}>the<br/>ultimate<br/>amazon<br/>shop guide</h3>
                    <span className="uppercase text-sans" style={{ fontSize: '0.55rem', fontWeight: 'bold', letterSpacing: '0.1em', borderBottom: '1px solid #000', paddingBottom: '2px' }}>SEE THE POST →</span>
                 </div>
               </div>
               {/* Featured Text */}
               <div className="trending-featured-text" style={{ flex: '1.2', padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                 <h2 className="text-serif" style={{ fontSize: '1.8rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '0.8rem', color: '#000' }}>What to Buy on Amazon: Chic Finds for Every Category</h2>
                 <p className="text-sans" style={{ fontSize: '0.75rem', lineHeight: '1.6', color: '#000', marginBottom: '1rem' }}>You guys know how much I love a good Amazon find. Whether it's an essential item for travel, a kitchen gadget, or a trendy fashion piece at a great price, Amazon seemingly has it all plus incredibly fast shipping for...</p>
                 <div>
                   <button className="uppercase text-sans" style={{ backgroundColor: '#e5dfd5', border: 'none', padding: '0.5rem 1rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }}>VIEW THE POST</button>
                 </div>
               </div>
            </div>

            {/* Right Column: List */}
            <div className="trending-list" style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid #000', paddingLeft: '2rem', justifyContent: 'space-between' }}>
               <div style={{ display: 'grid', gridTemplateColumns: 'min-content 1fr', gap: '2rem 1.2rem', alignItems: 'center' }}>
                 {/* Item 1 */}
                 <span className="text-serif" style={{ fontSize: '3.5rem', lineHeight: '0.8', fontWeight: '800', color: '#000' }}>1</span>
                 <h4 className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: '800', lineHeight: '1.4', color: '#000', margin: 0 }}>WHAT TO BUY ON AMAZON: CHIC FINDS FOR EVERY CATEGORY</h4>
                 
                 {/* Item 2 */}
                 <span className="text-serif" style={{ fontSize: '3.5rem', lineHeight: '0.8', fontWeight: '800', color: '#d4cfc3' }}>2</span>
                 <h4 className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: '700', lineHeight: '1.4', color: '#d4cfc3', margin: 0 }}>YOUR ULTIMATE FALL CAPSULE WARDROBE 2025: WHAT TO WEAR THIS SEASON</h4>
                 
                 {/* Item 3 */}
                 <span className="text-serif" style={{ fontSize: '3.5rem', lineHeight: '0.8', fontWeight: '800', color: '#d4cfc3' }}>3</span>
                 <h4 className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: '700', lineHeight: '1.4', color: '#d4cfc3', margin: 0 }}>FALL CAPSULE WARDROBE: AMAZON EDITION</h4>
                 
                 {/* Item 4 */}
                 <span className="text-serif" style={{ fontSize: '3.5rem', lineHeight: '0.8', fontWeight: '800', color: '#d4cfc3' }}>4</span>
                 <h4 className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: '700', lineHeight: '1.4', color: '#d4cfc3', margin: 0 }}>STYLISH LIVING: TRANSITIONAL BEDROOM DECOR IDEAS</h4>
               </div>
               
               <button className="uppercase text-sans w-full" style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '0.8rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', cursor: 'pointer', marginTop: '1.5rem' }}>READ MORE POPULAR POSTS</button>
            </div>

          </div>
        </section>

        {/* Recent Posts Section */}
        <section style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
          {/* Header */}
          <div className="flex items-center justify-between" style={{ marginBottom: '2rem' }}>
            <div className="flex items-center" style={{ flex: 1, gap: '1rem' }}>
              <h2 className="text-serif" style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: 1, margin: 0, letterSpacing: '-0.02em', color: '#000', whiteSpace: 'nowrap' }}>recent posts:</h2>
              <div style={{ height: '1px', backgroundColor: '#d4cfc3', flex: 1 }}></div>
            </div>
            <nav className="flex items-center uppercase text-sans recent-nav" style={{ gap: '2rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', marginLeft: '2rem' }}>
              <span style={{ color: '#000' }}>BROWSE MORE IN:</span>
              <div className="flex" style={{ gap: '2rem', color: '#666' }}>
                <span style={{ cursor: 'pointer', color: '#000' }}>AMAZON</span>
                <span style={{ cursor: 'pointer' }}>REVIEWS</span>
                <span style={{ cursor: 'pointer' }}>BEAUTY</span>
                <span style={{ cursor: 'pointer' }}>TRAVEL</span>
              </div>
            </nav>
          </div>

          {/* Grid */}
          <div className="recent-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '1.5rem' }}>
            {/* Post 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ width: '100%', paddingBottom: '125%', marginBottom: '1rem', backgroundColor: '#e5e5e5', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=400" alt="Accessories" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#888', letterSpacing: '0.1em', marginBottom: '0.4rem', display: 'block' }}>LIFESTYLE</span>
              <h4 className="text-serif" style={{ fontSize: '1.2rem', fontWeight: '800', lineHeight: '1.3', color: '#000', margin: 0 }}>The Memorial Day Weekend Sales You Don't Want to Miss</h4>
            </div>

            {/* Post 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ width: '100%', paddingBottom: '125%', marginBottom: '1rem', backgroundColor: '#e5e5e5', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=400" alt="Suitcase" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#888', letterSpacing: '0.1em', marginBottom: '0.4rem', display: 'block' }}>TRAVEL</span>
              <h4 className="text-serif" style={{ fontSize: '1.2rem', fontWeight: '800', lineHeight: '1.3', color: '#000', margin: 0 }}>Best Travel Bags for Women 2026: 12 Editor-Tested Picks</h4>
            </div>

            {/* Post 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ width: '100%', paddingBottom: '125%', marginBottom: '1rem', backgroundColor: '#e5e5e5', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=400" alt="Fragrances" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#888', letterSpacing: '0.1em', marginBottom: '0.4rem', display: 'block' }}>BEAUTY</span>
              <h4 className="text-serif" style={{ fontSize: '1.2rem', fontWeight: '800', lineHeight: '1.3', color: '#000', margin: 0 }}>7 Luxurious Fragrances I Can't Stop Wearing</h4>
            </div>

            {/* Post 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <div style={{ width: '100%', paddingBottom: '125%', marginBottom: '1rem', backgroundColor: '#e5e5e5', position: 'relative', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?auto=format&fit=crop&q=80&w=400" alt="Gift" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#888', letterSpacing: '0.1em', marginBottom: '0.4rem', display: 'block' }}>GIFT GUIDE</span>
              <h4 className="text-serif" style={{ fontSize: '1.2rem', fontWeight: '800', lineHeight: '1.3', color: '#000', margin: 0 }}>The Best Mother's Day Gift Ideas</h4>
            </div>
          </div>

          {/* Load More */}
          <div className="flex items-center justify-center" style={{ marginTop: '2.5rem' }}>
            <div className="flex items-center" style={{ cursor: 'pointer' }}>
              <span className="uppercase text-sans" style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.15em', color: '#000', marginRight: '1rem' }}>LOAD MORE</span>
              <div style={{ position: 'relative', width: '80px', height: '1px', backgroundColor: '#d4cfc3' }}>
                 <div style={{ position: 'absolute', right: 0, top: '-4px', width: '8px', height: '8px', borderTop: '1px solid #d4cfc3', borderRight: '1px solid #d4cfc3', transform: 'rotate(45deg)' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="subscribe-section" style={{ backgroundColor: 'var(--color-accent)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <h3 className="text-serif" style={{ fontSize: '1.5rem' }}>subscribe</h3>
            <p className="text-sans" style={{ fontSize: '0.8rem', color: 'var(--color-gray)' }}>Sign up for weekly style inspiration right to your inbox.</p>
          </div>
          <div className="flex subscribe-input-group">
            <input type="email" placeholder="Email Address" style={{ padding: '0.5rem 1rem', border: '1px solid var(--color-border)', outline: 'none', width: '100%', maxWidth: '250px' }} />
            <button className="uppercase text-sans" style={{ backgroundColor: '#cc8e8e', color: 'white', border: 'none', padding: '0.5rem 1.5rem', cursor: 'pointer', fontSize: '0.8rem' }}>Subscribe</button>
          </div>
        </section>

        {/* Shop by Trending Videos */}
        <section>
          <div className="flex gap-sm shop-videos-row" style={{ backgroundColor: 'var(--color-accent)', padding: '0.5rem' }}>
            <div className="shop-videos-title" style={{ flex: '0.8', display: 'flex', alignItems: 'center', justifyItems: 'center', alignContent: 'center', justifyContent: 'center', position: '-webkit-sticky', left: 0, zIndex: 0, backgroundColor: 'var(--color-accent)' }}>
               <div style={{ position: 'sticky', left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <h2 className="text-serif text-center" style={{ fontSize: '1.5rem', color: 'var(--color-gray)' }}>SHOP<br/>MY<br/>VIDEOS<br/><span style={{fontSize:'1rem'}}>→</span></h2>
               </div>
            </div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="shop-videos-item" style={{ flex: '1', position: 'relative', zIndex: 5, backgroundColor: '#fff' }}>
                <img src={`https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=200&h=300&sig=${i}`} alt="Video" className="w-full object-cover" style={{ height: '250px' }} />
                <button style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', border: 'none', padding: '0.3rem 0.8rem', fontSize: '0.6rem', cursor: 'pointer', fontWeight: 'bold' }}>SHOP NOW</button>
              </div>
            ))}
          </div>
        </section>

        {/* Elsewhere Section */}
        <section style={{ marginTop: '0', marginBottom: '0', display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ position: 'relative', width: '100%', paddingBottom: '60%' }}>
            
            {/* Script Text */}
            <div style={{ position: 'absolute', top: '0%', left: '33%', zIndex: 5, pointerEvents: 'none' }}>
              <span className="text-script" style={{ fontSize: '12vw', color: '#000', lineHeight: '1', fontWeight: '300' }}>elsewhere</span>
            </div>

            {/* Image 1: Clothes rack */}
            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=400" alt="Clothes rack" 
                 style={{ position: 'absolute', top: '15%', left: '0%', width: '28%', aspectRatio: '3/4', objectFit: 'cover', zIndex: 1 }} />

            {/* Image 2: Striped sweater */}
            <img src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&q=80&w=400" alt="Striped sweater" 
                 style={{ position: 'absolute', top: '20%', left: '21%', width: '29%', aspectRatio: '3/4', objectFit: 'cover', zIndex: 10, border: '15px solid #fff' }} />

            {/* Image 3: Bag and drink */}
            <div style={{ position: 'absolute', top: '5%', left: '44%', width: '27%', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=400" alt="Bag and drink" 
                   style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }} />
              <div style={{ marginTop: '1rem', backgroundColor: '#000', color: '#fff', padding: '0.4rem 1rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.15em' }}>
                @FASHION_JACKSON
              </div>
            </div>

            {/* Image 4: Woman walking */}
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" alt="Woman walking" 
                 style={{ position: 'absolute', top: '25%', left: '74%', width: '26%', aspectRatio: '3/4', objectFit: 'cover', zIndex: 1 }} />
                 
          </div>
        </section>

      </main>
    </div>
  );
}
