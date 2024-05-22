import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";
import { useLocation, Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    setIsLoading(true); // Set loading to true when query changes
    axios
      .get(`https://dummyjson.com/products/search?q=${query}`)
      .then((response) => {
        setProducts(response.data.products);
        setIsLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false); // Set loading to false on error
      });
  }, [query]);

  return (
    <Layout>
      <div className="mx-4 xxl:mx-40">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-screen text-yuddyOrange">
            <FaSpinner className="text-6xl animate-spin" />
          </div>
        ) : products.length > 0 ? (
          <ProductList
            products={products}
            title={`Search Results for "${query}"`}
          />
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">
              No results found for "{query}"
            </h2>
            <p className="text-gray-600 mb-8">
              We're sorry, but we couldn't find any products that match your
              search query.
            </p>
            <Link
              to="/"
              className="bg-yuddyOrange text-white py-2 px-4 rounded"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
