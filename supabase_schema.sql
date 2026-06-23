-- Run this entire script in the Supabase SQL Editor

-- 1. Create categories table
CREATE TABLE IF NOT EXISTS public.categories (
    slug text PRIMARY KEY,
    label text NOT NULL,
    description text NOT NULL,
    post_count integer DEFAULT 0,
    subtags jsonb DEFAULT '[]'::jsonb,
    accent_color text NOT NULL
);

-- 2. Create posts table
CREATE TABLE IF NOT EXISTS public.posts (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    slug text UNIQUE NOT NULL,
    category_slug text REFERENCES public.categories(slug),
    title text NOT NULL,
    author text,
    date text,
    read_time text,
    intro text,
    hero_image text,
    sections jsonb DEFAULT '[]'::jsonb,
    related_posts jsonb DEFAULT '[]'::jsonb,
    popular_posts jsonb DEFAULT '[]'::jsonb
);

-- 3. Enable read access for everyone (so Next.js can fetch data)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on categories"
  ON public.categories FOR SELECT USING (true);

CREATE POLICY "Allow public read access on posts"
  ON public.posts FOR SELECT USING (true);

-- 4. Insert Mock Categories
INSERT INTO public.categories (slug, label, description, post_count, subtags, accent_color) VALUES
('fashion', 'Fashion', 'Outfit ideas, style guides, seasonal trends, and the best fashion finds across every budget.', 142, '["ALL", "sneakers", "black leather jacket", "dresses", "jeans"]', '#e5dfd5'),
('plus-size', 'Plus Size', 'Fashion-forward picks, outfit inspiration, and style guides for every body and every occasion.', 87, '["ALL", "dresses", "jeans", "workwear", "swimwear"]', '#ede7dc'),
('nails', 'Nails', 'Nail art inspo, the best nail polishes, salon reviews, and at-home manicure tips.', 54, '["ALL", "nail art", "gel nails", "nail polish", "trends"]', '#f0e8e8'),
('hairstyle', 'Hairstyle', 'Hair inspiration, tutorials, product reviews, and the best hairstyles for every hair type.', 63, '["ALL", "tutorials", "products", "cut & color", "updos"]', '#e8e4da'),
('blogs', 'Blogs', 'Personal stories, life updates, travel diaries, and everything happening behind the scenes.', 38, '["ALL", "personal", "travel", "lifestyle", "beauty"]', '#e5dfd5'),
('wardrobe', 'Wardrobe', 'Capsule wardrobes, styling tips, closet organization, and essential basics.', 112, '["ALL", "capsule", "basics", "organization", "styling"]', '#e8e4da')
ON CONFLICT (slug) DO NOTHING;

-- 5. Insert Mock Posts
INSERT INTO public.posts (slug, category_slug, title, author, date, read_time, hero_image, intro, sections, popular_posts) VALUES
('summer-sandals-2026', 'fashion', 'The Best Summer Sandals of 2026: Designer, Mid-Range, and Budget', 'The Combo Closet', '06.01.26', '10 min', 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600', 'Too much stuff, not enough space? Welcome to our guide.', '[{"type": "h2", "text": "A simple formula"}]'::jsonb, '[]'::jsonb),
('neutral-capsule-wardrobe', 'wardrobe', 'Building a Neutral Capsule Wardrobe', 'Elle Penner M.P.H., R.D.', 'JUN 15, 2026', '15 min', 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200', 'Too much stuff, not enough space, and no idea where to start? When I first started decluttering, I made all the mistakes. It wasn’t pretty, but I got through it, and once I did, I decluttered our entire home.', '[{"type":"h2","text":"A simple formula to declutter your home (and keep it that way)"},{"type":"p","text":"Most decluttering advice tells you what to do (get rid of things) but rarely how to actually execute it. That’s where my <a href=\"#\">SOS Declutter Method</a> comes in. It’s a repeatable process you can use in any room:"},{"type":"ul","items":["Simplify: This is decluttering to the core. Keep what you need and love.","Organize: Assign a logical home to everything left.","Systematize: Implement boundaries and small habits."]},{"type":"p","text":"This guide will show you how to apply the <a href=\"#\">SOS Method</a> in every room of your home—and more importantly, keep it that way. Check out the <a href=\"#\">SOS Declutter Method Guide</a> for a deeper dive and the questions I find most helpful."},{"type":"p","text":"If you’re looking for a clear place to start, I put together a <a href=\"#\">room-by-room declutter checklist</a> that walks you through exactly what to let go of."},{"type":"h2","text":"Choose a decluttering timeline that fits your life"},{"type":"shop-the-post","products":[{"url":"#","alt":"Shoe 1","image":"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=100&q=80"},{"url":"#","alt":"Bag 1","image":"https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=100&q=80"},{"url":"#","alt":"Shoe 2","image":"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=100&q=80"},{"url":"#","alt":"Hat","image":"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=100&q=80"},{"url":"#","alt":"Shoe 3","image":"https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=100&q=80"}]},{"type":"p","text":"Every home (and season) looks a little different. Don’t feel pressured to finish your entire house in a weekend if you have kids running around."},{"type":"h3","text":"If you live in an apartment or a smaller home"},{"type":"ul","items":["Three-month plan: Focus on one area every 1-2 weeks.","Two-month plan: Declutter one room or category per week.","One-month plan: Commit 20 minutes each day to a small area."]},{"type":"h3","text":"If you live in a family home (3+ bedrooms)"},{"type":"p","text":"Larger homes naturally take longer—there’s more stuff and usually more people creating messes."},{"type":"ul","items":["One-year plan: Declutter one room or category per month.","Six-month plan: Two rooms or categories per month.","Three-month plan: One room or category per week.","One-month sprint: Dedicate 15–30 minutes each day."]},{"type":"p","text":"<strong>Tip: Focus on momentum, not perfection. Progress is progress.</strong>"},{"type":"p","text":"Once you’ve chosen your pace, it’s time to begin!"},{"type":"accent-box","items":["Entryway & mudroom: Clears the path in and out.","Bathrooms: Small spaces, quick wins, and lots of expired products.","Kitchen: The heart of the home. Simplifying here makes life easier.","Toys: If you have kids, do this next.","Living spaces: Easier after toys are pared down.","Closets & clothing: High-impact but time-consuming.","Bedrooms: With closets simplified, this step resets the space.","Home office & paper: Mentally harder but high-impact.","Storage areas: Save these for last once your decluttering muscles are strong."],"text":"Not all rooms are equal when it comes to decluttering. Here’s the order I often recommend, but tailor it to what makes the most sense for you.","heading":"Where to start decluttering your home (and why the order matters)"},{"type":"accent-box","items":["Trash bag: For obvious tosses and broken items.","Donation box or bag: For the things you no longer need.","Recycle bin: For paper and packaging.","Vacuum or handheld cleaner: For those crumbs and dust.","All-purpose spray + cloth: Give surfaces a quick wipe.","Timer: Keeps you focused and helps you avoid burnout."],"text":"Having a few basic supplies handy will make the decluttering process faster and more efficient.","heading":"Helpful decluttering supplies","bordered":true}]'::jsonb, '[{"date":"June 1, 2026","slug":"organization-bins","title":"The 10 Best Organization Bins","category":"HOME","imageUrl":"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=150"},{"date":"May 28, 2026","slug":"minimalist-kitchen","title":"A Minimalist Guide to Kitchen Gadgets","category":"KITCHEN","imageUrl":"https://images.unsplash.com/photo-1572804013427-4d7ca7268217?auto=format&fit=crop&q=80&w=150"},{"date":"May 15, 2026","slug":"spring-edit","title":"Capsule Wardrobe: The Spring Edit","category":"FASHION","imageUrl":"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=150"},{"date":"May 10, 2026","slug":"minimalist-clothing-brands","title":"30 Best Minimalist Clothing Brands","category":"FASHION","imageUrl":"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=150"}]'::jsonb)
ON CONFLICT (slug) DO NOTHING;
