import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { ContentSection } from './components/ContentSection';
import { AthleteSection } from './components/AthleteSection';
import { UGCFeed } from './components/UGCFeed';
import { EventBanner } from './components/EventBanner';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import { motion, AnimatePresence } from 'framer-motion';
import { CartProvider } from './CartContext';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProductShowcase />
      <ContentSection />
      <AthleteSection />
      <UGCFeed />
      <EventBanner />
      <Newsletter />
    </motion.div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-brand-black selection:bg-brand-blue selection:text-brand-black">
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
