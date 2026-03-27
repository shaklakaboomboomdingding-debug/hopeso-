import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export function EventBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 5,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto glass rounded-[40px] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[100px] pointer-events-none" />
        
        <div className="flex-1">
          <div className="flex items-center gap-3 text-brand-blue mb-6">
            <Calendar className="w-6 h-6" />
            <span className="text-sm font-black uppercase tracking-widest">Upcoming Event</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
            Vortex <span className="text-brand-blue">Air Games</span> 2026
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-lg">
            The world's most daring wingsuit competition returns to the Swiss Alps. Witness history in the making.
          </p>
          <button className="group px-8 py-4 bg-brand-blue text-brand-black rounded-full font-black uppercase tracking-widest flex items-center gap-2 glow-blue hover:scale-105 transition-all">
            Get Tickets
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex gap-4 md:gap-8">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div key={label} className="flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black italic text-brand-blue mb-2">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
