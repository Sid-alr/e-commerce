import React, { useState } from "react";
import Layout from "../component/Layout";
import CarouselView from "../component/Carousel";
import Category from "../component/Category";
import Trending from "../component/Trending";
import ProductList from "../component/ProductList";
import { products } from "../data_json";

const Home = () => {
  const fashionProduct = products?.filter(
    (product) => product?.Type?.toLowerCase() == "fashion"
  );
  const gadgetsProduct = products?.filter(
    (product) => product?.Type?.toLowerCase() == "electronics"
  );

  return (
    <Layout>
      <CarouselView />
      <Category />
      <Trending />
      <ProductList
        productJson={fashionProduct}
        title={"Listing Fashion Product's"}
      />
      <ProductList
        productJson={gadgetsProduct}
        title={"Listing Gadget Product's"}
      />
    </Layout>
  );
};

export default Home;
