import { motion } from 'framer-motion';

const UGC_IMAGES = [
  'https://picsum.photos/seed/ugc1/400/400',
  'https://picsum.photos/seed/ugc2/400/400',
  'https://picsum.photos/seed/ugc3/400/400',
  'https://picsum.photos/seed/ugc4/400/400',
  'https://picsum.photos/seed/ugc5/400/400',
  'https://picsum.photos/seed/ugc6/400/400',
];

export function UGCFeed() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
            Fueled by <span className="text-brand-blue">You</span>
          </h2>
          <p className="text-white/40 uppercase tracking-widest font-bold text-sm">Tag #VORTEXENERGY to be featured</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {UGC_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden glass group cursor-pointer"
            >
              <img
                src={img}
                alt={`UGC ${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:rotate-3"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
