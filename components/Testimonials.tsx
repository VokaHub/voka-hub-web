
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    text: "Tenía el talento pero no el orden. VOKA puso la estructura y mi estudio despegó en 3 meses.",
    author: "Ana Lucía M.",
    role: "Arquitecta"
  },
  {
    text: "Por fin un lugar que entiende que los médicos también necesitamos branding de alto nivel.",
    author: "Dr. Carlos R.",
    role: "Clínica Vida"
  },
  {
    text: "La dirección del Project Director fue clave. No tuve que preocuparme por nada operativo.",
    author: "Sofía G.",
    role: "CEO Tech Startup"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-black text-white py-20 md:py-32 border-t border-zinc-900 relative overflow-hidden">
      
      {/* Subtle Glow */}
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl relative z-10">
         
         {/* Testimonials Slider */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-4">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-400 block mb-6">Historias</span>
                <h3 className="text-3xl font-light text-white mb-8">Lo que dicen los<br/>que ejecutan.</h3>
            </div>
            
            <div className="lg:col-span-8 flex flex-col justify-between h-full">
               <div className="min-h-[150px] md:min-h-[180px]">
                  <p className="text-xl md:text-3xl font-light text-zinc-200 leading-relaxed font-serif italic">
                     "{testimonials[currentIndex].text}"
                  </p>
               </div>
               
               <div className="flex items-center justify-between mt-8 md:mt-12 border-t border-zinc-900 pt-8">
                  <div>
                     <div className="text-white font-medium text-base md:text-lg">{testimonials[currentIndex].author}</div>
                     <div className="text-zinc-400 text-[10px] md:text-xs uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</div>
                  </div>
                  
                  <div className="flex gap-2">
                     <button onClick={prev} className="p-3 border border-zinc-800 hover:border-white transition-colors text-zinc-400 hover:text-white"><ChevronLeftIcon className="w-[18px] h-[18px]" /></button>
                     <button onClick={next} className="p-3 border border-zinc-800 hover:border-white transition-colors text-zinc-400 hover:text-white"><ChevronRightIcon className="w-[18px] h-[18px]" /></button>
                  </div>
               </div>
            </div>
         </div>

      </div>
    </section>
  );
};

export default Testimonials;
