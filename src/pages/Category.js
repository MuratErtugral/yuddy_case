import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <Layout>
      <div className="mx-4 xxl:mx-40">
        <ProductList products={products} title={category} />
      </div>
    </Layout>
  );
};

export default Category;
