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
                <img src="https://i.ibb.co/48rQ3Lv/image.png" alt="" />
                <h3 className="text-center">{brand.brand}</h3></Link>
        </figure>
      </div>
    </div>
  );
};

export default Brand;
