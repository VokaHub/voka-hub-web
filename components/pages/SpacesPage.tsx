import React from 'react';
import Spaces from '../Spaces';

const SpacesPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Presentation Section (Dark Mode) */}
      <Spaces />
      
      {/* Booking Calendar Section (Light Mode for Clarity) */}
      <section id="booking" className="py-24 bg-white text-black relative z-10">
        <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
           <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4 block">
                Disponibilidad en Tiempo Real
              </span>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-black mb-6 uppercase">
                Reserva tu Espacio<span className="text-indigo-600">.</span>
              </h2>
              <p className="text-zinc-600 text-lg font-light">
                Selecciona tu fecha, hora y confirma tu sesión al instante sin salir de la página.
              </p>
           </div>

           {/* Iframe Container */}
           <div className="max-w-5xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-zinc-100">
              <iframe 
                src="https://spaces.vokahub.com/211b?is_widget=1&view=compact&specific-meeting-type=1" 
                style={{ width: '100%', height: '750px', border: 'none' }} 
                title="Calendario de Reservas VOKA"
                scrolling="yes"
              ></iframe>
           </div>
           
           <div className="mt-12 text-center">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                 Pagos seguros & confirmación inmediata
              </p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default SpacesPage;