import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';

export const Memberships: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-4">
              Membership <span className="text-neon-blue">Plans</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transparent pricing. No hidden fees. Choose the tier that fits your goals and lifestyle.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {PRICING.map((tier, idx) => (
            <ScrollReveal key={tier.name} delay={idx * 150}>
              <div 
                className={`
                  relative p-8 md:p-10 border transition-all duration-500 group
                  ${tier.highlight 
                    ? 'border-neon-blue bg-white/5 transform md:-translate-y-4 shadow-[0_0_40px_rgba(0,240,255,0.1)] hover:shadow-[0_0_60px_rgba(0,240,255,0.2)]' 
                    : 'border-white/10 bg-black hover:border-white/30 hover:-translate-y-2'
                  }
                `}
              >
                {/* Highlight Glow for Popular Plan */}
                {tier.highlight && (
                  <div className="absolute inset-0 bg-neon-blue/5 animate-pulse pointer-events-none"></div>
                )}

                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-blue text-black font-bold uppercase text-xs px-4 py-1 tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                    Most Popular
                  </div>
                )}
                
                <h3 className="font-heading text-2xl font-bold uppercase text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-sm text-gray-400">LKR</span>
                  <span className="text-4xl md:text-5xl font-heading font-bold text-white group-hover:scale-105 transition-transform duration-300 origin-left block">{tier.price}</span>
                  <span className="text-sm text-gray-500">/{tier.period}</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 transition-colors duration-300 ${tier.highlight ? 'text-neon-blue' : 'text-gray-500 group-hover:text-neon-blue'}`} />
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  fullWidth 
                  variant={tier.highlight ? 'primary' : 'outline'}
                  onClick={() => window.open(`https://wa.me/94770000000?text=I'm interested in the ${tier.name} plan`, '_blank')}
                  className={!tier.highlight ? 'group-hover:border-neon-blue group-hover:text-neon-blue' : ''}
                >
                  Join {tier.name}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-20 p-8 border border-white/10 bg-white/5 hover:border-neon-green/50 transition-colors duration-500 cursor-pointer group">
            <h3 className="font-heading text-2xl font-bold text-white uppercase mb-4 group-hover:text-neon-green transition-colors">Corporate & Student Rates</h3>
            <p className="text-gray-400 mb-6 group-hover:text-gray-300">
              We offer special discounts for valid University Student IDs and Corporate Partners in Colombo. 
              Contact our front desk for verification and pricing.
            </p>
            <a href="https://wa.me/94770000000" className="text-neon-green font-bold uppercase hover:underline flex items-center gap-2">
              Inquire via WhatsApp <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};