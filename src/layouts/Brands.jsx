import React from "react";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";

const Brands = () => {
  const brands = useLoaderData();
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-6">
        {brands.map((brand) => (
          <Brand key={brand._id} brand={brand}></Brand>
        ))}
      </div>


    </div>
  );
};

export default Brands;
