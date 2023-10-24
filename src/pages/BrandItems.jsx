/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BrandItem from "../layouts/BrandItem";
import DisplayProduct from "../layouts/DisplayProduct";
import AdvertiseSlider from "../layouts/AdvertiseSlider";
import NoBrands from "../layouts/NoBrands";

const BrandItems = () => {
  const branddd = useLoaderData();

  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(displayProducts);
        setDisplayProducts(
          data.filter((prod) => prod.brandDropsown === branddd.brand)
        );
      });
  }, []);

  // console.log(products);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="py-24 bg-gradient-to-br from-[#762970] flex justify-center items-center">
        <div className="text-3xl text-white breadcrumbs">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <a>Brands</a>
            </li>
            <li>{branddd.brand}</li>
          </ul>
        </div>
      </div>

      {/* Brand Page Slider Start */}
      <div className="my-4">
        <AdvertiseSlider></AdvertiseSlider>        
      </div>
      {/* Brand Page Slider Start */}

     <div className="grid grid-cols-1 md:grid-cols-3 py-5">
        {displayProducts.length > 0 ?  displayProducts.map(displayProduct => <DisplayProduct key={displayProduct._id} displayProduct={displayProduct}></DisplayProduct>) : <NoBrands></NoBrands>}
     </div>
    </div>
  );
};

export default BrandItems;
