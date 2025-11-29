import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProcessStepProps {
  number: string;
  subtitle: string;
  title: React.ReactNode; // Changed to ReactNode to allow span styling
  desc: string;
  link?: string;
  onClick?: () => void;
  isScrollTrigger?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, subtitle, desc, link, onClick, isScrollTrigger }) => {
  const Content = () => (
    <div className="group h-full py-16 px-8 md:px-12 flex flex-col border-b border-zinc-900 md:border-r md:last:border-r-0 border-l-0 transition-all hover:bg-zinc-950 relative overflow-hidden">
      
      {/* Enormous Number Background */}
      <div className="absolute -top-10 -right-10 text-[180px] leading-none font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors pointer-events-none select-none z-0 font-mono">
        {number}
      </div>

      {/* Header (Subtitle) */}
      <div className="relative z-10 flex justify-between items-start mb-12">
        <span className="text-[10px] font-bold tracking-[0.2em] text-indigo-400 uppercase border border-indigo-900/30 px-3 py-1 rounded-full group-hover:border-indigo-500 transition-colors bg-black/50 backdrop-blur-sm">
            {subtitle}
        </span>
      </div>
      
      {/* Body (Title & Description) - Aligned Top (removed mt-auto from here) */}
      <div className="relative z-10 mb-8">
        <h3 className="text-2xl font-normal text-white mb-6 tracking-tight group-hover:text-white transition-colors uppercase h-16 flex items-start">
          {title}
        </h3>
        <p className="text-zinc-400 font-light leading-relaxed max-w-xs group-hover:text-zinc-300 transition-colors text-sm">
          {desc}
        </p>
      </div>

      {/* Footer (Link) - Pushed to Bottom */}
      <div className="mt-auto relative z-10 pt-6 border-t border-zinc-900 flex items-center text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-indigo-400 transition-colors">
          {isScrollTrigger ? 'Empezar ahora' : 'Explorar'} 
          {isScrollTrigger ? (
            <ArrowDown size={12} className="ml-3 group-hover:translate-y-1 transition-transform" />
          ) : (
            <ArrowRight size={12} className="ml-3 group-hover:translate-x-1 transition-transform" />
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
    <section className="bg-black text-white relative">
      {/* Optional faint background glow for the process section too */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Header - Aligned to Standard Grid */}
      <div className="container mx-auto px-6 md:px-12 py-32 border-b border-zinc-900 max-w-screen-xl relative z-10">
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

      {/* Grid Container - Standardized Width */}
      <div className="border-b border-zinc-900 relative z-10">
        <div className="container mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ProcessStep 
            number="01" 
            subtitle="The Goal"
            title={<span>EL <span className="text-indigo-400">POR QUÉ</span></span>}
            desc="Aterrizaje de Visión. Convierte tu idea abstracta en un objetivo claro y accionable." 
            onClick={scrollToSegmentation}
            isScrollTrigger={true}
          />
          <ProcessStep 
            number="02" 
            subtitle="Strategy"
            title={<span><span className="text-indigo-400">CÓMO</span> LO EJECUTO</span>}
            desc="Plan de Acción Estratégico. Te entregamos tu hoja de ruta con análisis profundo y asesoría (Humano + IA)."
            link="/inside-crew"
          />
          <ProcessStep 
            number="03" 
            subtitle="Talent"
            title={<span><span className="text-indigo-400">QUIÉN</span> LO HACE</span>}
            desc="Talento listo para ejecutar. Integra expertos certificados a tu equipo de inmediato, eliminando la fatiga de buscar."
            link="/talentos"
          />
          <ProcessStep 
            number="04" 
            subtitle="Infrastructure"
            title={<span><span className="text-indigo-400">DÓNDE</span> SUCEDE</span>}
            desc="Infraestructura de Autoridad. Proyecta estatus inmediato utilizando instalaciones que elevan el valor de tu marca."
            link="/spaces"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;