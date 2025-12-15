import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../constants';

const HomeContactSection: React.FC = () => {
  return (
    <section className="bg-stone-900 py-24 relative overflow-hidden">
        {/* Background dotted pattern or subtle texture could go here */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-stone-950 rounded-3xl p-8 lg:p-12 border border-stone-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side: Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to start your project?
                </h2>
                <p className="text-gray-400 mb-10 max-w-md">
                  Get a free, no-obligation estimate for your landscaping, hardscaping, or maintenance needs in Union County.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center mr-4 border border-stone-800 group-hover:border-primary-500 transition-colors">
                      <Phone className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Call Us Now</p>
                      <a href={`tel:${COMPANY_PHONE.replace(/\D/g,'')}`} className="text-lg font-bold text-white hover:text-primary-400 transition-colors">{COMPANY_PHONE}</a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center mr-4 border border-stone-800 group-hover:border-primary-500 transition-colors">
                      <Mail className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">Email Us</p>
                      <a href={`mailto:${COMPANY_EMAIL}`} className="text-lg font-bold text-white hover:text-primary-400 transition-colors break-all">{COMPANY_EMAIL}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 h-48 rounded-2xl overflow-hidden grayscale opacity-70 hover:opacity-100 transition-opacity">
                <img 
                    src="https://picsum.photos/id/102/600/300" 
                    alt="Map of Berkeley Heights Area" 
                    className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side: Form */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">First Name</label>
                  <input type="text" className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-stone-700" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Last Name</label>
                  <input type="text" className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-stone-700" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Email Address</label>
                <input type="email" className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-stone-700" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Phone Number</label>
                <input type="tel" className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-stone-700" placeholder="(555) 555-5555" />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Service Interested In</label>
                <div className="relative">
                  <select className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none cursor-pointer">
                    <option>Lawn Maintenance</option>
                    <option>Hardscaping & Patios</option>
                    <option>Landscape Design</option>
                    <option>Snow Removal</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder-stone-700" placeholder="Tell us about your project..."></textarea>
              </div>

              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-500/20 mt-4">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;