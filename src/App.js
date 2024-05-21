import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Banners from "./components/Banners";
import Products from "./components/Products";

function App() {
  return (
    <Layout>
      <Header />
      <Banners />
      <Products />
    </Layout>
  );
}

export default App;
