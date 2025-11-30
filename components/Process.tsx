
import React from 'react';
import { ArrowRightIcon, ArrowDownIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

interface ProcessStepProps {
  number: string;
  subtitle: string;
  title: React.ReactNode;
  desc: string;
  link?: string;
  onClick?: () => void;
  isScrollTrigger?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, subtitle, desc, link, onClick, isScrollTrigger }) => {
  const Content = () => (
    <div className="group h-full py-12 md:py-16 px-8 md:px-12 flex flex-col border-b md:border-b-0 border-r-0 md:border-r border-zinc-900 md:last:border-r-0 transition-all hover:bg-zinc-950 relative overflow-hidden bg-zinc-950/50 md:bg-transparent w-[85vw] md:w-auto snap-center shrink-0 border border-zinc-800 md:border-none rounded-xl md:rounded-none mr-4 md:mr-0">
      
      {/* Enormous Number Background */}
      <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 text-[120px] md:text-[180px] leading-none font-bold text-zinc-800/30 md:text-zinc-800 group-hover:text-zinc-700 transition-colors pointer-events-none select-none z-0 font-mono">
        {number}
      </div>

      {/* Header (Subtitle) */}
      <div className="relative z-10 flex justify-between items-start mb-8 md:mb-12">
        <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase border border-indigo-900/30 px-3 py-1 rounded-full group-hover:border-indigo-500 transition-colors bg-black/50 backdrop-blur-sm">
            {subtitle}
        </span>
      </div>
      
      {/* Body (Title & Description) */}
      <div className="relative z-10 mb-8 flex-grow">
        <h3 className="text-xl md:text-2xl font-normal text-white mb-4 md:mb-6 tracking-tight group-hover:text-white transition-colors uppercase h-auto md:h-16 flex items-start">
          {title}
        </h3>
        <p className="text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors text-sm">
          {desc}
        </p>
      </div>

      {/* Footer (Link) */}
      <div className="mt-auto relative z-10 pt-6 border-t border-zinc-900 flex items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-indigo-400 transition-colors">
          {isScrollTrigger ? 'Empezar ahora' : 'Explorar'} 
          {isScrollTrigger ? (
            <ArrowDownIcon className="w-3 h-3 ml-3 group-hover:translate-y-1 transition-transform" />
          ) : (
            <ArrowRightIcon className="w-3 h-3 ml-3 group-hover:translate-x-1 transition-transform" />
          )}
      </div>
    </div>
  );

  if (link) {
    return <Link to={link} className="block h-full cursor-pointer"><Content /></Link>;
  }
  if (onClick) {
    return <div onClick={onClick} className="block h-full cursor-pointer"><Content /></div>;
  }
  return <div className="block h-full"><Content /></div>;
};

const Process: React.FC = () => {
  const scrollToSegmentation = () => {
    const element = document.getElementById('segmentation');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-black text-white relative border-b border-zinc-900">
      {/* Optional faint background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 py-20 md:py-32 border-b border-zinc-900 max-w-screen-xl relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-xs font-bold tracking-[0.2em] text-indigo-400 uppercase mb-8">
            Metodología
          </h2>
          <p className="text-3xl md:text-5xl font-light text-zinc-300 leading-tight tracking-tight">
            Tú nos dices <span className="text-indigo-400 italic font-normal">por qué</span>. <br/>
            Nosotros resolvemos el <span className="text-indigo-400 font-normal">cómo</span>, el <span className="text-indigo-400 font-normal">quién</span> y el <span className="text-indigo-400 font-normal">dónde</span>.
          </p>
        </div>
      </div>

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden flex items-center justify-end px-6 pt-6 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
         <span>Desliza para ver pasos</span> <ArrowsRightLeftIcon className="w-3 h-3 ml-2 animate-pulse" />
      </div>

      {/* Grid Container - Horizontal Scroll on Mobile */}
      <div className="relative z-10 w-full overflow-hidden">
        <div className="container mx-auto max-w-screen-xl">
            {/* Mobile: Horizontal Snap Scroll (Tinder-like cards) | Desktop: Grid */}
            <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory py-6 md:py-0 px-6 md:px-0 no-scrollbar gap-0">
              <ProcessStep 
                number="01" 
                subtitle="The Goal"
                title={<span>EL <span className="text-indigo-400">POR QUÉ</span></span>}
                desc="Convierte tu idea abstracta en un objetivo claro y accionable." 
                onClick={scrollToSegmentation}
                isScrollTrigger={true}
              />
              <ProcessStep 
                number="02" 
                subtitle="Strategy"
                title={<span><span className="text-indigo-400">CÓMO</span> LO EJECUTO</span>}
                desc="Te entregamos tu hoja de ruta con análisis profundo y asesoría (Humano + IA) para lograr tu objetivo."
                link="/inside-crew"
              />
              <ProcessStep 
                number="03" 
                subtitle="Talent"
                title={<span><span className="text-indigo-400">QUIÉN</span> LO HACE</span>}
                desc="Integra expertos certificados a tu equipo de inmediato, eliminando la fatiga de buscar."
                link="/talentos"
              />
              <ProcessStep 
                number="04" 
                subtitle="Infrastructure"
                title={<span><span className="text-indigo-400">DÓNDE</span> SUCEDE</span>}
                desc="Proyecta autoridad inmediata utilizando instalaciones que elevan el valor de tu marca."
                link="/spaces"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
