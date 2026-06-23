UPDATE public.posts 
SET sections = '[
  {
    "type": "p",
    "text": "We''ve all experienced that moment of staring into a full closet and feeling like we have absolutely nothing to wear. The secret to effortless dressing lies in investing in versatile, high-quality basics that can be mixed and matched. Whether you''re curating a capsule collection or just looking to refresh your look, these selections are designed to carry you through the season with ease."
  },
  {
    "type": "image-lookbook",
    "src": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200&h=2400",
    "alt": "2026 Classic Summer Capsule Wardrobe"
  },
  {
    "type": "h2",
    "text": "What Makes a Great Investment Piece?"
  },
  {
    "type": "p",
    "text": "Before we get to the editor''s top picks, let''s talk about what actually makes a piece worth buying. The most important element is obviously comfort. If a garment doesn''t feel good and you''re unable to wear it all day, it will likely end up collecting dust at the back of your closet."
  },
  {
    "type": "p",
    "text": "Next is versatility. Look for neutral tones like black, white, tan, and soft beige, which serve as an excellent foundation. Add in pops of seasonal colors like rich reds or deep greens to keep things interesting. A timeless silhouette ensures your outfit remains modern without feeling overly trendy or dated."
  },
  {
    "type": "h2",
    "text": "Editor''s Top Picks"
  },
  {
    "type": "p",
    "text": "Here are three of our current absolute favorites that perfectly blend high-end aesthetics with everyday wearability. We''ve vetted these carefully to ensure they meet our standards for quality and style."
  },
  {
    "type": "product-grid",
    "items": [
      {
        "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=400",
        "title": "The Classic Essential",
        "description": "An absolute wardrobe staple.",
        "price": "$120.00"
      },
      {
        "image": "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=400",
        "title": "Elevated Everyday",
        "description": "For dressing up or down.",
        "price": "$245.00"
      },
      {
        "image": "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400",
        "title": "The Statement Maker",
        "description": "A bold addition to any look.",
        "price": "$85.00"
      }
    ]
  },
  {
    "type": "h2",
    "text": "How to Style It"
  },
  {
    "type": "p",
    "text": "When styling these pieces, the key is balance. If you''re wearing something voluminous on the bottom, keep the top more fitted, and vice versa. Accessories can completely transform the look—swapping casual flats for an elevated heel takes the outfit from day to night effortlessly."
  },
  {
    "type": "p",
    "text": "Remember, fashion is meant to be fun. Use these guidelines as a starting point, but don''t be afraid to experiment with textures, layering, and accessories to make the look uniquely yours."
  },
  {
    "type": "shop-the-post",
    "products": [
      { "url": "#", "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=100&q=80", "alt": "Shoe 1" },
      { "url": "#", "image": "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=100&q=80", "alt": "Bag 1" },
      { "url": "#", "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=100&q=80", "alt": "Shoe 2" },
      { "url": "#", "image": "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=100&q=80", "alt": "Hat" },
      { "url": "#", "image": "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=100&q=80", "alt": "Shoe 3" }
    ]
  }
]'::jsonb
WHERE slug = 'summer-sandals-2026';
