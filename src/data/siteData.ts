export type NavItem = {
  label: string;
  href: string;
};

export type DemoProject = {
  id: string;
  title: string;
  summary: string;
  sqft: number;
  location: string;
  town: string;
  image: string;
  imageAlt: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  rating: 5;
};

export type FooterData = {
  name: string;
  story: string;
  phone: string;
  phoneHref: string;
  email: string;
  street: string;
  locality: string;
  hours: string;
  serviceAreas: string[];
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'Gallery', href: '/portfolio' },
  { label: 'Contact Us', href: '/contact' },
];

/**
 * Developer note: images on demoProjects are temporary Unsplash placeholders.
 * They are not Moonstone project photos. Swap each `image` URL for the builder's files.
 */
export const projectImageNote =
  'Developer note: images are temporary placeholders. Replace these Unsplash links with the builder’s project photos.';

export const demoProjects: DemoProject[] = [
  {
    id: 'custom-home-building',
    title: 'Custom Home Building',
    summary:
      'We have built many homes under a variety of conditions. We have built in the Mountains, plains; in sand, clay and bedrock. Our many years of experience is essential to successfully manage the complexities that can arise when building from the ground up.',
    sqft: 4200,
    location: 'Lyons, CO',
    town: 'Lyons',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder exterior photo for a custom home building project',
  },
  {
    id: 'design-build-services',
    title: 'Design / Build Services',
    summary:
      'Moonstone Construction has been performing custom designs since our founding in 1990. We will work with your architect or perform these services all in-house ourselves. Brad has a discriminating eye for design and can provide our clients with different options to choose from.',
    sqft: 3180,
    location: 'Louisville, CO',
    town: 'Louisville',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder interior photo for a design and build project',
  },
  {
    id: 'historical-renovations',
    title: 'Historical Renovations & Restorations',
    summary:
      'Working with Historical Homes has been a niche specialty at Moonstone Construction since the 90s. We won the 2001 Award Of Merit from Historic Boulder, Inc. for our Addition to an Historic Boulder Home at 721 Spruce Street. We have experience with single and multi-residence properties, HOA boards, Historical Preservation Authorities, City Hearings, and a broad knowledge of past building materials, custom lathe work, time period trim carving tools and more.',
    sqft: 2640,
    location: 'Boulder, CO',
    town: 'Boulder',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder photo of an older house for a historical renovation',
  },
  {
    id: 'quality-home-remodeling',
    title: 'Quality Home Remodeling',
    summary:
      'Moonstone Construction has been performing Residential Remodels for over 30 years and we are experts in creating your dream sanctuary from the existing home you have. We understand the regulations involved in deciding what can and cannot be done and to come up with creative solutions to make your dreams a reality.',
    sqft: 2150,
    location: 'Lafayette, CO',
    town: 'Lafayette',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'Placeholder kitchen photo for a home remodeling project',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'francea-phillips',
    name: 'Francea Phillips',
    rating: 5,
    quote:
      'I am so pleased to recommend and refer Brad and crew at Moonstone Construction! They renovated my home nearly 100%. I called Brad after the entire project was completed to thank him and tell him, "I wouldn\'t change a single thing!" The quality and care they took to turn an old house in to a beautiful new home is unequaled! Do not hesitate, if you have a project of any size, Moonstone Construction is definitely 5 Star!!!',
  },
  {
    id: 'lesa-filius',
    name: 'Lesa Filius',
    rating: 5,
    quote:
      "I've known Brad for over 25yrs. His company and crew have worked on my house for several projects. They show up when they say they are and do a great job!!!! They clean up after themselves and are always wonderful to work with !!! I won't have anyone else work on my place. They are the best !!!!! Don't mess around with mediocre !!!! Go with Moonstone construction!!!! You'll love what they do !!!!",
  },
  {
    id: 'david-welden',
    name: 'David Welden',
    rating: 5,
    quote:
      'I have had the pleasure of working with Brad and everyone at Moonstone on multiple occasions. I have nothing but great things to say about them and their service! They have helped me out at my house with great results and have done many renovations where I work as well. They will always be who I call when renovating or building! They are the BEST!',
  },
];

export const footerData: FooterData = {
  name: 'Moonstone Construction and Development',
  story:
    'Every contractor expounds the quality of their work and their trustworthiness. Moonstone can prove it. We have over 30 years’ worth of client references, letters of recommendation, awards and commendations to complement our A+ rating and Accreditation with the BBB. It is our job and our pleasure to bring your design concepts to life and we do so with a collaborative, creative and cost-conscious mindset.',
  phone: '303-926-2625',
  phoneHref: 'tel:3039262625',
  email: 'moonstone@moonstoneconstruction.com',
  street: '11240 Billings Ave',
  locality: 'Lafayette, CO 80026',
  hours: 'Mon - Fri: 9am - 5pm',
  serviceAreas: [
    'Boulder',
    'Louisville',
    'Lafayette',
    'Longmont',
    'Superior',
    'Thornton',
    'Broomfield',
    'Westminster',
    'Erie',
    'Lyons',
  ],
};

export const logoSrc =
  'https://www.moonstoneconstruction.com/wp-content/uploads/2025/03/logo.jpg';
