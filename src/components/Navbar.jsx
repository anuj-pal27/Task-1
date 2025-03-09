import React from 'react';
import PropTypes from 'prop-types';
import { Sun, Moon, Menu, X, Laptop } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="flex items-center gap-2 text-xl font-bold text-purple-600 dark:text-purple-400">
              <Laptop className="w-6 h-6" />
              Platform
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Home</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Features</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired
};

export default Navbar;