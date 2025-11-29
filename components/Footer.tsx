import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-16 border-t border-zinc-800">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 border-b border-zinc-900 pb-24">
          <div className="col-span-1 border-r border-zinc-900 pr-12 hidden md:block">
            <h5 className="text-4xl font-bold tracking-tighter mb-8">VOKA.</h5>
            <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
              Agencia de Dirección de Proyectos.<br/>
              Guatemala City.
            </p>
          </div>
          
          <div className="pl-0 md:pl-12">
            <h6 className="font-bold uppercase tracking-widest text-xs mb-8 text-zinc-500">Menu</h6>
            <ul className="space-y-4 text-sm text-zinc-300 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Portafolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Spaces</a></li>
              {/* Moved Talent Recruitment Here */}
              <li><a href="#" className="hover:text-orange-500 transition-colors">Soy Creativo (Únete)</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold uppercase tracking-widest text-xs mb-8 text-zinc-500">Legal</h6>
            <ul className="space-y-4 text-sm text-zinc-300 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold uppercase tracking-widest text-xs mb-8 text-zinc-500">Contacto</h6>
            <ul className="space-y-4 text-sm text-zinc-300 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="mailto:info@vokahub.com" className="hover:text-white transition-colors">info@vokahub.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 uppercase tracking-wider font-bold">
          <p>&copy; 2024 VOKA AGENCY.</p>
          <p>DESIGNED FOR EXECUTION.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;