'use client';

import React from 'react';
import Link from 'next/link';

export const ShopThePostSlider = ({ products }: { products: any[] }) => {
  const [items] = React.useState(() => products.map((p, i) => ({ ...p, _id: i })));
  const [currentIndex, setCurrentIndex] = React.useState(items.length);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= items.length * 2) {
      setCurrentIndex(currentIndex - items.length);
    } else if (currentIndex <= items.length - 1) {
      setCurrentIndex(currentIndex + items.length);
    }
  };

  if (!products || products.length === 0) return null;

  const itemWidth = 120; // 100px width + 20px gap
  const trackItems = [...items, ...items, ...items];

  return (
    <div className="shop-post-container">
      <div className="shop-post-wrapper">
        <button className="shop-post-btn" onClick={handlePrev}>‹</button>
        <div className="shop-post-viewport" style={{ overflow: 'hidden', flex: 1, height: '120px' }}>
          <div 
            className="shop-post-track"
            onTransitionEnd={handleTransitionEnd}
            style={{ 
              display: 'flex', 
              gap: '20px', 
              height: '100%',
              alignItems: 'center',
              width: 'max-content',
              transition: isTransitioning ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
              transform: `translateX(-${currentIndex * itemWidth}px)`
            }}
          >
            {trackItems.map((prod, i) => (
              <Link key={`${prod._id}-${i}`} href={prod.url} className="shop-post-item">
                <img src={prod.image} alt={prod.alt || ''} />
              </Link>
            ))}
          </div>
        </div>
        <button className="shop-post-btn" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};
