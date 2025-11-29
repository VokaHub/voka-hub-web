import React, { useState } from 'react';
import { useProjects } from './context/ProjectsContext';
import { Save, RotateCcw, Code, Wand2, X, Check } from 'lucide-react';

const AdminBar: React.FC = () => {
  const { isAdmin, toggleAdmin, resetData, projects, activeFieldHint } = useProjects();
  const [showExport, setShowExport] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  if (!isAdmin) {
    return (
      <button 
        onClick={toggleAdmin}
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg font-bold text-xs uppercase tracking-widest hover:bg-indigo-500 transition-all opacity-50 hover:opacity-100"
      >
        Admin Mode
      </button>
    );
  }

  const handleExport = () => {
    const dataString = `export const projectsData = ${JSON.stringify(projects, null, 2)};`;
    navigator.clipboard.writeText(dataString);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <>
      {/* AI ASSISTANT PANEL */}
      {showAI && (
        <div className="fixed bottom-24 right-6 w-80 bg-zinc-900 border border-indigo-500/30 shadow-2xl z-50 rounded-lg overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-indigo-900/20 p-4 border-b border-indigo-500/20 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <Wand2 size={16} className="text-indigo-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-200">VOKA AI Guide</span>
             </div>
             <button onClick={() => setShowAI(false)}><X size={14} className="text-zinc-500 hover:text-white" /></button>
          </div>
          <div className="p-6">
             <div className="mb-4">
               <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-2">Contexto Actual</span>
               <p className="text-white text-sm font-medium">
                 {activeFieldHint ? activeFieldHint.split(':')[0] : "Selecciona un campo..."}
               </p>
             </div>
             <div className="bg-black/50 p-4 rounded border border-zinc-800">
               <span className="text-[10px] font-mono uppercase text-indigo-400 block mb-2">Sugerencia de Experto</span>
               <p className="text-zinc-300 text-xs leading-relaxed">
                 {activeFieldHint 
                    ? activeFieldHint.split(':')[1] 
                    : "Haz clic en cualquier texto editable (Títulos, Descripciones) y te daré consejos de Copywriting estratégico para mejorar tu mensaje."}
               </p>
             </div>
          </div>
        </div>
      )}

      {/* MAIN BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-zinc-950 border-t border-indigo-900/30 z-50 px-6 py-4 flex justify-between items-center shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        
        <div className="flex items-center gap-4">
           <div className="flex items-center gap-2 px-3 py-1 bg-indigo-900/20 rounded-full border border-indigo-500/30">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300">Modo Edición Activo</span>
           </div>
           <span className="text-xs text-zinc-500 hidden md:inline">Los cambios se guardan automáticamente en tu navegador.</span>
        </div>

        <div className="flex items-center gap-3">
          
          <button 
            onClick={() => setShowAI(!showAI)}
            className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest transition-colors border ${showAI ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-transparent text-indigo-400 border-indigo-900/50 hover:border-indigo-500'}`}
          >
            <Wand2 size={14} /> AI Assistant
          </button>

          <div className="h-6 w-px bg-zinc-800 mx-2"></div>

          <button 
            onClick={resetData}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded text-xs font-bold uppercase tracking-widest transition-colors"
          >
            <RotateCcw size={14} /> Reset
          </button>

          <button 
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-zinc-200 rounded text-xs font-bold uppercase tracking-widest transition-colors"
          >
            {copySuccess ? <Check size={14} /> : <Code size={14} />}
            {copySuccess ? 'Copiado!' : 'Exportar Data'}
          </button>

          <button 
            onClick={toggleAdmin}
            className="ml-4 text-zinc-500 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminBar;
