import React, { useEffect, useState } from 'react';
import Mobile from './Mobile';


const Mobiles = () => {
    const [products, setProducts] = useState([])
    const [mobileProduct, setMobileProduct] = useState([])
    useEffect(() => {
        fetch('https://brand-shop-server-4mugp4b17-md-sayed-hasans-projects.vercel.app/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setMobileProduct(data.filter(mobile => mobile.typeDropsown === 'mobile'))
        })
    },[])
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" >
            <div  className='w-2/4 mx-auto py-10'>
                <h3 className='text-4xl font-bold text-center'>
                   All Mobiles
                </h3>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    mobileProduct.map(mobileProd => <Mobile key={mobileProd.name} mobileProd={mobileProd}></Mobile>).slice(0,6)
                }
            </div>
        </div>
    );
};

export default Mobiles;