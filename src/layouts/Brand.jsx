/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  // const { _id} = brand
  return (
      <div className="">
      <div>
        <figure>
            <Link to={`/brand/${brand._id}`}>
                <img className="w-[200px] h-[200px] p-8" src={brand.image_url} alt="" />
                <h3 className="text-center text-2xl">{brand.brand}</h3></Link>
        </figure>
      </div>
    </div>
  );
};

export default Brand;
