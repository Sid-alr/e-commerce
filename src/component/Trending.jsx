import React, {useState} from "react";
import { products } from "../data_json";
import { NavLink } from "react-router-dom";

const Trending = () => {
  const [imageChange, setImageChange] = useState("");
  const [imageIndex, setImageIndex] = useState("");

  const handleOnMouseEnter = (img, ind) => {
    setImageChange(img);
    setImageIndex(ind);
  };

  const handleOnMouseLeave = (img) =>{
    setImageChange(img);
  }

  const trendingProduct = products?.filter(
    (product) => product?.Trending == true
  );

  return (
    <div className="container-fluid mt-4">
      <h3 className="text-secondary m-0">Trending Product's</h3>

      <div className="row mt-3 row-gap-1">
        {trendingProduct?.map((product, ind) => {
          return (
            <NavLink to={`/single-product/${product?.Id}`} className="col-12 col-sm-6 col-lg-4 text-decoration-none" key={product?.Id}>
              <div className="d-flex gap-3 rounded box-shadow">
                <div className="m-1 border w-25 trending-image rounded">
                  <img
                    src={
                      imageChange != "" && imageIndex == ind
                        ? imageChange
                        : product?.Image[0]
                    }
                    className="h-100 w-100 rounded fit-content"
                    alt="name"
                    onMouseEnter={() =>
                      handleOnMouseEnter(product?.Image[1], ind)
                    }
                    onMouseLeave={()=>handleOnMouseLeave(product?.Image[0])}
                  />
                </div>
                <div className="d-flex flex-column justify-content-center gap-2 w-75">
                  <div>
                    <h6 className="m-0 text-flow-1">{product?.Heading}</h6>
                  </div>
                  <div className="d-flex gap-3">
                    <p className="m-0 text-decoration-line-through text-secondary">
                      <span>₹</span> {product?.Price + 100}
                    </p>
                    <p className="m-0 text-danger">
                      <span>₹</span> {product?.Price}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
