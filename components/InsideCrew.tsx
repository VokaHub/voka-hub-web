import React from 'react';
import { UserIcon, CpuChipIcon, CurrencyDollarIcon, FlagIcon } from '@heroicons/react/24/outline';

const InsideCrew: React.FC = () => {
  return (
    <section id="crew" className="bg-black text-white py-32 border-b border-zinc-900">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        
        <div className="max-w-4xl mb-24">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 text-white uppercase">
              Tu Socio Estratégico.
            </h2>
            <p className="text-zinc-300 text-xl font-light leading-relaxed max-w-2xl">
              Fusionamos empatía humana con análisis de datos. Tu Project Director (PD) utiliza nuestro sistema para diseñar la ruta exacta de tu éxito.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-zinc-900 pt-16">
            
            <div className="group">
                <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
                   <UserIcon className="w-8 h-8 stroke-1" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4 tracking-tight">
                  Punto Único de Contacto
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Tu PD es tu manager temporal. Centraliza la comunicación, supervisa al talento y asegura la calidad.
                </p>
            </div>

            <div className="group">
                <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
                   <CpuChipIcon className="w-8 h-8 stroke-1" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4 tracking-tight">
                  Diagnóstico Modular
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Identificamos tu etapa (Idea, Validación o Escalamiento) y ejecutamos solo los módulos necesarios.
                </p>
            </div>

            <div className="group">
                <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
                   <FlagIcon className="w-8 h-8 stroke-1" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4 tracking-tight">
                  Alineación de Objetivos
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  No somos consultores externos; somos socios operativos. Tu crecimiento es nuestra métrica.
                </p>
            </div>

            <div className="group">
                <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
                   <CurrencyDollarIcon className="w-8 h-8 stroke-1" />
                </div>
                <h4 className="text-lg font-medium text-white mb-4 tracking-tight">
                  Eficiencia de Inversión
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  Maximizamos recursos. Implementamos soluciones generativas (IA) para reducir costos sin perder calidad.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InsideCrew;