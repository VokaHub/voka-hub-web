import React from 'react';

const Spaces: React.FC = () => {
  return (
    <section id="spaces" className="py-32 bg-black text-white border-b border-zinc-900">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        <div className="mb-20">
           <h2 className="text-5xl md:text-7xl font-light tracking-tighter leading-none text-white uppercase mb-6">
              VOKA Spaces.
           </h2>
           <p className="text-zinc-300 text-xl font-light">El entorno físico que tu profesionalismo exige.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
           {/* Professional */}
           <div className="group relative h-[500px] bg-zinc-900 overflow-hidden cursor-pointer">
              <img src="https://picsum.photos/800/1000?grayscale&random=77" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white text-2xl font-normal tracking-tight mb-2 uppercase">Profesional</h3>
                  <p className="text-zinc-300 font-light text-sm mb-6">Clínicas, Consultorías y Oficinas Privadas.</p>
                  <span className="text-xs font-bold uppercase tracking-widest underline decoration-zinc-600 underline-offset-4 group-hover:decoration-white transition-all">Ver Opciones</span>
              </div>
           </div>

           {/* Creative */}
           <div className="group relative h-[500px] bg-zinc-900 overflow-hidden cursor-pointer">
              <img src="https://picsum.photos/800/1000?grayscale&random=78" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-white text-2xl font-normal tracking-tight mb-2 uppercase">Creativo</h3>
                  <p className="text-zinc-300 font-light text-sm mb-6">Estudios, Talleres y Salas de Podcast.</p>
                  <span className="text-xs font-bold uppercase tracking-widest underline decoration-zinc-600 underline-offset-4 group-hover:decoration-white transition-all">Ver Studios</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-900 pt-16">
           {[
              { 
                title: "Percepción", 
                desc: "Eleva tu estatus profesional ante tus clientes." 
              },
              { 
                title: "Comunidad", 
                desc: "Conecta con otros profesionales del ecosistema." 
              },
              { 
                title: "Conectividad", 
                desc: "Internet de alta velocidad y soporte 24/7." 
              }
           ].map((item, i) => (
              <div key={i} className="">
                 <h4 className="font-normal text-lg text-white mb-4 tracking-tight">{item.title}</h4>
                 <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-xs">{item.desc}</p>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;