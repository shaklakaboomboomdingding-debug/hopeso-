import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Star, ShoppingCart, Zap, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';

import { useCart } from '@/src/CartContext';

export function ProductDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState('250ml');
  const [selectedFlavor, setSelectedFlavor] = useState(product?.flavors?.[0] || 'Original');

  if (!product) return <div>Product not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-24 px-6 max-w-7xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 group transition-colors">
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Lineup</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Product Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative aspect-[3/4] rounded-[40px] overflow-hidden glass p-12 flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-8 right-8 flex flex-col gap-4">
            <div className="w-12 h-12 bg-brand-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10">
              <Zap className="w-6 h-6 text-brand-blue fill-brand-blue" />
            </div>
          </div>
        </motion.div>

        {/* Product Info */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-2 text-brand-blue mb-4">
              <Star className="w-5 h-5 fill-brand-blue" />
              <Star className="w-5 h-5 fill-brand-blue" />
              <Star className="w-5 h-5 fill-brand-blue" />
              <Star className="w-5 h-5 fill-brand-blue" />
              <Star className="w-5 h-5 fill-brand-blue" />
              <span className="text-sm font-bold ml-2">5.0 (2.4k Reviews)</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 leading-none">
              {product.name}
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-5xl font-black">${product.price}</span>
            <span className="px-4 py-1 bg-brand-blue/20 text-brand-blue rounded-full text-xs font-black uppercase tracking-widest">
              In Stock
            </span>
          </div>

          {/* Flavor Selector */}
          {product.flavors && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Select Flavor</h4>
              <div className="flex flex-wrap gap-3">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor}
                    onClick={() => setSelectedFlavor(flavor)}
                    className={cn(
                      "px-6 py-3 rounded-2xl font-bold transition-all border",
                      selectedFlavor === flavor 
                        ? "bg-white text-brand-black border-white" 
                        : "bg-transparent text-white border-white/10 hover:border-white/40"
                    )}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size Selector */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Select Size</h4>
            <div className="flex gap-3">
              {['250ml', '355ml', '473ml'].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "px-6 py-3 rounded-2xl font-bold transition-all border",
                    selectedSize === size 
                      ? "bg-brand-blue text-brand-black border-brand-blue" 
                      : "bg-transparent text-white border-white/10 hover:border-white/40"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button 
              onClick={() => addToCart(product)}
              className="flex-1 px-10 py-5 bg-brand-red rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3 glow-red hover:scale-[1.02] active:scale-95 transition-all"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-md rounded-full font-black uppercase tracking-widest border border-white/20 hover:bg-white/20 transition-all">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-32">
        <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-12">
          You Might <span className="text-brand-blue">Also Like</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map((p) => (
            <Link key={p.id} to={`/product/${p.id}`}>
              <div className="glass rounded-3xl p-6 hover:border-brand-blue/50 transition-all group">
                <img src={p.image} alt={p.name} className="w-full aspect-square object-cover rounded-2xl mb-4 group-hover:scale-105 transition-transform" />
                <h3 className="font-black italic uppercase">{p.name}</h3>
                <p className="text-sm text-white/40">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
