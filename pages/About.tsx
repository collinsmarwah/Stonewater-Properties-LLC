import React from 'react';
import { Award, BookOpen, MapPin, Users } from 'lucide-react';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-24 pb-12">
      <SEO 
        title="About Stonewater Properties LLC | Landscapers Union County NJ" 
        description="Meet Ron Sachs and the team at Stonewater Properties LLC. Since 2009, providing expert landscape design and maintenance in Berkeley Heights, Summit, and New Providence."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Stonewater Properties LLC</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building relationships and beautiful landscapes in Union County since 2009.
          </p>
        </div>

        {/* Founder Story */}
        <div className="bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-xl mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/id/447/800/1000" 
                alt="Ron Sachs, Founder of Stonewater Properties" 
                className="w-full h-full object-cover min-h-[400px]"
              />
            </div>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">Meet Ron Sachs</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Stonewater Properties LLC was founded in 2009 by Ron Sachs. Ron has over 15 years of hands-on experience in the landscape industry. Before establishing Stonewater Properties LLC, he worked with a high-end Central New Jersey design-build firm, honing his craft in luxury outdoor living spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <BookOpen className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Degree in Landscape Design (URI)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Degree in Ornamental Horticulture (URI)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Based in Berkeley Heights, NJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-stone-900 p-8 rounded-2xl border border-stone-800">
            <h3 className="text-xl font-bold text-white mb-4">Our Philosophy</h3>
            <p className="text-gray-400">
              We believe that a landscape is more than just plants and pavers; it's an extension of your home. We approach every project, big or small, with a focus on quality design, long-term sustainability, and immediate curb appeal.
            </p>
          </div>
          <div className="bg-stone-900 p-8 rounded-2xl border border-stone-800">
             <h3 className="text-xl font-bold text-white mb-4">Community Focused</h3>
            <p className="text-gray-400">
              As a local business, our reputation is everything. We treat our clients like neighbors because they are. We are committed to building trust through transparent communication and reliable service.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;