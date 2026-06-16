import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Speech, Palette, Music, Terminal, Leaf, Camera, BookOpen, Heart } from 'lucide-react';

const CampusLife: React.FC = () => {
  const clubs = [
    {
      icon: <Cpu size={24} className="text-gold" />,
      title: 'Robotics & STEM Club',
      desc: 'Build, code, and compete. Students design robots, participate in inter-school challenges, and explore engineering principles through hands-on making.',
    },
    {
      icon: <Speech size={24} className="text-gold" />,
      title: 'Debate & MUN',
      desc: 'Public speaking, argumentation, and global perspective. Our debaters regularly compete at district and national level Model United Nations conferences.',
    },
    {
      icon: <Palette size={24} className="text-gold" />,
      title: 'Visual Arts Club',
      desc: 'Painting, sculpture, photography, and digital art. Students exhibit their work at our annual Art Showcase attended by parents and community members.',
    },
    {
      icon: <Music size={24} className="text-gold" />,
      title: 'Dance Academy',
      desc: 'Classical, folk, and contemporary forms. Our dance troupe performs at school events and inter-school competitions across the city.',
    },
    {
      icon: <Terminal size={24} className="text-gold" />,
      title: 'Coding & Innovation Club',
      desc: 'App development, game design, and AI projects. Students learn Python, JavaScript, and build real digital products they\'re proud to share.',
    },
    {
      icon: <Leaf size={24} className="text-gold" />,
      title: 'Eco & Sustainability Club',
      desc: 'Environmental stewardship, composting, waste reduction, and green campus initiatives. Our eco leaders make SOE a genuinely sustainable community.',
    },
    {
      icon: <Camera size={24} className="text-gold" />,
      title: 'Photography & Media Club',
      desc: 'Storytelling through images, video editing, and school journalism. Club members produce the SOE newsletter and social content.',
    },
    {
      icon: <BookOpen size={24} className="text-gold" />,
      title: 'Literature & Creative Writing',
      desc: 'Poetry slams, short story writing, and a student-published literary magazine. For children who find their voice through words.',
    },
    {
      icon: <Heart size={24} className="text-gold" />,
      title: 'Community Service',
      desc: 'Outreach programmes, elderly care visits, environmental clean-ups, and charity drives — building empathy and social responsibility into action.',
    },
  ];

  const events = [
    {
      title: 'Annual Day & Cultural Fest',
      desc: 'Our grandest celebration of the year — performances, exhibitions, awards, and the spirit of our entire school community on full display. A moment every family looks forward to.',
      color: 'border-gold',
    },
    {
      title: 'Science & Innovation Exhibition',
      desc: 'Students present original experiments, inventions, and research projects to parents, educators, and invited industry guests. A showcase of scientific thinking at its best.',
      color: 'border-teal',
    },
    {
      title: 'Sports Day',
      desc: 'A full-day celebration of athletic achievement, house spirit, and healthy competition — from track events to team relays, with medals, trophies, and memories for life.',
      color: 'border-navy',
    },
    {
      title: 'Early Years Celebration Day',
      desc: 'A magical day for our youngest learners — theme-based activities, parent participation, storytelling, and a showcase of Early Years creativity and confidence.',
      color: 'border-orange-400',
    },
    {
      title: 'Leadership Camp & Retreat',
      desc: 'Outbound leadership experiences for Middle and Secondary students — team-building, self-discovery, resilience challenges, and building bonds that last years.',
      color: 'border-gold',
    },
    {
      title: 'Graduation Ceremony',
      desc: 'A dignified, heartfelt send-off for our Grade 12 graduates — celebrating their journey and launching them confidently into their next chapter.',
      color: 'border-teal',
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
          <span>Campus Life</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Life at SOE
          </span>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight">
            Where every day is<br />
            <span className="italic text-gold-light font-normal">an adventure in learning</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            From robotics clubs to annual celebrations, campus life at The School of Excellence is vibrant, purposeful, and full of joy.
          </p>
        </div>
      </section>

      {/* ── CLUBS GRID ── */}
      <section className="py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Beyond the Classroom</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Activities that shape the whole child
            </h2>
            <p className="text-muted text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              At SOE, co-curricular activities are not extras — they are integral to how we develop confident, well-rounded human beings. Every club, event, and programme is designed with a developmental purpose.
            </p>
          </div>

          <h3 className="font-serif-display text-xl font-bold text-navy mb-8">Student Clubs &amp; Programmes</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {clubs.map((club, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-navy text-white p-7 border-b-[3px] border-gold rounded-[2px] hover:-translate-y-1 transition-all duration-200 shadow-sm"
              >
                <div className="mb-4 w-10 h-10 rounded-[2px] bg-white/10 flex items-center justify-center">
                  {club.icon}
                </div>
                <h4 className="font-serif-display text-base font-bold text-white mb-2">{club.title}</h4>
                <p className="text-white/60 text-[12px] leading-relaxed">{club.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVENTS CALENDAR ── */}
      <section className="py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40" id="events">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Annual Events Calendar</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Celebrations that build community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((evt, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className={`bg-white p-6 md:p-8 border-l-4 rounded-[2px] shadow-sm flex flex-col justify-center ${evt.color}`}
              >
                <h3 className="font-serif-display text-lg font-bold text-navy mb-2">{evt.title}</h3>
                <p className="text-muted text-xs md:text-[13px] leading-relaxed">{evt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STUDENT LEADERSHIP ── */}
      <section className="py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div {...fadeInUp} className="space-y-6">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Student Leadership</span>
            <h2 className="font-serif-display text-3xl md:text-4.5xl font-bold text-navy leading-tight">
              We develop leaders,<br />
              <span className="italic text-teal font-normal">not just achievers</span>
            </h2>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              Leadership at SOE isn't reserved for the top of the class — it's cultivated in every child through opportunities to serve, speak, decide, and inspire others.
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              Our Student Council, elected by peers from Grades 5–12, governs student affairs, organises events, and acts as the voice of the student body in school decision-making.
            </p>
            <p className="text-muted text-sm md:text-[15px] leading-relaxed">
              Public speaking programmes, debate competitions, community service projects, and peer mentoring roles give every student a pathway to grow as a leader — in their own unique way.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-4 md:mt-12">
            <div className="bg-navy text-white p-6 border-l-4 border-gold rounded-[2px] shadow-sm">
              <h3 className="font-serif-display text-base font-bold text-gold-light mb-1">Student Council</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Elected leadership body representing all grades — organising events, voicing student concerns, and developing real governance skills.
              </p>
            </div>
            
            <div className="bg-teal text-white p-6 border-l-4 border-white/40 rounded-[2px] shadow-sm">
              <h3 className="font-serif-display text-base font-bold text-teal-light mb-1">House System</h3>
              <p className="text-white/80 text-xs leading-relaxed">
                Four houses (Tagore, Ashoka, Radhakrishnan, Raman) foster team spirit, healthy competition, and a sense of belonging that transcends classroom boundaries.
              </p>
            </div>
            
            <div className="bg-cream p-6 border-l-4 border-navy rounded-[2px] shadow-sm border border-bordercream/40">
              <h3 className="font-serif-display text-base font-bold text-navy mb-1">Peer Mentoring</h3>
              <p className="text-muted text-xs leading-relaxed">
                Senior students mentor juniors in academics, campus navigation, and emotional adjustment — building empathy and responsibility.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gold to-gold-light text-navy relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left space-y-3">
            <h2 className="font-serif-display text-3xl font-bold leading-tight">Ready to be part of this community?</h2>
            <p className="text-sm text-navy/80 leading-relaxed font-medium">
              Bring your child into a campus where every day has meaning and every child matters.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center shrink-0">
            <Link to="/admissions" className="bg-navy text-white font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200">
              Apply for Admission
            </Link>
            <Link to="/contact" className="border border-navy text-navy font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Book a Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLife;
