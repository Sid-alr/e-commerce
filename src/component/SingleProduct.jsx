import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";
import ProductList from "./ProductList";
import { products } from "../data_json";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../App";

const SingleProduct = () => {
  const [productImage, setProductImage] = useState("");
  const { cartProduct, setCartProduct } = useContext(productContext);
  const [isAvailableToCart, setIsAvailableToCart] = useState(false);

  const { id } = useParams();

  const [singleData] = products?.filter((product) => product?.Id == id);

  const suggestedProduct = products?.filter(
    (sugProduct) =>
      sugProduct?.Category?.toLowerCase() == singleData?.Category?.toLowerCase()
  );

  const handleEnterChangeImage = (img) => {
    setProductImage(img);
  };

  const handleLeaveChangeImage = (img) => {
    setProductImage(img);
  };

  const handlAddToCart = () => {
    const isAddedToCart = cartProduct?.filter(
      (product) => product?.Id == singleData?.Id
    );

    if (isAddedToCart.length > 0) {
      alert("Product is added to cart");
      setIsAvailableToCart(true);
      return null;
    }

    setCartProduct([...cartProduct, singleData]);
  };

  useEffect(() => {
    const isAddedToCart = cartProduct?.filter(
      (product) => product?.Id == singleData?.Id
    );

    if (isAddedToCart.length > 0) {
      setIsAvailableToCart(true);
    }

    if (isAddedToCart.length == 0) {
      setIsAvailableToCart(false);
    }
  }, [cartProduct, singleData]);

  console.log("cart-items", cartProduct);

  return (
    <Layout>
      <div className="container-fluid mt-4">
        <div className="row justify-content-between row-gap-2">
          <div className="col-12 col-md-5">
            <div className="d-flex gap-2 border p-2 rounded">
              <div className="d-flex flex-column gap-2">
                {singleData?.Image?.map((image, ind) => {
                  return (
                    <div
                      className="single-small-image product-card-bg p-1 rounded"
                      key={ind}
                    >
                      <img
                        src={image}
                        alt={`image${ind}`}
                        className="h-100 w-100 rounded fit-content"
                        onMouseEnter={() => handleEnterChangeImage(image)}
                        onMouseLeave={() =>
                          handleLeaveChangeImage(productImage)
                        }
                      />
                    </div>
                  );
                })}
              </div>
              <div className="single-product-size product-card-bg p-1 rounded">
                <img
                  src={productImage == "" ? singleData?.Image[0] : productImage}
                  alt={"img"}
                  className="h-100 w-100 fit-content"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column gap-3">
            <h5 className="maroon-color">{singleData?.Heading}</h5>

            <div className="d-flex gap-3">
              <p className="m-0">Model</p>
              <p className="m-0 text-secondary">{singleData?.Name}</p>
            </div>
            <div className="d-flex gap-3">
              <p className="m-0">Brand</p>
              <p className="m-0 text-secondary">{singleData?.Brand}</p>
            </div>
            <div className="d-flex gap-3">
              <p className="m-0">Price</p>
              <p className="m-0 text-secondary">₹ {singleData?.Price}</p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <p className="m-0">Rating</p>
              <div className="yellow-bg d-flex gap-1 py-1 px-2">
                <span className="orange-text">{singleData?.Rating}</span>
                <span className="orange-text">
                  <i className="fa-solid fa-star"></i>
                </span>
              </div>
            </div>
            <div className="">
              <p className="m-0 text-secondary text-ellipsis">
                {singleData?.Description}
              </p>
            </div>
            <div className="d-flex gap-4">
              {isAvailableToCart ? (
                <NavLink
                  to={"/addtocart"}
                  className="border-0 py-1 px-3 maroon-bg text-light"
                >
                  GoToCart
                </NavLink>
              ) : (
                <button
                  className="border-0 py-1 px-3 maroon-bg text-light"
                  onClick={handlAddToCart}
                >
                  AddToCart
                </button>
              )}
              <button className="border-0 py-1 px-3 dark-orange-bg text-light">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <ProductList
            title={"You will also like these product's"}
            productJson={suggestedProduct}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
