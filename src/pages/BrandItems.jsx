/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";

const BrandItems = () => {
  const branddd = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto">
        <p>
            {
                <>
                <p>{branddd.brand }</p>
                <p>{branddd._id}</p>
                </>
            }
        </p>
    
    </div>
  );
};

export default BrandItems;
