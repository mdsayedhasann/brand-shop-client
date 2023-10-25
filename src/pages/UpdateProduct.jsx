import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
// const Swal = require('sweetalert2')

const UpdateProduct = () => {
  const products = useLoaderData();

  const [brands, setBrands] = useState("");
  const [brandDropsown, setBrandDropsown] = useState("");

  const [typeDropsown, setTypeDropsown] = useState("");

  useEffect(() => {
    fetch("https://brand-shop-server-4mugp4b17-md-sayed-hasans-projects.vercel.app/brands/")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        console.log(data);
      });
  }, []);

  const updateProducts = e => {
      e.preventDefault()
      const form = e.target
      const name = form.name.value
      const typeDropsown = form.typeDropsown.value
      const shortDescription = form.shortDescription.value
      const price = form.price.value
      const photo = form.photo.value
      const updateProduct = {name, typeDropsown, shortDescription, price, photo}
    console.log(updateProduct);

    fetch(`https://brand-shop-server-4mugp4b17-md-sayed-hasans-projects.vercel.app/product/${products._id}`, {
        method: 'PUT', 
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updateProduct)
    })
    .then(res => res.json())
    .then(data => {

      data.insertedId(Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Product Update Success',
        showConfirmButton: false,
        timer: 1000
      }))
        // if(data.insertedId){
        //     alert('Update complete')
        // }
    })
  }

  return (
    <div className="max-w-7xl mx-auto">
      <form onSubmit={updateProducts}> 
        <div className="w-1/2 mx-auto">
          <div className="grid grid-cols-2 gap-5">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group rounded-md">
                <input
                  defaultValue={products.name}
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
                {/* Types */}
                <select
                defaultValue={products.typeDropsown}
                  onChange={(e) => setTypeDropsown(e.target.value)}
                  name="typeDropsown"
                  className="select select-bordered w-full max-w-xs"
                >
                  <option value="">Select One</option>
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="tablet">Tablet</option>
                </select>
                {/* Types */}
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {/* Brand */}
            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Choose a Brand</span>
              </label>
              <label className="input-group rounded-md">
                {/* Brandsss */}
                {/* <select name="brandDropsown" defaultValue={products.brandDropsown} onChange={e => setBrandDropsown(e.target.value)}  className="select select-bordered w-full "> */}
                 {
                        //  brands.map(brand => <option key={brand._id} value={brand.brand}> {brand.brand} </option>)
                 }
                 {/* </select> */}
                {/* Brandsss */}
              {/* </label> */}
            {/* </div>  */}

            {/* Short Description */}

            <div className="form-control">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group rounded-md">
                <input
                  defaultValue={products.shortDescription}
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
                  defaultValue={products.price}
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
                  defaultValue={products.photo}
                  type="text"
                  name="photo"
                  placeholder="Enter Product Image URL"
                  className="input input-bordered rounded-md  w-full"
                />
              </label>
            </div>
          </div>

          <div>
            <button className="btn btn-primary my-4">Update</button>
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

export default UpdateProduct;
