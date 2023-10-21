import React from 'react';
import Banner from '../layouts/Banner';
import Brands from '../layouts/Brands';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';
import Mobiles from '../layouts/Mobiles';
import Laptops from '../layouts/Laptops';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Banner></Banner>
           <div className='py-10'>
               <Brands></Brands>
           </div>
           <div className='py-10'>
               <Products></Products>
           </div>
           <div className='py-10'>
              <Mobiles></Mobiles>
           </div>
           <div className='py-10'>
              <Laptops></Laptops>
           </div>
        </div>
    );
};

export default Home;