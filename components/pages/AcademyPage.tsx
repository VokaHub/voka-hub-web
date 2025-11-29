import React, { useState } from 'react';
import { MicrophoneIcon, ClockIcon, XMarkIcon, ArrowRightIcon, CheckIcon, UserIcon, ComputerDesktopIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

interface Event {
  id: number;
  dateDay: string;
  dateMonth: string;
  isoDate: string; // ISO format for sorting
  title: string;
  category: string;
  time: string;
  price: string;
  instructor: string;
  instructorRole: string;
  instructorPhone: string; // The instructor's WhatsApp number (format: 502xxxxxxxx)
  flyerImage: string;
  description: string;
}

const events: Event[] = [
  {
    id: 1,
    dateDay: "12",
    dateMonth: "OCT",
    isoDate: "2024-10-12",
    title: "Fotografía de Producto con Smartphone",
    category: "Workshop",
    time: "18:00 - 21:00",
    price: "Q350",
    instructor: "Carlos Ramirez",
    instructorRole: "Fotógrafo Publicitario",
    instructorPhone: "50200000000", // Replace with real number
    flyerImage: "https://picsum.photos/600/800?random=10",
    description: "Aprende a crear contenido de alta calidad para tu marca usando solo tu teléfono. Iluminación, composición y edición básica."
  },
  {
    id: 2,
    dateDay: "18",
    dateMonth: "OCT",
    isoDate: "2024-10-18",
    title: "Nutrición Ejecutiva: Energía para Líderes",
    category: "Talk",
    time: "09:00 - 11:00",
    price: "Q150",
    instructor: "Dra. Ana M.",
    instructorRole: "Nutricionista Clínica",
    instructorPhone: "50200000000",
    flyerImage: "https://picsum.photos/600/800?random=11",
    description: "Cómo hackear tu metabolismo para mantener niveles de energía altos durante jornadas de trabajo intensas."
  },
  {
    id: 3,
    dateDay: "25",
    dateMonth: "OCT",
    isoDate: "2024-10-25",
    title: "Estrategia Legal para Creativos",
    category: "Business",
    time: "17:30 - 19:30",
    price: "Q250",
    instructor: "Lic. Sofia G.",
    instructorRole: "Abogada PI",
    instructorPhone: "50200000000",
    flyerImage: "https://picsum.photos/600/800?random=12",
    description: "Protege tus ideas. Contratos básicos, derechos de autor y cómo cobrar sin miedo."
  },
  {
    id: 4,
    dateDay: "02",
    dateMonth: "NOV",
    isoDate: "2024-11-02",
    title: "Storytelling Personal para Marcas",
    category: "Workshop",
    time: "10:00 - 13:00",
    price: "Q400",
    instructor: "Javier V.",
    instructorRole: "Director Creativo",
    instructorPhone: "50200000000",
    flyerImage: "https://picsum.photos/600/800?random=13",
    description: "Tu historia es tu mayor activo. Aprende a contarla para conectar y vender."
  }
];

const vokaPerks = [
  "Espacio VOKA (A/C, Seguridad)",
  "Coffee Break de Especialidad",
  "Networking Curado",
  "Material de Apoyo Digital"
];

const AcademyPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [step, setStep] = useState<'info' | 'form'>('info');
  const [formData, setFormData] = useState({ name: '', email: '' });

  // Sort events by date
  const sortedEvents = [...events].sort((a, b) => new Date(a.isoDate).getTime() - new Date(b.isoDate).getTime());

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setStep('info');
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setFormData({ name: '', email: '' });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    // 1. Aquí guardarías los datos en tu base de datos
    console.log("Lead Capturado para VOKA:", formData);

    // 2. Redirección a WhatsApp
    const message = `Hola ${selectedEvent.instructor}, mi nombre es ${formData.name}. Me interesa inscribirme a tu taller "${selectedEvent.title}" que vi en VOKA Academy.`;
    const whatsappUrl = `https://wa.me/${selectedEvent.instructorPhone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    // 3. Cerrar modal
    closeModal();
  };

  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-24 relative">
      
      {/* --- MODAL DE CONVERSIÓN (El Puente Invisible) --- */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="bg-white w-full max-w-4xl relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300 flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
             <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-white rounded-full p-1 transition-colors">
                <XMarkIcon className="w-5 h-5" />
             </button>

             {/* COLUMNA IZQUIERDA: FLYER */}
             <div className="w-full md:w-1/2 bg-zinc-100 relative">
                <img 
                  src={selectedEvent.flyerImage} 
                  alt="Flyer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent md:hidden">
                   <h3 className="text-white font-bold">{selectedEvent.title}</h3>
                </div>
             </div>

             {/* COLUMNA DERECHA: INFO & LEAD CAPTURE */}
             <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
                
                {step === 'info' ? (
                  <>
                    <div className="mb-auto">
                      <span className="inline-block px-3 py-1 border border-zinc-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4">
                        {selectedEvent.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-light tracking-tighter leading-tight mb-2">
                        {selectedEvent.title}
                      </h2>
                      <div className="flex items-center gap-2 text-zinc-500 text-sm font-medium mb-6">
                         <UserIcon className="w-[14px] h-[14px]" />
                         <span>{selectedEvent.instructor}</span>
                         <span className="text-zinc-300">|</span>
                         <span>{selectedEvent.instructorRole}</span>
                      </div>

                      <p className="text-zinc-600 font-light leading-relaxed mb-8">
                        {selectedEvent.description}
                      </p>

                      <div className="bg-zinc-50 p-6 border border-zinc-100 mb-8">
                         <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                           <CheckIcon className="w-[14px] h-[14px] text-indigo-600" /> Incluye (VOKA Standard)
                         </h4>
                         <ul className="space-y-2">
                           {vokaPerks.map((perk, i) => (
                             <li key={i} className="text-sm font-light text-zinc-600 flex items-start gap-2">
                               <div className="w-1 h-1 bg-zinc-400 rounded-full mt-2 shrink-0"></div>
                               {perk}
                             </li>
                           ))}
                         </ul>
                      </div>
                    </div>

                    <div className="border-t border-zinc-100 pt-6">
                       <div className="flex justify-between items-end mb-4">
                          <div>
                            <span className="block text-xs text-zinc-400 uppercase tracking-widest">Inversión</span>
                            <span className="text-3xl font-bold text-black">{selectedEvent.price}</span>
                          </div>
                          <div className="text-right">
                             <span className="block text-xs text-zinc-400 uppercase tracking-widest">Fecha</span>
                             <span className="text-sm font-medium">{selectedEvent.dateDay} {selectedEvent.dateMonth} • {selectedEvent.time}</span>
                          </div>
                       </div>
                       <button 
                         onClick={() => setStep('form')}
                         className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-indigo-600 transition-colors flex justify-between items-center px-6"
                       >
                         <span>Me interesa</span>
                         <ArrowRightIcon className="w-[18px] h-[18px]" />
                       </button>
                    </div>
                  </>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="flex flex-col h-full justify-center animate-in slide-in-from-right fade-in duration-300">
                     <button type="button" onClick={() => setStep('info')} className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-8 hover:text-black">
                        <ArrowRightIcon className="w-[14px] h-[14px] rotate-180" /> Volver a Info
                     </button>
                     
                     <h3 className="text-2xl font-light mb-2">Casi listo.</h3>
                     <p className="text-zinc-500 font-light text-sm mb-8">
                       Déjanos tus datos para enviarte recordatorios de futuros eventos y conectarte con el instructor.
                     </p>

                     <div className="space-y-4 mb-8">
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Nombre Completo</label>
                           <input 
                              required
                              type="text" 
                              className="w-full border-b border-zinc-300 py-2 focus:outline-none focus:border-black transition-colors"
                              placeholder="Tu nombre"
                              value={formData.name}
                              onChange={e => setFormData({...formData, name: e.target.value})}
                           />
                        </div>
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Correo Electrónico</label>
                           <input 
                              required
                              type="email" 
                              className="w-full border-b border-zinc-300 py-2 focus:outline-none focus:border-black transition-colors"
                              placeholder="tu@correo.com"
                              value={formData.email}
                              onChange={e => setFormData({...formData, email: e.target.value})}
                           />
                        </div>
                     </div>

                     <button 
                        type="submit"
                        className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-green-600 transition-colors flex justify-center items-center gap-3"
                     >
                        <span>Finalizar en WhatsApp</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5 filter invert" />
                     </button>
                     <p className="text-[10px] text-zinc-400 text-center mt-4">
                        Serás redirigido al chat oficial del tallerista para confirmar pago.
                     </p>
                  </form>
                )}

             </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        
        {/* HEADER */}
        <div className="border-b border-zinc-200 pb-12 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end">
             <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4 block">
                  Educación & Comunidad
                </span>
                <h1 className="text-5xl md:text-8xl font-light tracking-tighter uppercase text-black mb-6">
                  VOKA <br/> Academy<span className="text-indigo-600">.</span>
                </h1>
             </div>
             <p className="text-zinc-500 text-lg md:text-xl font-light max-w-md pb-2 text-right">
                El conocimiento es el único recurso que crece cuando se comparte.
             </p>
          </div>
        </div>

        {/* CALENDAR GRID */}
        <div className="mb-32">
           <div className="flex items-center justify-between mb-12">
              <h3 className="text-2xl font-normal tracking-tight">Próximos Eventos</h3>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                 <span className="text-black border-b border-black">Todos</span>
                 <span className="hover:text-black cursor-pointer">Workshops</span>
                 <span className="hover:text-black cursor-pointer">Talks</span>
              </div>
           </div>

           <div className="border-t border-zinc-200">
              {sortedEvents.map((event) => (
                 <div 
                    key={event.id} 
                    onClick={() => openModal(event)}
                    className="group border-b border-zinc-200 py-8 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors"
                 >
                    {/* Date */}
                    <div className="w-24 mb-4 md:mb-0 shrink-0">
                       <span className="block text-3xl font-light text-black">{event.dateDay}</span>
                       <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400">{event.dateMonth}</span>
                    </div>

                    {/* Info */}
                    <div className="flex-grow md:px-8 mb-4 md:mb-0">
                       <h4 className="text-2xl font-light tracking-tight text-black group-hover:text-indigo-600 transition-colors mb-2">
                          {event.title}
                       </h4>
                       <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                          <span className="flex items-center gap-1"><ClockIcon className="w-[14px] h-[14px]" /> {event.time}</span>
                          <span className="flex items-center gap-1"><UserIcon className="w-[14px] h-[14px]" /> {event.instructor}</span>
                          <span className="px-2 py-0.5 border border-zinc-200 rounded-full text-[10px] uppercase font-bold tracking-wider">{event.category}</span>
                       </div>
                    </div>

                    {/* Action */}
                    <div className="shrink-0 flex items-center gap-8">
                       <span className="text-xl font-medium text-zinc-900">{event.price}</span>
                       <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                          <ArrowRightIcon className="w-4 h-4 group-hover:-rotate-45 transition-transform duration-300" />
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* PODCAST SECTION */}
        <div className="bg-zinc-50 border border-zinc-100 p-8 md:p-16 mb-24">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div>
                 <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4">
                    <MicrophoneIcon className="w-[14px] h-[14px]" /> VOKA Talks
                 </span>
                 <h2 className="text-4xl font-light tracking-tighter">Conversaciones<br/>sin filtro.</h2>
              </div>
              <button className="hidden md:flex items-center gap-2 border-b border-black pb-1 text-xs font-bold uppercase tracking-widest hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                 <ComputerDesktopIcon className="w-[14px] h-[14px]" /> Watch Podcast
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((ep) => (
                 <div key={ep} className="group cursor-pointer">
                    <div className="aspect-square bg-zinc-200 mb-6 relative overflow-hidden">
                       <img src={`https://picsum.photos/600/600?random=${ep + 50}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                       <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                             <PlayIcon className="w-5 h-5 ml-1" />
                          </div>
                       </div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Episodio 0{ep}</span>
                    <h4 className="text-lg font-medium leading-tight mt-2 group-hover:text-indigo-600 transition-colors">
                       La intersección entre arte urbano y rentabilidad comercial.
                    </h4>
                 </div>
              ))}
           </div>
        </div>

        {/* INSTRUCTOR CTA */}
        <div className="text-center border-t border-zinc-200 pt-20">
           <h3 className="text-2xl font-light mb-6">¿Eres experto en tu campo?</h3>
           <p className="text-zinc-500 mb-8 max-w-lg mx-auto">
              Únete a VOKA Academy como instructor. Nosotros ponemos el espacio y la audiencia, tú pones el conocimiento.
           </p>
           <button className="px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              Aplicar como Instructor
           </button>
        </div>

      </div>
    </div>
  );
};

export default AcademyPage;