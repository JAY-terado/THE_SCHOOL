import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const About: React.FC = () => {
  const values = [
    { num: '01', title: 'Excellence', desc: 'Striving for the highest standards in academics, character, creativity, and personal growth.' },
    { num: '02', title: 'Integrity', desc: 'Cultivating honesty, responsibility, and ethical behaviour in every child, every day.' },
    { num: '03', title: 'Curiosity', desc: 'Inspiring children to question, explore, discover, and develop a lifelong love of learning.' },
    { num: '04', title: 'Compassion', desc: 'Encouraging empathy, kindness, inclusion, and genuine respect for every individual.' },
    { num: '05', title: 'Creativity', desc: 'Nurturing imagination, innovation, and the confidence to think independently.' },
    { num: '06', title: 'Resilience', desc: 'Teaching children to embrace challenges with courage, patience, and a growth mindset.' },
    { num: '07', title: 'Collaboration', desc: 'Building communication skills and a spirit of community through teamwork and shared purpose.' },
    { num: '08', title: 'Holistic Growth', desc: 'Equal focus on intellectual, emotional, physical, social, and creative development.' },
  ];

  const philosophy = [
    { num: '01', title: 'Child-Centered Learning', desc: 'No two minds are identical. We curate learning pathways that accelerate individual strengths rather than forcing uniform metrics.' },
    { num: '02', title: 'Experiential Education', desc: 'Learning happens through exploration, projects, interaction, and real-world experiences — not passive reception.' },
    { num: '03', title: 'Future-Ready Skills', desc: 'Critical thinking, communication, creativity, collaboration, and digital literacy are woven into every grade.' },
    { num: '04', title: 'Emotional Wellbeing', desc: 'A culture of profound emotional reassurance and psychological safety, instilling the inner composure necessary for bold intellectual risk.' },
    { num: '05', title: 'Values-Based Education', desc: 'Strong character and ethics are embedded into the curriculum and school culture — not added on.' },
    { num: '06', title: 'Innovation & Creativity', desc: 'Students are encouraged to experiment, create, and think independently in every subject and activity.' },
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
          <span>About Us</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Who We Are
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Beyond academic distinction —<br />
            <span className="italic text-gold-light font-normal">shaping the complete individual</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            The heritage, philosophy, and foundational standards that guide The School of Excellence.
          </p>
        </div>
      </section>

      {/* ── WELCOME MESSAGE ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream border-b border-bordercream/60">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <motion.div {...fadeInUp} className="md:col-span-7 space-y-5">
              <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
                Welcome Message
              </span>
              <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
                Welcome to<br />
                <span className="italic text-teal font-normal">The School of Excellence</span>
              </h2>
              <p className="text-muted text-sm md:text-[15px] leading-relaxed">
                The School of Excellence is a forward-thinking Cambridge International (IGCSE) school in Vasai West, bringing a distinct, world-class standard to modern schooling. We pair advanced computational and scientific inquiry with profound personal mentorship, athletic discipline, and global citizenship.
              </p>
              <p className="text-muted text-sm md:text-[15px] leading-relaxed">
                Conceived as an intentional sanctuary for young minds, TSE redefines contemporary education through bespoke student pathways and world-standard infrastructure. Our institutional ethos comes alive through every classroom dialogue, laboratory experiment, and creative pursuit.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="md:col-span-5 space-y-3.5">
              <div className="bg-white p-5 border-l-4 border-gold rounded-[2px] shadow-sm">
                <h4 className="font-serif-display text-sm font-bold text-navy mb-1">Inquiry-Led Cambridge Pedagogy</h4>
                <p className="text-muted text-xs leading-relaxed">Cultivating analytical mastery, deep conceptual reasoning, and internationally recognized academic rigor.</p>
              </div>
              <div className="bg-white p-5 border-l-4 border-teal rounded-[2px] shadow-sm">
                <h4 className="font-serif-display text-sm font-bold text-navy mb-1">Holistic Character and Moral Grounding</h4>
                <p className="text-muted text-xs leading-relaxed">Instilling integrity, emotional maturity, and the ethical conviction to lead with empathy.</p>
              </div>
              <div className="bg-white p-5 border-l-4 border-navy rounded-[2px] shadow-sm">
                <h4 className="font-serif-display text-sm font-bold text-navy mb-1">Advanced Intellectual and Physical Mastery</h4>
                <p className="text-muted text-xs leading-relaxed">Balancing cognitive agility and STEM innovation with elite sportsmanship and physical grit.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
              Our Story
            </span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              A vision to<br />
              <span className="italic text-teal font-normal">redefine education</span>
            </h2>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              The School of Excellence is founded on a singular conviction: that true education must honour the complete individual—recognising not merely an academic trajectory, but a human being endowed with distinct intellect, character, and promise.
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              We begin with a fundamental question: what happens when an institution is intentionally calibrated around the scholar, rather than the constraints of standardized metrics and rigid curricula?
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              The answer is The School of Excellence. Designed as a sanctuary of uncompromising scholarship and authentic pastoral care—an environment where artistic daring and mathematical rigor carry equal weight, and where every mentor understands the unique measure of every child.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-navy text-white p-8 border-l-[4px] border-gold rounded-[2px] shadow-lg md:mt-16">
            <span className="absolute top-2 right-4 text-6xl text-gold/10 font-serif">“</span>
            <blockquote className="font-serif-display italic text-base md:text-lg text-white/95 leading-relaxed mb-6">
              "We did not set out to build a great school. We set out to build a place where great children could grow — and the school followed."
            </blockquote>
            <cite className="text-xs text-gold-light font-semibold uppercase tracking-wider block">
              — The Founders, The School of Excellence
            </cite>
          </motion.div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="py-20 md:py-28 px-4 md:px-8 bg-navy text-white relative overflow-hidden border-t border-b border-gold/20">
        <div className="absolute inset-0 bg-glow-radial opacity-35 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="inline-block bg-gold/15 border border-gold/30 text-gold-light text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-[2px]">
              Our Mission
            </span>

            <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              To form thoughtful, courageous &amp;<br />
              <span className="italic text-gold-light font-normal">principled human beings</span>
            </h2>

            <div className="bg-white/[0.04] border border-gold/30 p-8 sm:p-10 md:p-12 rounded-[2px] backdrop-blur-sm shadow-2xl relative mt-8 text-left">
              <span className="absolute -top-5 left-8 text-6xl text-gold/25 font-serif select-none pointer-events-none">“</span>
              <p className="font-serif-display italic text-base sm:text-lg md:text-[19px] text-white/95 leading-relaxed tracking-wide">
                The School of Excellence exists to form thoughtful, courageous and principled human beings. We begin with the child, weighing every decision against what serves their long-term flourishing. We pursue mastery over marks, cultivating scholars who question, reason and form independent judgment rather than merely excel within existing systems. We shape character as deliberately as intellect, safeguarding each child’s dignity and nurturing the curiosity and creative courage that original thought requires. In trusted partnership with families, we prepare our students not for a fixed world but for shifting ground, equipping them to think deeply, create boldly and lead responsibly, and to build lives defined by lasting purpose, integrity and meaningful contribution.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                <span className="text-gold uppercase tracking-widest font-semibold text-[11px]">
                  Institutional Mission • The School of Excellence
                </span>
                <span className="text-white/50 italic text-[11px]">
                  Cambridge International (IGCSE) • Vasai West
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR MASCOT ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite border-t border-bordercream/60">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <motion.div {...fadeInUp} className="md:col-span-4 flex justify-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-navy flex items-center justify-center p-6 border-4 border-gold shadow-xl relative group">
              <img
                src="/logo.png"
                alt="The Mascot of Excellence"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(201,168,76,0.35)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>

          <motion.div {...fadeInUp} className="md:col-span-8 space-y-5">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
              Our Mascot
            </span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              Our Mascot —<br />
              <span className="italic text-teal font-normal">Why we have chosen it</span>
            </h2>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              At The School of Excellence, our emblem and mascot embody the eternal flame of wisdom, enlightened intellect, and unwavering resilience. Flanked by the classical laurel of academic distinction, it represents the transformative journey every scholar undertakes within our halls.
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              We chose this symbol because true education does not fill vessels—it lights fires. The torch is a sacred trust passed from mentor to scholar, illuminating curiosity, commanding self-discipline, and inspiring young leaders to navigate and shape our world with courage, honor, and unyielding purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MESSAGES ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Leadership Messages</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              From our <em>founders &amp; mentors</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div {...fadeInUp} className="bg-navy text-white p-8 md:p-10 border-b-[4px] border-gold rounded-[2px] shadow-md relative">
              <span className="text-5xl text-gold/25 font-serif absolute top-4 left-6">“</span>
              <p className="font-serif-display italic text-sm md:text-base text-white/90 leading-relaxed mb-4 relative z-10">
                Education is not merely the acquisition of knowledge. It is the cultivation of character, the awakening of curiosity, and the building of courage. At The School of Excellence, we do not measure our success by the marks our students achieve — we measure it by the people they become.
              </p>
              <p className="font-serif-display italic text-sm md:text-base text-white/90 leading-relaxed mb-8 relative z-10">
                Our commitment to every family is this: your child will be seen, heard, supported, and challenged — every single day they walk through our doors.
              </p>
              <div className="border-t border-white/10 pt-4 relative z-10 flex flex-col">
                <strong className="text-gold-light text-sm font-semibold tracking-wide">Dr. Sumeet Sharma</strong>
                <span className="text-[10px] text-white/45 uppercase tracking-wider font-medium mt-0.5">Founder &amp; Managing Director</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="space-y-6 md:pt-4">
              <h3 className="font-serif-display text-2xl font-bold text-navy">The Principal's Message</h3>
              <p className="text-muted text-sm leading-relaxed">
                At The School of Excellence, we believe that the purpose of education is not to prepare children for tests — it is to prepare them for life. Every programme we design, every activity we offer, every interaction between teacher and student is guided by one question: does this help this child grow?
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Our educators are not merely instructors. They are mentors, guides, and trusted adults who inspire curiosity, model integrity, and celebrate each child's unique journey. We create an environment where it is safe to ask questions, make mistakes, take risks, and — above all — learn.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                I am honoured to lead this community of learners, families, and educators. Together, we are building something that matters.
              </p>
              <div className="bg-white p-5 border-l-4 border-teal rounded-[2px] shadow-sm">
                <strong className="block text-navy text-sm font-semibold">Mrs. Anuradha Sharma</strong>
                <span className="text-[10px] text-muted uppercase tracking-wider font-semibold block mt-0.5">Principal, The School of Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOUNDATION: MISSION, VISION & VALUES ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Our Foundation</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              Mission, Vision &amp;<br />
              <span className="italic text-teal font-normal">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <motion.div {...fadeInUp} className="bg-navy text-white p-8 rounded-[2px] border-b-[4px] border-gold shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-4">Our Mission</span>
              <p className="font-serif-display italic text-base md:text-[18px] text-white/90 leading-relaxed">
                To nurture confident, compassionate, and future-ready learners through experiential education, strong values, academic excellence, and holistic development in a safe and inspiring environment.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="bg-teal text-white p-8 rounded-[2px] border-b-[4px] border-gold shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-teal-light font-bold block mb-4">Our Vision</span>
              <p className="font-serif-display italic text-base md:text-[18px] text-white/90 leading-relaxed">
                To become a leading institution that empowers children to think independently, lead responsibly, innovate fearlessly, and contribute meaningfully to the world.
              </p>
            </motion.div>
          </div>

          <div className="text-center max-w-sm mx-auto mb-10">
            <h3 className="font-serif-display text-2xl font-bold text-navy mb-2">Core Values</h3>
            <p className="text-muted text-xs leading-relaxed">
              Eight enduring standards that define our culture, scholarship, and community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-cream p-6 border-t-2 border-gold rounded-[2px] text-center shadow-sm"
              >
                <span className="font-serif-display text-2xl text-gold/60 font-bold block mb-2">{val.num}</span>
                <h4 className="font-serif-display text-base font-bold text-navy mb-2">{val.title}</h4>
                <p className="text-muted text-[11.5px] leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATIONAL PHILOSOPHY ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-glow-radial opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Educational Philosophy</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-white leading-tight">
              Every child has unique potential
            </h2>
            <p className="text-white/60 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
              Children flourish when they are heard, encouraged, challenged, inspired, and emotionally secure. Our learning framework is built on six foundational principles:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophy.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="p-6 border border-white/10 bg-white/[0.03] hover:border-gold/40 transition-colors duration-250 rounded-[2px]"
              >
                <span className="block font-serif-display text-2xl text-gold/25 font-bold mb-3 leading-none">{item.num}</span>
                <h3 className="font-serif-display text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/65 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/academics" className="bg-gold text-navy font-semibold text-[13px] px-8 py-3.5 rounded-[2px] hover:bg-gold-light hover:shadow-lg transition-all duration-200">
              Explore Our Academic Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gold to-gold-light text-navy relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left space-y-3">
            <h2 className="font-serif-display text-3xl font-bold leading-tight">Ready to visit our campus?</h2>
            <p className="text-sm text-navy/80 leading-relaxed font-medium">
              Schedule a guided tour and meet our team. We'd love to show you what learning looks like here.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center shrink-0">
            <Link to="/contact" className="bg-navy text-white font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200">
              Book a Campus Tour
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

export default About;
