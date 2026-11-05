import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

const News: React.FC = () => {
  const articles = [
    {
      id: 1,
      tag: 'Academic Milestone',
      date: 'October 15, 2025',
      title: 'The School of Excellence Affiliates with Cambridge Assessment International Education',
      desc: 'TSE announces full Cambridge International (IGCSE) alignment for our secondary and high school pathways at our state-of-the-art campus in Vasai West, pioneering a new benchmark for inquiry-led scholarship.',
      readTime: '4 min read',
    },
    {
      id: 2,
      tag: 'STEM & Innovation',
      date: 'November 2, 2025',
      title: 'Inaugural Computational & Robotics Exposition Celebrates Young Inventors',
      desc: 'Students from Grades 4 through 9 demonstrated self-navigating robotics, environmental sensor networks, and interactive AI models developed in our dedicated STEM Makerspace.',
      readTime: '3 min read',
    },
    {
      id: 3,
      tag: 'Campus & Ethos',
      date: 'November 20, 2025',
      title: 'Unveiling Our Institutional Mascot: The Torch of Wisdom and Mastery',
      desc: 'Reflecting our conviction that true education lights fires rather than filling vessels, the TSE community unveiled the enduring emblem that will guide our houses and scholars.',
      readTime: '5 min read',
    },
    {
      id: 4,
      tag: 'Athletics & Leadership',
      date: 'December 10, 2025',
      title: 'Inter-House Athletics Meet Fosters Composure, Grit, and Camaraderie',
      desc: 'Over 400 student-athletes competed across track, swimming, basketball, and gymnastics, embodying our foundational standard of physical discipline and collective sportsmanship.',
      readTime: '3 min read',
    },
    {
      id: 5,
      tag: 'Community & Dialogue',
      date: 'January 14, 2026',
      title: 'Vasai West Community Seminar: Preparing Children for an AI-Driven Century',
      desc: 'TSE leadership hosted a dialogue with leading educational researchers on balancing digital literacy with deep emotional wellbeing and philosophical ethics.',
      readTime: '6 min read',
    },
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
          <span>News &amp; Events</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Institutional Chronicles
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            News, Milestones &amp;<br />
            <span className="italic text-gold-light font-normal">Campus Dialogues</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Stay informed on institutional milestones, academic inquiry breakthroughs, and student achievements at The School of Excellence.
          </p>
        </div>
      </section>

      {/* ── ARTICLES LIST ── */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Featured Headline */}
          <motion.div
            {...fadeInUp}
            className="bg-cream p-8 md:p-12 border-l-4 border-gold rounded-[2px] shadow-sm"
          >
            <div className="flex items-center gap-3 text-xs text-teal font-semibold mb-3">
              <span className="bg-teal/10 px-2.5 py-1 rounded-[2px] uppercase tracking-wider text-[10px]">Featured Story</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-muted text-[11px]"><Calendar size={12} /> {articles[0].date}</span>
            </div>
            <h2 className="font-serif-display text-2xl md:text-3.5xl font-bold text-navy mb-4 leading-tight">
              {articles[0].title}
            </h2>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed mb-6">
              {articles[0].desc}
            </p>
            <div className="flex items-center gap-4 text-xs font-bold text-navy uppercase tracking-wider">
              <span>{articles[0].readTime}</span>
            </div>
          </motion.div>

          {/* Grid of articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {articles.slice(1).map((item) => (
              <motion.article
                key={item.id}
                {...fadeInUp}
                className="bg-white p-7 border border-bordercream rounded-[2px] shadow-sm hover:border-gold transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-muted mb-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-teal">{item.tag}</span>
                    <span className="flex items-center gap-1"><Calendar size={11} /> {item.date}</span>
                  </div>
                  <h3 className="font-serif-display text-lg font-bold text-navy mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="border-t border-bordercream/60 pt-4 flex items-center justify-between text-xs text-muted">
                  <span>{item.readTime}</span>
                  <span className="text-gold font-semibold flex items-center gap-1">Read Dispatch <ArrowRight size={12} /></span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOTIFICATION BANNER ── */}
      <section className="py-12 px-4 md:px-8 bg-navy text-white border-t border-gold/15">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif-display text-lg font-bold text-gold-light flex items-center justify-center sm:justify-start gap-2">
              <Bell size={18} /> Media &amp; Press Enquiries
            </h3>
            <p className="text-white/60 text-xs">
              For official statements, campus photography, and institutional interview requests, reach our communications desk at <strong className="text-white">media@schoolofexcellence.edu</strong>.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-gold text-navy font-semibold text-xs px-6 py-2.5 rounded-[2px] hover:bg-gold-light transition-colors shrink-0"
          >
            Contact Media Desk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default News;
