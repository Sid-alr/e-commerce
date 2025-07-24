import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gadgets from "./pages/Gadgets";
import Fashion from "./pages/Fashion";
import SingleProduct from "./component/SingleProduct";
import AddToCart from "./component/AddToCart";
import { createContext } from "react";

const productContext = createContext();

const App = () => {
  const [cartProduct, setCartProduct] = useState([]);

  return (
    <productContext.Provider value={{ cartProduct, setCartProduct }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gadgets" element={<Gadgets />}></Route>
          <Route path="/fashion" element={<Fashion />}></Route>
          <Route
            path={`/single-product/:id`}
            element={<SingleProduct />}
          ></Route>
          <Route path="/addtocart" element={<AddToCart />}></Route>
        </Routes>
      </Router>
    </productContext.Provider>
  );
};

export default App;
export {productContext}