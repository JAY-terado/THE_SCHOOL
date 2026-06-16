import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, BarChart3, MessageSquare, Brain, Heart, Group } from 'lucide-react';

const Parents: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const supportSystems = [
    {
      icon: <BarChart3 size={28} className="text-teal" />,
      title: 'Digital Progress Tracking',
      desc: 'Access your child\'s academic progress, attendance record, homework submissions, and teacher remarks through our secure parent portal — anytime, from any device.',
      benefit: 'Always know how your child is doing, not just at report card time',
    },
    {
      icon: <Users size={28} className="text-teal" />,
      title: 'Parent-Teacher Meetings',
      desc: 'Scheduled face-to-face PTMs every term, plus the ability to book one-on-one meetings with any teacher at any time through our online scheduling system.',
      benefit: 'Meaningful conversations, not just report-reading sessions',
    },
    {
      icon: <MessageSquare size={28} className="text-teal" />,
      title: 'Real-Time Communication',
      desc: 'Direct messaging with class teachers via our parent app, school-wide announcements, and a dedicated WhatsApp channel for urgent communications.',
      benefit: 'No more wondering — get answers the same day',
    },
    {
      icon: <Brain size={28} className="text-teal" />,
      title: 'Parenting Workshops',
      desc: 'Monthly sessions led by educators, child psychologists, and specialists covering topics like screen time, exam stress, emotional regulation, and adolescent development.',
      benefit: 'Practical tools to support your child at home',
    },
    {
      icon: <Heart size={28} className="text-teal" />,
      title: 'Family Counselling Support',
      desc: 'Our school counsellors are available to parents as well as students. If you\'re navigating a challenge with your child, we\'re here to help you navigate it together.',
      benefit: 'You don\'t have to figure it out alone',
    },
    {
      icon: <Group size={28} className="text-teal" />,
      title: 'Parent Community Events',
      desc: 'Annual family day, grade-specific parent socials, volunteering opportunities, and celebration events where our parent community connects and grows together.',
      benefit: 'Build friendships, not just school connections',
    },
  ];

  const terms = [
    {
      title: 'Term 1 · June – October',
      color: 'border-teal',
      items: [
        'New academic year orientation',
        'Parent-Teacher Meeting (Term 1)',
        'Mid-term assessments',
        'Science & Innovation Exhibition',
        'Sports Day',
        'Term 1 report cards issued',
      ]
    },
    {
      title: 'Term 2 · November – February',
      color: 'border-gold',
      items: [
        'Parent-Teacher Meeting (Term 2)',
        'Annual Day & Cultural Fest',
        'Leadership Camp (Grades 7–10)',
        'Debate & MUN competitions',
        'Mid-year assessments',
        'Term 2 report cards issued',
      ]
    },
    {
      title: 'Term 3 · March – May',
      color: 'border-navy',
      items: [
        'Final examinations',
        'Board exams (Grades 10 & 12)',
        'Art Showcase & Exhibitions',
        'Graduation Ceremony (Grade 12)',
        'Annual reports & promotions',
        'Admissions open for next year',
      ]
    }
  ];

  const testimonials = [
    {
      quote: '"We\'d visited three schools before SOE. The moment we walked in, we felt the difference — the warmth, the calm, the sense that children actually matter here. We enrolled that week."',
      author: 'Parent of a Grade 3 Student',
      year: 'Enrolled 2022',
      initial: 'A',
    },
    {
      quote: '"The parent portal is brilliant. I can see my son\'s progress in real time. But what I appreciate most is that teachers actually call me — not just when there\'s a problem, but to share something wonderful he did."',
      author: 'Parent of a Grade 7 Student',
      year: 'Enrolled 2020',
      initial: 'M',
    },
    {
      quote: '"My daughter struggled with anxiety in her previous school. SOE\'s counsellor worked with her, and with us, over six months. She is now a confident, happy child. This school genuinely cares."',
      author: 'Parent of a Grade 5 Student',
      year: 'Enrolled 2021',
      initial: 'S',
    },
  ];

  const faqs = [
    {
      q: 'How often will I receive updates on my child\'s progress?',
      a: 'Formal updates come through PTMs each term and end-of-term report cards. However, you can access real-time data through our parent portal at any time — attendance, homework, assessment scores, and teacher notes are updated regularly. Teachers are also available for one-on-one meetings on request.'
    },
    {
      q: 'What do I do if my child is facing a problem at school?',
      a: 'Contact your child\'s class teacher directly through the parent portal or our WhatsApp channel. For more serious concerns — bullying, emotional distress, or academic difficulties — reach out to the school counsellor or the Principal\'s office. We operate an open-door policy. No concern is too small.'
    },
    {
      q: 'Can parents volunteer or be involved in school activities?',
      a: 'Absolutely — we actively welcome parent involvement. Parents are invited to speak at career talks, volunteer at events, join the Parent Advisory Committee, and participate in cultural celebrations. Your presence on campus enriches our community.'
    },
    {
      q: 'How is homework managed — is there too much?',
      a: 'We follow a research-informed approach to homework: purposeful, age-appropriate, and not excessive. For Early Years and Primary, homework is minimal and activity-based. For Middle and Secondary, it supports consolidation of classroom learning. We do not believe in rote homework for its own sake.'
    },
    {
      q: 'What is the school\'s approach to screen time and technology?',
      a: 'Technology is used as a purposeful learning tool, not for entertainment. Smart boards are teacher-controlled. Student devices are used for specific tasks under supervision. We teach digital citizenship and healthy tech habits. Personal mobile phones are not permitted during school hours.'
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
          <span>Parents</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Parent Partnership
          </span>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight">
            You are not just parents —<br />
            <span className="italic text-gold-light font-normal">you are partners</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            At SOE, we believe the best education happens when school and home work together. Here's everything you need to stay informed, involved, and connected.
          </p>
        </div>
      </section>

      {/* ── PARTNERSHIP PHILOSOPHY ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
              Our Partnership Philosophy
            </span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              A school that keeps you in the loop
            </h2>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              Research consistently shows that children thrive when their parents are actively engaged in their education. At The School of Excellence, we don't just send home report cards — we build genuine relationships with every family.
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              From regular parent-teacher meetings to monthly newsletters, digital progress tracking, and workshops on parenting through different developmental stages, we ensure you always have what you need to support your child at home.
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              Our parents are not spectators. They are partners — and we treat them that way in every interaction.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-4 md:mt-12">
            <div className="bg-cream p-6 border-t-[3px] border-teal rounded-[2px] shadow-sm">
              <strong className="text-[10px] text-teal uppercase tracking-wider font-bold block mb-2">Our Commitment to You</strong>
              <p className="text-muted text-xs leading-relaxed">Transparent, timely communication about your child's progress, wellbeing, and school life — always.</p>
            </div>
            
            <div className="bg-cream p-6 border-t-[3px] border-gold rounded-[2px] shadow-sm">
              <strong className="text-[10px] text-gold-dark uppercase tracking-wider font-bold block mb-2">Your Role</strong>
              <p className="text-muted text-xs leading-relaxed">Attend parent-teacher meetings, engage with school communications, and reinforce values and learning at home.</p>
            </div>
            
            <div className="bg-cream p-6 border-t-[3px] border-navy rounded-[2px] shadow-sm">
              <strong className="text-[10px] text-navy uppercase tracking-wider font-bold block mb-2">Together</strong>
              <p className="text-muted text-xs leading-relaxed">When school and home are aligned, children feel secure, motivated, and supported to become their best selves.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SUPPORT SYSTEMS ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">How We Keep You Connected</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Support systems built for modern families
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportSystems.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-white p-8 border border-bordercream/60 rounded-[2px] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-serif-display text-base font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-muted text-xs leading-relaxed mb-6">{item.desc}</p>
                </div>
                <span className="text-[10px] text-teal uppercase font-bold tracking-wider pt-3 border-t border-bordercream/40 block">
                  {item.benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC YEAR AT A GLANCE ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Academic Year at a Glance</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              What to expect through the year
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((term, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className={`p-8 bg-cream rounded-[2px] border-t-3 shadow-sm ${term.color}`}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy border-b border-bordercream pb-4 mb-4">
                  {term.title}
                </h3>
                <ul className="space-y-3">
                  {term.items.map((item, idy) => (
                    <li key={idy} className="text-muted text-xs flex items-center gap-2 leading-relaxed">
                      <span className="text-gold">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (Dark Band) ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-radial opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Parent Voices</span>
            <h2 className="font-serif-display text-3xl font-bold text-white leading-tight">
              In their own words
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-white/[0.05] border border-white/10 p-8 border-t-[3px] border-t-gold rounded-[2px] shadow-md flex flex-col justify-between"
              >
                <p className="text-white/80 italic text-xs md:text-[13px] leading-relaxed mb-6">
                  {testi.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gold text-navy font-serif font-bold text-sm flex items-center justify-center">
                    {testi.initial}
                  </div>
                  <div>
                    <strong className="block text-white text-xs font-semibold">{testi.author}</strong>
                    <span className="text-white/40 text-[10px] block mt-0.5">{testi.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARENT FAQS ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Parent FAQs</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Common questions from families
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
            <h2 className="font-serif-display text-3xl font-bold leading-tight">Have more questions?</h2>
            <p className="text-sm text-navy/80 leading-relaxed font-medium">
              Our admissions and parent relations team is always happy to help. Reach out anytime.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center shrink-0">
            <Link to="/contact" className="bg-navy text-white font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200">
              Contact Us
            </Link>
            <Link to="/admissions" className="border border-navy text-navy font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Parents;
