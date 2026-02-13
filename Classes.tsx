import React from 'react';
import { CLASSES } from '../constants';
import { Button } from '../components/Button';
import { Clock, Calendar } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Classes: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-4">
              Group <span className="text-neon-blue">Classes</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              High energy. Community vibes. Expert instruction. Join our daily classes to push your limits with others.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CLASSES.map((cls, idx) => (
            <ScrollReveal key={cls.id} delay={idx * 150}>
              <div className="flex flex-col md:flex-row bg-white/5 border border-white/10 group hover:border-neon-green/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden relative">
                  {/* Mobile: Always visible overlay. Desktop: Hover only */}
                  <div className="absolute inset-0 bg-neon-green/20 mix-blend-overlay opacity-30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img 
                    src={cls.image} 
                    alt={cls.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center relative bg-white/5 lg:bg-transparent lg:group-hover:bg-white/5 transition-colors duration-500">
                  <h3 className="font-heading text-2xl font-bold text-white uppercase mb-4 text-neon-green lg:text-white lg:group-hover:text-neon-green transition-colors">{cls.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300 lg:text-gray-400 lg:group-hover:text-gray-300">
                      <Clock size={18} className="text-neon-blue lg:group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium">{cls.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 lg:text-gray-400 lg:group-hover:text-gray-300">
                      <Calendar size={18} className="text-neon-blue lg:group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium">{cls.days.join(" / ")}</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="!py-3 bg-neon-green/10 lg:bg-transparent group-hover:bg-neon-green group-hover:text-black group-hover:border-neon-green transition-all duration-300"
                    onClick={() => window.open('https://wa.me/94770000000?text=Booking a slot for ' + cls.title, '_blank')}
                  >
                    Book Slot
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Schedule CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-20 text-center bg-neon-dark p-12 border border-neon-blue/20 rounded-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-neon-blue/5 translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700 pointer-events-none"></div>
            <h3 className="font-heading text-3xl font-bold text-white uppercase mb-4 relative z-10">First Class is Free</h3>
            <p className="text-gray-400 mb-8 relative z-10 group-hover:text-gray-300">Not sure which class fits you? Come try one on the house. Locals only.</p>
            <div className="relative z-10">
              <Button onClick={() => window.open('https://wa.me/94770000000', '_blank')} className="hover:scale-110 transition-transform duration-300">Claim Free Pass</Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};