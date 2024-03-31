import React from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Haircut',
    description: 'A standard haircut with our professional barbers.',
    price: '£20',
  },
  {
    id: 2,
    title: 'Shave',
    description: 'A clean, smooth shave.',
    price: '£15',
  },
  {
    id: 3,
    title: 'Beard Trim',
    description: 'A trim to keep your beard looking neat and tidy.',
    price: '£10',
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <section className='w-screen min-h-screen p-10 bg-gray-800'>
      <h1 className='text-4xl font-semibold text-slate-200 font-serif'>Our Services</h1>

      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {services.map((service) => (
          <div key={service.id} className='border border-green-500 rounded-lg p-4'>
            <h2 className='text-2xl font-semibold text-slate-200 font-serif'>{service.title}</h2>
            <p className='mt-2 text-slate-200 font-serif'>{service.description}</p>
            <p className='mt-2 text-yellow-300 font-serif'>{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
