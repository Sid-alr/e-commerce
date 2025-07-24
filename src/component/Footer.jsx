import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid mt-4 footer-style">
      <div className="row px-3 h-100 gap-3 gap-sm-0 align-items-center py-4">
        <div className="col-sm-4  h-100 d-flex justify-content-center align-items-center">
          <h1 className="m-0 text-white">Logo</h1>
        </div>
        <div className="col-sm-4 h-100 d-flex justify-content-center align-items-center">
          <p className="m-0 text-light">
            All right reserve by me <i className="fa-solid fa-copyright"></i>
          </p>
        </div>
        <div className="col-sm-4 p-0 d-flex gap-5 justify-content-center align-items-center h-100">
          <div>
            <i className="fa-brands fa-instagram fs-2 cursor-pointer icon-hover"></i>
          </div>
          <div>
            <i className="fa-brands fa-square-youtube fs-2 cursor-pointer icon-hover"></i>
          </div>
          <div>
            <i className="fa-brands fa-square-facebook fs-2 cursor-pointer icon-hover-1"></i>
          </div>
          <div>
            <i className="fa-brands fa-square-twitter fs-2 cursor-pointer icon-hover-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
