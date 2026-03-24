import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: '特徴', href: '/#features' },
    { name: 'ご提案内容', href: '/#deliverables' },
    { name: '資料ダウンロード', href: '/#download' },
    { name: 'よくある質問', href: '/#faq' },
    { name: 'お役立ち資料', href: '/resources' },
    { name: 'コラム', href: '/columns' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-secondary/30 selection:text-primary flex flex-col">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className={`font-black text-xl tracking-tight transition-colors ${isScrolled || !isHome ? 'text-primary' : 'text-white'}`}>
            REDAS <span className="text-secondary">Supplement Formula Engine</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, i) => (
              link.href.startsWith('/#') ? (
                <a key={i} href={link.href} className={`font-bold text-sm hover:text-secondary transition-colors ${isScrolled || !isHome ? 'text-gray-600' : 'text-white/80'}`}>
                  {link.name}
                </a>
              ) : (
                <Link key={i} to={link.href} className={`font-bold text-sm hover:text-secondary transition-colors ${isScrolled || !isHome ? 'text-gray-600' : 'text-white/80'}`}>
                  {link.name}
                </Link>
              )
            ))}
            <a href="/#contact" className="bg-accent hover:bg-accent-hover text-primary font-bold py-2.5 px-6 rounded-full shadow-sm transition-all transform hover:scale-105">
              無料相談 / 企画提案
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`lg:hidden p-2 ${isScrolled || !isHome ? 'text-primary' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg"
            >
              <div className="flex flex-col p-4 gap-4">
                {navLinks.map((link, i) => (
                  link.href.startsWith('/#') ? (
                    <a key={i} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-600 p-2">
                      {link.name}
                    </a>
                  ) : (
                    <Link key={i} to={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-gray-600 p-2">
                      {link.name}
                    </Link>
                  )
                ))}
                <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-accent text-primary text-center font-bold py-3 px-6 rounded-full mt-2">
                  無料相談 / 企画提案
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/50 py-12 text-center text-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="font-black text-2xl text-white mb-6">REDAS</div>
          <p className="font-medium">&copy; REDAS All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating CTA */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 bg-accent hover:bg-accent-hover text-primary font-black py-4 px-6 rounded-full shadow-2xl z-50 flex items-center gap-2 transition-transform hover:scale-105"
          >
            <MessageSquare size={20} />
            <span className="hidden md:inline">無料相談 / 企画提案</span>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}
