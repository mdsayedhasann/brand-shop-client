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

      {/* <div>
          <form>
              <select name="" id="">
                  {
                      brands.map(brand => <option className="w-[100px]" key='brand._id' value={brand.brand}>{brand.brand}</option>)
                  }
              </select>
          </form>
      </div> */}
    </div>
  );
};

export default Brands;
