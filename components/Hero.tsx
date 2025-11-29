import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-32 bg-black text-white px-6 md:px-12 border-b border-zinc-900 overflow-hidden">
      
      {/* Blue-Violet Ambient Glows */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-violet-600/30 to-blue-600/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Main Content Container with Standardized Alignment */}
      <div className="container mx-auto max-w-screen-xl relative z-10">
        
        {/* Top Spacer / decorative element */}
        <div className="absolute top-0 right-0 hidden md:flex items-center gap-4 -mt-60">
           <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
           <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">Agency Mode: Active</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Main Headline - Taking up 8 columns */}
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] text-white uppercase mb-12">
              Conectamos <br />
              <span className="text-zinc-400">Talento &</span> <br />
              <span className="text-white">Recursos.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <button className="group flex items-center gap-4 px-8 py-4 bg-white text-black hover:bg-zinc-200 transition-colors">
                <span className="text-xs font-bold tracking-widest uppercase">Agendar Reunión</span>
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group flex items-center gap-4 px-6 py-4 border border-zinc-800 hover:border-indigo-500 transition-colors text-white">
                 <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <PlayIcon className="w-3 h-3" />
                 </div>
                 <span className="text-xs font-bold tracking-widest uppercase">Ver Demo Reel</span>
              </button>
            </div>
          </div>

          {/* Right Column - Context */}
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-zinc-300 text-lg font-light leading-relaxed mb-8 max-w-sm">
              Transformamos ideas abstractas en activos tangibles. <br />
              Sin fricción. Sin burocracia.
            </p>
            <div className="h-px w-full bg-gradient-to-r from-zinc-900 via-indigo-900/50 to-zinc-900 mb-8"></div>
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500 uppercase">
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