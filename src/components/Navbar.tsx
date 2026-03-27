import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

import { useCart } from '@/src/CartContext';

export function Navbar() {
  const { totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-brand-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="w-8 h-8 text-brand-red fill-brand-red group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black tracking-tighter italic">VORTEX</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Products', 'Athletes', 'Events', 'Culture'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-sm font-bold uppercase tracking-widest hover:text-brand-blue transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-red text-[10px] font-bold flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-black flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {['Products', 'Athletes', 'Events', 'Culture'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter italic hover:text-brand-red transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
