
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Star, Award, GraduationCap } from 'lucide-react';
import { SERVICES } from '../constants';
import HomeContactSection from '../components/HomeContactSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <div className="bg-stone-950">
      <SEO 
        title="Landscaper Berkeley Heights NJ | Stonewater Properties LLC" 
        description="Stonewater Properties LLC offers premium landscaping, hardscaping, and lawn care in Berkeley Heights and Union County, NJ. 15+ years experience. Get a free estimate."
      />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent.xx.fbcdn.net/v/t51.75761-15/470331714_18386154883096922_5373744253225002024_n.jpg?stp=dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CWW1uh5WnOMQ7kNvwGxTPuq&_nc_oc=AdnC6Ng6fHo7IIAhroI63xSlzB2-B3oPYw91y-YDZBG5ZCUh0LN1I8DCSuMV5egsUks&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=2xlnh9YrzD1ynUuTRMQI6A&oh=00_AfkTn5ZWnCqJqhQv0X6FcmOev0JUQ0wQcSJF-KCEsIlVuw&oe=6945AE40" 
            alt="Beautifully manicured lawn and landscaping in New Jersey" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-600/20 border border-primary-500/30 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-wider">Serving Union County, NJ</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl">
            Elevate Your Curb <br />
            <span className="text-primary-500">Appeal</span> & Outdoor Living.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Premium landscaping, hardscaping, and maintenance rooted in local expertise. 
            Trusted by homeowners in Berkeley Heights and beyond since 2009.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="px-8 py-4 bg-primary-500 text-white font-bold rounded-full hover:bg-primary-600 transition-all text-center">
              Request Estimate
            </Link>
            <Link to="/gallery" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all text-center">
              View Our Work
            </Link>
          </div>
        </div>

        {/* Floating Trust Bar (Bottom of Hero) */}
        <div className="absolute bottom-0 w-full bg-stone-900/80 backdrop-blur-md border-t border-stone-800 py-6 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-around items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600/20 p-2 rounded-full">
                <Award className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-white font-bold">15+ Years</p>
                <p className="text-xs text-gray-400 uppercase">Experience</p>
              </div>
            </div>
            <div className="h-8 w-px bg-stone-800"></div>
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600/20 p-2 rounded-full">
                <GraduationCap className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-white font-bold">Degree Certified</p>
                <p className="text-xs text-gray-400 uppercase">Horticulture</p>
              </div>
            </div>
            <div className="h-8 w-px bg-stone-800"></div>
            <div className="flex items-center space-x-3">
              <div className="bg-primary-600/20 p-2 rounded-full">
                <Star className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <p className="text-white font-bold">5-Star Rated</p>
                <p className="text-xs text-gray-400 uppercase">Local Favorite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-primary-500 font-bold text-sm uppercase tracking-wider mb-2">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Complete Landscape Solutions</h2>
              <p className="text-gray-400 max-w-xl">
                From weekly maintenance to complete backyard transformations, we handle every detail with precision.
              </p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-white font-semibold hover:text-primary-500 transition-colors mt-6 md:mt-0">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <Link key={service.id} to={service.link} className="group relative bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 hover:border-primary-500/50 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="bg-stone-950 w-12 h-12 rounded-xl flex items-center justify-center -mt-14 relative z-10 border border-stone-800 shadow-lg mb-6 group-hover:bg-primary-500 transition-colors">
                     {/* Clone icon to style it - Using React.ReactElement<any> to fix type incompatibility with className prop */}
                     {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6 text-primary-500 group-hover:text-white transition-colors" })}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <span className="flex items-center text-primary-500 text-sm font-bold group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/services" className="inline-flex items-center text-white font-semibold hover:text-primary-500 transition-colors">
              View All Services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us / About Split */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://scontent.xx.fbcdn.net/v/t51.75761-15/470038100_18386154898096922_1598284461360198377_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YudC_Wu-YvQQ7kNvwE4ssEp&_nc_oc=Adn7vP3YntVlxgcijltOHt31NQgPAZTaHOfkzk7xAnenjw4yIwjMrwuumN4T09uW66o&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=_J5KDkqfRsreYH8pekhAZA&oh=00_AfnxhUBcrM_VFsKO_7r7qmt74hYYWx0Wl3nCT9pVA7TFLA&oe=6945AB32" 
                  alt="Landscaper working in Berkeley Heights" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements behind */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-stone-700 rounded-3xl z-0"></div>
              
              {/* Quote Overlay */}
              <div className="absolute -bottom-10 right-4 md:-right-10 bg-stone-950 p-6 md:p-8 rounded-2xl border border-stone-800 shadow-xl max-w-sm z-20">
                <div className="text-primary-500 text-4xl font-serif mb-2">"</div>
                <p className="text-white italic text-sm md:text-base mb-4">
                  Stonewater Properties LLC transformed our backyard into a private oasis. The attention to detail was incredible.
                </p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">- Sarah J., Berkeley Heights</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:pl-10 mt-12 lg:mt-0">
              <p className="text-primary-500 font-bold text-sm uppercase tracking-wider mb-2">Why Choose Us</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Local Roots, <br/>Professional Results.
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Deeply rooted in Union County, we understand the specific soil conditions and climate of New Jersey. Unlike large franchises, we offer personalized attention and owner-operated oversight on every job.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-600/20 p-1.5 rounded-full mr-4 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Local Expertise</h4>
                    <p className="text-gray-400 text-sm">Serving Berkeley Heights, New Providence, Summit, and Watchung.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600/20 p-1.5 rounded-full mr-4 mt-1">
                    <Clock className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Reliable & Communicative</h4>
                    <p className="text-gray-400 text-sm">We show up on time and keep you updated throughout the project.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-600/20 p-1.5 rounded-full mr-4 mt-1">
                    <ShieldCheck className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Fully Insured</h4>
                    <p className="text-gray-400 text-sm">Complete peace of mind for residential and commercial clients.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <HomeContactSection />

    </div>
  );
};

export default Home;
