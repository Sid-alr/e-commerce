import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { productContext } from "../App";

const Header = () => {

  const { cartProduct, setCartProduct } = useContext(productContext);

  return (
    <div className="container-fluid shadow price-details">
      <div className="row justify-content-between py-2 px-3 header-style align-items-center">
        <div className="col-2 p-0">
          <h4 className="m-0 mobile-text text-white">Logo</h4>
        </div>
        <div className="col-10 d-none d-sm-flex justify-content-between p-0">
          <ul className="d-flex gap-5 m-0">
            <NavLink
              to="/"
              className="list-unstyled fs-5 text-decoration-none text-white"
            >
              HOME
            </NavLink>
            <NavLink
              to="/gadgets"
              className="list-unstyled fs-5 text-decoration-none text-white"
            >
              GADGETS
            </NavLink>
            <NavLink
              to="/fashion"
              className="list-unstyled fs-5 text-decoration-none text-white"
            >
              FASHION
            </NavLink>
          </ul>
          <div className="d-flex gap-3">
            <div>
              <i className="fa-solid fa-heart fs-3 maroon-color"></i>
            </div>
            <div className="position-relative">
              <NavLink to={"/addtocart"}>
                <i className="fa-solid fa-cart-shopping fs-3 text-white"></i>
              </NavLink>
              <div className="cart-length">
                <span className="text-light">{cartProduct.length}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 d-block d-sm-none p-0">
          <i className="fa-solid fa-bars mobile-text"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
