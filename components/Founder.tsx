import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const Founder: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-32 px-4 md:px-6 lg:px-8 bg-[#020202] border-t border-white/[0.02] overflow-hidden">
      {/* Background elegant gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Large High-End Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/[0.05] shadow-2xl">
              <img 
                src="/founder.png" 
                alt="Rei Topol" 
                className="w-full h-full object-cover object-center filter contrast-125 saturate-[0.85] group-hover:saturate-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
            </div>
            
            {/* Subtle decorative elements behind the image */}
            <div className="absolute -z-10 top-8 -right-8 w-full h-full border border-white/[0.03] rounded-[2rem] hidden md:block" />
            <div className="absolute -z-10 top-16 -right-16 w-full h-full border border-white/[0.01] rounded-[2rem] hidden md:block" />
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase mb-10 w-max">
              {t.founder.badge}
            </div>
            
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-10 max-w-2xl">
              {t.founder.title}
            </h2>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-normal max-w-2xl mb-12">
              {t.founder.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/[0.05] flex items-center justify-between max-w-2xl">
              <div>
                <p className="text-white text-lg font-medium tracking-tight">{t.founder.name}</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest mt-1">{t.founder.role}</p>
              </div>
              
              {/* Subtle signature line or monogram look */}
              <div className="text-3xl font-serif text-white/20 italic select-none">
                RT.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
