
import React from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/valvasor-logo.svg" 
            alt="Valvasor Capital" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="https://valvasorcapital.com/#services" className="text-sm font-normal text-zinc-400 hover:text-white transition-colors tracking-wide">Services</a>
          <a href="https://valvasorcapital.com/#transactions" className="text-sm font-normal text-zinc-400 hover:text-white transition-colors tracking-wide">Track Record</a>
          <a href="https://valvasorcapital.com/#aboutUs" className="text-sm font-normal text-zinc-400 hover:text-white transition-colors tracking-wide">About Us</a>
          <a href="#booking" className="text-sm font-medium px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-all flex items-center gap-2 tracking-wide">
            Request Audit <ArrowRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-6 right-6 glass p-6 rounded-2xl md:hidden animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <a href="https://valvasorcapital.com/#services" className="text-lg font-medium border-b border-zinc-800 pb-2">Services</a>
            <a href="https://valvasorcapital.com/#transactions" className="text-lg font-medium border-b border-zinc-800 pb-2">Track Record</a>
            <a href="https://valvasorcapital.com/#aboutUs" className="text-lg font-medium border-b border-zinc-800 pb-2">About Us</a>
            <a href="#booking" className="text-lg font-medium bg-white text-black p-3 rounded-lg text-center" onClick={() => setIsOpen(false)}>Request Audit</a>
          </div>
        </div>
      )}
    </nav>
  );
};
