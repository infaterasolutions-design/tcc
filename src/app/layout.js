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
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable}`}>
        <div className="site-wrapper">
          <Header />

          {children}

          {/* Footer */}
          <footer className="site-footer" style={{ marginTop: '0', width: '100%', position: 'relative', zIndex: 20 }}>
            <style>{`
              @media (max-width: 900px) {
                .footer-columns-container { flex-direction: column !important; gap: 2.5rem !important; align-items: center; text-align: center; }
                .footer-column { align-items: center !important; }
                .footer-bottom-bar { flex-direction: column !important; text-align: center; gap: 1rem !important; }
                .footer-bottom-links { justify-content: center !important; }
                .footer-logo { font-size: 3.5rem !important; }
                .footer-logo-row { flex-direction: column !important; text-align: center !important; gap: 1rem !important; }
                .footer-logo-line { display: none !important; }
                .back-to-top-container { width: 100%; display: flex; justify-content: center; margin-top: 1rem; }
                .footer-layout-row { flex-direction: column !important; align-items: center !important; }
              }
            `}</style>
            <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem' }}>
              
              {/* Top section: Logo and Line */}
              <div className="footer-logo-row" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                <h2 className="text-serif footer-logo" style={{ fontSize: '4.5rem', fontWeight: '900', fontStyle: 'italic', margin: 0, lineHeight: 1 }}>tcc</h2>
                <div className="footer-logo-line" style={{ flex: 1, height: '1px', backgroundColor: '#e0e0e0', marginTop: '1rem' }}></div>
              </div>

              {/* Columns and Button section */}
              <div className="footer-layout-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
                
                {/* 5 Columns Container */}
                <div className="footer-columns-container" style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
                  
                  {/* Column 1 */}
                  <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Blog</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>About</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Contact</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Subscribe</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Partner</a>
                  </div>

                  {/* Column 2 */}
                  <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Shop</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Recent Outfits</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>By Instagram</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Amy's Picks</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Liketoknow.it</a>
                  </div>

                  {/* Column 3 */}
                  <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Browse</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Style</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Beauty</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Travel</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Lifestyle</a>
                  </div>

                  {/* Column 4 */}
                  <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Connect</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Instagram</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Liketoknow.it</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Pinterest</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Facebook</a>
                  </div>

                  {/* Column 5 */}
                  <div className="footer-column" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 className="text-serif" style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Subscribe</h4>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Newsletter</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>RSS Feed</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Bloglovin'</a>
                    <a href="#" className="text-sans uppercase" style={{ fontSize: '0.65rem', color: '#555', letterSpacing: '0.15em' }}>Feedly</a>
                  </div>

                </div>

                {/* Back to top button */}
                <div className="back-to-top-container">
                  <button className="text-sans uppercase" style={{ backgroundColor: '#f2e6e1', border: 'none', padding: '0.8rem 1.5rem', fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.15em', cursor: 'pointer', color: '#000' }}>
                    Back to Top ^
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Black Bar */}
            <div style={{ backgroundColor: '#000', color: '#fff', width: '100%', padding: '2.5rem 0' }}>
              <div className="footer-bottom-bar" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                
                {/* Left Links */}
                <div className="footer-bottom-links" style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
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
