/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayProduct = ({displayProduct}) => {
    const {
        _id,
        name,
        shortDescription,
        brandDropsown,
        photo,
        typeDropsown,
        price,
      } = displayProduct;
    return (
        <div>
      <div className="card w-96 bg-base-100 shadow-xl my-3">
        <figure>
          <img className='h-[250px]' src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">New</div>
          </h2>
          <p>{shortDescription.slice(0,100)}</p>

          <div className="flex justify-between items-center ">
            <div className="card-actions py-3">
              {/* <div className="badge badge-outline">{brandDropsown}</div> */}
              <div className="badge badge-outline">Type: {typeDropsown}</div>
            </div>

            <div>
              <div>
                <h3 className="text-lg">Price: {price}</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <Link to={`/product/${_id}`}>
                <button className="btn bg-gradient-to-r from-[#975D89] to-[#AC2F67] text-white my-2">
                  View Product
                </button>
              </Link>
            </div>

            <div>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default DisplayProduct;