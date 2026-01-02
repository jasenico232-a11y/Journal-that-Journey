import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
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
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
             <img src="https://i.postimg.cc/6Qk2LHN5/logo.png" alt="Journal That Journey" className="h-16 w-auto object-contain" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-brand-light/90 hover:text-brand-accent transition-colors font-sans text-sm tracking-wider uppercase cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="https://www.amazon.com/stores/author/B0FXJ1J85Y/allbooks?ingress=0&visitId=7ec640db-7e3f-4470-bc28-47cc2d520dd0&ref_=aufs_ap_ahdr_dsk_aa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2 rounded-sm transition-all duration-300 border border-brand-accent/50 flex items-center gap-2 cursor-pointer"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-light hover:text-brand-accent transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-brand-primary/30 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible h-auto py-6' : 'opacity-0 invisible h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-brand-light text-lg hover:text-brand-accent font-serif cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.amazon.com/stores/author/B0FXJ1J85Y/allbooks?ingress=0&visitId=7ec640db-7e3f-4470-bc28-47cc2d520dd0&ref_=aufs_ap_ahdr_dsk_aa"
            target="_blank"
            rel="noopener noreferrer" 
            className="text-brand-accent text-lg font-serif font-bold border-b border-brand-accent cursor-pointer"
          >
            Shop Now
          </a>
        </div>
      </div>
    </nav>
  );
};