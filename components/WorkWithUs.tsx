import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkWithUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-40 border-t border-zinc-900 relative overflow-hidden">
      
      {/* Blue-Violet Ambient Glow for consistent closing atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-white leading-none mb-12 uppercase">
          Queremos escuchar <br />
          tu idea <span className="text-indigo-400 underline decoration-indigo-900/50 decoration-2 underline-offset-8 font-serif italic lowercase">hoy</span>.
        </h2>
        
        <div className="flex justify-center mt-16">
           <button className="flex items-center gap-6 px-10 py-5 bg-white text-black hover:bg-zinc-200 transition-colors">
             <span className="text-sm font-bold tracking-widest uppercase">Agendar Reunión</span>
             <ArrowRight className="w-5 h-5" />
           </button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;