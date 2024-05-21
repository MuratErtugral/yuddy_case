import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response?.data?.products);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);


  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col mx-auto xl:mx-40 p-6">
      <h2 className="text-4xl text-center font-bold mb-2">Popular Products</h2>
      <div className='h-1 w-40 flex items-center justify-center text-center mx-auto bg-yuddyOrange mb-6 '></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onModalOpen={handleModalOpen} />
        ))}
      </div>
      <ProductModal product={selectedProduct} isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default Products;
