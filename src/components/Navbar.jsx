import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-50 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          IMELDA BRAND LAB
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg">
          <li>
            <Link
              to="hero"
              smooth
              duration={500}
              className="hover:text-pink-500 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={500}
              className="hover:text-pink-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              smooth
              duration={500}
              className="hover:text-pink-500 transition-colors"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="merger"
              smooth
              duration={500}
              className="hover:text-pink-500 transition-colors"
            >
              The Merger
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth
              duration={500}
              className="hover:text-pink-500 transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth
              duration={500}
              className="hover:text-pink-500 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Toggled by hamburger) */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center transition-all duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="space-y-6 text-white text-xl font-semibold">
          <li>
            <Link
              to="hero"
              smooth
              duration={500}
              className="hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              duration={500}
              className="hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="profile"
              smooth
              duration={500}
              className="hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="merger"
              smooth
              duration={500}
              className="hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              The Merger
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth
              duration={500}
              className="hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth
              duration={500}
              className="hover:text-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
