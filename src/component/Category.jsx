import React from "react";
import { products } from "../data_json.js";

const Category = () => {
  const uniqueCategory = [
    ...new Set(products?.map((product) => product?.Category)),
  ];

  const uniqueProudct = uniqueCategory?.map((category) => {
    return products?.filter((product) => product?.Category == category)[0];
  });
  return (
    <div className="container-fluid mt-2">
      <div className=" d-flex gap-3 scrolling px-1">
        {uniqueProudct?.map((product, ind) => {
          return (
            <div
              className="rounded d-flex gap-1 p-0 category-bg category-width"
              key={ind}
            >
              <div className="category-img-bg m-2 rounded">
                <img
                  src={product?.Image[0]}
                  alt="product"
                  className="category-image"
                />
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center px-2">
                <p className="m-0 fs-6 fs-md-2  pink-text text-flow">{product?.Category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
