import "./globals.css";
import { Inter, Playfair_Display, Great_Vibes } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cursive',
  display: 'swap',
});

export const metadata = {
  title: "The Combo Closet",
  description: "Premium Fashion Blog and Magazine",
};

import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
        <div className="site-wrapper">
          {/* Header */}
          <header className="container flex justify-between items-center" style={{ padding: '1.5rem var(--spacing-sm)', borderBottom: '1px solid var(--color-border)', marginBottom: '0' }}>
            <div className="flex items-center gap-sm">
              <span style={{ fontSize: '1.5rem', cursor: 'pointer', userSelect: 'none' }}>≡</span>
              <Link href="/" className="flex items-center" style={{ gap: '0.5rem', textDecoration: 'none' }}>
                 <span className="text-script" style={{ fontSize: '2.5rem', color: '#b0afa9', lineHeight: '1' }}>tcc</span>
                 <span className="text-serif" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px', color: '#000' }}>the combo closet</span>
              </Link>
            </div>
            <nav className="flex gap-md text-sans uppercase" style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.05em', color: '#000' }}>
              <Link href="/category/fashion">fashion</Link>
              <Link href="/category/plus-size">plus size</Link>
              <Link href="/category/nails">nails</Link>
              <Link href="/category/hairstyle">hairstyle</Link>
              <Link href="/category/blogs">blogs</Link>
            </nav>
            <div className="flex items-center gap-sm">
              <button className="uppercase text-sans" style={{ backgroundColor: '#e8e0d5', border: 'none', padding: '0.5rem 1.2rem', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.05em', cursor: 'pointer' }}>Shop</button>
              <div className="flex" style={{ gap: '0.8rem', fontSize: '0.9rem', color: '#000', cursor: 'pointer' }}>
                <span>IG</span>
                <span>PI</span>
                <span>TW</span>
                <span>EM</span>
                <span>🔍</span>
              </div>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer style={{ marginTop: '0', width: '100%', position: 'relative', zIndex: 20 }}>
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
              
              {/* Top section: Logo and Line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <h2 className="text-serif" style={{ fontSize: '4.5rem', fontWeight: '900', fontStyle: 'italic', margin: 0, lineHeight: 1 }}>tcc</h2>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0', marginTop: '1rem' }}></div>
              </div>

              {/* Columns and Button section */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                
                {/* 5 Columns Container */}
                <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                  
                  {/* Column 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Blog</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>About</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Contact</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Subscribe</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Partner</a>
                  </div>

                  {/* Column 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Shop</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Recent Outfits</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>By Instagram</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Amy's Picks</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Liketoknow.it</a>
                  </div>

                  {/* Column 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Browse</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Style</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Beauty</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Travel</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Lifestyle</a>
                  </div>

                  {/* Column 4 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Connect</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Instagram</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Liketoknow.it</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Pinterest</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Facebook</a>
                  </div>

                  {/* Column 5 */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Subscribe</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Newsletter</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>RSS Feed</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Bloglovin'</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Feedly</a>
                  </div>

                </div>

                {/* Back to top button */}
                <div>
                  <button className="text-sans uppercase" style={{ backgroundColor: '#f2e6e1', border: 'none', padding: '0.8rem 1.5rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.15em', cursor: 'pointer', color: '#000' }}>
                    Back to Top ^
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Black Bar */}
            <div style={{ backgroundColor: '#000', color: '#fff', width: '100%', padding: '2.5rem 0' }}>
              <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                
                {/* Left Links */}
                <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                  <a href="#" className="text-sans uppercase" style={{ fontSize: '0.6rem', color: '#999', letterSpacing: '0.15em' }}>Terms of Use</a>
                  <a href="#" className="text-sans uppercase" style={{ fontSize: '0.6rem', color: '#999', letterSpacing: '0.15em' }}>Privacy Policy</a>
                  <span className="text-sans uppercase" style={{ fontSize: '0.6rem', color: '#999', letterSpacing: '0.15em' }}>© 2026 All Rights Reserved</span>
                </div>

                {/* Right Link */}
                <div className="text-sans uppercase" style={{ fontSize: '0.6rem', color: '#999', letterSpacing: '0.15em' }}>
                  Site by VMS and Elembee
                </div>

              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
