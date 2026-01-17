
import React from 'react';
import { ShieldAlert, Zap, Cpu, Database } from 'lucide-react';

const FEATURE_DATA = [
  {
    icon: <ShieldAlert className="text-white" size={24} />,
    title: "Leakage Audit",
    desc: "Uncovering the silent SaaS taxes draining your net profit."
  },
  {
    icon: <Cpu className="text-white" size={24} />,
    title: "Custom Engines",
    desc: "Bespoke operational software that outperforms rented tools."
  },
  {
    icon: <Database className="text-white" size={24} />,
    title: "Asset Creation",
    desc: "Transforming overhead into proprietary balance sheet value."
  },
  {
    icon: <Zap className="text-white" size={24} />,
    title: "Pure Velocity",
    desc: "Eliminating the bottlenecks that slow down your scale."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_DATA.map((feature, i) => (
            <div key={i} className="group glass p-10 rounded-[2rem] hover:bg-white/[0.05] transition-all duration-500 cursor-default border-white/5">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 tracking-tight uppercase">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
