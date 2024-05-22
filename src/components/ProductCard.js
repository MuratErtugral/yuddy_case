import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";
import { addToCart } from "../features/carts/cartSlice";

const ProductCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleModalOpen = (product, e) => {
    e.preventDefault();
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
  };

  return (
    <>
      <Link
        to={`/product/${product.id}`}
        className="relative border bg-gray-200 rounded-lg overflow-hidden group"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
        />
        {!isInCart && (
          <div className="absolute inset-0 top-32 mx-auto flex  h-fit w-fit justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => handleModalOpen(product, e)}
              className="text-gray-700 hover:text-yuddyOrange text-3xl"
            >
              <FaSearch />
            </button>
          </div>
        )}
        <div className="absolute top-2 left-2 bg-yuddyOrange text-white px-2 py-1 text-xs font-bold">
          NEW PRODUCT
        </div>
        <div className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 text-xs font-bold">
          ON SALE!
        </div>
        <div className="absolute top-10 right-2 bg-black text-white px-2 py-1 text-xs font-bold">
          -{product.discountPercentage}%
        </div>
        <div className="p-4">
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
            {isInCart ? (
              <Link
                to="/cart"
                className="bg-darkYuddyOrange hover:bg-yuddyOrange transition duration-300 ease-in-out text-white py-2 px-4 mt-4 w-3/4 rounded-md text-center"
              >
                GO TO CART
              </Link>
            ) : (
              <button
                onClick={handleAddToCart}
                className="bg-black hover:bg-yuddyOrange transition duration-300 ease-in-out text-white py-2 px-4 mt-4 w-3/4 rounded-md"
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </Link>
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </>
  );
};

export default ProductCard;
