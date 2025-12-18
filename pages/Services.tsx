
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-24 pb-20">
      <SEO 
        title="Landscaping Services Berkeley Heights NJ | Stonewater Properties LLC" 
        description="Complete landscape solutions: lawn maintenance, patio installation, garden design, and snow plowing. Serving Union County, NJ residential and commercial properties."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive landscaping solutions tailored to the unique needs of Union County properties. 
            From design to seasonal maintenance, we cover it all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 flex flex-col h-full hover:border-primary-500/50 transition-colors">
              <div className="h-64 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-600/20 p-2.5 rounded-lg mr-4">
                     {/* Clone icon to style it - Using React.ReactElement<any> to fix type incompatibility with className prop */}
                     {React.cloneElement(service.icon as React.ReactElement<any>, { className: "w-6 h-6 text-primary-500" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-white font-bold bg-stone-800 hover:bg-primary-600 px-6 py-3 rounded-xl transition-all w-fit"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
