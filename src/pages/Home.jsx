import React from 'react';
import Banner from '../layouts/Banner';
import Brands from '../layouts/Brands';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Banner></Banner>
           <div>
               <Brands></Brands>
           </div>
        </div>
    );
};

export default Home;