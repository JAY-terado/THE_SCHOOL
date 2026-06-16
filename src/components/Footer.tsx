import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight, Check } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-gold/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <span className="w-10 h-10 bg-gold text-navy font-serif font-bold text-lg flex items-center justify-center tracking-wider transition-transform duration-300 group-hover:scale-105">
                SOE
              </span>
              <span className="font-serif text-lg font-semibold text-white tracking-wide">
                The School of Excellence
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-sm leading-relaxed">
              Nurturing character, academic brilliance, and creative minds from Playgroup to Grade 12. Providing a holistic platform where every child's potential becomes excellence.
            </p>
            <p className="font-serif italic text-gold-light text-sm">
              "Where Potential Becomes Excellence"
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-gold-light text-base font-medium mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-colors">
                  About Our Vision
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-white/60 hover:text-white transition-colors">
                  Academics &amp; Curriculum
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-white/60 hover:text-white transition-colors">
                  Admissions Guidelines
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-white/60 hover:text-white transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/campus-life" className="text-white/60 hover:text-white transition-colors">
                  Student Activities
                </Link>
              </li>
              <li>
                <Link to="/parents" className="text-white/60 hover:text-white transition-colors">
                  Parents Portal Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Address Column */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-gold-light text-base font-medium mb-4 tracking-wide">
              Newsletter
            </h4>
            <p className="text-white/60 text-xs mb-4">
              Receive school event updates, admission reminders, and educational resources directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="relative mb-6">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-navy-light border border-gold/25 focus:border-gold rounded-[2px] px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none pr-12 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-gold text-navy px-3 flex items-center justify-center hover:bg-gold-light transition-colors"
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? <Check size={14} className="text-green-800" /> : <ArrowRight size={14} />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[10px] text-green-400 block -mt-4 mb-4">
                Thank you! You have successfully subscribed.
              </span>
            )}
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-200 text-xs">
                FB
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-200 text-xs">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-200 text-xs">
                YT
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-200 text-xs">
                WA
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Contact Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-gold/10 text-xs text-white/75 mb-6">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Main Campus</p>
              <p className="text-white/60 mt-0.5">12 Excellence Way, Sector 4, City Centre</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">General Enquiries</p>
              <p className="text-white/60 mt-0.5">+1 (555) 987-6543</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Admissions Office</p>
              <p className="text-white/60 mt-0.5">admissions@schoolofexcellence.edu</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-white">Office Hours</p>
              <p className="text-white/60 mt-0.5">Mon – Sat, 8:00 AM – 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/45">
          <p>&copy; {currentYear} The School of Excellence. All rights reserved.</p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
