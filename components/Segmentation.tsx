
import React, { useState } from 'react';
import { ArrowRightIcon, CheckIcon, XMarkIcon, BuildingOffice2Icon, BoltIcon, UsersIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Segmentation: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'full' | 'demand' | null>(null);
  const [mobileTab, setMobileTab] = useState<'full' | 'demand' | 'spaces'>('full');

  const servicesList = [
    "Diseño Web & UX", "Landing Pages", "Fotografía", "Video", "Diseño Gráfico", 
    "Marketing Digital", "Coaching", "Locución", "Cobertura de Eventos", 
    "Invitaciones Digitales", "Copywriting", "Branding Express"
  ];

  const marqueeContent = [...servicesList, ...servicesList].join("  •  ");

  const openModal = (type: 'full' | 'demand') => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const renderCard = (type: 'full' | 'demand' | 'spaces') => {
      // Content logic for mobile tabs
      if (type === 'full') {
          return (
            <div className="flex flex-col h-full relative group animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-normal text-black mb-2 tracking-tighter">
                  Full Experience
                </h3>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
                  Asesoramiento + Red de Talentos + Recursos
                </span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Sesión de descubrimiento <strong>gratuita</strong>.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Diagnóstico estratégico con <strong>Coaching AI</strong>.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Diseño de plan modular (Guía paso a paso).</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight"><strong>Project Director</strong> asignado.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Coordinación operativa y supervisión de resultados.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Acceso a <strong>Red de Talento Certificado</strong>.</span></li>
                 <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Acceso total a base de recursos.</span></li>
              </ul>
              <button onClick={() => openModal('full')} className="w-full py-4 border border-black flex justify-between items-center px-6 hover:bg-black hover:text-white transition-colors bg-black text-white">
                <span className="text-sm font-bold uppercase tracking-widest">Iniciar Proceso</span>
                <ArrowRightIcon className="w-[18px] h-[18px]" />
              </button>
            </div>
          );
      } else if (type === 'demand') {
          return (
            <div className="flex flex-col h-full relative group animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-normal text-black mb-2 tracking-tighter">
                  On Demand
                </h3>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
                  Red de Talentos + Recursos
                </span>
              </div>
              <div className="mb-8 text-zinc-700 font-light leading-relaxed">
                <p>Contrata directamente al especialista. Ejecución experta para resolver tareas puntuales.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Sesión de descubrimiento <strong>gratuita</strong>.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Coordinación operativa y supervisión de resultados.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Acceso directo a <strong>Red de Talento Certificado</strong>.</span></li>
                 <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Acceso total a la base de recursos.</span></li>
                <li className="flex items-start gap-3 text-zinc-500 font-light italic mt-4 pt-4 border-t border-zinc-100"><span className="text-xs">No incluye Asesoramiento Estratégico.</span></li>
              </ul>
              {/* Infinite Horizontal Scroll Marquee */}
              <div className="w-full overflow-hidden border-t border-b border-zinc-100 py-3 mb-6 relative">
                 <div className="whitespace-nowrap animate-scroll-text inline-block">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{marqueeContent}</span>
                 </div>
                 <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-white to-transparent"></div>
                 <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-white to-transparent"></div>
              </div>
              <button onClick={() => openModal('demand')} className="w-full py-4 border border-zinc-300 flex justify-between items-center px-6 hover:border-black hover:bg-black hover:text-white transition-all">
                <span className="text-sm font-bold uppercase tracking-widest">Cotizar Servicios</span>
                <ArrowRightIcon className="w-[18px] h-[18px]" />
              </button>
            </div>
          );
      } else {
          return (
            <div className="flex flex-col h-full relative group animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-normal text-black mb-2 tracking-tighter">
                  VOKA Spaces
                </h3>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
                  Infraestructura & Espacios
                </span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Espacios totalmente equipados.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Acceso a comunidad de profesionales.</span></li>
                <li className="flex items-start gap-3 text-zinc-700 font-light"><CheckIcon className="w-[18px] h-[18px] text-black shrink-0 mt-1" strokeWidth={1.5} /><span className="leading-tight">Soporte y acceso 24/7.</span></li>
                <li className="flex items-start gap-3 text-zinc-500 font-light italic mt-6 pt-4 border-t border-zinc-100"><span className="text-xs">No incluye Asesoramiento ni Red de Talentos.</span></li>
              </ul>
              <Link to="/spaces" className="w-full py-4 border border-zinc-300 flex justify-between items-center px-6 hover:border-black hover:bg-black hover:text-white transition-all">
                <span className="text-sm font-bold uppercase tracking-widest">Reservar Espacio</span>
                <ArrowRightIcon className="w-[18px] h-[18px]" />
              </Link>
            </div>
          );
      }
  };

  return (
    <section id="segmentation" className="bg-white text-black py-20 md:py-40 relative z-20">
      <style>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 30s linear infinite;
        }
      `}</style>
      
      {/* SMART INTAKE MODAL (Same as before) */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="bg-white w-full max-w-lg relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button onClick={closeModal} className="absolute top-4 right-4 text-zinc-400 hover:text-black transition-colors">
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
              {activeModal === 'full' ? (
                <div>
                   <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">VOKA Full Experience</span>
                   <h3 className="text-3xl font-light text-black mb-8 tracking-tighter">Hablemos de Estrategia.</h3>
                   <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2">Etapa del Proyecto</label>
                        <div className="grid grid-cols-2 gap-3">
                           <button className="border border-zinc-300 py-3 px-4 text-sm hover:border-black hover:bg-black hover:text-white transition-all text-left">Tengo una idea</button>
                           <button className="border border-zinc-300 py-3 px-4 text-sm hover:border-black hover:bg-black hover:text-white transition-all text-left">En desarrollo</button>
                           <button className="border border-zinc-300 py-3 px-4 text-sm hover:border-black hover:bg-black hover:text-white transition-all text-left">Primeras ventas</button>
                           <button className="border border-zinc-300 py-3 px-4 text-sm hover:border-black hover:bg-black hover:text-white transition-all text-left">Sistematizar y Delegar</button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2">Tamaño de tu Empresa</label>
                        <select className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black bg-white">
                           <option>Soy Solo Yo (Fundador)</option>
                           <option>Equipo Pequeño (2-10)</option>
                           <option>Empresa Mediana (11-50)</option>
                           <option>Corporativo (50+)</option>
                        </select>
                      </div>
                      <button className="w-full bg-black text-white py-4 mt-4 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                         Agendar Diagnóstico
                      </button>
                   </div>
                </div>
              ) : (
                <div>
                   <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">VOKA On Demand</span>
                   <h3 className="text-3xl font-light text-black mb-8 tracking-tighter">Solicitud Express.</h3>
                   <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2">¿Qué servicio buscas?</label>
                        <select className="w-full border border-zinc-300 p-3 text-sm focus:outline-none focus:border-black bg-white">
                           <option>Selecciona un servicio...</option>
                           {servicesList.map(s => <option key={s}>{s}</option>)}
                           <option>Otro / No estoy seguro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-zinc-600 mb-2">Urgencia</label>
                         <div className="grid grid-cols-3 gap-3">
                           <button className="border border-zinc-300 py-3 px-2 text-center text-sm hover:border-black hover:bg-black hover:text-white transition-all">ASAP (Hoy)</button>
                           <button className="border border-zinc-300 py-3 px-2 text-center text-sm hover:border-black hover:bg-black hover:text-white transition-all">Esta semana</button>
                           <button className="border border-zinc-300 py-3 px-2 text-center text-sm hover:border-black hover:bg-black hover:text-white transition-all">Planificación</button>
                        </div>
                      </div>
                      <button className="w-full bg-black text-white py-4 mt-4 font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
                         Ver Disponibilidad
                      </button>
                   </div>
                </div>
              )}
              <div className="mt-8 pt-8 border-t border-zinc-100 text-center">
                 <p className="text-zinc-500 text-xs mb-2">¿No eres cliente?</p>
                 <Link to="/talentos" onClick={closeModal} className="text-xs font-bold uppercase tracking-widest text-black underline decoration-zinc-300 underline-offset-4 hover:decoration-black transition-all">
                    ¿Eres talento creativo? Aplica aquí
                 </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-32 max-w-2xl">
           <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-black mb-6">
             Elige tu <span className="text-indigo-600">camino</span>.
           </h2>
           <p className="text-zinc-600 text-lg md:text-xl font-light">
             Dinos qué necesitas de nosotros.
           </p>
        </div>

        {/* MOBILE TABS (Visible only on mobile) */}
        <div className="md:hidden mb-8">
            <div className="flex p-1 bg-zinc-100 rounded-lg">
                <button 
                    onClick={() => setMobileTab('full')}
                    className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all ${mobileTab === 'full' ? 'bg-black text-white shadow-md' : 'text-zinc-500'}`}
                >
                    Full
                </button>
                <button 
                    onClick={() => setMobileTab('demand')}
                    className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all ${mobileTab === 'demand' ? 'bg-white text-black shadow-md border border-zinc-200' : 'text-zinc-500'}`}
                >
                    Demand
                </button>
                <button 
                    onClick={() => setMobileTab('spaces')}
                    className={`flex-1 py-3 text-[10px] font-bold uppercase tracking-widest rounded-md transition-all ${mobileTab === 'spaces' ? 'bg-zinc-200 text-zinc-800 shadow-md' : 'text-zinc-500'}`}
                >
                    Spaces
                </button>
            </div>
        </div>

        {/* CONTENT AREA */}
        <div className="min-h-[600px]">
            {/* Mobile View: Single Active Card */}
            <div className="md:hidden">
                {renderCard(mobileTab)}
            </div>

            {/* Desktop View: Full Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-8 lg:gap-16 items-start">
                
                {/* Full Experience */}
                <div className="flex flex-col h-full relative group">
                    <div className="absolute -top-10 left-0">
                        <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">Plan Integral</span>
                    </div>
                    <div className="w-full h-[2px] bg-black mb-8"></div>
                    {renderCard('full').props.children}
                </div>
                
                {/* On Demand */}
                <div className="flex flex-col h-full relative group">
                    <div className="absolute -top-10 left-0">
                        <span className="bg-white border border-black text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">Plan Flexible</span>
                    </div>
                    <div className="w-full h-[2px] bg-black mb-8"></div>
                    {renderCard('demand').props.children}
                </div>

                {/* Spaces */}
                <div className="flex flex-col h-full relative group">
                    <div className="absolute -top-10 left-0">
                        <span className="bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5">Infraestructura</span>
                    </div>
                    <div className="w-full h-px bg-zinc-300 mb-8 group-hover:bg-zinc-400 transition-colors"></div>
                    {renderCard('spaces').props.children}
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Segmentation;
