import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, FileText, ChevronDown, Award, ShieldAlert, Heart, Trophy, UserCheck, Users, ArrowRight, AlertCircle } from 'lucide-react';
import { validateName, validatePhone, validateEmail, validateRequired, validateDob, validateMessage } from '../utils/validation';

const Admissions: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childDob: '',
    grade: '',
    year: '2027–28',
    source: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case 'parentName':
        return validateName(value, "Parent's Name");
      case 'phone':
        return validatePhone(value);
      case 'email':
        return validateEmail(value);
      case 'childName':
        return validateName(value, "Child's Name");
      case 'childDob':
        return validateDob(value);
      case 'grade':
        return validateRequired(value, 'Applying Grade');
      case 'message':
        return validateMessage(value, 1000);
      default:
        return null;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let cleanValue = value;
    if (name === 'phone') {
      cleanValue = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: cleanValue }));

    const err = validateField(name, cleanValue);
    setErrors((prev) => ({ ...prev, [name]: err || '' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err || '' }));
  };

  const isFieldValid = (name: string, value: string) => {
    return value.trim().length > 0 && !errors[name] && validateField(name, value) === null;
  };

  const getFieldClass = (name: string, value: string) => {
    const isErr = touched[name] && !!errors[name];
    const isValid = isFieldValid(name, value);

    if (isErr) {
      return 'border-rose-400 focus:border-rose-500 bg-rose-50/20';
    }
    if (isValid) {
      return 'border-emerald-500 focus:border-emerald-500 bg-emerald-50/15';
    }
    return 'border-bordercream focus:border-teal';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    const fields = ['parentName', 'phone', 'email', 'childName', 'childDob', 'grade', 'message'];

    fields.forEach((f) => {
      newTouched[f] = true;
      const err = validateField(f, formData[f as keyof typeof formData] || '');
      if (err) newErrors[f] = err;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

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
      year: '2027–28',
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
    { num: '02', title: 'Campus Visit', desc: 'Schedule a guided tour of our campus. Meet our educators, see our facilities, and get a feel for the TSE learning environment firsthand.' },
    { num: '03', title: 'Interaction & Assessment', desc: 'A friendly, age-appropriate interaction session with your child — not a test, but a conversation. We want to understand how they learn and what excites them.' },
    { num: '04', title: 'Document Submission', desc: 'Submit the required documents: birth certificate, previous school records, photographs, and any medical support information we should be aware of.' },
    { num: '05', title: 'Enrolment Confirmation', desc: 'Complete fee payment and receive your enrolment pack, orientation schedule, and your child\'s welcome kit. The journey begins here.' },
  ];

  const faqs = [
    
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
      a: 'We believe every child can learn when properly supported. Our trained special educators, school counsellors, and differentiated learning approach ensure that children with varied learning profiles are supported.'
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
            Admissions Open 2027–28
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

      {/* ── WHY CHOOSE TSE ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Why Families Entrust Us</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              A definitive foundation for a complex world.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {choicePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-cream/35 border border-bordercream/60 p-6 sm:p-8 rounded-[2px] hover:border-gold hover:-translate-y-0.5 transition-all duration-200"
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
              Your Pathway<br />
              <span className="italic text-teal font-normal">to Enrolment</span>
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
                  Download 2027–28 Brochure <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="md:col-span-7 bg-cream p-5 sm:p-8 md:p-10 border border-bordercream rounded-[2px] shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
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
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Full Name"
                        className={`w-full bg-white border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                          'parentName',
                          formData.parentName
                        )}`}
                      />
                      {touched.parentName && errors.parentName && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.parentName}</span>
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="10-digit mobile number"
                        className={`w-full bg-white border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                          'phone',
                          formData.phone
                        )}`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="email@example.com"
                      className={`w-full bg-white border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                        'email',
                        formData.email
                      )}`}
                    />
                    {touched.email && errors.email && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} className="shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Child's Name *</label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="Child's Full Name"
                        className={`w-full bg-white border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                          'childName',
                          formData.childName
                        )}`}
                      />
                      {touched.childName && errors.childName && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.childName}</span>
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Child's Date of Birth *</label>
                      <input
                        type="text"
                        name="childDob"
                        value={formData.childDob}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder="DD / MM / YYYY"
                        className={`w-full bg-white border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                          'childDob',
                          formData.childDob
                        )}`}
                      />
                      {touched.childDob && errors.childDob && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.childDob}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Applying for Grade *</label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                          'grade',
                          formData.grade
                        )}`}
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
                      {touched.grade && errors.grade && (
                        <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                          <AlertCircle size={12} className="shrink-0" />
                          <span>{errors.grade}</span>
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Academic Year *</label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-bordercream px-3 py-2 text-xs rounded-[2px] focus:outline-none focus:border-teal"
                      >
                        <option>2027–28</option>
                        <option>2028–29</option>
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
                    <div className="flex justify-between items-center">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Questions or Special Requirements</label>
                      <span className="text-[10px] text-muted">{formData.message.length}/1000</span>
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      maxLength={1000}
                      placeholder="Tell us anything that would help us support your child better..."
                      className={`w-full bg-white border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors min-h-[100px] resize-y ${
                        touched.message && errors.message
                          ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                          : formData.message.trim().length > 0
                          ? 'border-emerald-500 focus:border-emerald-500 bg-emerald-50/15'
                          : 'border-bordercream focus:border-teal'
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} className="shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
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
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Documents Required</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">What you need to bring</h2>
            <p className="text-muted text-xs leading-relaxed">Please ensure you have self-attested copies of the following documents ready at the time of verification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeInUp} className="bg-white p-8 border-t-[3px] border-teal rounded-[2px] shadow-sm">
              <h3 className="font-serif-display text-lg font-bold text-navy mb-5 flex items-center gap-2.5">
                <FileText size={20} className="text-teal" /> For All Students
              </h3>
              <ul className="space-y-3 text-xs md:text-[13px] text-muted">
                <li className="flex gap-2.5 items-start">✓ <span>Child's birth certificate (original + copy)</span></li>
                <li className="flex gap-2.5 items-start">✓ <span>2 passport-size photographs of the child and 1 each of the parents</span></li>
                <li className="flex gap-2.5 items-start">✓ <span>Aadhaar card (child &amp; parents)</span></li>
                <li className="flex gap-2.5 items-start">✓ <span>Pan Card (Parents)</span></li>
                <li className="flex gap-2.5 items-start">✓ <span>Fitness Certificate</span></li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-white p-8 border-t-[3px] border-gold rounded-[2px] shadow-sm">
              <h3 className="font-serif-display text-lg font-bold text-navy mb-5 flex items-center gap-2.5">
                <FileText size={20} className="text-gold" /> For Grades 2–12
              </h3>
              <ul className="space-y-3 text-xs md:text-[13px] text-muted">
                <li className="flex gap-2.5 items-start">✓ <span>Previous school's Transfer Certificate (TC)</span></li>
                <li className="flex gap-2.5 items-start">✓ <span>Last year's academic report card</span></li>
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
            <h2 className="font-serif-display text-3xl font-bold leading-tight">Seats are limited for 2027–28</h2>
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
