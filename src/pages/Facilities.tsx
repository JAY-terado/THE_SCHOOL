import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Heart, Sparkles, School } from 'lucide-react';

type FacilityItem = {
  icon: string;
  name: string;
  desc: string;
  metric: string;
  features: string[];
};

type CategoryData = {
  [key: string]: {
    title: string;
    description: string;
    items: FacilityItem[];
  };
};

const Facilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'academic' | 'labs' | 'studios' | 'sports'>('academic');

  const tabs = [
    { id: 'academic', name: 'Academic Spaces' },
    { id: 'labs', name: 'Science & Tech Labs' },
    { id: 'studios', name: 'Creative Studios' },
    { id: 'sports', name: 'Sports & Fitness' },
  ];

  const categoryData: CategoryData = {
    academic: {
      title: 'Academic Spaces',
      description: 'Environments designed to inspire collaboration, focus, and deep reading — nurturing intellectual curiosity every day.',
      items: [
        {
          icon: '📖',
          name: 'Smart Classrooms',
          desc: 'Climate-controlled classrooms equipped with ergonomic furniture, smart interactive screens, and layouts that easily adapt from lectures to group projects.',
          metric: '1:1 Interactive Boards',
          features: ['Ergonomic seating', 'Abundant natural light', 'Fully audio-visual integrated']
        },
        {
          icon: '📚',
          name: 'Central Library & Reading Lounge',
          desc: 'A vast sanctuary of knowledge featuring an extensive collection of print books, digital resources, quiet study cubicles, and comfortable reading nooks for early readers.',
          metric: '12,000+ Books & Journals',
          features: ['Digital archives access', 'Dedicated primary reading area', 'Cozy lounge seating']
        },
        {
          icon: '🏫',
          name: 'Open-Air Learning Courtyard',
          desc: 'A beautifully landscaped outdoor amphitheater and courtyard designed for outdoor lessons, poetry slams, debates, and collaborative group discussions under the sky.',
          metric: '250 Seat Capacity',
          features: ['Green environment', 'Integrated sound setup', 'Shaded seating layers']
        }
      ]
    },
    labs: {
      title: 'Science & Tech Labs',
      description: 'Hands-on discovery spaces where theoretical science and technology principles transform into real creations.',
      items: [
        {
          icon: '🤖',
          name: 'Robotics & STEM Lab',
          desc: 'A state-of-the-art makerspace equipped with 3D printers, electronics workbench kits, and advanced robotics modules where students learn design thinking and coding.',
          metric: '25+ Lego Mindstorms Kits',
          features: ['Dual-extruder 3D Printer', 'Arduino & Raspberry Pi boards', 'Soldering & assembly zones']
        },
        {
          icon: '🔬',
          name: 'Modern Science Laboratories',
          desc: 'Dedicated, spacious laboratories for Physics, Chemistry, and Biology, each equipped with professional-grade safety apparatus, microscopes, and chemical venting hoods.',
          metric: 'Individual Workstations',
          features: ['Emergency safety showers', 'High-power optical microscopes', 'Ventilation hoods']
        },
        {
          icon: '💻',
          name: 'Junior Computer Lab',
          desc: 'A high-speed computing environment where younger learners are introduced to scratch block coding, typing skills, digital citizenship, and online research safety.',
          metric: '1:1 Device Ratio',
          features: ['Curated educational software', 'Strict content filters', 'Adjustable height monitors']
        }
      ]
    },
    studios: {
      title: 'Creative Studios',
      description: 'Vibrant, open studios where children explore self-expression, rhythm, composition, and visual storytelling.',
      items: [
        {
          icon: '🎨',
          name: 'Fine Arts Courtyard',
          desc: 'A sunlit art studio designed for sketching, oil painting, pottery making, and sculpture. Features individual easels, wash sinks, and display gallery panels.',
          metric: '50+ Easels & Potter Wheels',
          features: ['Natural north-facing light', 'Electric pottery wheels', 'Student gallery walls']
        },
        {
          icon: '💃',
          name: 'Dance Academy Hall',
          desc: 'A spacious, mirrored dance studio with sprung wooden floors and a professional audio setup, supporting classical Indian dance forms, folk, and contemporary choreography.',
          metric: 'Mirrored Walls & Wooden Floors',
          features: ['Sprung flooring for safety', 'Surround sound system', 'Changing rooms attached']
        },
        {
          icon: '🎭',
          name: 'Acoustic Music & Drama Studio',
          desc: 'Sound-insulated practice suites containing pianos, percussion sets, string instruments, and recording systems. Connects to our black-box theater rehearsal space.',
          metric: '15+ Instrument Types',
          features: ['Acoustic sound insulation', 'Digital recording console', 'Choral risers']
        }
      ]
    },
    sports: {
      title: 'Sports & Fitness Arena',
      description: 'Physical coordination, endurance, and team spirit are built in our state-of-the-art indoor and outdoor sports fields.',
      items: [
        {
          icon: '🏃',
          name: 'Multi-Sport Turf Arena',
          desc: 'A premium, all-weather synthetic turf field designed for football, athletics, cricket net practice, and track events. Enclosed with safety nets.',
          metric: '20,000 Sq. Ft. Playing Area',
          features: ['Floodlight illuminated', 'All-weather drainage', 'Spectator seating pavilion']
        },
        {
          icon: '🏀',
          name: 'Indoor Basketball & Badminton Complex',
          desc: 'An indoor sports center featuring maple wood basketball courts, three badminton courts, table tennis tables, and advanced athletic gear lockers.',
          metric: 'Maple Wood Courts',
          features: ['Electronic scoreboards', 'Non-slip grip floor sealing', 'Ventilated lockers']
        },
        {
          icon: '🧸',
          name: 'Early Years Play Zone',
          desc: 'A safe, soft-floored outdoor playground designed specifically for playgroup and kindergarten students, featuring sensory sandboxes, slides, and climbing blocks.',
          metric: 'Soft-Rubber Impact Flooring',
          features: ['Sensory play sandboxes', 'Shaded canopy covers', '100% rounded safety edges']
        }
      ]
    }
  };

  const safetyStandards = [
    { icon: <ShieldCheck className="text-teal" size={20} />, name: '24/7 CCTV & Guards', desc: 'Continuous surveillance of all public corridors, playgrounds, and school gates by licensed security staff.' },
    { icon: <Heart className="text-teal" size={20} />, name: 'Infirmary & Nurse', desc: 'Fully equipped medical room with a registered nurse, basic first aid, oxygen, and emergency ambulance tie-up.' },
    { icon: <Sparkles className="text-teal" size={20} />, name: 'RO Water & Hygiene', desc: 'Multi-stage RO purification plants for drinking water, and sanitization of classrooms twice daily.' },
    { icon: <School className="text-teal" size={20} />, name: 'Eco-Friendly & Safe', desc: 'Green solar panels, low-VOC paint on walls, and 100% child-safe rounded furniture edges in all grades.' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6, ease: 'easeOut' as const },
  };

  const activeCategory = categoryData[activeTab];

  return (
    <div>
      {/* ── BREADCRUMB ── */}
      <div className="bg-cream border-b border-bordercream/60 py-3 px-4 md:px-8 text-xs text-muted">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5">
          <Link to="/" className="text-teal hover:underline font-medium">Home</Link>
          <span className="text-muted/60">/</span>
          <span>Campus Facilities</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Designed for Growth &amp; Discovery
          </span>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight">
            Our Campus &amp;<br />
            <span className="italic text-gold-light font-normal">world-class facilities</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We believe that physical spaces are the "third teacher". Explore how our school is built to inspire wonder, protect safety, and support human flourishing.
          </p>
        </div>
      </section>

      {/* ── INTERACTIVE FACILITY SHOWCASE ── */}
      <section className="py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          {/* Tab buttons */}
          <div className="flex gap-2.5 flex-wrap justify-center mb-12 border-b border-bordercream pb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-white text-navy border border-bordercream/80 hover:bg-cream-light'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Dynamic Content Showcase */}
          <div className="space-y-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 text-center max-w-2xl mx-auto mb-16"
            >
              <h2 className="font-serif-display text-2.5xl font-bold text-navy">
                {activeCategory.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                {activeCategory.description}
              </p>
            </motion.div>

            {/* Grid of detail cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeCategory.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  {...fadeInUp}
                  className="bg-white border border-bordercream/60 p-8 rounded-[2px] shadow-sm hover:border-gold hover:-translate-y-0.5 transition-all duration-250 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="text-4xl block">{item.icon}</span>
                    <div>
                      <h3 className="font-serif-display text-lg font-bold text-navy mb-1">{item.name}</h3>
                      <span className="inline-block bg-teal-light/20 text-teal text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-muted text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Features list */}
                  <div className="border-t border-bordercream/40 pt-4 mt-6">
                    <ul className="space-y-2">
                      {item.features.map((feature, idy) => (
                        <li key={idy} className="text-[11px] text-muted flex items-start gap-1.5 leading-normal">
                          <Check size={12} className="text-gold shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SAFETY & HYGIENE STANDARDS ── */}
      <section className="py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Safe &amp; Secure Campus</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Safety and hygiene standards
            </h2>
            <p className="text-muted text-xs md:text-sm max-w-md mx-auto leading-relaxed">
              Before learning can happen, comfort and safety must be absolute. We maintain strict protocols to ensure your child remains healthy and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {safetyStandards.map((std, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                className="bg-white p-6 border border-bordercream/60 rounded-[2px] shadow-sm space-y-3"
              >
                <div className="w-9 h-9 rounded-full bg-teal-light/20 flex items-center justify-center">
                  {std.icon}
                </div>
                <h3 className="font-serif-display text-base font-bold text-navy">{std.name}</h3>
                <p className="text-muted text-xs leading-relaxed">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOUR / BROCHURE CTA ── */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-gold to-gold-light text-navy relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left space-y-3">
            <h2 className="font-serif-display text-3xl font-bold leading-tight">Experience our campus in person</h2>
            <p className="text-sm text-navy/80 leading-relaxed font-medium">
              Pictures only tell half the story. Schedule a personalized campus visit during a working school day to see learning in action.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center shrink-0">
            <Link to="/contact" className="bg-navy text-white font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200">
              Book a Campus Tour
            </Link>
            <Link to="/admissions" className="border border-navy text-navy font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Admission Guidelines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
