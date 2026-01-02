import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="collection" className="relative bg-brand-light pb-32 pt-32">
       {/* Sophisticated transition from dark hero to light section */}
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-brand-dark">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-secondary text-xs font-bold tracking-[0.25em] uppercase mb-4 block">Curated Collection</span>
          <h2 className="font-serif text-5xl md:text-6xl text-brand-text mb-6">
            Journals for the <span className="italic text-brand-primary">Soul</span>
          </h2>
          <div className="h-[1px] w-24 bg-brand-accent/50 mx-auto mb-8"></div>
          <p className="text-brand-text/70 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Write, Reflect, Grow In Faith
          </p>
        </div>

        {/* Grid Layout for 6 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-24 text-center relative">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-primary/10 -z-10"></div>
             <span className="bg-brand-light px-6 text-brand-primary italic font-serif text-2xl relative z-10">
                "Write the vision, and make it plain on tablets, that he may run who reads it." — Habakkuk 2:2
             </span>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;