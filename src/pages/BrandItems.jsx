/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const BrandItems = () => {
  const branddd = useLoaderData();
 
  const [products, setProducts] = useState([])
  const [displayProducts, setDisplayProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => {
        setProducts(data)
        console.log(displayProducts);
        setDisplayProducts(data.filter(prod => prod.brandDropsown === branddd.brand ))
    })
  }, [])

// console.log(products);
  return (
    <div className="max-w-7xl mx-auto">
        <p>
            {
                <>
                <p>{branddd.brand }</p>
                <p>{branddd._id}</p>
                {
                    displayProducts.map(product => <p key={product._id}>{product.name}</p>)
                }
                </>

            }
        </p>
    
    </div>
  );
};

export default BrandItems;
