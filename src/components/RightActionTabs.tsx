import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, FileText } from 'lucide-react';

const RightActionTabs: React.FC = () => {
  const openEnquiryModal = () => {
    window.dispatchEvent(new CustomEvent('open-admission-modal'));
  };

  return (
    <aside
      aria-label="Quick Admissions Actions"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col shadow-[-4px_0_15px_rgba(0,0,0,0.15)] rounded-l-md overflow-hidden select-none"
    >
      {/* 1. Book a Campus Tour */}
      <Link
        to="/contact"
        title="Book a Campus Tour"
        className="group bg-[#D4A338] hover:bg-gold text-navy font-bold text-[11px] sm:text-xs uppercase tracking-widest px-3 sm:px-3.5 py-5 sm:py-6 flex items-center justify-center transition-all duration-200 border-b border-navy/15 hover:pl-4.5"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2 whitespace-nowrap">
          <Calendar size={13} className="rotate-90 group-hover:scale-110 transition-transform" />
          <span>Book a Campus Tour</span>
        </span>
      </Link>

      {/* 2. Enquire Now / Apply for Admission */}
      <button
        type="button"
        onClick={openEnquiryModal}
        title="Enquire Now / Apply for Admission"
        className="group bg-gold hover:bg-gold-light text-navy font-bold text-[11px] sm:text-xs uppercase tracking-widest px-3 sm:px-3.5 py-5 sm:py-6 flex items-center justify-center transition-all duration-200 hover:pl-4.5 focus:outline-none"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2 whitespace-nowrap">
          <FileText size={13} className="rotate-90 group-hover:scale-110 transition-transform" />
          <span>Enquire Now</span>
        </span>
      </button>
    </aside>
  );
};

export default RightActionTabs;

