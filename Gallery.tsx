import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Gallery: React.FC = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200", span: "row-span-2" },
    { src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=800", span: "row-span-1" },
    { src: "https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4df?q=80&w=800", span: "row-span-1" }, // Cardio
    { src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800", span: "row-span-1" }, // Gym
    { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800", span: "row-span-1" }, // Weights
    { src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800", span: "row-span-2" }, // Yoga/Stretch
  ];

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-4">
              Facility <span className="text-neon-blue">Showcase</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              10,000 sq ft of pure performance potential. Designed in industrial chic.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, idx) => (
            <ScrollReveal key={idx} delay={idx * 50} className={`${img.span} relative group overflow-hidden`}>
              <img 
                src={img.src} 
                alt="Gallery" 
                className="w-full h-full object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neon-blue/20 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none"></div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};