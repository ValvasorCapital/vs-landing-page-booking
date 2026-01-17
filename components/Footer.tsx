
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
            <img 
              src="/valvasor-logo.svg" 
              alt="Valvasor Capital" 
              className="h-12 w-auto"
            />
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-zinc-500 text-xs font-medium uppercase tracking-wider">
            <a href="https://valvasorcapital.com/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://valvasorcapital.com/#aboutUs" className="hover:text-white transition-colors">About Us</a>
            <a href="https://valvasorcapital.com/#transactions" className="hover:text-white transition-colors">Track Record</a>
            <a href="https://valvasorcapital.com/#services" className="hover:text-white transition-colors">Services</a>
        </div>

        <div className="flex gap-6 items-center">
            <a href="https://www.linkedin.com/company/valvasor-capital/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={18} />
            </a>
            <a href="mailto:liaison@valvasorcapital.com" className="text-zinc-500 hover:text-white transition-colors">
                <Mail size={18} />
            </a>
        </div>

        <div className="pt-12 border-t border-zinc-900 w-full text-center space-y-4">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                © 2026 VALVASOR CAPITAL. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[8px] text-zinc-800 max-w-2xl mx-auto leading-relaxed">
                Investing involves risk. Content on this site is for informational purposes only. Turn your operational bottlenecks into high-performance proprietary assets.
            </p>
        </div>
      </div>
    </footer>
  );
};
