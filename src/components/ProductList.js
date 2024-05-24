import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FaSpinner } from "react-icons/fa"; 

const ProductList = ({ products, title }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortOrder, setSortOrder] = useState("relevance");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 


  useEffect(() => {
    setFilteredProducts(products);
    const uniqueBrands = [...new Set(products.map(product => product.brand))];
    setBrands(uniqueBrands);
    setIsLoading(false); 
  }, [products]);

  useEffect(() => {
    filterProducts();
  }, [selectedBrands, priceRange, sortOrder])

  const handleBrandChange = (brand) => {
    setSelectedBrands(
      selectedBrands.includes(brand)
        ? selectedBrands.filter((b) => b !== brand)
        : [...selectedBrands, brand]
    );
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filterProducts = () => {
    let filtered = products.filter(
      (product) =>
        (!selectedBrands.length || selectedBrands.includes(product.brand)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
    );

    if (sortOrder === "price_low_high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price_high_low") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "name_a_z") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "name_z_a") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(filtered);
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 2000]);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen text-yuddyOrange">
        <FaSpinner className="text-6xl animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row mt-4 gap-4">
      <aside className={`w-full lg:w-1/4 p-4 bg-gray-100 ${isFilterVisible ? 'block' : 'hidden lg:block'}`}>
        <h2 className="text-xl font-bold mb-4">Filter By</h2>
        <div>
          <h3 className="font-semibold mb-2">Brand</h3>
          {brands.map((brand, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`brand-${index}`}
                value={brand}
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <label htmlFor={`brand-${index}`} className="ml-2">
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Price</h3>
          <div className="flex justify-between items-center">
            <span>${priceRange[0]}</span>
            <input
              type="range"
              min="0"
              max="2000"
              step="10"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e.target.value, priceRange[1])}
              className="w-1/2 mx-2"
            />
            <input
              type="range"
              min="0"
              max="2000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(priceRange[0], e.target.value)}
              className="w-1/2 mx-2"
            />
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </aside>
      <div className="w-full lg:w-3/4 p-4">
        <h1 className="flex lg:hidden text-2xl lg:text-4xl font-bold capitalize">{title}</h1>
        <div className="flex justify-between items-center mb-4">
          <h1 className="hidden lg:flex text-2xl lg:text-4xl font-bold capitalize">{title}</h1>
          <button
            className="lg:hidden border p-2 rounded"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
          </button>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border p-2 rounded ml-4"
          >
            <option value="relevance">Relevance</option>
            <option value="name_a_z">Name, A to Z</option>
            <option value="name_z_a">Name, Z to A</option>
            <option value="price_low_high">Price, low to high</option>
            <option value="price_high_low">Price, high to low</option>
          </select>
        </div>
        {filteredProducts.length !== products.length && (
          <div className="flex justify-between items-center mb-4">
            <div>
              {filteredProducts.length > 0 ? `Showing ${filteredProducts.length} of ${products.length} item(s)` : 'No products found'}
            </div>
            <button
              className="text-sm text-red-500"
              onClick={clearFilters}
            >
              Clear All Filters
            </button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
