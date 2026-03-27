import { motion } from 'framer-motion';
import { ATHLETES } from '@/src/constants';

export function AthleteSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            The <span className="text-brand-red">Team</span>
          </h2>
          <p className="text-white/60">The world's most elite athletes, powered by Vortex.</p>
        </div>
        <button className="px-8 py-3 border border-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-brand-red transition-all">
          Meet the Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ATHLETES.map((athlete, index) => (
          <motion.div
            key={athlete.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden"
          >
            <img
              src={athlete.image}
              alt={athlete.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2 block">
                {athlete.sport}
              </span>
              <h3 className="text-3xl font-black italic uppercase tracking-tight">
                {athlete.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
