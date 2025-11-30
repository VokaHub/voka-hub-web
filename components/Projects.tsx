
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from './data/projectsData';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';

const Projects: React.FC = () => {
  // Use static data directly
  const previewProjects = projectsData.slice(0, 8);

  return (
    <section id="projects" className="bg-black py-20 md:py-32 text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Blue-Violet Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white uppercase">
            Portafolio<span className="text-indigo-500">.</span>
          </h2>
          <Link to="/portafolio" className="hidden md:block text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mb-2">
            Ver Todos los Proyectos &rarr;
          </Link>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex items-center justify-end mb-4 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
           <span>Desliza para explorar</span> <ArrowsRightLeftIcon className="w-3 h-3 ml-2 animate-pulse" />
        </div>

        {/* Mobile: Horizontal Snap Scroll (Cards) | Desktop: Grid */}
        <div className="relative w-full -mx-6 md:mx-0 px-6 md:px-0">
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 no-scrollbar">
            {previewProjects.map((project) => (
                <Link key={project.id} to={`/portafolio/${project.id}`} className="group cursor-pointer block min-w-[85vw] md:min-w-0 snap-center shrink-0">
                {/* Aspect square makes images smaller and uniform */}
                <div className="aspect-square w-full bg-zinc-900 overflow-hidden mb-4 rounded-lg md:rounded-none relative shadow-xl md:shadow-none border border-zinc-800 md:border-none">
                    <img 
                    src={`${project.coverImage}?grayscale`} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-90 md:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    />
                    <div className="absolute bottom-4 left-4 md:hidden">
                       <span className="bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded-full">
                         Ver Proyecto
                       </span>
                    </div>
                </div>
                
                <div className="flex justify-between items-start pt-2 px-1 md:px-0">
                    <div>
                    <h3 className="text-xl md:text-base font-medium text-white mb-0.5 tracking-tight group-hover:underline decoration-zinc-700 underline-offset-4">{project.title}</h3>
                    <p className="text-xs md:text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{project.category}</p>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <Link to="/portafolio" className="text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1">Explorar Portafolio Completo</Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
