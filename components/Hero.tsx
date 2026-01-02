import React from 'react';
import { ArrowDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
  
  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop" 
          alt="Dark moody nature background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B201D]/90 via-[#0B201D]/60 to-[#0B201D] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>
      
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 right-[15%] text-brand-accent/20 animate-pulse delay-700">
        <Star size={40} fill="currentColor" />
      </div>
      <div className="absolute bottom-1/3 left-[10%] text-brand-accent/10 animate-pulse delay-1000">
        <Star size={24} fill="currentColor" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center sm:px-6 lg:px-8 mt-10">
        
        {/* Subtitle / Tagline */}
        <p className="font-sans text-brand-accent/90 font-bold tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-pulse">
            Write, Reflect, Grow In Faith
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-brand-light mb-8 leading-[1] text-shadow tracking-tight">
          Journal That <br />
          <span className="italic text-brand-accent text-glow relative inline-block">
            Journey
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-60"></span>
          </span>
        </h1>
        
        <p className="font-sans text-brand-light/90 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide text-shadow-sm">
          A sacred space for your thoughts. Beautifully crafted journals to guide your prayers, gratitude, and walk with God.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#collection"
            onClick={(e) => handleScroll(e, '#collection')}
            className="group relative px-12 py-5 bg-gradient-to-r from-brand-accent to-[#C5A059] text-brand-dark font-serif font-bold text-lg rounded-sm overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
            </span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
          </a>
          
          <a 
            href="#story" 
            onClick={(e) => handleScroll(e, '#story')}
            className="text-brand-light/80 hover:text-brand-accent transition-colors font-serif italic text-lg border-b border-transparent hover:border-brand-accent cursor-pointer"
          >
            Read Our Story
          </a>
        </div>
      </div>

      {/* Elegant Scroll indicator */}
      <div 
        onClick={(e) => handleScroll(e, '#collection')}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-accent to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;