'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


import { Navlinks } from '@/app/constants/constants';

const MenuBtn = () => {
  const [open, setOpen] = useState(false);

  return (
    <div >
      <Image
        src={open ? '/close.png' : '/open.png'}
        alt=''
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className='cursor-pointer text-white'
      />
      {open && (
        <div className=' text-white absolute left-0 top-20 w-full h-[calc(100vh - 5rem)] flex flex-col gap-8 items-center justify-center text-3xl z-[20] font-serif bg-blue-900'>
          {Navlinks.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              href={item.path}
              key={item.label}
              className='text-white
              
              hover:text-black
              rounded-lg 
              text-2xl
              duration-300
              ease-in-out'>
              <div className='flex items-center justify-center mb-2 pt-20'>
                {item.icon}
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuBtn;
