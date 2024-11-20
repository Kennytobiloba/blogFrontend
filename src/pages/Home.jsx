import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Blog from '../components/Blog';
import { useToken } from '../redux/features/auth/token';


const Home = () => {

  return (
    <div className='bg-white text-primary container mx-auto mt-8 p-8'>
      <div>
        <Hero />
        <Blog />
      </div>
    </div>
  );
}

export default Home;
