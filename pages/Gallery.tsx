import React from 'react';
import SEO from '../components/SEO';

const projects = [
  { 
    id: 1, 
    title: 'Custom Hardscaping & Pavers', 
    category: 'Hardscaping', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.82787-15/584089925_18438982072096922_1782051776068807012_n.jpg?stp=dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Sb5ioU0FMZgQ7kNvwEqdaU0&_nc_oc=AdmYgK0SXvSaxjy_wtbN9PHy1Lvw0EnO88be9e6M1IoqxpYGIA_MHUepf_fgVpKS0wE&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=R_85108xAV70Zx4z1FoWJg&oh=00_AfmgKlOImf_lL1eJATmsNHC_HE0efHSuHLJuKOqTbMNmEg&oe=6945C7F6' 
  },
  { 
    id: 2, 
    title: 'Lawn & Garden Maintenance', 
    category: 'Maintenance', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.82787-15/581464098_18438982033096922_7755813939695897135_n.jpg?stp=dst-jpegr_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HH1Ca4gn4_gQ7kNvwEcLUzu&_nc_oc=AdmQN9NzicL28j_ZFKLTBRzqYpDo2Gn_nfHJ84C3_ngqd7Fpizg197FOmJLpS0M6kiU&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=p0DxcM9H7BrQ6yalf00APA&oh=00_Afl9maXhBY0Td60PrXO3QwinJc8igVDwckuVskYycNkORA&oe=6945AB6E' 
  },
  { 
    id: 3, 
    title: 'Walkway & Entrance Design', 
    category: 'Design', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.75761-15/496024681_18408391540096922_4130666935518099833_n.jpg?stp=dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BP_J8vQRZRwQ7kNvwFI2lma&_nc_oc=AdmuZxVjs6iRk3OYuSTrphsRgq4ZY5k7HBE00WOrSuKrFDyB-pUwLRrfET13dNHGt14&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=DbwYaeaS9HnngHN0oCCgzw&oh=00_AfnLVBem3G2emxj8XMufE6yAHp5cYmIhue-1kCR0NB0Gzw&oe=6945B0AA' 
  },
  { 
    id: 4, 
    title: 'Outdoor Living Space', 
    category: 'Hardscaping', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.75761-15/470901549_18387090136096922_2299137876612713726_n.jpg?stp=dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FXuTIsYXS9cQ7kNvwFDOoSN&_nc_oc=Adl12j7rdM-LZ6h-BmLHAWmXTI73MPmnc85vRBy12RhPaydj0ydBFr5jGy96CD3PboU&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=HaMhRPlVQeEidLWiahXgcQ&oh=00_AfkJeDXDMw1Wt3wRyTlrPPsNnlci7-guDT19zXDTOnIpTA&oe=6945B0AF' 
  },
  { 
    id: 5, 
    title: 'Garden Renovation', 
    category: 'Gardening', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.75761-15/470974643_18387090118096922_2501336878328468185_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yxwenucxBPIQ7kNvwF0PLfV&_nc_oc=AdmGPJ0WucJuLlmyLPiP1BFt6V3dDZqYNzyYEhqfxOAbnKd4o0tKWbMICo33xdmCseY&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=owMRDmxJRTt0wuqEGEUA8Q&oh=00_AflqWyKmwB1RLHbL2Zin1kbLY6wTBZsw6l0DPf2UUQDRxA&oe=6945B152' 
  },
  { 
    id: 6, 
    title: 'Seasonal Planting', 
    category: 'Design', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.75761-15/470331714_18386154883096922_5373744253225002024_n.jpg?stp=dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CWW1uh5WnOMQ7kNvwGxTPuq&_nc_oc=AdnC6Ng6fHo7IIAhroI63xSlzB2-B3oPYw91y-YDZBG5ZCUh0LN1I8DCSuMV5egsUks&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=2xlnh9YrzD1ynUuTRMQI6A&oh=00_AfkTn5ZWnCqJqhQv0X6FcmOev0JUQ0wQcSJF-KCEsIlVuw&oe=6945AE40' 
  },
  { 
    id: 7, 
    title: 'Stone Wall Installation', 
    category: 'Hardscaping', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.75761-15/470334496_18386154919096922_6482175587465615834_n.jpg?stp=dst-jpegr_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AgopapZjOl0Q7kNvwHzkj5-&_nc_oc=AdlpjIzSbwj7rJvBhk8KHeGnKrGVc_JD5kMPpEoMbxt6JZopbHPelaVO_QI0TRKzjhI&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=tIXoDyG7t6x8dV7hPnEqKw&oh=00_Aflxt1rP8L2UkxK4cxgP9Xf84bFHtvcd1hbt-MB5dLOm1A&oe=6945C6F1' 
  },
  { 
    id: 8, 
    title: 'Backyard Transformation', 
    category: 'Design', 
    img: 'https://scontent.xx.fbcdn.net/v/t39.30808-6/470234156_18386051536096922_1218012821675079676_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=juNE4HKIT1YQ7kNvwF7saP3&_nc_oc=Adlyxhpi-_anAsBw83xv_Bv4_10Tpv1S0LR6Q0vrC6Twr8E4M_lEMoY6qpxz0UlLJdE&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=a_Ld1i47LpBrBqiKAA-IRQ&oh=00_AfmmfFu9nzau4c7gQUhiaxygXqP1nEWSOG8BDXTnehJ58Q&oe=6945C371' 
  },
  { 
    id: 9, 
    title: 'Custom Paver Patio with Fire Pit', 
    category: 'Hardscaping', 
    img: 'https://scontent.xx.fbcdn.net/v/t51.75761-15/470334496_18386154919096922_6482175587465615834_n.jpg?stp=dst-jpegr_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AgopapZjOl0Q7kNvwHzkj5-&_nc_oc=AdlpjIzSbwj7rJvBhk8KHeGnKrGVc_JD5kMPpEoMbxt6JZopbHPelaVO_QI0TRKzjhI&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=tIXoDyG7t6x8dV7hPnEqKw&oh=00_Aflxt1rP8L2UkxK4cxgP9Xf84bFHtvcd1hbt-MB5dLOm1A&oe=6945C6F1' 
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-stone-950 min-h-screen pt-24 pb-20">
      <SEO 
        title="Landscaping Project Gallery | Stonewater Properties LLC" 
        description="See our work in Berkeley Heights and Union County. Photos of custom patios, retaining walls, garden renovations, and seasonal displays by Stonewater Properties LLC."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of recent projects in Berkeley Heights and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <span className="text-primary-500 text-sm font-bold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;