import React from 'react';
import MenuBtn from '../../utility/MenuBtn';
import Link from 'next/link';
import { Navlinks } from '@/app/constants/constants';
const Navbar = () => {
  return (
    <nav className='h-20 text-white bg-blue-800 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40 max-w-[1440px] mx-auto sticky top-0 left-0 z-50'>
      {/* LOGO */}
      <div className='text-xl font-bold flex-1 flex justify-start font-serif text-yellow-400'>
        <Link href='/'> MaximBarbs</Link>
      </div>
      {/*  LINKS */}
      <div className='hidden md:flex gap-4 flex-1'>
        {Navlinks.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            className='text-[0.9rem] hover:font-bold'> 
            <div
              className='flex items-center justify-center mb-2 text-white
           hover:translate-y-2
           hover:font-semibold'>
              {item.icon}
              {item.label}
            </div>
          </Link>
        ))}
      </div>

      {/* MOBILE MENU */}
      <div className='md:hidden flex bg-white text-yellow-300 rounded-full p-2'>
        <MenuBtn />
      </div>
    </nav>
  );
};

export default Navbar;
