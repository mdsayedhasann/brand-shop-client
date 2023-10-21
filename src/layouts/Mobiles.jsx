import React, { useEffect, useState } from 'react';
import Mobile from './Mobile';

const Mobiles = () => {
    const [products, setProducts] = useState([])
    const [mobileProduct, setMobileProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setMobileProduct(data.filter(mobile => mobile.typeDropsown === 'mobile'))
        })
    },[])
    return (
        <div>
            <div className='w-2/4 mx-auto py-10'>
                <h3 className='text-4xl font-bold text-center'>
                   All Mobiles
                </h3>
            </div>

            <div>
                {
                    mobileProduct.map(mobileProd => <Mobile key={mobileProd.name} mobileProd={mobileProd}></Mobile>)
                }
            </div>
        </div>
    );
};

export default Mobiles;