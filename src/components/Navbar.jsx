import React from 'react';
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

function Navbar({ openChat }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`max-w-6xl mx-auto px-6 rounded-3xl transition-all duration-500 flex items-center justify-between ${scrolled ? 'bg-white/30 backdrop-blur-2xl shadow-2xl border border-white/20 mx-4' : 'bg-transparent'}`}>
        <div className="text-2xl font-bold tracking-tight text-estetia-text">
          ESTETIA<span className="text-estetia-primary">.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#filosofia" className="hover:text-estetia-primary transition-colors">La Clínica</a>
          <a href="#tratamientos" className="hover:text-estetia-primary transition-colors">Tratamientos</a>
          <a href="#equipo" className="hover:text-estetia-primary transition-colors">Dra. Elena R.</a>
          <button 
            onClick={openChat}
            className="bg-estetia-accent text-white px-5 py-2.5 rounded-full hover:bg-estetia-primary transition-colors shadow-lg"
          >
            Cita Previa
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;