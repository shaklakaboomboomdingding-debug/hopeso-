import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video Placeholder (using a high-quality image for now) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/extreme/1920/1080"
          alt="Extreme Sports"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/20 to-brand-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic uppercase leading-none mb-6">
            Unlock Your <br />
            <span className="text-brand-red drop-shadow-[0_0_15px_rgba(255,0,0,0.5)]">Energy</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium text-white/80 max-w-2xl mx-auto mb-10">
            Performance driven by adrenaline. The ultimate fuel for those who live on the edge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-brand-red rounded-full font-bold uppercase tracking-widest flex items-center gap-2 overflow-hidden glow-red transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">Shop Now</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-full font-bold uppercase tracking-widest flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-all">
              <Play className="w-5 h-5 fill-white" />
              Explore Energy
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 md:right-20 hidden lg:block"
      >
        <div className="w-32 h-32 rounded-full bg-brand-blue/20 blur-3xl" />
      </motion.div>
    </section>
  );
}
