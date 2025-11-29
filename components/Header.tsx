import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Nosotros', path: '/inside-crew' },
    { name: 'Talentos', path: '/talentos' },
    { name: 'Spaces', path: '/spaces' },
    { name: 'Academy', path: '/academy' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <div className="container mx-auto px-6 md:px-12 max-w-screen-xl h-20 flex justify-between items-center">
        {/* Logo & Slogan Area */}
        <div className="flex items-center gap-6 z-50">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
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
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col justify-center px-12 space-y-8">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">We make it happen.</span>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-4xl font-bold tracking-tighter text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="text-4xl font-bold text-white pt-8 border-t border-zinc-800" onClick={() => setIsMobileMenuOpen(false)}>
            Contacto
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
