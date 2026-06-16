import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ArrowRight, BookOpen, Compass, Award, ShieldAlert, Heart } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { num: '12+', label: 'Years of Learning' },
    { num: '8', label: 'Core Values' },
    { num: '21st', label: 'Century Curriculum' },
    { num: '100%', label: 'Holistic Focus' },
  ];

  const highlights = [
    '21st Century Learning',
    'Safe & Secure Campus',
    'Experienced Educators',
    'Holistic Development',
    'Smart Classrooms',
    'Sports & Performing Arts',
    'Activity-Based Learning',
    'Parent Partnership',
  ];

  const pillars = [
    {
      icon: <Award className="text-teal" size={32} />,
      title: 'Holistic Development',
      desc: 'Balanced focus on academics, creativity, leadership, sports, and emotional intelligence — because the whole child matters.',
    },
    {
      icon: <Compass className="text-teal" size={32} />,
      title: 'Experiential Learning',
      desc: 'Hands-on projects, real-world problem-solving, and discovery-led education that makes learning genuinely meaningful.',
    },
    {
      icon: <BookOpen className="text-teal" size={32} />,
      title: 'Future-Ready Curriculum',
      desc: 'Critical thinking, digital literacy, communication, and collaboration woven into every grade and subject.',
    },
    {
      icon: <Star className="text-teal" size={32} />,
      title: 'Passionate Educators',
      desc: 'Dedicated mentors who see teaching as a calling — inspiring curiosity, building confidence, and knowing each child by name.',
    },
    {
      icon: <ShieldAlert className="text-teal" size={32} />,
      title: 'Safe & Nurturing Campus',
      desc: 'A child-friendly, CCTV-secured environment where every student feels emotionally safe, valued, and seen.',
    },
    {
      icon: <Heart className="text-teal" size={32} />,
      title: 'Individual Attention',
      desc: 'Low student-teacher ratios and personalised learning plans ensure no child is left behind or held back.',
    },
  ];

  const programmes = [
    {
      stage: 'Early Years',
      levels: 'Playgroup · Nursery · Jr KG · Sr KG',
      desc: 'Play-based discovery, sensory richness, and joyful beginnings — where curiosity is born.',
      color: 'border-orange-400 bg-orange-50/50 hover:bg-orange-50/80',
      tag: 'early',
    },
    {
      stage: 'Primary School',
      levels: 'Grades 1–5',
      desc: 'Strong foundations in literacy, numeracy, and inquiry — where love of learning deepens.',
      color: 'border-teal bg-teal-light/20 hover:bg-teal-light/35',
      tag: 'primary',
    },
    {
      stage: 'Middle School',
      levels: 'Grades 6–8',
      desc: 'Analytical thinking, project-based learning, and leadership — where identity and ambition form.',
      color: 'border-gold bg-cream/30 hover:bg-cream/55',
      tag: 'middle',
    },
    {
      stage: 'Secondary School',
      levels: 'Grades 9–12',
      desc: 'Academic excellence, career readiness, and university pathways — where futures are built.',
      color: 'border-navy bg-navy/5 hover:bg-navy/10',
      tag: 'secondary',
    },
  ];

  const framework = [
    { num: '01', title: 'Inquiry-Based Learning', desc: 'Students ask questions, investigate, and construct understanding — teachers guide, not dictate.' },
    { num: '02', title: 'Collaborative Classrooms', desc: 'Peer learning, group projects, and communication skills built into the fabric of every lesson.' },
    { num: '03', title: 'Creative Exploration', desc: 'Art, music, theatre, and storytelling are not extras — they are how children learn to think.' },
    { num: '04', title: 'Technology Integration', desc: 'Smart classrooms, robotics labs, and digital literacy prepare students for a tech-forward world.' },
    { num: '05', title: 'Values & Leadership', desc: 'Character education, student councils, and service programmes develop responsible citizens.' },
    { num: '06', title: 'Emotional Wellbeing', desc: 'A happy child learns best. Our counsellors and culture ensure every child feels heard and secure.' },
  ];

  const facilities = [
    { icon: '🔬', name: 'Science Labs' },
    { icon: '🤖', name: 'Robotics & STEM' },
    { icon: '📚', name: 'Library & Lounge' },
    { icon: '🎭', name: 'Auditorium' },
    { icon: '🏃', name: 'Sports Complex' },
    { icon: '🎨', name: 'Art & Music Studios' },
    { icon: '💻', name: 'Smart Classrooms' },
    { icon: '🏥', name: 'Medical Room' },
  ];

  const testimonials = [
    {
      quote: '"My daughter came home on the first day and said, \'Mama, school is fun.\' That told me everything I needed to know about this place."',
      author: 'Parent of a Grade 2 Student',
      year: 'Enrolled 2023',
      initial: 'P',
    },
    {
      quote: '"The teachers here don\'t just teach — they listen. My son\'s confidence has grown in ways I never anticipated when we first enrolled."',
      author: 'Parent of a Grade 5 Student',
      year: 'Enrolled 2021',
      initial: 'R',
    },
    {
      quote: '"What sets SOE apart is the balance — academics, sports, arts, values. My child is learning to be a human being, not just a student."',
      author: 'Parent of a Grade 9 Student',
      year: 'Enrolled 2018',
      initial: 'S',
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' as const },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true, margin: '-100px' },
  };

  return (
    <div className="relative">
      {/* ── HERO SECTION ── */}
      <section className="relative bg-navy text-white min-h-[85vh] flex flex-col justify-center overflow-hidden py-16 px-4 md:px-8 border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-60 pointer-events-none" />
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(var(--gold) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="max-w-4xl mx-auto text-center relative z-10 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gold/15 border border-gold/30 text-gold-light text-xs font-semibold uppercase tracking-widest px-4 py-1.5 mb-8 rounded-[2px]"
          >
            Admissions Open 2025–26
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          >
            Where Potential<br />
            <span className="italic text-gold-light font-normal">Becomes</span> Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            A future-focused institution nurturing confident, creative, compassionate learners through holistic, experiential education — from Playgroup to Grade 12.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/admissions" className="bg-gold text-navy font-semibold text-[14px] px-8 py-3.5 rounded-[2px] hover:bg-gold-light hover:shadow-lg transition-all duration-200">
              Apply for Admission
            </Link>
            <Link to="/contact" className="border border-white/60 text-white font-medium text-[14px] px-8 py-3.5 rounded-[2px] hover:bg-white/10 hover:border-white transition-all duration-200">
              Book a Campus Tour
            </Link>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-5xl mx-auto w-full mt-16 md:mt-24 border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center relative">
              <span className="block font-serif-display text-3xl md:text-4.5xl font-bold text-gold-light mb-1">
                {stat.num}
              </span>
              <span className="text-[10px] md:text-xs text-white/50 uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/4 h-8 w-[1px] bg-white/12" />
              )}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── HIGHLIGHTS TICKER ── */}
      <section className="bg-gold py-4 overflow-hidden border-b border-gold/30">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex gap-10 overflow-x-auto scrollbar-none justify-between whitespace-nowrap">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[11px] font-semibold text-navy uppercase tracking-wider shrink-0">
                <span className="text-navy/50">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
              Our Philosophy
            </span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              Education that goes<br />
              <span className="italic text-teal font-normal">beyond the classroom</span>
            </h2>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              At The School of Excellence, we believe every child carries within them a unique constellation of talents, curiosity, and potential. Our role is not to fill vessels — it is to light fires.
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              We combine academic rigour with creativity, emotional wellbeing, and strong values, building learners who are as comfortable with empathy as they are with equations. This is education designed for the world your child will actually inhabit.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Our Story &amp; Philosophy <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-6">
            <div className="bg-navy text-white p-8 border-l-[4px] border-gold rounded-[2px] relative shadow-lg">
              <span className="absolute top-2 right-4 text-6xl text-gold/10 font-serif">“</span>
              <blockquote className="font-serif-display italic text-base md:text-lg text-white/90 leading-relaxed mb-4 relative z-10">
                "Every child learns differently. We personalise experiences to support individual growth — not just academic achievement, but human flourishing."
              </blockquote>
              <cite className="text-xs text-gold-light font-semibold uppercase tracking-wider block">
                — The School of Excellence Learning Framework
              </cite>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-cream p-5 border-t-2 border-teal rounded-[2px]">
                <strong className="text-[10px] uppercase tracking-wider text-teal block mb-2 font-bold">Mission</strong>
                <p className="text-muted text-[12px] leading-relaxed">Nurturing confident, compassionate, future-ready learners through experiential education and strong values.</p>
              </div>
              <div className="bg-cream p-5 border-t-2 border-teal rounded-[2px]">
                <strong className="text-[10px] uppercase tracking-wider text-teal block mb-2 font-bold">Vision</strong>
                <p className="text-muted text-[12px] leading-relaxed">Empowering children to think independently, lead responsibly, and contribute meaningfully to the world.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Why Families Choose Us</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              Six pillars of a<br />
              <span className="italic text-teal font-normal">transformative education</span>
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-offwhite border border-bordercream p-6 sm:p-8 rounded-[2px] hover:border-gold hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="font-serif-display text-lg font-bold text-navy mb-3">{pillar.title}</h3>
                <p className="text-muted text-[13px] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROGRAMMES OVERVIEW ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">From First Steps to Final Year</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              A complete journey,<br />
              <span className="italic text-teal font-normal">thoughtfully designed</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {programmes.map((prog, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className={`p-6 border-b-[4px] rounded-[2px] flex flex-col justify-between h-[280px] shadow-sm hover:-translate-y-1 transition-all duration-200 ${prog.color}`}
              >
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-navy mb-1">{prog.stage}</h3>
                  <span className="block text-[9px] uppercase tracking-wider text-muted font-semibold border-b border-bordercream pb-3 mb-4">
                    {prog.levels}
                  </span>
                  <p className="text-muted text-[12px] leading-relaxed">{prog.desc}</p>
                </div>
                <Link to={`/academics#${prog.tag}`} className="text-teal text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:text-teal-dark mt-4">
                  Explore <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/academics" className="inline-block bg-gold text-navy font-semibold text-[13px] px-8 py-3.5 rounded-[2px] hover:bg-gold-light hover:shadow-lg transition-all duration-200">
              View Grade-by-Grade Roadmap
            </Link>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-radial opacity-20 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Our Learning Framework</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-white leading-tight">
              Learning Beyond Textbooks
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {framework.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-6 border border-white/10 bg-white/[0.03] hover:border-gold/40 transition-colors duration-250 rounded-[2px]"
              >
                <span className="block font-serif-display text-3xl text-gold/25 font-bold mb-3 leading-none">{item.num}</span>
                <h3 className="font-serif-display text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACILITIES GLIMPSE ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Campus &amp; Facilities</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              A campus designed<br />
              <span className="italic text-teal font-normal">for growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {facilities.map((fac, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-cream border border-bordercream/60 py-6 px-4 rounded-[2px] text-center flex flex-col items-center gap-3 shadow-sm hover:border-gold transition-colors duration-200"
              >
                <span className="text-3xl">{fac.icon}</span>
                <span className="font-semibold text-xs text-navy tracking-wide">{fac.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/facilities" className="inline-flex items-center gap-2 border-2 border-navy text-navy font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Tour Our Facilities <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Parent Voices</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              What families say<br />
              <span className="italic text-teal font-normal">about us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testi, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-offwhite p-6 sm:p-8 border border-bordercream rounded-[2px] shadow-sm flex flex-col justify-between"
              >
                <p className="text-muted italic text-[13px] leading-relaxed mb-6">
                  {testi.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold text-navy font-serif font-bold text-xs flex items-center justify-center">
                    {testi.initial}
                  </div>
                  <div className="text-[11px]">
                    <strong className="block text-navy font-semibold">{testi.author}</strong>
                    <span className="text-muted block mt-0.5">{testi.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS CTA ── */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-gold to-gold-light text-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left space-y-3">
            <h2 className="font-serif-display text-3xl md:text-4xl font-bold leading-tight">Admissions Open for 2025–26</h2>
            <p className="text-sm text-navy/80 leading-relaxed font-medium">
              Join a learning community where every child is known, valued, and challenged to become the best version of themselves.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center shrink-0">
            <Link to="/admissions" className="bg-navy text-white font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200">
              Apply Now
            </Link>
            <Link to="/contact" className="border border-navy text-navy font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Schedule a Visit
            </Link>
            <a href="#" className="border border-navy/30 text-navy font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:border-navy/60 transition-all duration-200">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
