import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-scroll';

export default function Navbar({ cartItemsCount, toggleCart, isDark, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full shadow-xl z-50 py-2 px-4 sm:px-8 transition-all duration-200 rounded-md mt-5 backdrop-blur-lg bg-opacity-30 dark:bg-opacity-40 dark:bg-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <img
            src="/images/LogoH.png"
            alt="Site Logo"
            className="w-16 h-auto ml-1 mt-2"
          />
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="home"
            smooth
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="gallery"
            smooth
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            to="contact"
            smooth
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

          {/* Shopping Cart */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleCart}
            className="relative p-2"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {cartItemsCount}
              </span>
            )}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 md:hidden"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden backdrop-blur-md bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-60 rounded-md shadow-lg mt-2"
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              to="home"
              smooth
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="gallery"
              smooth
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="contact"
              smooth
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
