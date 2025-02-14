import { facebook, instagram  } from "../assets";



export const footerLinks = [

  {
    title: "Novio",
    links: [
      {
        name: "Contacto",
        link: "",
      },
      {
        name: "Facebook",
        link: "",
      },
      {
        name: "Instagram",
        link: "",
      },
    ],
  },
  {
    title: "Novia",
    links: [
      {
        name: "Contacto",
        link: "",
      },
      {
        name: "Facebook",
        link: "",
      },
      {
        name: "Instagram",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  }
];

export const planslist = [
  {
    id: 'basic',
    title: 'Basic',
    price: 2,
    quality: '1080p (Full HD)',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 2,
    downloadDevices: 2,
    extraFeatures: [
      'Basic content access',
      'Limited offline viewing',
      'Ad-supported streaming'
    ],
  },
  {
    id: 'normal',
    title: 'Normal',
    price: 5,
    quality: '4K (Ultra HD)',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 3,
    downloadDevices: 3,
    extraFeatures: [
      'Expanded content library (Movies, Series, Concerts, Festivals)',
      'Offline viewing',
      'Access to special events',
      'Limited simultaneous streams'
    ],
  },
  {
    id: 'cinefan',
    title: 'Cinefan',
    popular: true,
    price: 10,
    quality: '4K (Ultra HD) + HDR',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 4,
    downloadDevices: 4,
    extraFeatures: [
      'Access to new releases (Movies, Series, Concerts, Festivals)',
      'Behind the scenes content',
      'Early access to content',
      'Cinema mode'
    ],
  },
  {
    id: 'familiar',
    title: 'Familiar',
    price: 15,
    quality: '4K (Ultra HD) + HDR',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 5,
    downloadDevices: 5,
    groupSharing: true,
    maxGroupMembers: 5,
    extraFeatures: [
      'All Cinefan features',
      'Shared account access',
      'Group watch features',
      'Custom profiles',
      'Parental controls',
    ],
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 20,
    quality: '8K (Ultra HD) + HDR + Dolby Atmos',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 6,
    downloadDevices: 6,
    balanceIncluded: 10,
    balanceCarryOver: true,
    extraFeatures: [
      'All Cinefan Features',
      'Highest quality streaming',
      'Bonus content',
      'Carryover balance',
      'Exclusive VIP events',
    ],
  },
  {
    id: 'premiumfam',
    title: 'Premium Familiar',
    price: 25,
    quality: '8K (Ultra HD) + HDR + Dolby Atmos',
    devices: 'TV, PC, Smartphone, Tablet',
    sameDevices: 8,
    downloadDevices: 8,
    balanceIncluded: 10,
    balanceCarryOver: true,
    extraFeatures: [
      'All familiar features',
      'All Premium features'
    ],
  }
];

 