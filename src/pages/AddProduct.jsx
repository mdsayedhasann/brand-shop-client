import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const brand = useLoaderData();

  const [typeDropsown, setTypeDropsown] = useState("");
  const [brandDropsown, setBrandDropsown] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const photo = form.photo.value;
    const newProduct = {
      name,
      typeDropsown,
      brandDropsown,
      shortDescription,
      price,
      photo,
    };
    console.log(
      name,
      shortDescription,
      price,
      photo,
      typeDropsown,
      brandDropsown
    );

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // Show Toast After Adding Products
        toast.success("Product Added Successfully", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        form.reset()
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={handleAddProduct}>
        <div className="w-1/2 mx-auto">
          <div className="grid grid-cols-2 gap-5">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group rounded-md">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product Name"
                  className="input input-bordered rounded-md w-full"
                />
              </label>
            </div>

            {/* Type` */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose a Type</span>
              </label>
              <label className="input-group rounded-md">
                {/* Brandsss */}
                <select
                  value={typeDropsown}
                  onChange={(e) => setTypeDropsown(e.target.value)}
                  name="typeDropsown"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="">Select One</option>
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                </select>
                {/* Brandsss */}
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Brand */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose a Brand</span>
              </label>
              <label className="input-group rounded-md">
                {/* Brandsss */}
                <select
                  value={brandDropsown}
                  onChange={(e) => setBrandDropsown(e.target.value)}
                  name="brandDropsown"
                  className="select select-bordered w-full "
                >
                  {brand.map((singleBrand) => (
                    <option value={singleBrand.brand} key={singleBrand._id}>
                      {" "}
                      {singleBrand.brand}{" "}
                    </option>
                  ))}
                </select>
                {/* Brandsss */}
              </label>
            </div>

            {/* Short Description */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group rounded-md">
                <input
                  type="text"
                  name="shortDescription"
                  placeholder="Enter Product Short Description"
                  className="input input-bordered rounded-md w-full"
                />
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Price</span>
              </label>
              <label className="input-group rounded-md">
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Product Price"
                  className="input input-bordered rounded-md w-full"
                />
              </label>
            </div>

            {/* Photo */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group rounded-md">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Product Image URL"
                  className="input input-bordered rounded-md  w-full"
                />
              </label>
            </div>
          </div>

          <div>
            <button className="btn btn-primary my-4">Add New</button>
          </div>
        </div>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default AddProduct;
