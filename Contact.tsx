import React from 'react';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white uppercase mb-12 text-center">
            Get In <span className="text-neon-orange">Touch</span>
          </h1>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <ScrollReveal delay={200}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 text-white p-4 focus:border-neon-orange outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 text-white p-4 focus:border-neon-orange outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 text-white p-4 focus:border-neon-orange outline-none transition-colors" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Goal</label>
                  <select className="w-full bg-white/5 border border-white/10 text-white p-4 focus:border-neon-orange outline-none transition-colors">
                    <option>General Fitness</option>
                    <option>Muscle Gain</option>
                    <option>Fat Loss</option>
                    <option>Personal Training</option>
                  </select>
                </div>

                <Button fullWidth variant="secondary">Send Message</Button>
              </form>
            </ScrollReveal>
          </div>

          {/* Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <ScrollReveal delay={300}>
              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md">
                <h3 className="font-heading text-2xl font-bold text-white uppercase mb-6">Club Info</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 text-gray-300">
                    <MapPin className="text-neon-blue shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-white uppercase text-sm mb-1">Address</span>
                      Havelock City Club House, Colombo 05, Sri Lanka
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300">
                    <Phone className="text-neon-blue shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-white uppercase text-sm mb-1">Phone</span>
                      +94 11 200 0000
                    </div>
                  </li>
                  <li className="flex items-start gap-4 text-gray-300">
                    <Clock className="text-neon-blue shrink-0 mt-1" />
                    <div>
                      <span className="block font-bold text-white uppercase text-sm mb-1">Operating Hours</span>
                      Weekdays: 5:00 AM - 11:00 PM<br/>
                      Weekends: 6:00 AM - 9:00 PM
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Real Map Embed */}
            <ScrollReveal delay={400}>
              <div className="w-full h-[350px] border border-white/10 filter grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63372.80939335716!2d79.8456863!3d6.8839063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a47683950a3%3A0xc3f58a36c8671380!2sHavelock%20City!5e0!3m2!1sen!2slk!4v1709405234567!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fitfinity Location"
                ></iframe>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};