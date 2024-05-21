import React from 'react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/2">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600">&times;</button>
        <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-700 mb-4">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
