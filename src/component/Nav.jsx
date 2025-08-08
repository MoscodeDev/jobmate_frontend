import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LinkIcon, FileSymlink, Power } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = ({ handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-200">
      <div className="flex justify-between items-center px-6 h-[7vh]">
        {/* Logo */}
        <Link to="/" className="flex items-center text-blue-950 space-x-1">
          <LinkIcon />
          <FileSymlink />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/bookmark">Bookmarked</Link>
          <span className="cursor-pointer" onClick={handleLogout}>
            <Power />
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden md:max-w-1/2 flex flex-col bg-blue-100 px-6 pb-4 space-y-3 overflow-hidden"
          >
            <Link to="/" onClick={toggleMenu} className='underline hover:tracking-wide'>Home</Link>
            <Link to="/jobs" onClick={toggleMenu} className='underline hover:tracking-wide'>Jobs</Link>
            <Link to="/profile" onClick={toggleMenu} className='underline hover:tracking-wide'>Profile</Link>
            <Link to="/learn" onClick={toggleMenu} className='underline hover:tracking-wide'>Learn</Link>
            <Link to="/bookmark" onClick={toggleMenu} className='underline hover:tracking-wide'>Bookmarked</Link>
            <span className="cursor-pointer" onClick={() => { handleLogout(); toggleMenu(); }}>
              <Power />
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
