import React from 'react';

const Laptop = ({laptop}) => {
    const { name, shortDescription, brandDropsown, photo } = laptop;
    return (
        <div>
            <div>
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
            <div className="card-actions justify-end">
              <div className="badge badge-outline badge-primary">
                {" "}
                Brand: {brandDropsown}
              </div>
              {/* <div className="badge badge-outline">  </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Laptop;