import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Trees } from 'lucide-react';
import { NAV_ITEMS, COMPANY_PHONE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-stone-950/95 backdrop-blur-md py-4 border-b border-stone-800' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary-500 p-1.5 rounded-lg group-hover:bg-primary-400 transition-colors">
              <Trees className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Stonewater<span className="text-gray-400 font-normal"> Properties LLC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} 
              className="inline-flex items-center px-4 py-2 border border-stone-700 rounded-full text-sm font-medium text-white hover:bg-stone-800 transition-colors"
            >
              Call {COMPANY_PHONE}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-950 border-t border-stone-800 absolute w-full">
          <div className="px-4 pt-4 pb-8 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-base font-medium text-gray-300 hover:text-primary-400"
              >
                {item.label}
              </Link>
            ))}
            <a 
              href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} 
              className="flex items-center justify-center w-full px-4 py-3 bg-primary-600 text-white rounded-md font-bold hover:bg-primary-500 mt-4"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;