import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, FileText, ChevronDown, Award, ShieldAlert, Heart, Trophy, UserCheck, Users, ArrowRight } from 'lucide-react';

const Admissions: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childDob: '',
    grade: '',
    year: '2025–26',
    source: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Enquiry Data Submitted:', formData);
    setIsSubmitted(true);
    // Clear form
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      childName: '',
      childDob: '',
      grade: '',
      year: '2025–26',
      source: '',
      message: '',
    });
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const choicePillars = [
    { icon: <Award className="text-teal" size={32} />, title: 'Innovative Curriculum', desc: 'A future-focused academic programme that builds thinkers, not just test-takers.' },
    { icon: <UserCheck className="text-teal" size={32} />, title: 'Low Student-Teacher Ratio', desc: 'Every child receives personalised attention. No one gets lost in a crowd here.' },
    { icon: <Heart className="text-teal" size={32} />, title: 'Holistic Development', desc: 'Academics, arts, sports, values — your child grows in every dimension.' },
    { icon: <ShieldAlert className="text-teal" size={32} />, title: 'Safe & Secure Campus', desc: 'CCTV, trained staff, child-safe infrastructure, and a caring culture of protection.' },
    { icon: <Users className="text-teal" size={32} />, title: 'Parent Partnership', desc: 'We keep you informed, involved, and valued at every step of your child\'s journey.' },
    { icon: <Trophy className="text-teal" size={32} />, title: 'Future Readiness', desc: 'AI literacy, entrepreneurship, digital skills — preparing children for the world they\'ll actually live in.' },
  ];

  const steps = [
    { num: '01', title: 'Enquiry Form', desc: 'Fill out our online enquiry form or call us directly. Our team will reach out within 24 hours to answer your questions and share programme details.' },
    { num: '02', title: 'Campus Visit', desc: 'Schedule a guided tour of our campus. Meet our educators, see our facilities, and get a feel for the SOE learning environment firsthand.' },
    { num: '03', title: 'Interaction & Assessment', desc: 'A friendly, age-appropriate interaction session with your child — not a test, but a conversation. We want to understand how they learn and what excites them.' },
    { num: '04', title: 'Document Submission', desc: 'Submit required documents: birth certificate, previous school records, photographs, and any medical or learning support information we should know about.' },
    { num: '05', title: 'Enrolment Confirmation', desc: 'Complete fee payment and receive your enrolment pack, orientation schedule, and your child\'s welcome kit. The journey begins here.' },
  ];

  const faqs = [
    {
      q: 'What curriculum does The School of Excellence follow?',
      a: 'We follow the CBSE (Central Board of Secondary Education) and Cambridge international curricula, enhanced with our own SOE Learning Framework that integrates 21st century skills, experiential learning, values education, and holistic development across all grades.'
    },
    {
      q: 'What is the student-teacher ratio?',
      a: 'We maintain a low student-teacher ratio to ensure every child receives personalised attention. For Early Years and Primary sections, our ratio is approximately 10:1, and for Middle and Secondary sections, 15:1. This allows teachers to truly know, support, and challenge each learner.'
    },
    {
      q: 'Do you provide transport facilities?',
      a: 'Yes, we offer school bus services across all key areas and residential sectors of the city. Our buses are GPS-tracked, accompanied by a trained attendant, and operate on fixed, reliable routes. Detailed route plans and safety guidelines are shared during enrollment.'
    },
    {
      q: 'How do you ensure the safety of students on campus?',
      a: 'Student safety is our highest priority. Our campus is secured with 24/7 CCTV surveillance covering all areas, trained security personnel at all entry/exit gates, a strict visitor verification protocol, a fully equipped medical clinic with a qualified nurse, and regular safety drills. All staff undergo rigorous background verification.'
    },
    {
      q: 'What extracurricular activities are available?',
      a: 'We offer a wide range of activities including robotics, debate, visual arts, music, dance, drama, coding, eco club, sports, student council, MUN, and more. Every child is encouraged to explore their interests beyond academics — these are considered integral to holistic development, not optional add-ons.'
    },
    {
      q: 'Is a mid-year admission possible?',
      a: 'Mid-year admissions are considered on a case-by-case basis depending on seat availability. Please contact our admissions office directly, and we will do our best to accommodate your child smoothly into the learning community.'
    },
    {
      q: 'What meal and cafeteria facilities are available?',
      a: 'Our school cafeteria serves nutritionally balanced, hygienic meals prepared fresh daily. We offer vegetarian options as standard, with special dietary requirements accommodated. Menus are reviewed by a nutrition consultant. We also promote healthy tiffin habits and regularly educate students about nutrition.'
    },
    {
      q: 'How do you support children with different learning needs?',
      a: 'We believe every child can learn when properly supported. Our trained special educators, school counsellors, and differentiated learning approach ensure children with varied learning profiles — including dyslexia, ADHD, or processing differences — receive the support they need to thrive.'
    }
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
          <span>Admissions</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Admissions Open 2025–26
          </span>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight">
            Begin your child's<br />
            <span className="italic text-gold-light font-normal">excellence journey</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A simple, transparent admissions process designed to help us understand your child — and help you understand us.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE SOE ── */}
      <section className="py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Why Parents Choose SOE</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              What you're choosing when you choose us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {choicePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-cream/35 border border-bordercream/60 p-8 rounded-[2px] hover:border-gold hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="font-serif-display text-base font-bold text-navy mb-2">{pillar.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLMENT PROCESS ── */}
      <section className="py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40" id="process">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <motion.div {...fadeInUp} className="md:col-span-5 space-y-6">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">The Process</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Five simple steps<br />
              <span className="italic text-teal font-normal">to enrolment</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              We've designed our admissions process to be warm, transparent, and focused on understanding your child as a whole person — not just assessing academic readiness.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              From your first enquiry to your child's first day, our admissions team is here to guide you every step of the way.
            </p>

            <div className="bg-navy text-white p-6 rounded-[2px] border-l-4 border-gold shadow-md flex flex-col gap-1">
              <span className="text-xs text-white/50 font-bold uppercase tracking-wider">Speak to Admissions</span>
              <p className="text-sm font-semibold tracking-wide text-gold-light mt-1">
                +1 (555) 987-6543
              </p>
              <p className="text-[10px] text-white/45">
                Mon – Sat, 9:00 AM – 4:00 PM
              </p>
            </div>
          </motion.div>

          <div className="md:col-span-7 space-y-8 relative">
            <div className="absolute left-6 top-6 bottom-6 w-[1.5px] bg-gold/30 hidden sm:block" />
            
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="flex gap-4 sm:gap-6 items-start relative z-10"
              >
                <div className="w-12 h-12 rounded-[2px] bg-gold text-navy font-serif-display font-bold text-lg flex items-center justify-center shadow-sm shrink-0">
                  {step.num}
                </div>
                <div className="bg-white p-6 border border-bordercream/60 rounded-[2px] shadow-sm flex-grow">
                  <h3 className="font-serif-display text-base font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ── */}
      <section className="py-24 px-4 md:px-8 bg-offwhite" id="apply">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <motion.div {...fadeInUp} className="md:col-span-5 space-y-6">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Apply Now</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Start your<br />
              <span className="italic text-teal font-normal">enquiry today</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed">
              Fill in the form and our admissions team will contact you within one working day. We'd love to welcome your family to The School of Excellence.
            </p>

            <div className="space-y-4">
              <div className="bg-cream p-5 border-l-3 border-gold rounded-[2px]">
                <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold mb-1">Admissions Office</h4>
                <p className="text-navy font-semibold text-xs leading-relaxed">
                  +1 (555) 987-6543<br />
                  admissions@schoolofexcellence.edu
                </p>
              </div>
              <div className="bg-cream p-5 border-l-3 border-gold rounded-[2px]">
                <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold mb-1">WhatsApp Enquiries</h4>
                <p className="text-navy font-semibold text-xs leading-relaxed">
                  +91 98765 43210<br />
                  Available 9:00 AM – 6:00 PM
                </p>
              </div>
              <div className="bg-cream p-5 border-l-3 border-gold rounded-[2px]">
                <h4 className="text-[10px] uppercase tracking-wider text-gold font-bold mb-1">Prospectus</h4>
                <a href="#" className="text-teal font-bold text-xs inline-flex items-center gap-1.5 hover:underline">
                  Download 2025–26 Brochure <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="md:col-span-7 bg-cream p-8 md:p-10 border border-bordercream rounded-[2px] shadow-sm">
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
                  <h3 className="font-serif-display text-xl font-bold text-navy mb-4">Admission Enquiry Form</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Mobile Number *</label>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Child's Name *</label>
                      <input
                        type="text"
                        required
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        placeholder="Child's Full Name"
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Child's Date of Birth *</label>
                      <input
                        type="text"
                        required
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleInputChange}
                        placeholder="MM / DD / YYYY"
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Applying for Grade *</label>
                      <select
                        required
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                      >
                        <option value="">Select Grade</option>
                        <option>Playgroup</option>
                        <option>Nursery</option>
                        <option>Junior KG</option>
                        <option>Senior KG</option>
                        {Array.from({ length: 12 }, (_, i) => (
                          <option key={i + 1}>Grade {i + 1}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Academic Year *</label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                      >
                        <option>2025–26</option>
                        <option>2026–27</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">How did you hear about us?</label>
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                    >
                      <option value="">Select</option>
                      <option>Word of mouth</option>
                      <option>Social media</option>
                      <option>Google Search</option>
                      <option>Event/Exhibition</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Questions or Special Requirements</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us anything that would help us support your child better..."
                      className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal min-h-[100px] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200 mt-2"
                  >
                    Submit Enquiry
                  </button>
                  <p className="text-[10px] text-muted text-center mt-2.5">
                    We respect your privacy. Your information is kept confidential and used only for admissions communication.
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
                  <h3 className="font-serif-display text-2xl font-bold text-navy">Enquiry Submitted Successfully</h3>
                  <p className="text-muted text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for your interest in The School of Excellence. Our admissions team will reach out to you within one working day (24 hours) to schedule a call and campus tour.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="border border-navy text-navy font-semibold text-xs px-6 py-2.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200 mt-4"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── DOCUMENTS REQUIRED ── */}
      <section className="py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Documents Required</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              What to bring for enrolment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} className="bg-white p-6 border-t-[3px] border-teal rounded-[2px] shadow-sm">
              <h3 className="font-serif-display text-base font-bold text-navy mb-4 flex items-center gap-2">
                <FileText size={18} className="text-teal" /> For All Students
              </h3>
              <ul className="space-y-2.5 text-xs text-muted">
                <li className="flex gap-2">✓ <span>Child's birth certificate (original + copy)</span></li>
                <li className="flex gap-2">✓ <span>4 passport-size photographs</span></li>
                <li className="flex gap-2">✓ <span>Aadhar card (child &amp; parents)</span></li>
                <li className="flex gap-2">✓ <span>Proof of local address</span></li>
                <li className="flex gap-2">✓ <span>Medical/immunisation records</span></li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-6 border-t-[3px] border-gold rounded-[2px] shadow-sm">
              <h3 className="font-serif-display text-base font-bold text-navy mb-4 flex items-center gap-2">
                <FileText size={18} className="text-gold" /> For Grades 1–12
              </h3>
              <ul className="space-y-2.5 text-xs text-muted">
                <li className="flex gap-2">✓ <span>Previous school's Transfer Certificate (TC)</span></li>
                <li className="flex gap-2">✓ <span>Last 2 years' academic report cards</span></li>
                <li className="flex gap-2">✓ <span>Character certificate from previous principal</span></li>
                <li className="flex gap-2">✓ <span>Any diagnostic learning assessment reports</span></li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-6 border-t-[3px] border-navy rounded-[2px] shadow-sm">
              <h3 className="font-serif-display text-base font-bold text-navy mb-4 flex items-center gap-2">
                <FileText size={18} className="text-navy" /> Additional Documents
              </h3>
              <ul className="space-y-2.5 text-xs text-muted">
                <li className="flex gap-2">✓ <span>Special education/support records (if any)</span></li>
                <li className="flex gap-2">✓ <span>Sports or arts recognition credentials</span></li>
                <li className="flex gap-2">✓ <span>Completed enrollment checklist form</span></li>
                <li className="flex gap-2">✓ <span>Registration fee proof</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="py-24 px-4 md:px-8 bg-offwhite" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Frequently Asked Questions</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Your questions, answered
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-bordercream pb-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                  >
                    <span className="font-semibold text-navy text-sm md:text-[15px] group-hover:text-teal transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gold shrink-0 transition-transform duration-250 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted text-[13px] leading-relaxed pt-3 pb-1">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gold to-gold-light text-navy relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left space-y-3">
            <h2 className="font-serif-display text-3xl font-bold leading-tight">Seats are limited for 2025–26</h2>
            <p className="text-sm text-navy/80 leading-relaxed font-medium">
              Don't wait — enquire today and reserve your child's place in our learning community.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center shrink-0">
            <a href="#apply" className="bg-navy text-white font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200">
              Apply Now
            </a>
            <Link to="/contact" className="border border-navy text-navy font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
