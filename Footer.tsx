import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-6">FITFINITY <span className="text-neon-blue">LK</span></h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              Sri Lanka's premier fitness destination. We don't just build bodies; we build discipline, strength, and lifestyle transformations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-neon-blue hover:text-black transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/memberships" className="text-gray-400 hover:text-neon-green transition-colors">Memberships</Link></li>
              <li><Link to="/personal-training" className="text-gray-400 hover:text-neon-green transition-colors">Personal Training</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-neon-green transition-colors">Class Schedule</Link></li>
              <li><Link to="/transformations" className="text-gray-400 hover:text-neon-green transition-colors">Results</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-6 uppercase tracking-wider">Support</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-400 hover:text-neon-green transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-6 uppercase tracking-wider">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-neon-blue shrink-0 mt-1" size={18} />
                <span>123 Havelock Road, Colombo 05, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-neon-blue shrink-0" size={18} />
                <span>+94 11 200 0000</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-neon-blue shrink-0" size={18} />
                <span>join@fitfinity.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Fitfinity Fitness LK. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
};
