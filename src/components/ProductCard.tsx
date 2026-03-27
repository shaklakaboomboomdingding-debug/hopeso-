import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { Product } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

import { useCart } from '@/src/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl p-6 flex flex-col gap-4 transition-all duration-500 hover:border-brand-blue/50"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-black/40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-brand-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 text-brand-blue fill-brand-blue" />
          <span className="text-[10px] font-bold">4.9</span>
        </div>
      </Link>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
          {product.category}
        </span>
        <h3 className="text-xl font-black italic uppercase tracking-tight">
          {product.name}
        </h3>
        <p className="text-xs text-white/60 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
        <span className="text-2xl font-black">${product.price}</span>
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
          className="p-3 bg-white text-brand-black rounded-2xl hover:bg-brand-blue hover:text-white transition-all active:scale-90"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
}
