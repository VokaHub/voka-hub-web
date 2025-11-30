
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Portafolio', path: '/portafolio', desc: 'Nuestros Proyectos' },
    { name: 'Nosotros', path: '/inside-crew', desc: 'Filosofía & Crew' },
    { name: 'Talentos', path: '/talentos', desc: 'Red de Expertos' },
    { name: 'Spaces', path: '/spaces', desc: 'Infraestructura' },
    { name: 'Academy', path: '/academy', desc: 'Workshops & Talks' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-900 transition-all">
        <div className="container mx-auto px-6 md:px-12 max-w-screen-xl h-16 md:h-20 flex justify-between items-center">
          {/* Logo & Slogan Area */}
          <div className="flex items-center gap-6 z-50">
            <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter text-white">
              VOKA<span className="text-zinc-500">.</span>
            </Link>
            
            {/* Slogan Desktop */}
            <div className="hidden md:flex items-center gap-6">
               <div className="h-4 w-px bg-zinc-800"></div>
               <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                 We make it happen.
               </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-xs font-bold tracking-widest uppercase hover:text-white transition-colors ${location.pathname === link.path ? 'text-white' : 'text-zinc-400'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contact" className="ml-4 text-xs font-bold bg-white text-black border border-white px-6 py-3 rounded-none hover:bg-zinc-200 transition-colors uppercase tracking-widest">
              Contacto
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-50 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black pt-24 px-6 md:hidden animate-in slide-in-from-right duration-300">
           <nav className="flex flex-col h-full pb-12">
              <div className="space-y-6 flex-grow">
                {navLinks.map((link, idx) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="group flex items-center justify-between border-b border-zinc-900 pb-4"
                  >
                     <div>
                        <span className="text-3xl font-light text-white block mb-1">{link.name}</span>
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{link.desc}</span>
                     </div>
                     <ChevronRightIcon className="w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" />
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto">
                 <Link to="/#segmentation" className="block w-full py-5 bg-white text-black text-center font-bold uppercase tracking-widest mb-4">
                    Iniciar Proyecto
                 </Link>
                 <div className="flex justify-between text-xs text-zinc-500 font-mono uppercase tracking-widest">
                    <span>Guatemala City</span>
                    <span>Est. 2024</span>
                 </div>
              </div>
           </nav>
        </div>
      )}
    </>
  );
};

export default Header;
