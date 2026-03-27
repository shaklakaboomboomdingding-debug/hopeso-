import { Zap, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <Zap className="w-8 h-8 text-brand-red fill-brand-red" />
              <span className="text-2xl font-black tracking-tighter italic">VORTEX</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              The ultimate fuel for high-performance living. Born in the mountains, engineered for the world.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Products</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Original</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sugar-Free</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tropical Edition</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Arctic Edition</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Company</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">About Vortex</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Athletes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8">Support</h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <p>© 2026 VORTEX ENERGY DRINK. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
