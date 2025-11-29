import React from 'react';
import { ArrowUpRightIcon, MicrophoneIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

const events = [
  { date: "12 OCT", isoDate: "2024-10-12", title: "Fotografía de Producto", category: "Workshop", time: "18:00" },
  { date: "18 OCT", isoDate: "2024-10-18", title: "Nutrición Ejecutiva", category: "Talk", time: "09:00" },
  { date: "25 OCT", isoDate: "2024-10-25", title: "Estrategia Legal", category: "Business", time: "17:30" },
  { date: "02 NOV", isoDate: "2024-11-02", title: "Storytelling Personal", category: "Workshop", time: "10:00" }
];

const Academy: React.FC = () => {
  // Sort events by closest date
  const sortedEvents = [...events].sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime());

  return (
    // Changed to bg-white and text-black
    <section id="academy" className="bg-white text-black py-32 border-t border-zinc-200 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
           
           {/* Intro */}
           <div className="lg:col-span-4">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-black uppercase">
                Academy<span className="text-indigo-600">.</span>
              </h2>
              <p className="text-zinc-700 font-light mb-12 text-lg">
                 Aprende. Enseña. Conecta. Talleres prácticos y charlas de alto nivel.
              </p>
              <button className="px-8 py-3 border border-black text-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                 Ver Calendario
              </button>
           </div>

           {/* Podcast Preview - Updated to WATCH */}
           <div className="lg:col-span-4">
              <div className="border border-zinc-300 p-6 h-full flex flex-col justify-between group hover:border-black transition-colors">
                 <div className="mb-8">
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 flex items-center gap-2">
                         <MicrophoneIcon className="w-3 h-3" /> VOKA Podcast
                       </span>
                       <span className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Latest Drop</span>
                    </div>
                    <h3 className="text-2xl font-normal text-black leading-tight">
                       "El futuro de la creatividad urbana en LATAM."
                    </h3>
                 </div>
                 
                 {/* Video Placeholder */}
                 <div className="aspect-video w-full bg-zinc-100 relative flex items-center justify-center cursor-pointer overflow-hidden">
                    <img src="https://picsum.photos/600/400?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform shadow-xl">
                       <PlayIcon className="w-4 h-4 ml-1" />
                    </div>
                 </div>
              </div>
           </div>

           {/* Events List - Sorted */}
           <div className="lg:col-span-4">
              <div className="border-t border-zinc-300">
                 {sortedEvents.map((e, i) => (
                    <div key={i} className="group flex flex-col justify-between py-6 border-b border-zinc-300 hover:pl-4 transition-all cursor-pointer">
                       <div className="mb-2">
                          <span className="font-mono text-zinc-600 text-xs mb-1 block">{e.date} • {e.time}</span>
                          <h4 className="text-lg font-normal tracking-tight text-black group-hover:underline decoration-zinc-400 underline-offset-4">{e.title}</h4>
                       </div>
                       <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-wider text-zinc-600 border border-zinc-300 px-2 py-1 rounded-full">{e.category}</span>
                          <ArrowUpRightIcon className="text-black transition-colors w-4 h-4" />
                       </div>
                    </div>
                 ))}
              </div>
              <div className="mt-8 text-center md:text-left">
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-indigo-600 transition-colors">
                     <ComputerDesktopIcon className="w-3.5 h-3.5" /> Watch Podcast
                  </button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default Academy;