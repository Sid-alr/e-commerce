import React, { useContext } from "react";
import Layout from "./Layout";
import { productContext } from "../App";

const AddToCart = () => {
  const { cartProduct, setCartProduct } = useContext(productContext);

  const allPrice = cartProduct?.map(
    (product) => parseInt(product?.Count) * parseInt(product?.Price)
  );

  const totalPrice = allPrice?.reduce((acc, curr) => acc + curr, 0);

  const handlIncrement = (id) => {
    const increasingCount = cartProduct?.map((product) =>
      product?.Id == id ? { ...product, Count: product?.Count + 1 } : product
    );

    setCartProduct(increasingCount);
  };
  const handleDecrement = (id) => {
    const decreasingCount = cartProduct?.map((product) =>
      product?.Id == id
        ? { ...product, Count: product?.Count > 1 ? product?.Count - 1 : 1 }
        : product
    );

    setCartProduct(decreasingCount);
  };

  const handleRemoveProduct = (id) => {
    const notRemovedData = cartProduct?.filter((product)=> product?.Id != id);
    setCartProduct(notRemovedData);
  };

  return (
    <Layout>
      <div className="container-fluid min-heihgt-90 mt-4">
        <div className="row row-gap-3">
          <div className="col-12 col-md-8">
            <div className="row row-gap-3">
              {cartProduct?.map((product) => {
                return (
                  <div className="col-12" key={product?.Id}>
                    <div className="w-100 border d-flex gap-3">
                      {/* image area */}
                      <div className="d-flex flex-column gap-1 p-2 ">
                        <div className="cart-img product-card-bg  p-1">
                          <img
                            src={product?.Image[0]}
                            alt={product?.Name}
                            className="h-100 w-100 rounded fit-content"
                          />
                        </div>
                        <div className="w-100 d-flex justify-content-between px-2">
                          <button
                            className="border inc-dec-button"
                            onClick={() => handleDecrement(product?.Id)}
                          >
                            -
                          </button>
                          <p className="m-0 border product-count">
                            {product?.Count}
                          </p>
                          <button
                            className="border inc-dec-button"
                            onClick={() => handlIncrement(product?.Id)}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* details area */}
                      <div className="py-2">
                        <h6 className="m-0 text-ellipsis">{product?.Heading}</h6>
                        <div className="d-flex flex-column mt-2 gap-1">
                          <span>{product?.Name}</span>
                          <span>{product?.Brand}</span>
                          <span>
                            ₹{product?.Price}{" "}
                            <span className="text-success">20% Off</span>
                          </span>
                          <span>{product?.Category}</span>
                        </div>
                        <p
                          className="m-0 mt-1 text-danger cursor-pointer d-inline font-bold"
                          onClick={() => handleRemoveProduct(product?.Id)}
                        >
                          REMOVE
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card price-details-sticky">
              <div className="card-header">Price Detail's</div>
              <div className="card-body">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Price ({cartProduct.length} Item's)</p>
                    <p className="m-0"> ₹ {totalPrice}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Discount</p>
                    <p className="m-0"> ₹ - {cartProduct.length * 49}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="m-0">Delivery Charge</p>
                    <p className="m-0">
                      <span className="text-secondary text-decoration-line-through">
                        ₹ {cartProduct.length * 20}
                      </span>
                      <span className="text-success">Free</span>
                    </p>
                  </div>

                  <div className="py-3 d-flex justify-content-between border-top border-bottom">
                    <p className="m-0 font-bold">Total Amount</p>
                    <p className="m-0 font-bold"> ₹ {totalPrice}</p>
                  </div>
                  <div>
                    <p className="text-success">
                      You will save ₹ {cartProduct.length * 49} rupees on this
                      order
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddToCart;
