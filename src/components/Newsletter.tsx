import { motion } from 'framer-motion';
import { Instagram, Send } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-24 bg-brand-red relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter mb-6">
          Join the <br />
          <span className="text-brand-black">Energy Movement</span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Get exclusive access to limited drops, event tickets, and the latest from the Vortex world.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-8 py-4 bg-brand-black rounded-full font-bold text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
          />
          <button className="px-10 py-4 bg-white text-brand-black rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-black hover:text-white transition-all active:scale-95">
            Join Now
            <Send className="w-5 h-5" />
          </button>
        </form>
        
        <div className="mt-12 flex items-center justify-center gap-4 text-white/60">
          <Instagram className="w-5 h-5" />
          <span className="text-sm font-bold uppercase tracking-widest">#VortexEnergy</span>
        </div>
      </div>
    </section>
  );
}
