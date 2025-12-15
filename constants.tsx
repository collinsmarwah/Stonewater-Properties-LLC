import { NavItem, ServiceItem } from './types';
import { Shovel, Snowflake, Flower2, LayoutDashboard, Trees, Leaf } from 'lucide-react';
import React from 'react';

export const COMPANY_PHONE = "(908) 464-3040";
export const COMPANY_EMAIL = "stonewaterpropertiesllc@gmail.com";
export const COMPANY_ADDRESS = "Berkeley Heights, NJ 07922";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'hardscaping',
    title: 'Hardscaping & Patios',
    description: 'Custom paver patios, walkways, retaining walls, and outdoor kitchens designed for longevity and style.',
    icon: <LayoutDashboard className="w-6 h-6" />,
    image: 'https://scontent.xx.fbcdn.net/v/t39.30808-6/486322992_28841806865434333_3494650821490733975_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=N5KgqOw_ca8Q7kNvwG6EaeH&_nc_oc=AdmxVaF4RckSQQPapyNMzALufCnAN0WeuNcfdwy8IANWnuEy94-AdaoGWZtgkDD6Vs0&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=yRILJu8sekdwb0hN6BSw2Q&oh=00_AfnIeJGkFkQ0ZuJ3Wb4EJ4sNW9e4Vii3qJdYdZC1yTJH6w&oe=6945B44B',
    link: '/services/landscape-design'
  },
  {
    id: 'maintenance',
    title: 'Lawn Maintenance',
    description: 'Weekly mowing, fertilization, aeration, and seasonal cleanup programs to keep your grass vibrant green.',
    icon: <Trees className="w-6 h-6" />,
    image: 'https://scontent.xx.fbcdn.net/v/t51.82787-15/584089925_18438982072096922_1782051776068807012_n.jpg?stp=dst-jpegr_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Sb5ioU0FMZgQ7kNvwEqdaU0&_nc_oc=AdmYgK0SXvSaxjy_wtbN9PHy1Lvw0EnO88be9e6M1IoqxpYGIA_MHUepf_fgVpKS0wE&_nc_zt=23&se=-1&_nc_ht=scontent.xx&_nc_gid=buYsPc6biS2dJqQiWAD7Wg&oh=00_AflSHOk54LMoNOQjLzub6NptEeIOY5rvB9AaY6XBMnmqqA&oe=6945C7F6',
    link: '/services/maintenance'
  },
  {
    id: 'design',
    title: 'Landscape Design',
    description: 'Full property transformations with selected plantings, lighting, and strategic layout planning tailored to your budget.',
    icon: <Shovel className="w-6 h-6" />,
    image: 'https://scontent.xx.fbcdn.net/v/t39.30808-6/485647464_28808685405413146_6221021714414199631_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=0AfniVWloZgQ7kNvwGLDtOq&_nc_oc=Adkg87l6uxu185UKW7enzqPdwHExnrJrWUwhuhwvUQy5whTAGRYYIXOPlp_gaH886NA&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=JbKgVELoDyGcZiHdj-vTIg&oh=00_AfliOF3zAxnWRRyGhoQerIQrcTHR9dA9CbdsfP7YlAIexQ&oe=6945A852',
    link: '/services/landscape-design'
  },
  {
    id: 'garden',
    title: 'Garden Design',
    description: 'Annual and perennial garden design, window boxes, and renovations for year-round color.',
    icon: <Flower2 className="w-6 h-6" />,
    image: 'https://scontent.xx.fbcdn.net/v/t39.30808-6/485878286_28808685275413159_8088409592339224482_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=NyA3Y08DH04Q7kNvwGSIhTy&_nc_oc=Adk2oiO5VRZYOjrqVyRSuiAWm6khVWFmZcfjpV8gy9r76DhvIt1UhdGEkay13hjGPUM&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=FLhjWIiYigcksVLbhTKEsg&oh=00_AfkNoc7ZKT2A6yxXDVVP7xYjrTngsZ7R3a3CzRtHR2ZaOw&oe=6945B0B8',
    link: '/services/garden-design'
  },
  {
    id: 'seasonal',
    title: 'Seasonal Displays',
    description: 'Vibrant seasonal plantings and decor to enhance curb appeal throughout the year.',
    icon: <Leaf className="w-6 h-6" />,
    image: 'https://scontent.xx.fbcdn.net/v/t51.82787-15/566531719_18433050229096922_3248327827491600400_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZIOfZ5jqMJ0Q7kNvwFc8qQY&_nc_oc=AdmZA9CKPs53shl-pz4IfYFWvjbw8vjSvbb2m7b4Dks2PRKZhHYLBhZamjC1CMUArIE&_nc_zt=23&_nc_ht=scontent.xx&_nc_gid=Oew-vq2juwCsl6qTpvmxkw&oh=00_AfmwEtruSRlolB3cLslMHCFV7BROXgW6_RIDf9H2AFqCYw&oe=6945CE5C',
    link: '/services/seasonal'
  },
  {
    id: 'snow',
    title: 'Snow Plowing',
    description: 'Reliable 24-hour commercial and residential snow management and ice control.',
    icon: <Snowflake className="w-6 h-6" />,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFk85s4b0M1XFjrpKfAp_SUnPpFztcKHBvw&s',
    link: '/services/snow-removal'
  }
];