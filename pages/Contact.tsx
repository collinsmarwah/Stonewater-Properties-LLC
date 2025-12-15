import React from 'react';
import HomeContactSection from '../components/HomeContactSection';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-20">
      <SEO 
        title="Contact Us | Landscaping Estimates Berkeley Heights NJ" 
        description="Ready to upgrade your property? Contact Stonewater Properties LLC for a free estimate on landscaping, hardscaping, or snow removal in Union County, NJ."
      />
      <div className="bg-stone-900 py-12 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-gray-400">We are ready to help with your next landscaping project.</p>
        </div>
      </div>
      <HomeContactSection />
    </div>
  );
};

export default Contact;