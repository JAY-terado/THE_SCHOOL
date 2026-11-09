import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Send, CheckCircle, GraduationCap, HeartHandshake, Sparkles, AlertCircle } from 'lucide-react';
import { validateName, validatePhone, validateEmail, validateRequired, validateMessage } from '../utils/validation';

const Careers: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Cambridge IGCSE Educator (Sciences & Mathematics)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    experience: '',
    philosophy: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (fieldName: string, value: string): string | null => {
    switch (fieldName) {
      case 'name':
        return validateName(value, 'Full Name');
      case 'phone':
        return validatePhone(value);
      case 'email':
        return validateEmail(value);
      case 'selectedRole':
        return validateRequired(value, 'Position');
      case 'experience':
        return validateRequired(value, 'Teaching Experience');
      case 'philosophy':
        return validateMessage(value, 1000);
      default:
        return null;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let cleanValue = value;
    if (name === 'phone') {
      cleanValue = value.replace(/\D/g, '').slice(0, 10);
    }
    setFormData((prev) => ({ ...prev, [name]: cleanValue }));

    const err = validateField(name, cleanValue);
    setErrors((prev) => ({ ...prev, [name]: err || '' }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const benefits = [
    {
      icon: <GraduationCap className="text-teal" size={28} />,
      title: 'Cambridge Professional Development',
      desc: 'Access world-class Cambridge International training programmes, pedagogical workshops, and recognized certifications.',
    },
    {
      icon: <Sparkles className="text-gold" size={28} />,
      title: 'Culture of Academic Freedom',
      desc: 'Work in an inquiry-led sanctuary where innovative lesson design, mentorship, and creative daring are celebrated.',
    },
    {
      icon: <HeartHandshake className="text-teal" size={28} />,
      title: 'Competitive Compensation & Growth',
      desc: 'Industry-leading remuneration, comprehensive health benefits, and merit-based institutional leadership advancement.',
    },
  ];

  const openings = [
    {
      title: 'Cambridge IGCSE Educator — Sciences & Mathematics',
      dept: 'Secondary & High School',
      type: 'Full-time',
      experience: '3+ Years with Cambridge / IB Curriculum',
    },
    {
      title: 'Primary Stage Facilitator (Grades 1–5)',
      dept: 'Primary Section',
      type: 'Full-time',
      experience: '2+ Years in Experiential / Inquiry-led Learning',
    },
    {
      title: 'Head of Robotics, AI & Computational Inquiry',
      dept: 'STEM & Innovation Lab',
      type: 'Full-time',
      experience: 'B.Tech / M.Sc with hands-on STEM coaching experience',
    },
    {
      title: 'Performing Arts & Visual Expression Mentor',
      dept: 'Creative Arts Academy',
      type: 'Full-time / Part-time',
      experience: 'Demonstrated portfolio in classical / contemporary arts',
    },
    {
      title: 'Licensed Student Counsellor & Pastoral Guide',
      dept: 'Student Wellbeing Center',
      type: 'Full-time',
      experience: 'Master\'s in Clinical / Educational Psychology',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' as const },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    const values = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      selectedRole: selectedRole,
      experience: formData.experience,
      philosophy: formData.philosophy,
    };

    Object.entries(values).forEach(([key, val]) => {
      newTouched[key] = true;
      const err = validateField(key, val);
      if (err) newErrors[key] = err;
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div>
      {/* ── BREADCRUMB ── */}
      <div className="bg-cream border-b border-bordercream/60 py-3 px-4 md:px-8 text-xs text-muted">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5">
          <Link to="/" className="text-teal hover:underline font-medium">Home</Link>
          <span className="text-muted/60">/</span>
          <span>Careers</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Careers at TSE
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Shape minds that will<br />
            <span className="italic text-gold-light font-normal">shape the future</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Join a community of distinguished scholars, mentors, and innovators at Vasai West's premier Cambridge International school.
          </p>
        </div>
      </section>

      {/* ── WHY JOIN ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Faculty Experience</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              Why Teach &amp; Lead at TSE
            </h2>
            <p className="text-muted text-xs leading-relaxed">
              We empower educators with the autonomy, resources, and institutional backing to practice teaching at its highest level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-cream p-8 border-t-2 border-gold rounded-[2px] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{b.icon}</div>
                  <h3 className="font-serif-display text-lg font-bold text-navy mb-2.5">{b.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40" id="openings">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Current Opportunities</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Open Positions for Academic Year 2027–28
            </h2>
          </div>

          <div className="space-y-4">
            {openings.map((job, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-white p-6 border border-bordercream rounded-[2px] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gold transition-colors duration-200"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal block">{job.dept} • {job.type}</span>
                  <h3 className="font-serif-display text-base font-bold text-navy">{job.title}</h3>
                  <p className="text-muted text-xs flex items-center gap-2">
                    <Briefcase size={13} className="text-gold" /> {job.experience}
                  </p>
                </div>
                <a
                  href="#apply-faculty"
                  onClick={() => setSelectedRole(job.title)}
                  className="bg-navy text-white text-xs font-semibold px-5 py-2.5 rounded-[2px] hover:bg-teal transition-colors self-start sm:self-center shrink-0"
                >
                  Apply for Role
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION FORM ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite" id="apply-faculty">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 border border-bordercream rounded-[2px] shadow-sm">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block mb-2">Faculty Application</span>
            <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Submit Your Candidacy
            </h2>
            <p className="text-muted text-xs leading-relaxed mb-8">
              Even if your specialization is not explicitly listed, we invite exceptional educators to submit their resume. Direct enquiries can also be mailed to <strong className="text-navy">careers@schoolofexcellence.edu</strong>.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="Dr. / Mr. / Ms. Full Name"
                      className={`w-full bg-cream border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                        'name',
                        formData.name
                      )}`}
                    />
                    {touched.name && errors.name && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} className="shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Contact Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-cream border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="name@example.com"
                      className={`w-full bg-cream border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
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
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Applying For Position *</label>
                    <input
                      type="text"
                      value={selectedRole}
                      onChange={(e) => {
                        setSelectedRole(e.target.value);
                        if (touched.selectedRole) {
                          const err = validateField('selectedRole', e.target.value);
                          setErrors((prev) => ({ ...prev, selectedRole: err || '' }));
                        }
                      }}
                      onBlur={() => {
                        setTouched((prev) => ({ ...prev, selectedRole: true }));
                        const err = validateField('selectedRole', selectedRole);
                        setErrors((prev) => ({ ...prev, selectedRole: err || '' }));
                      }}
                      className={`w-full bg-cream border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                        'selectedRole',
                        selectedRole
                      )}`}
                    />
                    {touched.selectedRole && errors.selectedRole && (
                      <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                        <AlertCircle size={12} className="shrink-0" />
                        <span>{errors.selectedRole}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Years of Teaching Experience *</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="e.g. 5 years in Cambridge IGCSE / ICSE"
                    className={`w-full bg-cream border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors ${getFieldClass(
                      'experience',
                      formData.experience
                    )}`}
                  />
                  {touched.experience && errors.experience && (
                    <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                      <AlertCircle size={12} className="shrink-0" />
                      <span>{errors.experience}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-navy">Summary of Pedagogical Philosophy</label>
                    <span className="text-[10px] text-muted">{formData.philosophy.length}/1000</span>
                  </div>
                  <textarea
                    rows={4}
                    name="philosophy"
                    value={formData.philosophy}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    maxLength={1000}
                    placeholder="Tell us how you cultivate curiosity and academic excellence in your classroom..."
                    className={`w-full bg-cream border px-3 py-2 text-xs rounded-[2px] focus:outline-none transition-colors resize-y ${
                      touched.philosophy && errors.philosophy
                        ? 'border-rose-400 focus:border-rose-500 bg-rose-50/20'
                        : formData.philosophy.trim().length > 0
                        ? 'border-emerald-500 focus:border-emerald-500 bg-emerald-50/15'
                        : 'border-bordercream focus:border-teal'
                    }`}
                  />
                  {touched.philosophy && errors.philosophy && (
                    <p className="text-[11px] text-rose-600 font-medium flex items-center gap-1 mt-1">
                      <AlertCircle size={12} className="shrink-0" />
                      <span>{errors.philosophy}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy text-white font-semibold text-xs uppercase tracking-wider py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                >
                  <Send size={14} /> Submit Application
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-3">
                <CheckCircle size={40} className="text-teal mx-auto" />
                <h3 className="font-serif-display text-xl font-bold text-navy">Application Received</h3>
                <p className="text-muted text-xs max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in joining The School of Excellence. Our Academic Selection Committee reviews applications on a rolling basis and will contact shortlisted candidates.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
