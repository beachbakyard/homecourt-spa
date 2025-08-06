import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tournament', label: 'Register' },
    { path: '/tournaments', label: 'Tournaments' },
    { path: '/juniors', label: 'Juniors' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/about', label: 'About' },
    { path: '/shop', label: 'Shop' },
    { path: '/rules', label: 'Rules' },
  ];

  return (
    <header className="bg-teal-ocean text-beach-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link to="/" className="text-xl md:text-2xl font-headline font-bold truncate">
            Home Court Series
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm xl:text-base hover:text-sand-yellow transition-colors duration-300 ${
                  location.pathname === item.path ? 'text-sand-yellow font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none p-2 rounded-md hover:bg-sunset-orange/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-beach-white/20 mt-3 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 font-body text-base hover:bg-sunset-orange/20 rounded-lg transition-colors duration-300 touch-manipulation ${
                  location.pathname === item.path ? 'bg-sunset-orange text-sand-yellow font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;