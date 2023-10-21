import React from "react";

const Product = ({ product }) => {
  const { name, shortDescription, brandDropsown, photo, typeDropsown, price } =
    product;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">New</div>
          </h2>
          <p>{shortDescription}</p>


<div className="flex justify-between items-center ">
<div className="card-actions py-3">
            <div className="badge badge-outline">{brandDropsown}</div>
            <div className="badge badge-outline">Type: {typeDropsown}</div>
          </div>


          <div>
            <div><h3 className="text-lg">Price: {price}</h3></div>
          </div>
</div>

          



        </div>
      </div>
    </div>
  );
};

export default Product;
