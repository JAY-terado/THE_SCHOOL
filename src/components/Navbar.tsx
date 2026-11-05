import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' },
    { name: 'Parents', path: '/parents' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-gold/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px] md:h-[84px]">
          {/* Logo */}
          <Link to="/" className="flex items-center group py-2 shrink-0" aria-label="The School of Excellence Home">
            <img
              src="/Artboard%204100.png"
              alt="The School of Excellence"
              className="h-12 sm:h-14 md:h-[54px] lg:h-16 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(201,168,76,0.15)]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 py-1.5 text-[12.5px] font-medium tracking-wide rounded-[2px] transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-2 bg-gold text-navy font-semibold text-[12.5px] px-3.5 py-1.5 rounded-[2px] border border-transparent hover:bg-gold-light hover:-translate-y-[1px] transition-all duration-200 shrink-0"
            >
              Contact Us
            </Link>
          </nav>

          {/* Large Screen Nav Links (1024px - 1280px) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-0.5">
            {links.slice(0, 7).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2 py-1.5 text-[12px] font-medium tracking-wide rounded-[2px] transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/75 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-1 bg-gold text-navy font-semibold text-[12px] px-3 py-1.5 rounded-[2px] border border-transparent hover:bg-gold-light transition-all duration-200 shrink-0"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburguer */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-gold transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-navy-light border-b border-gold/10 overflow-hidden"
          >
            <ul className="flex flex-col px-4 py-3 gap-1">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 px-4 text-sm font-medium rounded-[2px] transition-all ${
                        isActive
                          ? 'text-gold bg-white/5 font-semibold'
                          : 'text-white/85 hover:text-white hover:bg-white/5 active:bg-white/10'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 text-sm font-semibold rounded-[2px] transition-all ${
                      isActive
                        ? 'text-gold bg-white/5'
                        : 'text-white/85 hover:text-white hover:bg-white/5 active:bg-white/10'
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
