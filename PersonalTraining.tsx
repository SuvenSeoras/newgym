import React from 'react';
import { TRAINERS } from '../constants';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';

export const PersonalTraining: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-6">
              Elite <span className="text-neon-green">Coaching</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl">
              Stop guessing. Start progressing. Our personal training programs are designed to break plateaus. 
              Work 1-on-1 with Colombo's top certified performance coaches.
            </p>
          </ScrollReveal>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <ScrollReveal>
            <div className="relative group overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-neon-green/10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2940&auto=format&fit=crop" 
                alt="Personal Training" 
                className="w-full h-[400px] object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col justify-center">
            <ScrollReveal delay={200}>
              <h3 className="font-heading text-3xl font-bold text-white uppercase mb-6">Why Hire a Coach?</h3>
              <ul className="space-y-8">
                <li className="border-l-2 border-neon-blue pl-6 hover:border-l-4 transition-all duration-300 cursor-default group">
                  <h4 className="text-white font-bold uppercase text-lg mb-1 group-hover:text-neon-blue transition-colors">Custom Programming</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300">Workouts tailored to your anatomy, injuries, and specific goals.</p>
                </li>
                <li className="border-l-2 border-neon-green pl-6 hover:border-l-4 transition-all duration-300 cursor-default group">
                  <h4 className="text-white font-bold uppercase text-lg mb-1 group-hover:text-neon-green transition-colors">Nutritional Guidance</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300">Macro-coaching and meal plans to fuel your transformation.</p>
                </li>
                <li className="border-l-2 border-neon-blue pl-6 hover:border-l-4 transition-all duration-300 cursor-default group">
                  <h4 className="text-white font-bold uppercase text-lg mb-1 group-hover:text-neon-blue transition-colors">Accountability</h4>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300">Consistent check-ins to ensure you stay on track.</p>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Trainers Section */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase mb-12 text-center">Meet The Team</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINERS.map((trainer, idx) => (
            <ScrollReveal key={trainer.id} delay={idx * 150}>
              <div className="group relative overflow-hidden glass-card rounded-none border-0 h-[500px] md:h-auto">
                <div className="absolute inset-0 h-full w-full bg-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 lg:opacity-80 z-10"></div>
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-0 lg:grayscale lg:group-hover:grayscale-0"
                  />
                  {/* Hover Overlay Color - Visible on touch or hover */}
                  <div className="absolute inset-0 bg-neon-blue/20 mix-blend-overlay opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-neon-blue text-xs font-bold uppercase tracking-wider mb-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100 lg:-translate-y-2 lg:group-hover:translate-y-0">{trainer.role}</p>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase mb-3 shadow-black drop-shadow-md">{trainer.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {trainer.specialization.map((spec, idx) => (
                      <span key={idx} className="text-[10px] bg-white/20 backdrop-blur-sm text-white px-2 py-1 uppercase border border-white/10">{spec}</span>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    fullWidth 
                    className="!py-3 !text-xs opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-300"
                    onClick={() => window.open(`https://wa.me/94770000000?text=I want to book a session with ${trainer.name}`, '_blank')}
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </div>
  );
};