import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProductList = ({ productJson, title }) => {
  const [imageChange, setImageChange] = useState("");
  const [imageIndex, setImageIndex] = useState("");

  const handleOnMouseEnter = (img, ind) => {
    setImageChange(img);
    setImageIndex(ind);
  };

  const handleOnMouseLeave = (img) => {
    setImageChange(img);
  };

  return (
    <div className="container-fluid my-3">
      <h3 className="text-secondary m-0">{title}</h3>
      <div className="row mt-3 mx-1 border-bottom border-end">
        {productJson?.map((product, ind) => {
          return (
            ind < 8 && (
              <NavLink to={`/single-product/${product?.Id}`}
                className="col-sm-6 col-lg-3 d-flex flex-column align-items-center border-top border-start text-decoration-none"
                key={product?.Id}
              >
                <div className="list-img m-1 rounded">
                  <img
                    src={
                      imageChange != "" && imageIndex == ind
                        ? imageChange
                        : product?.Image[0]
                    }
                    alt="img"
                    className="w-100 h-100 rounded fit-content"
                    onMouseEnter={() =>
                      handleOnMouseEnter(product?.Image[1], ind)
                    }
                    onMouseLeave={() => handleOnMouseLeave(product?.Image[0])}
                  />
                </div>
                <div className="d-flex flex-column align-items-center gap-1 m-1">
                  <p className="m-0 fs-5 text-center text-secondary">
                    {product?.Name}
                  </p>
                  <p className="m-0 fs-5 text-center text-danger">
                    ₹{product?.Price}
                  </p>
                  <div>
                    <i className="fa-solid fa-star text-warning fs-5"></i>
                    <i className="fa-solid fa-star text-warning fs-5"></i>
                    <i className="fa-solid fa-star text-warning fs-5"></i>
                    <i className="fa-solid fa-star text-warning fs-5"></i>
                  </div>
                  <div>
                    <p></p>
                  </div>
                </div>
              </NavLink>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
