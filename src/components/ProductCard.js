import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const discountedPrice =
    product.price - product.price * (product.discountPercentage / 100);

  return (
    <>
      <div className="relative border bg-gray-200 rounded-lg overflow-hidden group">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="absolute h-[200px] inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
          <button
            onClick={() => handleModalOpen(product)}
            className="text-gray-700 hover:text-yuddyOrange text-3xl"
          >
            <FaSearch />
          </button>
        </div>
        <div className="absolute top-2 left-2 bg-yuddyOrange text-white px-2 py-1 text-xs font-bold">
          NEW PRODUCT
        </div>
        <div className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 text-xs font-bold">
          ON SALE!
        </div>
        <div className="absolute top-10 right-2 bg-black text-white px-2 py-1 text-xs font-bold">
          -{product.discountPercentage}%
        </div>
        <div className="p-4 ">
          <h3 className="text-base text-center font-bold uppercase overflow-hidden text-ellipsis whitespace-nowrap hover:whitespace-normal hover:overflow-visible">
            {product.title}
          </h3>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-gray-500 line-through">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-red-500">${discountedPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-center">
            <button className=" bg-black text-white py-2 px-4 mt-4 w-3/4 rounded-md ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default ProductCard;
