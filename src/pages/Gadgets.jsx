import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import { products } from "../data_json";
import { NavLink } from "react-router-dom";

const Gadgets = () => {
  const [filterProduct, setFilterProduct] = useState([]);
  const [filterPrice, setFilterPrice] = useState("All");
  const [listProduct, setListProduct] = useState([]);

  const gadgetsProduct = products?.filter(
    (product) => product?.Type == "Electronics" && product
  );

  const handleProductFilterChange = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setFilterProduct([...filterProduct, value]);
    }

    if (!checked) {
      const filtering = filterProduct?.filter((prod) => prod != value);
      setFilterProduct(filtering);
    }
  };

  const handlePriceFilterChange = (e) => {
    const { checked, value } = e.target;

    if (checked && value == "All") {
      setFilterPrice("All");
    }

    if (checked && value != "All") {
      setFilterPrice(value);
    }
  };

  const [min, max] = filterPrice.split("-");

  useEffect(() => {
    const filteredProduct = gadgetsProduct?.filter((product) => {
      if (filterProduct?.length == 0) {
        return product;
      }

      if (filterProduct?.length > 0) {
        return filterProduct?.includes(product?.Category) && product;
      }
    });

    if (filterProduct?.length == 0) {
      const filterByOnlyPrice = gadgetsProduct?.filter((product) => {
        if (filterPrice == "All") {
          return product;
        }

        if (filterPrice != "All") {
          return product?.Price > min && product?.Price < max && product;
        }
      });

      setListProduct(filterByOnlyPrice);
    }

    if (filterProduct.length > 0) {
      const filterByPriceWithProduct = filteredProduct?.filter((product) => {
        if (filterPrice == "All") {
          return product;
        }

        if (filterPrice != "All") {
          return product?.Price > min && product?.Price < max && product;
        }
      });
      setListProduct(filterByPriceWithProduct);
    }
  }, [filterProduct, filterPrice]);

  return (
    <Layout>
      <div className="container-fluid mt-2">
        <div className="row height-90vh px-3 overflow-y-scroll remove-scroll">
          <div className="col-lg-2 col-md-3 d-none d-md-block box-shadow">
            <div className="row">
              <div className="col-12 bg-secondary py-2">
                <p className="m-0 text-center text-light fs-4">
                  Filter Product
                </p>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="checkbox"
                  className="checkbox-style"
                  id="airdopes"
                  value="Airdopes"
                  onChange={handleProductFilterChange}
                />
                <label htmlFor="airdopes" className="m-0 text-secondary fs-5">
                  Airdopes
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="checkbox"
                  className="checkbox-style"
                  id="headphone"
                  value="Headphones"
                  onChange={handleProductFilterChange}
                />
                <label htmlFor="headphone" className="m-0 text-secondary fs-5">
                  Headphone
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="checkbox"
                  className="checkbox-style"
                  id="watch"
                  value="Watch"
                  onChange={handleProductFilterChange}
                />
                <label htmlFor="watch" className="m-0 text-secondary fs-5">
                  Watch
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="checkbox"
                  className="checkbox-style"
                  id="mobile"
                  value="Mobile"
                  onChange={handleProductFilterChange}
                />
                <label htmlFor="mobile" className="m-0 text-secondary fs-5">
                  Mobile
                </label>
              </div>

              <div className="col-12 bg-secondary py-2 mt-3">
                <p className="m-0 text-center text-light fs-4">Filter Price</p>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  className="checkbox-style"
                  id="all"
                  name="price_filter"
                  value={"All"}
                  onChange={handlePriceFilterChange}
                  defaultChecked
                />
                <label htmlFor="all" className="m-0 text-secondary fs-5">
                  All
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  className="checkbox-style"
                  id="1T2"
                  name="price_filter"
                  value={"1000-2000"}
                  onChange={handlePriceFilterChange}
                />
                <label htmlFor="1T2" className="m-0 text-secondary fs-5">
                  1000 - 2000
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  className="checkbox-style"
                  id="2T5"
                  name="price_filter"
                  value={"2000-5000"}
                  onChange={handlePriceFilterChange}
                />
                <label htmlFor="2T5" className="m-0 text-secondary fs-5">
                  2000 - 5000
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  className="checkbox-style"
                  id="5T10"
                  name="price_filter"
                  value={"5000-10000"}
                  onChange={handlePriceFilterChange}
                />
                <label htmlFor="5T10" className="m-0 text-secondary fs-5">
                  5000 - 10000
                </label>
              </div>
              <div className="col-12 d-flex gap-3 align-items-center mt-3">
                <input
                  type="radio"
                  className="checkbox-style"
                  id="10T20"
                  name="price_filter"
                  value={"10000-20000"}
                  onChange={handlePriceFilterChange}
                />
                <label htmlFor="10T20" className="m-0 text-secondary fs-5">
                  10000 - 20000
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-10 col-md-9">
            <div className="row row-gap-2">
              {listProduct.length > 0 ? (
                listProduct?.map((product, ind) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3" key={product?.Id}>
                      <NavLink to={`/single-product/${product?.Id}`} className="text-decoration-none">
                        <div>
                          <div className="w-100 d-flex justify-content-center product-card-bg p-1">
                            <img
                              src={product?.Image[0]}
                              alt={product?.Name}
                              className="card-img fit-content"
                            />
                          </div>
                          <div className="py-2 d-flex flex-column gap-2">
                            <div>
                              <i className="fa-solid fa-star text-warning fs-5"></i>
                              <i className="fa-solid fa-star text-warning fs-5"></i>
                              <i className="fa-solid fa-star text-warning fs-5"></i>
                              <i className="fa-solid fa-star text-warning fs-5"></i>
                            </div>
                            <p className="text-secondary font-bold m-0 text-flow-2">
                              {product?.Heading}
                            </p>
                            <div className="d-flex gap-3 ">
                              <p className="font-bold m-0 fs-5 text-center text-secondary text-decoration-line-through">
                                ₹ {product?.Price + 99}
                              </p>
                              <p className="font-bold m-0 fs-5 text-center text-danger">
                                ₹{product?.Price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })
              ) : (
                <h1 className="text-secondary text-center mt-4">
                  Produc's Doesn't Matched
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gadgets;
