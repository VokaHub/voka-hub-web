
import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from './data/projectsData';

const Projects: React.FC = () => {
  // Use static data directly
  const previewProjects = projectsData.slice(0, 8);

  return (
    <section id="projects" className="bg-black py-32 text-white border-b border-zinc-900 relative overflow-hidden">
      
      {/* Blue-Violet Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white uppercase">
            Portafolio<span className="text-indigo-500">.</span>
          </h2>
          <Link to="/portafolio" className="hidden md:block text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors mb-2">
            Ver Todos los Proyectos &rarr;
          </Link>
        </div>

        {/* Changed to 4 columns and Square aspect ratio for a denser, easier-to-scan grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewProjects.map((project) => (
            <Link key={project.id} to={`/portafolio/${project.id}`} className="group cursor-pointer block">
              {/* Aspect square makes images smaller and uniform */}
              <div className="aspect-square w-full bg-zinc-900 overflow-hidden mb-4">
                <img 
                  src={`${project.coverImage}?grayscale`} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                />
              </div>
              
              <div className="flex justify-between items-start pt-2">
                <div>
                   <h3 className="text-base font-medium text-white mb-0.5 tracking-tight group-hover:underline decoration-zinc-700 underline-offset-4">{project.title}</h3>
                   <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 md:hidden text-center">
            <Link to="/portafolio" className="text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1">Ver Todos</Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
