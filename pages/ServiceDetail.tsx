import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const serviceContent: Record<string, {
  title: string;
  subtitle: string;
  image: string;
  features: string[];
  content: string;
  seoTitle: string;
  seoDescription: string;
}> = {
  'landscape-design': {
    title: 'Landscape Design & Hardscaping',
    subtitle: 'Transforming Outdoor Spaces',
    image: 'https://picsum.photos/id/124/1920/1080',
    features: ['Custom Residential Design', 'Retaining Walls', 'Outdoor Kitchens', 'Patios & Walkways', 'Gazebos'],
    content: 'Our landscape design services are tailored to fit your family needs and budget. Whether you need a simple planting refresh or a comprehensive outdoor living area with kitchens and retaining walls, we focus on creating immediate curb appeal and long-lasting beauty. We handle everything from the initial concept to the final stone placement.',
    seoTitle: 'Landscape Design & Hardscaping Berkeley Heights NJ | Stonewater Properties',
    seoDescription: 'Expert landscape design, patios, retaining walls, and outdoor kitchens in Berkeley Heights and Union County. Create your dream outdoor living space today.'
  },
  'maintenance': {
    title: 'Landscape Maintenance',
    subtitle: 'All-Season Reliability',
    image: 'https://picsum.photos/id/429/1920/1080',
    features: ['Weekly Lawn Care', 'Spring & Fall Cleanups', 'Fertilization Programs', 'Aeration & Seeding', 'Pruning'],
    content: 'A beautiful lawn requires consistent care. Our flexible maintenance packages ensure your property looks pristine year-round. We serve both residential and commercial clients in Union County, providing reliable schedules and expert turf management.',
    seoTitle: 'Lawn Maintenance Service Berkeley Heights NJ | Stonewater Properties',
    seoDescription: 'Reliable weekly lawn care, fertilization, and seasonal cleanups for homes and businesses in Union County, NJ. Keep your property pristine year-round.'
  },
  'garden-design': {
    title: 'Garden Design & Care',
    subtitle: 'Color & Texture Year-Round',
    image: 'https://picsum.photos/id/306/1920/1080',
    features: ['Annual & Perennial Design', 'Window Boxes', 'Garden Renovations', 'Weeding & Mulching', 'Soil Improvement'],
    content: 'From vibrant annual displays to sustainable perennial gardens, we design beds that bring life to your property. Our services include complete garden renovations, regular weeding, and mulching to keep your plants healthy and your beds sharp.',
    seoTitle: 'Garden Design & Planting Services NJ | Stonewater Properties',
    seoDescription: 'Professional garden design, planting, and renovation services in Berkeley Heights. Annuals, perennials, and window boxes to enhance your curb appeal.'
  },
  'seasonal': {
    title: 'Seasonal Displays',
    subtitle: 'Festive & Floral Enhancements',
    image: 'https://picsum.photos/id/1056/1920/1080',
    features: ['Spring Bulbs', 'Summer Annuals', 'Fall Mums & Decor', 'Winter Greenery', 'Container Plantings'],
    content: 'Keep your property looking fresh with the changing seasons. We provide rotational plantings that introduce new color and textures throughout the year, ensuring your home or business always has maximum curb appeal.',
    seoTitle: 'Seasonal Planting & Displays NJ | Stonewater Properties',
    seoDescription: 'Enhancing curb appeal with seasonal flowers, fall mums, and winter greenery in Union County, NJ. Professional seasonal landscape updates.'
  },
  'snow-removal': {
    title: 'Snow Plowing & Ice Management',
    subtitle: '24/7 Winter Safety',
    image: 'https://picsum.photos/id/619/1920/1080',
    features: ['24-Hour Availability', 'Commercial & Residential', 'Salting & De-icing', 'Walkway Clearing', 'Storm Monitoring'],
    content: 'Winter in New Jersey is unpredictable. Our snow management team is ready 24/7 to ensure your driveways, parking lots, and walkways are safe and accessible. We prioritize safety and reliability for all our clients.',
    seoTitle: 'Commercial Snow Plowing & Removal NJ | Stonewater Properties',
    seoDescription: '24/7 commercial and residential snow plowing and ice management in Berkeley Heights and Union County. Reliable winter safety services.'
  }
};

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Default to maintenance if id not found or invalid
  const data = (id && serviceContent[id]) ? serviceContent[id] : serviceContent['maintenance'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-stone-950 min-h-screen">
      <SEO 
        title={data.seoTitle} 
        description={data.seoDescription}
      />

      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-stone-950/80 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-xl text-primary-500 font-medium">{data.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Service Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              {data.content}
            </p>

            <h3 className="text-xl font-bold text-white mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature, idx) => (
                <div key={idx} className="flex items-center bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-stone-900 rounded-3xl border border-stone-800">
               <h3 className="text-2xl font-bold text-white mb-4">Why Stonewater Properties LLC?</h3>
               <p className="text-gray-400 mb-6">
                 We bring 15+ years of experience and formal education in horticulture to every job. We don't just "mow and blow" – we care for your landscape's long-term health.
               </p>
               <Link to="/contact" className="inline-flex items-center text-white bg-primary-600 hover:bg-primary-500 px-6 py-3 rounded-full font-bold transition-colors">
                 Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
               </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-stone-900 p-8 rounded-3xl border border-stone-800">
              <h3 className="text-xl font-bold text-white mb-4">Other Services</h3>
              <ul className="space-y-3">
                {Object.keys(serviceContent).map((key) => (
                  <li key={key}>
                    <Link 
                      to={`/services/${key}`} 
                      className={`block px-4 py-3 rounded-xl transition-colors ${key === id ? 'bg-primary-600/20 text-primary-500 border border-primary-500/30' : 'bg-stone-950 text-gray-400 hover:text-white'}`}
                    >
                      {serviceContent[key].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-900 to-stone-900 p-8 rounded-3xl border border-primary-900/50 text-center">
              <h3 className="text-xl font-bold text-white mb-2">Need an Estimate?</h3>
              <p className="text-gray-300 mb-6 text-sm">Contact us today to discuss your project in Union County.</p>
              <Link to="/contact" className="block w-full py-3 bg-white text-stone-950 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;