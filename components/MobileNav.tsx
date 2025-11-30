
import React from 'react';
import { HomeIcon, BriefcaseIcon, Squares2X2Icon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const MobileNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-zinc-900 z-50 md:hidden pb-safe">
      <div className="flex justify-around items-center h-16 px-2">
        <Link to="/" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/') ? 'text-white' : 'text-zinc-500'}`}>
          <HomeIcon className="w-6 h-6 mb-1" strokeWidth={isActive('/') ? 2 : 1.5} />
          <span className="text-[10px] font-medium tracking-wide">Inicio</span>
        </Link>
        
        <a href="/#segmentation" className="flex flex-col items-center justify-center w-full h-full text-zinc-500 hover:text-white transition-colors">
          <BriefcaseIcon className="w-6 h-6 mb-1" strokeWidth={1.5} />
          <span className="text-[10px] font-medium tracking-wide">Planes</span>
        </a>

        <Link to="/portafolio" className={`flex flex-col items-center justify-center w-full h-full ${isActive('/portafolio') ? 'text-white' : 'text-zinc-500'}`}>
          <Squares2X2Icon className="w-6 h-6 mb-1" strokeWidth={isActive('/portafolio') ? 2 : 1.5} />
          <span className="text-[10px] font-medium tracking-wide">Work</span>
        </Link>

        <a href="#contact" className="flex flex-col items-center justify-center w-full h-full text-zinc-500 hover:text-white transition-colors">
          <ChatBubbleLeftRightIcon className="w-6 h-6 mb-1" strokeWidth={1.5} />
          <span className="text-[10px] font-medium tracking-wide">Contacto</span>
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
