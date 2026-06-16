import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    role: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Message Submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      email: '',
      role: '',
      subject: '',
      message: '',
    });
  };

  const quickLinks = [
    { icon: '📋', name: 'Apply Now', path: '/admissions' },
    { icon: '📚', name: 'View Academics', path: '/academics' },
    { icon: '📄', name: 'Download Brochure', path: '#' },
    { icon: '🏫', name: 'See Facilities', path: '/facilities' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' as const },
  };

  return (
    <div>
      {/* ── BREADCRUMB ── */}
      <div className="bg-cream border-b border-bordercream/60 py-3 px-4 md:px-8 text-xs text-muted">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5">
          <Link to="/" className="text-teal hover:underline font-medium">Home</Link>
          <span className="text-muted/60">/</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Get in Touch
          </span>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight">
            We'd love to<br />
            <span className="italic text-gold-light font-normal">hear from you</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Whether you have a question about admissions, want to schedule a campus tour, or simply want to learn more — our team is here and happy to help.
          </p>
        </div>
      </section>

      {/* ── CONTACT MAIN ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Info Column */}
          <motion.div {...fadeInUp} className="md:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold text-gold uppercase tracking-widest block mb-2">Contact Details</span>
              <h2 className="font-serif-display text-2xl md:text-3.5xl font-bold text-navy leading-tight">
                Reach us<br />
                <span className="italic text-teal font-normal">any way you like</span>
              </h2>
              <p className="text-muted text-xs md:text-sm mt-3 leading-relaxed">
                Our admissions and administrative team is available Monday to Saturday during school hours. We aim to respond to all enquiries within one working day.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-cream p-5 border-l-3 border-gold rounded-[2px]">
                <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold mb-1 flex items-center gap-1.5"><MapPin size={12} /> Campus Address</h4>
                <p className="text-navy font-semibold text-xs leading-relaxed">
                  12 Excellence Way, Sector 4, City Centre<br />
                  New Delhi, Delhi – 110001
                </p>
              </div>
              <div className="bg-cream p-5 border-l-3 border-gold rounded-[2px]">
                <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold mb-1 flex items-center gap-1.5"><Phone size={12} /> Admissions Office</h4>
                <p className="text-navy font-semibold text-xs leading-relaxed">
                  +1 (555) 987-6543<br />
                  admissions@schoolofexcellence.edu
                </p>
              </div>
              <div className="bg-cream p-5 border-l-3 border-gold rounded-[2px]">
                <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold mb-1 flex items-center gap-1.5"><Mail size={12} /> General Enquiries</h4>
                <p className="text-navy font-semibold text-xs leading-relaxed">
                  +1 (555) 123-4567<br />
                  info@schoolofexcellence.edu
                </p>
              </div>
              <div className="bg-cream p-5 border-l-3 border-gold rounded-[2px]">
                <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold mb-1 flex items-center gap-1.5"><Clock size={12} /> Office Hours</h4>
                <p className="text-navy font-semibold text-xs leading-relaxed">
                  Monday – Friday: 8:00 AM – 5:00 PM<br />
                  Saturday: 9:00 AM – 1:00 PM
                </p>
              </div>
            </div>

            <div className="bg-navy text-white p-6 rounded-[2px] border-l-4 border-gold shadow-sm space-y-3">
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold">WhatsApp Us</h4>
              <p className="text-[12px] text-white/70 leading-relaxed">
                For quick queries, campus visit bookings, and admissions enquiries.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-[2px] hover:bg-[#20ba59] transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>

            {/* Social handles */}
            <div className="flex gap-2">
              <a href="#" className="bg-cream border border-bordercream px-4 py-2 text-xs font-semibold text-navy rounded-[2px] hover:bg-navy hover:text-white transition-colors duration-200">
                FB
              </a>
              <a href="#" className="bg-cream border border-bordercream px-4 py-2 text-xs font-semibold text-navy rounded-[2px] hover:bg-navy hover:text-white transition-colors duration-200">
                IG
              </a>
              <a href="#" className="bg-cream border border-bordercream px-4 py-2 text-xs font-semibold text-navy rounded-[2px] hover:bg-navy hover:text-white transition-colors duration-200">
                YT
              </a>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div {...fadeInUp} className="md:col-span-7 space-y-6">
            <div className="bg-cream p-8 md:p-10 border border-bordercream rounded-[2px] shadow-sm">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-serif-display text-xl font-bold text-navy mb-1">Send Us a Message</h3>
                      <p className="text-[12px] text-muted mb-4">Fill in the form and we'll get back to you within one working day.</p>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Full Name *</label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Email Address *</label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">I am a *</label>
                        <select
                          required
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                        >
                          <option value="">Select</option>
                          <option>Prospective Parent</option>
                          <option>Current Parent</option>
                          <option>Student</option>
                          <option>Media / Press</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Subject *</label>
                        <select
                          required
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                        >
                          <option value="">Select a topic</option>
                          <option>Admission Enquiry</option>
                          <option>Campus Tour Request</option>
                          <option>Academic Query</option>
                          <option>Transport Information</option>
                          <option>Fee Structure</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Message *</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us how we can help you..."
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal min-h-[120px] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-navy text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200 mt-2"
                    >
                      Send Message
                    </button>
                    <p className="text-[10px] text-muted text-center mt-2.5">
                      We respect your privacy. Your information will never be shared with third parties.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 bg-teal-light/20 text-teal rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                      <Check size={32} />
                    </div>
                    <h3 className="font-serif-display text-2xl font-bold text-navy">Message Sent Successfully</h3>
                    <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting us. We have received your query and a representative from our team will email or call you within one working day.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="border border-navy text-navy font-semibold text-xs px-6 py-2.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200 mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="bg-navy text-white p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm rounded-[2px]">
              <div>
                <h3 className="font-serif-display text-lg font-bold text-gold-light mb-1">Schedule a Campus Tour</h3>
                <p className="text-white/60 text-xs leading-relaxed max-w-sm">
                  The best way to experience SOE is in person. Book a guided visit and see our campus come alive.
                </p>
              </div>
              <Link
                to="/admissions"
                className="bg-gold text-navy font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded-[2px] hover:bg-gold-light transition-colors shrink-0"
              >
                Book a Tour →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAP BLOCK ── */}
      <section className="bg-cream border-t border-b border-bordercream/40 py-0 overflow-hidden">
        <div className="w-full h-[380px] bg-cream-light flex flex-col items-center justify-center gap-4 text-center px-4">
          <span className="text-4xl animate-bounce">📍</span>
          <h3 className="font-serif-display text-xl font-bold text-navy">The School of Excellence</h3>
          <p className="text-muted text-xs max-w-sm leading-relaxed">
            12 Excellence Way, Sector 4, City Centre, New Delhi, Delhi – 110001
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-navy text-navy font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200 mt-2"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

      {/* ── QUICK LINKS GRID ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Looking for something specific?</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Quick links for common needs
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="flex flex-col items-center gap-3 p-8 bg-cream/50 border border-bordercream rounded-[2px] text-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <span className="text-3.5xl group-hover:scale-110 transition-transform duration-200">{link.icon}</span>
                <strong className="text-xs uppercase tracking-wider font-bold">{link.name}</strong>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
