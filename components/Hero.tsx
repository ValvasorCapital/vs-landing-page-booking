
import React from 'react';
import { ChevronDown, Globe, Shield, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 hero-gradient overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-zinc-800/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          Now Deploying Alpha Strategies
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight text-glow">
          THE NEXUS OF <span className="text-zinc-500">CAPITAL</span> & <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600">CREATIVE MASTERY.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Valvasor Capital isn't just a studio; it's a financial high-ground for visionaries. 
          We engineer wealth and design legacies for the top 0.1%.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#booking" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2">
            Initialize Partnership
          </a>
          <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2">
            View Manifesto
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600">
        <span className="text-[10px] uppercase tracking-[0.3em]">Explore Excellence</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>

      {/* Trust Badges */}
      <div className="absolute bottom-24 left-0 w-full hidden lg:flex justify-center">
        <div className="flex gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2"><Globe size={20} /> <span className="font-bold">GLOBAL REACH</span></div>
          <div className="flex items-center gap-2"><Shield size={20} /> <span className="font-bold">SECURE ASSETS</span></div>
          <div className="flex items-center gap-2"><Zap size={20} /> <span className="font-bold">INSTANT EXECUTION</span></div>
        </div>
      </div>
    </section>
  );
};
