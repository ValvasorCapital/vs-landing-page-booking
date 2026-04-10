
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 lg:px-8 bg-black overflow-hidden z-10">
      {/* Deep, subtle background glow for the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-zinc-900/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase mb-6">
            Methodology
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            {t.features.title}
          </h2>
        </div>
        
        {/* 2x2 High-End Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.features.items.map((feature, i) => (
            <div 
              key={i} 
              className="group relative p-10 lg:p-12 rounded-[2rem] bg-[#0a0a0a] border border-white/[0.04] overflow-hidden transition-all duration-700 hover:border-white/[0.08] hover:bg-[#111111]"
            >
              {/* Subtle corner glow on hover inside the card */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 blur-[60px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700 pointer-events-none" />
              
              {/* Massive, extremely faint background number */}
              <div className="absolute -bottom-8 -right-4 text-[180px] font-bold text-white/[0.015] leading-none pointer-events-none select-none transition-transform duration-1000 group-hover:scale-105 group-hover:text-white/[0.03]">
                0{i + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between gap-16 md:gap-24">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
                    Phase 0{i + 1}
                  </span>
                  {/* Elegant minimalist dot indicator */}
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-emerald-500/50 transition-colors duration-700 shadow-[0_0_0_rgba(16,185,129,0)] group-hover:shadow-[0_0_12px_rgba(16,185,129,0.4)]" />
                </div>
                
                <div>
                  <h3 className="text-2xl lg:text-3xl font-medium mb-5 tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-base lg:text-lg leading-relaxed font-normal max-w-md">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
