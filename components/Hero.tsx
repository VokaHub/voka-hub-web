
import React, { useState } from 'react';
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

const Hero: React.FC = () => {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  // Updated to the requested video ID
  const youtubeId = "DlCX2evWpGQ";

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center md:justify-end pb-20 md:pb-32 bg-black text-white px-6 md:px-12 border-b border-zinc-900 overflow-hidden">
      
      {/* VIDEO MODAL (Cinema Mode) */}
      {isDemoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
           <button 
             onClick={() => setIsDemoOpen(false)} 
             className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-50"
           >
             <XMarkIcon className="w-10 h-10" />
           </button>
           <div className="w-full max-w-6xl aspect-video bg-black shadow-2xl relative border border-zinc-800">
             <iframe 
               width="100%" 
               height="100%" 
               src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`} 
               title="VOKA Demo Reel" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
           </div>
        </div>
      )}

      {/* Blue-Violet Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-br from-violet-600/30 to-blue-600/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0 opacity-60 md:opacity-100"></div>
      <div className="absolute bottom-0 left-[-10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-indigo-900/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="container mx-auto max-w-screen-xl relative z-10 pt-20 md:pt-0">
        
        {/* Top Spacer / decorative element */}
        <div className="absolute top-0 right-0 hidden md:flex items-center gap-4 -mt-60">
           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
           <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Agency Mode: Active</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          
          {/* Main Headline */}
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] text-white uppercase mb-8 md:mb-12">
              Conectamos <br />
              <span className="text-zinc-400">Talento &</span> <br />
              <span className="text-white">Recursos.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <button className="w-full md:w-auto group flex justify-center items-center gap-4 px-10 py-5 bg-white text-black hover:bg-zinc-200 transition-colors">
                <span className="text-sm font-bold tracking-widest uppercase">Agendar Reunión</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Context & Clean Play Button */}
          <div className="lg:col-span-4 lg:pb-1 mt-8 md:mt-0">
            <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed mb-8 max-w-sm hidden md:block">
              Transformamos ideas abstractas en activos tangibles. <br />
              Sin fricción. Sin burocracia.
            </p>
            
            <div className="h-px w-full bg-gradient-to-r from-zinc-900 via-indigo-900/50 to-zinc-900 mb-8 hidden md:block"></div>

            {/* CLEAN DEMO REEL TRIGGER */}
            <button 
              onClick={() => setIsDemoOpen(true)}
              className="group flex items-center gap-4 text-left w-full bg-zinc-900/40 md:bg-transparent p-4 md:p-4 rounded-lg md:rounded-none -ml-0 md:-ml-4 border border-zinc-800 md:border-none transition-all"
            >
               <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-lg shrink-0">
                  <PlayIcon className="w-4 h-4 md:w-5 md:h-5 ml-0.5 text-white group-hover:text-black transition-colors" />
               </div>
               <div>
                  <span className="block text-white text-sm font-bold tracking-widest uppercase group-hover:text-indigo-400 transition-colors">Ver Demo Reel</span>
                  <span className="block text-zinc-500 text-[10px] font-mono uppercase tracking-wider">Agency Showreel • 2024</span>
               </div>
            </button>

            <div className="flex justify-between items-center text-xs font-mono text-zinc-500 uppercase mt-8 hidden md:flex">
               <span>Est. 2024</span>
               <span>Guatemala City</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
