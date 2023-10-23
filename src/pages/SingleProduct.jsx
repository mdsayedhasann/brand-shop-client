import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// CommonJS

const SingleProduct = () => {
  const product = useLoaderData();
  // const [] = useState(product)
  const { _id, name, photo, price, shortDescription, typeDropsown } = product;

  const deleteProduct = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-3">
        <div>
          <img
            className="shadow-xl shadow-zinc-300 rounded-xl "
            src={photo}
            alt=""
          />
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

      {/* Action */}
      <div className="flex justify-center my-14">
        <button
          onClick={() => deleteProduct(_id)}
          className="btn btn-error mx-3"
        >
          Delete
        </button>
        <Link to={`/updateproduct/${_id}`}><button className="btn btn-accent">Update</button></Link>
      </div>
    </div>
  );
};

export default SingleProduct;
