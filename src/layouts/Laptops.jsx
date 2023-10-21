import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Laptop from './Laptop';

const Laptops = () => {
    const [laptopProducts, setLaptopProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setLaptopProducts(data.filter(laptop => laptop.typeDropsown === 'laptop'))
        })
    },[])
    return (
        <div>
            <div className='w-2/4 mx-auto py-10'>
                <h3 className='text-4xl font-bold text-center'>
                    All Laptops
                </h3>
            </div>

            <div>
                {
                    laptopProducts.map(laptop => <Laptop key={laptop._id} laptop={laptop}></Laptop>)
                }
            </div>
        </div>
    );
};

export default Laptops;