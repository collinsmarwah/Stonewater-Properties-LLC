import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_PHONE, SERVICES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Trees className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Stonewater Properties LLC</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Professional landscaping services dedicated to enhancing the beauty and value of your property in Union County. Founded by Ron Sachs.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link to={service.link} className="hover:text-primary-500 transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services/snow-removal" className="hover:text-primary-500 transition-colors">
                  Snow Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-500 transition-colors">Project Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Get an Estimate</Link></li>
              <li><Link to="#" className="hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Service Area Column */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact & Area</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-primary-500 shrink-0" />
                <span>{COMPANY_ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary-500 shrink-0" />
                <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="hover:text-white">{COMPANY_PHONE}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary-500 shrink-0" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white break-all">{COMPANY_EMAIL}</a>
              </li>
              <li className="pt-4 text-xs border-t border-stone-800 mt-4">
                Serving Berkeley Heights, New Providence, Summit, Watchung, and surrounding areas.
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-stone-900 mt-16 pt-8 text-xs text-center">
          <p>&copy; {new Date().getFullYear()} Stonewater Properties LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;