import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Banners from "./components/Banners";
import Products from "./components/Products";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <Banners />
      <Products />
      <Brands />
      <Footer />
    </Layout>
  );
}

export default App;
