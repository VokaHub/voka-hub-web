import React from 'react';

const talentCategories = [
  'Diseñadores Gráficos', 'Fotógrafos', 'Videógrafos', 'Locutores', 'Desarrolladores Web', 'Productores Musicales'
];

const Talents: React.FC = () => {
  return (
    <section id="talents" className="py-32 bg-black text-white border-b border-zinc-900">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-zinc-900 pb-12">
           <div className="lg:col-span-6">
              <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white uppercase mb-6">
                Red de <br/> Talentos.
              </h2>
           </div>
           <div className="lg:col-span-6 flex items-end pb-2">
              <p className="text-zinc-300 font-light text-xl leading-relaxed max-w-md">
                Acceso directo a más de 100 creativos certificados. Curaduría estricta, resultados garantizados.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1">
           {talentCategories.map((cat, index) => (
              <div key={index} className="group flex items-center justify-between py-6 border-b border-zinc-900 hover:pl-4 transition-all cursor-pointer">
                 <h3 className="text-2xl md:text-3xl font-light text-zinc-400 group-hover:text-white transition-colors tracking-tight">
                    {cat}
                 </h3>
                 <span className="text-zinc-500 group-hover:text-white text-xl transition-colors">
                    &rarr;
                 </span>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Talents;