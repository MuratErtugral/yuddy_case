import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Banners from "./components/Banners";

function App() {
  return (
    <Layout>
      <Header />
      <Banners />
    </Layout>
  );
}

export default App;
