import { motion } from 'framer-motion';
import { PRODUCTS } from '@/src/constants';
import { ProductCard } from './ProductCard';

export function ProductShowcase() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            The <span className="text-brand-blue">Lineup</span>
          </h2>
          <p className="text-white/60 max-w-md">
            Engineered for peak performance. Choose your fuel and push your limits.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 md:pb-0 no-scrollbar">
          {['All', 'Original', 'Sugar-Free', 'Editions'].map((cat) => (
            <button
              key={cat}
              className="px-6 py-2 rounded-full border border-white/10 text-sm font-bold whitespace-nowrap hover:bg-white hover:text-brand-black transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
