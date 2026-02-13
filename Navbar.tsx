import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const leftLinks = [
    { name: 'Memberships', path: '/memberships' },
    { name: 'Training', path: '/personal-training' },
    { name: 'Classes', path: '/classes' },
  ];

  const rightLinks = [
    { name: 'Tools', path: '/tools' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 flex justify-center ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <div className={`
          relative flex items-center justify-between px-8 py-4
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${scrolled ? 'w-[90%] md:w-[85%] bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : 'w-full bg-transparent border-transparent'}
        `}>
          
          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white hover:text-neon-blue transition-colors relative z-20" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Left Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-start pl-4">
            {leftLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-neon-blue hover:blur-[0.5px]
                  ${location.pathname === link.path ? 'text-neon-blue' : 'text-gray-300'}
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-10 flex-shrink-0 mx-auto">
            <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[360deg] group-hover:scale-110">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-neon-blue rounded-full blur-xl opacity-20 group-hover:opacity-80 group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
              {/* Ring Effect */}
              <div className="absolute inset-0 border border-neon-blue/30 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              <Dumbbell className="w-8 h-8 text-white relative z-10 group-hover:text-neon-blue transition-colors duration-500" />
            </div>
            
            <div className="flex flex-col items-center transform transition-transform duration-500 group-hover:translate-x-1">
              <span className="font-heading font-black text-3xl tracking-tighter leading-none text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:text-neon-blue transition-colors duration-300">FITFINITY</span>
              <span className="font-sans text-[9px] tracking-[0.6em] text-neon-orange uppercase font-bold group-hover:tracking-[0.8em] transition-all duration-500">Fitness LK</span>
            </div>
          </Link>

          {/* Right Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end pr-4">
             {rightLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-neon-blue hover:blur-[0.5px]
                  ${location.pathname === link.path ? 'text-neon-blue' : 'text-gray-300'}
                `}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://wa.me/94770000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 border border-white/10 hover:border-neon-blue text-white hover:text-neon-blue px-6 py-3 rounded-full font-heading font-bold uppercase text-xs tracking-wider backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              Join Now
            </a>
          </div>

           {/* Mobile Placeholder for centering */}
           <div className="lg:hidden w-8"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/90 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-700 lg:hidden ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-orange/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>
        
        {[...leftLinks, ...rightLinks, {name: 'Home', path: '/'}].map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className="font-heading text-4xl font-black text-white hover:text-neon-blue uppercase transition-all duration-300 hover:scale-110 hover:blur-[1px]"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href="https://wa.me/94770000000"
          className="mt-8 bg-neon-blue text-black px-12 py-4 rounded-full font-heading font-bold text-xl uppercase shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:scale-105 transition-transform"
        >
          Join via WhatsApp
        </a>
      </div>
    </>
  );
};