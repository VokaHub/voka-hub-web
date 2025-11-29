
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24 border-b border-zinc-900 relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl relative z-10">
        
        {/* Header */}
        <div className="mb-24 border-b border-zinc-900 pb-12">
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase mb-6">
            Nuestro <br/> Trabajo<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-zinc-400 text-xl max-w-2xl font-light">
            Selección de proyectos donde la estrategia y la creatividad colisionan para generar resultados tangibles.
          </p>
        </div>

        {/* Extended Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projectsData.map((project) => (
            <div key={project.id} className="group block relative">
              
              {/* Image Container */}
              <div className="aspect-square w-full bg-zinc-900 overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors z-10 pointer-events-none"></div>
                 <Link to={`/portafolio/${project.id}`} className="block w-full h-full">
                    <img 
                      src={`${project.coverImage}?grayscale`} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out transform group-hover:scale-105"
                    />
                 </Link>
              </div>
              
              {/* Meta Info */}
              <div className="flex flex-col border-t border-zinc-900 pt-4">
                 <div className="flex justify-between items-baseline mb-2">
                    <div className="flex-grow mr-4">
                       <h3 className="text-2xl font-light text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                          {project.title}
                       </h3>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest shrink-0">
                      {project.year}
                    </span>
                 </div>
                 
                 <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest group-hover:text-white transition-colors">
                     {project.category}
                 </div>
              </div>

              <Link to={`/portafolio/${project.id}`} className="absolute inset-0 z-0" aria-label={`Ver proyecto ${project.title}`}></Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center border-t border-zinc-900 pt-20">
            <h3 className="text-2xl font-light mb-8">¿Tienes un proyecto en mente?</h3>
            <Link to="/#segmentation" className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
                Iniciar Conversación
            </Link>
        </div>

      </div>
    </div>
  );
};

export default PortfolioPage;
