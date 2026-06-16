import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Brain, BookOpen } from 'lucide-react';

type GradeData = {
  badge: string;
  title: string;
  subtitle: string;
  subjects: { name: string; desc: string }[];
  milestones?: string[];
  skills?: string[];
  note?: string;
};

type StagesData = {
  [key: string]: {
    [key: string]: GradeData;
  };
};

const Academics: React.FC = () => {
  const [activeStage, setActiveStage] = useState<'early' | 'primary' | 'middle' | 'secondary'>('early');
  const [activeGrade, setActiveGrade] = useState<string>('pg');

  const handleStageChange = (stage: 'early' | 'primary' | 'middle' | 'secondary') => {
    setActiveStage(stage);
    // Set default grade for the stage
    if (stage === 'early') setActiveGrade('pg');
    else if (stage === 'primary') setActiveGrade('g1');
    else if (stage === 'middle') setActiveGrade('g6');
    else if (stage === 'secondary') setActiveGrade('g9');
  };

  const stages = [
    { id: 'early', name: 'Early Years' },
    { id: 'primary', name: 'Primary (1–5)' },
    { id: 'middle', name: 'Middle (6–8)' },
    { id: 'secondary', name: 'Secondary (9–12)' },
  ];

  const gradeTabs = {
    early: [
      { id: 'pg', name: 'Playgroup' },
      { id: 'nur', name: 'Nursery' },
      { id: 'jkg', name: 'Junior KG' },
      { id: 'skg', name: 'Senior KG' },
    ],
    primary: [
      { id: 'g1', name: 'Grade 1' },
      { id: 'g2', name: 'Grade 2' },
      { id: 'g3', name: 'Grade 3' },
      { id: 'g4', name: 'Grade 4' },
      { id: 'g5', name: 'Grade 5' },
    ],
    middle: [
      { id: 'g6', name: 'Grade 6' },
      { id: 'g7', name: 'Grade 7' },
      { id: 'g8', name: 'Grade 8' },
    ],
    secondary: [
      { id: 'g9', name: 'Grade 9' },
      { id: 'g10', name: 'Grade 10' },
      { id: 'g11', name: 'Grade 11' },
      { id: 'g12', name: 'Grade 12' },
    ],
  };

  const roadmapData: StagesData = {
    early: {
      pg: {
        badge: 'PG',
        title: 'Playgroup',
        subtitle: 'Ages 2–3 · The first spark of wonder',
        subjects: [
          { name: 'Language & Literacy', desc: 'Oral language, nursery rhymes, picture-book stories, phonemic awareness introduction.' },
          { name: 'Numeracy', desc: 'Counting 1–10, sorting shapes and colours, pattern recognition through play.' },
          { name: 'Sensory Play', desc: 'Sand, water, clay, texture exploration — developing fine and gross motor skills.' },
          { name: 'Art & Craft', desc: 'Free drawing, finger painting, tearing and pasting — building creativity and expression.' },
          { name: 'Music & Movement', desc: 'Rhymes, rhythm instruments, action songs, and movement games.' },
          { name: 'Social Skills', desc: 'Turn-taking, sharing, following simple instructions, and building peer relationships.' },
        ],
        milestones: [
          'Able to follow 2-step instructions',
          'Identifies basic shapes and colours',
          'Counts confidently to 10',
          'Uses 2–3 word phrases clearly',
          'Shows curiosity and explores independently',
          'Engages in parallel and group play',
        ]
      },
      nur: {
        badge: 'N',
        title: 'Nursery',
        subtitle: 'Ages 3–4 · Building blocks of learning',
        subjects: [
          { name: 'Language & Phonics', desc: 'Letter recognition (A–Z), beginning phonics, pre-reading activities, vocabulary building.' },
          { name: 'Mathematics', desc: 'Numbers 1–20, addition readiness, shapes in environment, measurement concepts.' },
          { name: 'Environmental Studies', desc: 'My family, my body, animals, plants, seasons — connecting learning to the real world.' },
          { name: 'Creative Arts', desc: 'Drawing, colouring within lines, craft projects, introductory storytelling.' },
          { name: 'Physical Education', desc: 'Running games, balancing, catching, basic yoga, and body awareness.' },
          { name: 'Values Education', desc: 'Sharing, kindness, respecting others\' belongings, and saying thank you.' },
        ],
        milestones: [
          'Recognises all 26 letters',
          'Writes own name legibly',
          'Counts and identifies numbers to 20',
          'Speaks in full sentences',
          'Demonstrates care for classroom environment',
          'Follows structured daily routines',
        ]
      },
      jkg: {
        badge: 'JKG',
        title: 'Junior Kindergarten',
        subtitle: 'Ages 4–5 · Reading, writing, and real curiosity',
        subjects: [
          { name: 'Reading & Phonics', desc: 'CVC words, blending sounds, simple sight words, reading readiness activities.' },
          { name: 'Writing', desc: 'Letter formation, pre-writing patterns, tracing to independent writing, journaling.' },
          { name: 'Mathematics', desc: 'Numbers 1–50, addition and subtraction with objects, 2D and 3D shapes.' },
          { name: 'EVS', desc: 'Community helpers, transport, food and nutrition, seasons and weather.' },
          { name: 'Hindi / Regional Language', desc: 'Basic vocabulary, oral work, recognition of script characters.' },
          { name: 'Computer Basics', desc: 'Introduction to keyboard, mouse, and using a tablet for educational apps.' },
        ],
        milestones: [
          'Reads simple 3-letter words independently',
          'Writes sentences with guidance',
          'Solves addition problems up to 10',
          'Describes the world around them confidently',
          'Demonstrates self-care and independence',
          'Shows empathy and emotional regulation',
        ]
      },
      skg: {
        badge: 'SKG',
        title: 'Senior Kindergarten',
        subtitle: 'Ages 5–6 · Ready for the next adventure',
        subjects: [
          { name: 'English Language', desc: 'Reading short paragraphs, creative writing, comprehension, oral presentation.' },
          { name: 'Mathematics', desc: 'Numbers to 100, addition/subtraction with regrouping, telling time, basic measurement.' },
          { name: 'Science Readiness', desc: 'Observation exercises, simple experiments, curiosity journal — the scientific method begins.' },
          { name: 'Social Studies', desc: 'My community, India\'s diversity, important landmarks, global awareness introduction.' },
          { name: 'Second Language', desc: 'Hindi/regional language — reading, writing, and conversation at age-appropriate level.' },
          { name: 'Digital Literacy', desc: 'Typing basics, age-appropriate online safety, educational software.' },
        ],
        milestones: [
          'Reads and comprehends short stories',
          'Writes independently with minimal errors',
          'Completes 2-digit arithmetic',
          'Asks questions and forms hypotheses',
          'Presents ideas confidently to peers',
          'Shows readiness for Grade 1 learning',
        ]
      }
    },
    primary: {
      g1: {
        badge: 'G1',
        title: 'Grade 1',
        subtitle: 'Ages 6–7 · Foundations take flight',
        subjects: [
          { name: 'English', desc: 'Fluent reading, story writing, grammar (nouns, verbs, adjectives), poetry.' },
          { name: 'Mathematics', desc: 'Numbers to 999, multiplication introduction, fractions, measurement, data handling.' },
          { name: 'Environmental Science', desc: 'Living & non-living, habitats, plants, food chains, human body basics.' },
          { name: 'Hindi', desc: 'Matra work, sentence construction, comprehension, creative writing in Hindi.' },
          { name: 'Art & Craft', desc: 'Perspective drawing, collage, clay modelling, design principles.' },
          { name: 'Physical Education', desc: 'Athletics, team sports introduction, yoga, cooperative games.' },
        ],
        skills: ['Independent reading', 'Creative writing', 'Number sense', 'Scientific observation', 'Team participation', 'Self-expression']
      },
      g2: {
        badge: 'G2',
        title: 'Grade 2',
        subtitle: 'Ages 7–8 · Deepening understanding',
        subjects: [
          { name: 'English', desc: 'Reading comprehension strategies, paragraph writing, punctuation mastery, oral reports.' },
          { name: 'Mathematics', desc: 'Multiplication tables (1–10), division introduction, word problems, geometry basics.' },
          { name: 'Science', desc: 'States of matter, weather, magnetism experiments, simple machines.' },
          { name: 'Social Studies', desc: 'India\'s geography, cultural diversity, historical timelines, map skills.' },
          { name: 'Hindi', desc: 'Essay writing, comprehension, idioms and proverbs introduction.' },
          { name: 'Computer Science', desc: 'Word processing, drawing tools, internet safety, introduction to coding concepts.' },
        ],
        skills: ['Research skills', 'Logical reasoning', 'Map reading', 'Digital literacy', 'Collaborative thinking', 'Public speaking']
      },
      g3: {
        badge: 'G3',
        title: 'Grade 3',
        subtitle: 'Ages 8–9 · Expanding horizons',
        subjects: [
          { name: 'English', desc: 'Essay writing, literary analysis introduction, debate prep, advanced grammar.' },
          { name: 'Mathematics', desc: 'Fractions and decimals, multiplication up to 4 digits, area and perimeter, graphs.' },
          { name: 'Science', desc: 'Ecosystems, food webs, human body systems, the water cycle, light and sound.' },
          { name: 'Social Studies', desc: 'Ancient civilisations, Indian history, government structures, economic concepts.' },
          { name: 'Third Language', desc: 'Introduction to Sanskrit or regional language with basic vocabulary and grammar.' },
          { name: 'STEM Integration', desc: 'Design challenges, building bridges, coding with Scratch, STEM problem-solving.' },
        ],
        skills: ['Critical analysis', 'Data interpretation', 'Creative problem-solving', 'Historical thinking', 'Scratch coding']
      },
      g4: {
        badge: 'G4',
        title: 'Grade 4',
        subtitle: 'Ages 9–10 · Thinking like a scholar',
        subjects: [
          { name: 'English', desc: 'Multi-paragraph essays, poetry writing, research reports, oral presentations.' },
          { name: 'Mathematics', desc: 'Long division, decimals and percentages, introduction to algebra concepts, statistics.' },
          { name: 'Science', desc: 'Chemical changes, electricity, space and the solar system, environmental science.' },
          { name: 'Social Studies', desc: 'Empires and colonialism, Indian freedom movement, constitution basics.' },
          { name: 'Digital Citizenship', desc: 'Responsible internet use, digital footprint, online collaboration tools.' },
          { name: 'Visual & Performing Arts', desc: 'Art history survey, music theory, drama — integrated with academic content.' },
        ],
        skills: ['Research writing', 'Algebraic thinking', 'Media literacy', 'Cultural awareness', 'Presentation skills']
      },
      g5: {
        badge: 'G5',
        title: 'Grade 5',
        subtitle: 'Ages 10–11 · Preparing for the next chapter',
        subjects: [
          { name: 'English', desc: 'Argumentative writing, literary devices, independent reading projects, debate.' },
          { name: 'Mathematics', desc: 'Ratios and proportions, introduction to geometry proofs, data and probability.' },
          { name: 'Science', desc: 'Scientific method mastery, genetics introduction, climate change, forces and motion.' },
          { name: 'Social Studies', desc: 'World geography, global issues, human rights, comparative governance.' },
          { name: 'Coding & Technology', desc: 'Python basics, block coding projects, AI awareness, digital creation.' },
          { name: 'Leadership & Service', desc: 'Student council introduction, community service projects, peer mentoring.' },
        ],
        skills: ['Argumentation', 'Computational thinking', 'Global awareness', 'Leadership', 'Self-directed learning']
      }
    },
    middle: {
      g6: {
        badge: 'G6',
        title: 'Grade 6',
        subtitle: 'Ages 11–12 · The analytical mind awakens',
        subjects: [
          { name: 'English Language & Literature', desc: 'Novel study, literary analysis essays, advanced grammar, public speaking programme.' },
          { name: 'Mathematics', desc: 'Integers, algebra fundamentals, coordinate geometry, data interpretation.' },
          { name: 'Science', desc: 'Separate sciences begin: Physics (motion), Chemistry (elements), Biology (cells).' },
          { name: 'Social Science', desc: 'Medieval history, India through the ages, political systems, geography of Asia.' },
          { name: 'Second Language', desc: 'Advanced Hindi/regional language — comprehension, composition, oral fluency.' },
          { name: 'Computer Science', desc: 'Python programming, databases introduction, web page basics, cybersecurity awareness.' },
        ],
        skills: ['Analytical writing', 'Abstract reasoning', 'Scientific inquiry', 'Programming logic', 'Historical perspective']
      },
      g7: {
        badge: 'G7',
        title: 'Grade 7',
        subtitle: 'Ages 12–13 · Developing the independent thinker',
        subjects: [
          { name: 'English', desc: 'Comparative literature, persuasive essays, journalism project, media analysis.' },
          { name: 'Mathematics', desc: 'Linear equations, ratio and proportion, statistics, introduction to probability.' },
          { name: 'Physics', desc: 'Speed and velocity, Newton\'s laws, light and optics, thermal energy.' },
          { name: 'Chemistry', desc: 'Periodic table, chemical reactions, acids and bases, laboratory safety.' },
          { name: 'Biology', desc: 'Human body systems in depth, plant biology, reproductive health, ecology.' },
          { name: 'Project-Based Learning', desc: 'Cross-disciplinary projects — solving real community problems using academic tools.' },
        ],
        skills: ['Persuasive writing', 'Lab skills', 'Data analysis', 'Systems thinking', 'Collaborative research']
      },
      g8: {
        badge: 'G8',
        title: 'Grade 8',
        subtitle: 'Ages 13–14 · Building for what comes next',
        subjects: [
          { name: 'English', desc: 'Thematic novel studies, critical essays, TED-style presentations, debate championships.' },
          { name: 'Mathematics', desc: 'Quadratic equations, polynomials, trigonometry introduction, financial literacy.' },
          { name: 'Physics', desc: 'Work and energy, magnetism and electricity, wave theory.' },
          { name: 'Chemistry', desc: 'Moles and stoichiometry introduction, organic chemistry basics, environmental chemistry.' },
          { name: 'Biology', desc: 'Genetics and heredity, evolution, microbiome, biotechnology introduction.' },
          { name: 'Leadership & Ethics', desc: 'Student leadership programme, ethical reasoning, community service capstone project.' },
        ],
        skills: ['Critical essays', 'Trigonometry', 'Financial literacy', 'Ethical reasoning', 'Leadership skills', 'Research methodology']
      }
    },
    secondary: {
      g9: {
        badge: 'G9',
        title: 'Grade 9',
        subtitle: 'Ages 14–15 · Stepping into serious scholarship',
        subjects: [
          { name: 'English (Advanced)', desc: 'Literature analysis, extended essays, grammar mastery, oral examinations.' },
          { name: 'Mathematics', desc: 'Advanced algebra, coordinate geometry, calculus readiness, statistics.' },
          { name: 'Physics', desc: 'Mechanics, electricity and magnetism, waves, thermodynamics.' },
          { name: 'Chemistry', desc: 'Stoichiometry, chemical kinetics, thermochemistry, organic reactions.' },
          { name: 'Biology', desc: 'Molecular biology, cell theory, physiology, ecosystems and conservation.' },
          { name: 'Social Sciences / Commerce', desc: 'Economics fundamentals, political science, business studies introduction.' },
        ],
        skills: ['Advanced lab techniques', 'Extended writing', 'Economic thinking', 'Exam strategy', 'Time management']
      },
      g10: {
        badge: 'G10',
        title: 'Grade 10',
        subtitle: 'Ages 15–16 · Board examination readiness',
        subjects: [
          { name: 'All Core Subjects', desc: 'Comprehensive board exam preparation across English, Mathematics, Sciences, and Social Sciences.' },
          { name: 'Revision & Test Strategy', desc: 'Mock examinations, past-paper practice, time management, mindset coaching.' },
          { name: 'Stream Exploration', desc: 'Counselling sessions to choose streams (Science/Commerce/Humanities) for Grades 11–12.' },
          { name: 'Career Orientation', desc: 'Aptitude assessments, career counselling, university information sessions begin.' },
          { name: 'Innovation Project', desc: 'Grade 10 capstone — students design and present a solution to a real-world problem.' },
          { name: 'Wellbeing Programme', desc: 'Stress management, growth mindset, physical wellness — supporting the whole learner.' },
        ],
        skills: ['Exam readiness', 'Self-management', 'Career awareness', 'Project design', 'Stress resilience']
      },
      g11: {
        badge: 'G11',
        title: 'Grade 11',
        subtitle: 'Ages 16–17 · Specialisation and depth',
        subjects: [
          { name: 'Science Stream', desc: 'Physics, Chemistry, Biology/Maths, English — preparing for JEE, NEET, or international pathways.' },
          { name: 'Commerce Stream', desc: 'Accountancy, Business Studies, Economics, Mathematics/Informatics, English.' },
          { name: 'Humanities Stream', desc: 'History, Political Science, Psychology/Geography, Literature, Sociology.' },
          { name: 'Elective Subjects', desc: 'Physical Education, Fine Arts, Music, Computer Science — personalise your pathway.' },
          { name: 'University Preparation', desc: 'IELTS/SAT/CUET prep, personal statement workshops, university fair participation.' },
          { name: 'Entrepreneurship Module', desc: 'Design thinking, business model canvas, social entrepreneurship, pitch competitions.' },
        ],
        skills: ['Subject mastery', 'Entrepreneurial thinking', 'University applications', 'Independent research', 'Personal branding']
      },
      g12: {
        badge: 'G12',
        title: 'Grade 12',
        subtitle: 'Ages 17–18 · Ready for the world',
        subjects: [
          { name: 'Board Examination Mastery', desc: 'Intensive subject preparation, revision cycles, mock board series, 1-on-1 mentoring.' },
          { name: 'Competitive Exam Preparation', desc: 'JEE/NEET/CLAT/CUET/SAT coaching integrated into the academic calendar.' },
          { name: 'University Applications', desc: 'Personal statement writing, SOP coaching, scholarship applications, admission strategy.' },
          { name: 'Senior Capstone Project', desc: 'Original research or innovation project — presented to a panel of faculty and professionals.' },
          { name: 'Life Skills Programme', desc: 'Financial literacy, communication skills, decision-making, interview preparation.' },
          { name: 'Leadership & Legacy', desc: 'Senior leadership roles, mentoring juniors, graduation ceremony, future-ready mindset.' },
        ],
        skills: ['Board excellence', 'University readiness', 'Original research', 'Financial literacy', 'Leadership', 'Global perspective'],
        note: 'Every Grade 12 graduate from The School of Excellence leaves as a confident communicator, independent thinker, and empathetic leader — with a strong academic record and the human foundations to thrive in university and beyond.'
      }
    }
  };

  const enrichment = [
    { icon: '🤖', title: 'STEM & Robotics', desc: 'Dedicated robotics lab, coding from Grade 1, science exhibitions, and innovation challenges across all grades.' },
    { icon: '🎭', title: 'Arts Integration', desc: 'Music, visual arts, dance, and drama woven into academics — not treated as extras, but as modes of deep learning.' },
    { icon: '🏅', title: 'Sports & Fitness', desc: 'Structured sports programme across all ages — athletics, team sports, yoga, and physical education with qualified coaches.' },
    { icon: '🌏', title: 'Global Perspectives', desc: 'MUN, international exchange awareness, global issues curriculum, and multilingual education throughout the journey.' },
    { icon: '💼', title: 'Career Readiness', desc: 'Aptitude assessments, career counselling, internship exposure, and alumni mentoring from Grade 9 onwards.' },
    { icon: '🧘', title: 'Wellbeing', desc: 'Mindfulness sessions, school counsellors, peer support groups, and a culture that celebrates emotional health.' },
  ];



  const selectedData = roadmapData[activeStage][activeGrade];

  return (
    <div>
      {/* ── BREADCRUMB ── */}
      <div className="bg-cream border-b border-bordercream/60 py-3 px-4 md:px-8 text-xs text-muted">
        <div className="max-w-5xl mx-auto flex items-center gap-1.5">
          <Link to="/" className="text-teal hover:underline font-medium">Home</Link>
          <span className="text-muted/60">/</span>
          <span>Academics</span>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-glow-radial opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs font-semibold text-gold uppercase tracking-widest block">
            Academic Excellence with Purpose
          </span>
          <h1 className="font-serif-display text-4xl md:text-6xl font-bold leading-tight">
            Learning designed for<br />
            <span className="italic text-gold-light font-normal">real life</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            A complete grade-by-grade roadmap from Playgroup through Grade 12 — so you always know exactly what your child is learning, and why.
          </p>
        </div>
      </section>

      {/* ── STAGES CARD ROW ── */}
      <section className="py-20 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Four Stages of Learning</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              A complete journey, thoughts and sequenced
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-orange-50/50 p-6 border-b-4 border-orange-400 rounded-[2px] flex flex-col justify-between h-[230px] shadow-sm">
              <div>
                <h3 className="font-serif-display text-lg font-bold text-navy mb-2">Early Years</h3>
                <p className="text-muted text-[12px] leading-relaxed">Play-based discovery, sensory exploration, and the joy of first questions. Where curiosity takes root.</p>
              </div>
              <button onClick={() => handleStageChange('early')} className="text-orange-600 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:underline mt-4 text-left">
                View Roadmap →
              </button>
            </div>

            <div className="bg-teal-light/25 p-6 border-b-4 border-teal rounded-[2px] flex flex-col justify-between h-[230px] shadow-sm">
              <div>
                <h3 className="font-serif-display text-lg font-bold text-navy mb-2">Primary</h3>
                <p className="text-muted text-[12px] leading-relaxed">Strong foundations in literacy, numeracy, and inquiry. Where love of learning deepens and flourishes.</p>
              </div>
              <button onClick={() => handleStageChange('primary')} className="text-teal text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:underline mt-4 text-left">
                View Roadmap →
              </button>
            </div>

            <div className="bg-cream/40 p-6 border-b-4 border-gold rounded-[2px] flex flex-col justify-between h-[230px] shadow-sm">
              <div>
                <h3 className="font-serif-display text-lg font-bold text-navy mb-2">Middle School</h3>
                <p className="text-muted text-[12px] leading-relaxed">Analytical thinking, project-based work, and leadership development. Where identity and ambition form.</p>
              </div>
              <button onClick={() => handleStageChange('middle')} className="text-gold-dark text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:underline mt-4 text-left">
                View Roadmap →
              </button>
            </div>

            <div className="bg-navy/5 p-6 border-b-4 border-navy rounded-[2px] flex flex-col justify-between h-[230px] shadow-sm">
              <div>
                <h3 className="font-serif-display text-lg font-bold text-navy mb-2">Secondary</h3>
                <p className="text-muted text-[12px] leading-relaxed">Academic excellence, career pathways, and university preparation. Where futures are intentionally built.</p>
              </div>
              <button onClick={() => handleStageChange('secondary')} className="text-navy text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1 hover:underline mt-4 text-left">
                View Roadmap →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROADMAP SECTION ── */}
      <section className="py-24 px-4 md:px-8 bg-cream border-t border-b border-bordercream/40" id="roadmap">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 space-y-4">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Grade-by-Grade Roadmap</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">What your child will learn at every stage</h2>
            <p className="text-muted text-sm max-w-2xl leading-relaxed">
              Click any stage or grade below to see a detailed breakdown of subjects, key skills, and learning milestones — designed to give parents full visibility into their child's educational journey.
            </p>
          </div>

          {/* Stage Selector buttons */}
          <div className="flex gap-2.5 flex-wrap mb-8 border-b border-bordercream pb-6">
            {stages.map((stage) => (
              <button
                key={stage.id}
                onClick={() => handleStageChange(stage.id as any)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-[2px] transition-all duration-200 ${
                  activeStage === stage.id
                    ? 'bg-navy text-white shadow-sm'
                    : 'bg-white text-navy border border-bordercream/80 hover:bg-cream-light'
                }`}
              >
                {stage.name}
              </button>
            ))}
          </div>

          {/* Grade Selector Tabs */}
          <div className="flex gap-0 flex-wrap border-b-2 border-bordercream mb-10">
            {gradeTabs[activeStage].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGrade(tab.id)}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-[2px] ${
                  activeGrade === tab.id
                    ? 'border-gold text-navy font-extrabold'
                    : 'border-transparent text-muted hover:text-navy'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Dynamic Content Panel */}
          <div className="bg-white p-8 md:p-10 border border-bordercream/60 rounded-[2px] shadow-sm min-h-[400px]">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-bordercream pb-6 mb-8">
              <div>
                <h3 className="font-serif-display text-2xl md:text-3.5xl font-bold text-navy leading-none mb-2">
                  {selectedData.title}
                </h3>
                <p className="text-muted text-xs md:text-sm italic">{selectedData.subtitle}</p>
              </div>
              <div className="bg-navy text-gold font-serif-display font-bold text-xl px-5 py-2 rounded-[2px] shadow-sm">
                {selectedData.badge}
              </div>
            </div>

            {/* Curriculum grid */}
            <div className="mb-10">
              <h4 className="font-serif-display text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <Brain size={18} className="text-teal" /> Core Curriculum Areas
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedData.subjects.map((sub, idx) => (
                  <div key={idx} className="bg-cream/40 p-5 border-l-3 border-teal rounded-[2px]">
                    <strong className="block text-navy text-xs font-bold mb-1.5 uppercase tracking-wide">
                      {sub.name}
                    </strong>
                    <p className="text-muted text-[11.5px] leading-relaxed">{sub.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Skills or Milestones */}
            {selectedData.skills && (
              <div className="mb-6">
                <h4 className="font-serif-display text-lg font-bold text-navy mb-3 flex items-center gap-2">
                  <Star size={18} className="text-gold" /> Key Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedData.skills.map((skill, idx) => (
                    <span key={idx} className="bg-teal-light/30 text-teal text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedData.milestones && (
              <div className="mb-6">
                <h4 className="font-serif-display text-lg font-bold text-navy mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-gold" /> Key Milestones
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedData.milestones.map((ms, idx) => (
                    <li key={idx} className="text-muted text-xs flex items-start gap-2 leading-normal">
                      <Check size={14} className="text-gold shrink-0 mt-0.5" />
                      <span>{ms}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stream Outcome Notes */}
            {selectedData.note && (
              <div className="bg-navy text-white p-6 rounded-[2px] border-l-4 border-gold mt-6 shadow-sm">
                <h4 className="font-serif-display text-gold-light text-base font-bold mb-2">Grade Outcome &amp; Readiness</h4>
                <p className="text-white/80 text-[12px] leading-relaxed">{selectedData.note}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BEYOND CORE (CO-CURRICULARS) ── */}
      <section className="py-24 px-4 md:px-8 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold text-gold uppercase tracking-widest block">Beyond the Core</span>
            <h2 className="font-serif-display text-3xl font-bold text-navy leading-tight">
              Enrichment that completes the learner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enrichment.map((en, idx) => (
              <div
                key={idx}
                className="bg-cream/30 border border-bordercream/60 p-8 rounded-[2px] shadow-sm hover:border-gold transition-colors duration-250"
              >
                <span className="text-3xl block mb-4">{en.icon}</span>
                <h3 className="font-serif-display text-base font-bold text-navy mb-2">{en.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{en.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gold to-gold-light text-navy relative overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl text-center md:text-left space-y-3">
            <h2 className="font-serif-display text-3xl font-bold leading-tight">Curious about admissions?</h2>
            <p className="text-sm text-navy/80 leading-relaxed font-medium">
              Speak to our admissions team and find the right programme for your child.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center shrink-0">
            <Link to="/admissions" className="bg-navy text-white font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy-dark transition-all duration-200">
              Admission Guidelines
            </Link>
            <Link to="/contact" className="border border-navy text-navy font-semibold text-[13px] px-6 py-3.5 rounded-[2px] hover:bg-navy hover:text-white transition-all duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
