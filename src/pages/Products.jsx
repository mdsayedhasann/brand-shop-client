import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data)

        })
    },[])
    return (
        <div>

            <div className='w-2/4 mx-auto py-10'>
                <h3 className='text-4xl font-bold text-center'>
                    All Products
                </h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                products.map(product => <Product key={product._id} product={product}></Product>).slice(0,9)
            }
        </div>
        </div>
    );
};

export default Products;