import React from 'react';

export const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="relative pt-28 pb-16 px-4 md:px-6 lg:px-8 bg-black overflow-x-hidden">
      {/* Subtle gradient backdrop for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-zinc-800/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl w-full mx-auto">
        {/* Hero Content */}
        <div className="text-center mb-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-[10px] font-medium tracking-[0.2em] text-zinc-400 uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse"></span>
            Architecting Operational Assets
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1] mb-5">
            <span className="text-white">Stop Renting.</span>
            <span className="text-zinc-600 ml-2 md:ml-3">Code Equity.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal">
            We engineer bespoke software ecosystems that surgically eliminate "SaaS Bloat" and recover thousands in leaking profit.
          </p>
        </div>

        {/* Booking Widget Container - Wider on desktop, responsive on mobile */}
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Subtle glow behind widget */}
          <div className="absolute -inset-4 bg-white/[0.02] rounded-3xl blur-xl pointer-events-none hidden md:block" />
          
          <div className="relative rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/mWml5VRSYfwRkpXAb8ji" 
              style={{ 
                width: '100%',
                border: 'none',
                overflow: 'hidden',
                display: 'block'
              }} 
              className="h-[1200px] md:h-[750px] w-full"
              scrolling="no" 
              id="mWml5VRSYfwRkpXAb8ji_1768660897184"
              title="Valvasor Capital Profit Audit"
            />
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-6 md:gap-10 text-zinc-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span className="text-[11px] font-normal tracking-wider uppercase">End-to-End Encrypted</span>
            </div>
            <div className="w-px h-4 bg-zinc-800" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-[11px] font-normal tracking-wider uppercase">Secure Liaison</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
