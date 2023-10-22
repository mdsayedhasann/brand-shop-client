/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Mobile = ({ mobileProd }) => {
  const { _id, name, shortDescription, brandDropsown, photo } = mobileProd;
  return (
    <div>
      <div className="my-3">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className=" h-[250px]" src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">New</div>
            </h2>
            <p>{ shortDescription.slice(0,60) } ... </p>
            

            {/*  */}
            <div className="flex justify-between items-center">
            <div>
              <Link to={`/product/${_id}`}>
                <button className="btn bg-gradient-to-r from-[#975D89] to-[#AC2F67] text-white my-2">
                  View Product
                </button>
              </Link>
            </div>

            <div className="card-actions justify-end">
              <div className="badge badge-outline badge-primary">
                {" "}
                Brand: {brandDropsown}
              </div>
              {/* <div className="badge badge-outline">  </div> */}
            </div>

           
          </div>    
            {/*  */}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
