import React from "react";
import Layout from "../components/Layout";
import Products from "../components/Products";
import Brands from "../components/Brands";
import Banners from "../components/Banners";

function Home() {
  return (
    <Layout>
      <Banners />
      <Products />
      <Brands />
    </Layout>
  );
}

export default Home;
