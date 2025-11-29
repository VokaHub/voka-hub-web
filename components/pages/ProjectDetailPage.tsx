
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find current project from Static Data
  const projectIndex = projectsData.findIndex(p => p.id === id);
  const project = projectsData[projectIndex];

  // Handle Project Not Found
  if (!project) {
    return <Navigate to="/portafolio" replace />;
  }

  // Calculate Next/Prev Logic
  const nextIndex = (projectIndex + 1) % projectsData.length;
  const prevIndex = (projectIndex - 1 + projectsData.length) % projectsData.length;
  
  const nextProject = projectsData[nextIndex];
  const prevProject = projectsData[prevIndex];

  return (
    <div className="bg-black text-white min-h-screen pt-32 relative">
       
       {/* Ambient Glow */}
       <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

       <div className="container mx-auto px-6 md:px-12 max-w-screen-xl relative z-10">
          
          {/* 1. Header Section */}
          <div className="mb-12">
             <Link to="/portafolio" className="inline-flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-8 hover:text-white transition-colors">
                <ArrowLeft size={14} /> Volver al Portafolio
             </Link>
             <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase text-white mb-4">
                {project.title}
             </h1>
             <div className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl">
               <p>{project.category}</p>
             </div>
          </div>

          {/* 2. Project Meta & Description Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-900 py-16 mb-16">
             {/* Left: Description */}
             <div className="lg:col-span-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-6">El Reto & Solución</h3>
                <p className="text-lg md:text-xl leading-relaxed font-light text-zinc-300 max-w-3xl">
                   {project.description}
                </p>
             </div>
             
             {/* Right: Metadata */}
             <div className="lg:col-span-4 space-y-8">
                <div>
                   <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Cliente</h4>
                   <span className="text-white text-lg font-light">{project.client}</span>
                </div>
                <div>
                   <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Año</h4>
                   <span className="text-white text-lg font-light">{project.year}</span>
                </div>
                <div>
                   <h4 className="text-xs font-mono text-zinc-500 uppercase mb-2">Project Crew</h4>
                   <ul className="text-white text-lg font-light space-y-1">
                      {project.crew.map((member, idx) => (
                         <li key={idx}>{member}</li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>

          {/* 3. Gallery (Full Width Stack) */}
          <div className="space-y-6 md:space-y-12 mb-32">
             <div className="w-full aspect-video bg-zinc-900 overflow-hidden relative group">
                <img src={project.coverImage} alt="Cover" className="w-full h-full object-cover" />
             </div>
             
             {project.gallery.map((img, i) => (
                <div key={i} className="w-full aspect-video bg-zinc-900 overflow-hidden relative group">
                   <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                </div>
             ))}
          </div>

       </div>

       {/* 4. Bottom Navigation */}
       <div className="border-t border-zinc-900 bg-zinc-950">
          <div className="container mx-auto max-w-screen-xl">
             <div className="grid grid-cols-2 divide-x divide-zinc-900">
                <Link to={`/portafolio/${prevProject.id}`} className="group block py-16 md:py-24 px-6 md:px-12 hover:bg-zinc-900 transition-colors relative overflow-hidden">
                   <div className="relative z-10 flex flex-col items-start">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                         <ArrowLeft size={12} /> Anterior
                      </span>
                      <span className="text-2xl md:text-4xl font-light text-zinc-400 group-hover:text-white transition-colors uppercase">
                         {prevProject.title}
                      </span>
                   </div>
                </Link>

                <Link to={`/portafolio/${nextProject.id}`} className="group block py-16 md:py-24 px-6 md:px-12 hover:bg-zinc-900 transition-colors text-right relative overflow-hidden">
                   <div className="relative z-10 flex flex-col items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                         Siguiente <ArrowRight size={12} />
                      </span>
                      <span className="text-2xl md:text-4xl font-light text-zinc-400 group-hover:text-white transition-colors uppercase">
                         {nextProject.title}
                      </span>
                   </div>
                </Link>
             </div>
          </div>
       </div>

    </div>
  );
};

export default ProjectDetailPage;
