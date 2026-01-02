import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="story" className="relative py-32 bg-[#0F2A25] overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#0B201D] transform skew-x-[-15deg] translate-x-32 z-0 opacity-20 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-dark/80 to-transparent z-0 opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Image/Visual Side */}
          <div className="w-full lg:w-1/2 relative group">
             {/* Decorative Frame */}
             <div 
               className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-accent/30 rounded-2xl z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"
               style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
             ></div>
             
             <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] lg:aspect-[4/5] z-10">
                <img 
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop" 
                    alt="POV of someone writing in a journal on a wooden desk" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply"></div>
             </div>
             
             {/* Floating Quote Card */}
             <div className="absolute -bottom-10 -right-4 md:-right-12 bg-brand-light p-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] max-w-sm border-t-4 border-brand-accent transform transition-transform hover:-translate-y-2 z-20">
                 <Quote className="text-brand-accent mb-4 opacity-50" size={32} />
                 <p className="font-serif text-brand-text italic text-xl mb-4 leading-relaxed">
                    "Faith is taking the first step even when you don't see the whole staircase."
                 </p>
                 <p className="text-brand-primary text-xs font-bold uppercase tracking-widest">— Martin Luther King Jr.</p>
             </div>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 text-brand-light pl-0 lg:pl-10">
            <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="font-serif text-5xl md:text-6xl mb-8 leading-tight text-shadow">
              More Than Just <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-[#F0E68C]">Paper & Ink</span>
            </h2>
            
            <div className="space-y-8 text-lg text-brand-light/80 font-light leading-relaxed font-sans">
                <p>
                    <strong className="text-brand-light font-medium border-b border-brand-accent/50 pb-1">Journal That Journey</strong> exists to help individuals write their vision clearly, pause with intention, and overcome life’s challenges by growing in faith. We were inspired by Habakkuk 2, which called on us to "....write the vision, and make it plain on tablets, that he may run who reads it..." Our journals create a space for reflection, patience, and spiritual growth, guiding hearts to trust God’s timing, truly live by faith, and walk purposefully through every season.
                </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-10">
                <div className="flex flex-col">
                    <span className="font-serif text-4xl text-brand-accent">100+</span>
                    <span className="text-xs uppercase tracking-widest text-brand-light/50 mt-1">Journals Sold</span>
                </div>
                <div className="w-[1px] h-12 bg-brand-light/10"></div>
                <div className="flex flex-col">
                    <span className="font-serif text-4xl text-brand-accent">100%</span>
                    <span className="text-xs uppercase tracking-widest text-brand-light/50 mt-1">Faith Inspired</span>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;