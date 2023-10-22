import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const product = useLoaderData();
  const { name, photo, price, shortDescription, typeDropsown } = product;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-3">
        <div>
          <img className="shadow-lg shadow-zinc-500 rounded-md " src={photo} alt="" />
        </div>
        <div>
          <h3 className="text-4xl font-bold pt-5"> {name}</h3>
          <h3 className="text-xl py-5 ">Price: {price} </h3>
          <p>{shortDescription}</p>
          <button className="btn bg-gradient-to-r from-[#975D89] to-[#AC2F67] text-white my-5">
            Add To Cart
          </button>
          <hr />
          <p className="text-base py-3">
            Category: <span className="px-3 ">{typeDropsown}</span>
          </p>

          <div className="py-2">
            {/* Rating Start */}
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            {/* Rating End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
