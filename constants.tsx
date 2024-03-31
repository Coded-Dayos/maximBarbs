import {
  MdOutlineHomeWork,
  MdOutlineContactMail,
  MdDesignServices,
} from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';


export const Navlinks = [
  {
    label: 'Home',
    path: '/',
    icon: <MdOutlineHomeWork className='text-2xl pr-1' />,
  },
  {
    label: 'About',
    path: '/about',
    icon: <FcAbout className='text-2xl text-yellow-100 pr-1' />,
  },
  {
    label: 'Services',
    path: '/services',
    icon: <MdDesignServices className='text-2xl text-white  pr-1' />,
  },
  {
    label: 'Contact',
    path: '/contact',
    icon: <MdOutlineContactMail className='text-2xl pr-1' />,
  },
];

export const SocialIcons = [
  { id: 1, icon: <MdOutlineHomeWork className='pr-1 text-4xl ' />, path: '/' },
  { id: 2, path: '/', icon: <MdDesignServices className='text-4xl pr-1' /> },
  { id: 3, path: '/', icon: <MdOutlineContactMail className='text-4xl pr-1 text-white' /> },
  { id: 4, path: '/', icon: <FcAbout className='text-4xl pr-1 ' /> },
];

export const ServiceItems = [
  {
    id: 1,
    title: 'HAIR CUT',
   
    price: 35,
  },
  {
    id: 2,
    title: 'WASH + CUT',
  
    price: 40,
  },
  {
    id: 3,
    title: 'SKIN FADE CUT',
  
    price: 35,
  },
  {
    id: 4,
    title: 'SKIN FADE CUT + WASH',
   
    price: 45,
  },
  {
    id: 5,
    title: 'HAIR CUT + BEARD',
    
    price: 35,
  },
  
]
export const ServiceItems2=[
  
 {
    id: 1,
    title: 'SKIN FADE CUT + BEARD',
    
    price: 35,
  },
  {
    id: 2,
    title: 'BEARD TRIM',
   
    price: 15,
  },
  {
    id: 3,
    title: 'CREW CUT',
    
    price: 35,
  },
  {
    id: 4,
    title: 'CREW CUT + WASH',
   
    price: 35,
  },
  {
    id: 5,
    title: 'CHILD HAIR CUTS',
  
    price: 35,
  },
];
 
  
  
 
  