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
    { name: 'Facilities', path: '/facilities' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'Parents', path: '/parents' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-gold/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="w-10 h-10 bg-gold text-navy font-serif font-bold text-lg flex items-center justify-center tracking-wider transition-transform duration-300 group-hover:scale-105">
              SOE
            </span>
            <span className="font-serif text-[17px] font-semibold text-white tracking-wide transition-colors group-hover:text-gold-light">
              The School of Excellence
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-[13px] font-medium tracking-wide rounded-[2px] transition-all duration-200 ${
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
              className="ml-3 bg-gold text-navy font-semibold text-[13px] px-4 py-2 rounded-[2px] border border-transparent hover:bg-gold-light hover:-translate-y-[1px] transition-all duration-200"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Hamburguer */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gold transition-colors focus:outline-none"
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
            className="md:hidden bg-navy-light border-b border-gold/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 divide-y divide-white/5">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-sm font-medium transition-colors ${
                        isActive ? 'text-gold' : 'text-white/85 hover:text-white'
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
                    `block py-3 text-sm font-semibold transition-colors ${
                      isActive ? 'text-gold' : 'text-white/85 hover:text-white'
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
