import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { CONTENT_FEED } from '@/src/constants';

export function ContentSection() {
  return (
    <section className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Vortex <span className="text-brand-red">Culture</span>
          </h2>
          <p className="text-white/60">Live the adrenaline. Watch the latest from our global community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTENT_FEED.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center glow-red">
                  <Play className="w-8 h-8 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-black italic uppercase tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-10 py-4 border border-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
            Watch More
          </button>
        </div>
      </div>
    </section>
  );
}
