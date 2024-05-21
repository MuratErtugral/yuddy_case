import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/carts/cartSlice";
import { MdErrorOutline } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

const ProductModal = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || "");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setQuantity(1);
    }
  }, [product]);

  const handleAddToCart = () => {
    const productToCart = {
      ...product,
      quantity,
      discountPrice: (
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2),
    };
    dispatch(addToCart(productToCart));
    onClose();
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-2xl"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:w-1/2">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={product?.title}
                className="w-full h-72 object-fit mb-4"
              />
            ) : (
              <div className="w-full h-72 flex text-yuddyOrange items-center justify-center mb-4">
                <FaSpinner className="text-4xl animate-spin" />
              </div>
            )}
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`h-20 w-20 cursor-pointer ${
                    selectedImage === image ? "border-2 border-orange-500" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          <div className="md:ml-4 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <div className="flex items-center mb-4">
              <span className="text-gray-600 line-through mr-2">
                ${product.price}
              </span>
              <span className="text-orange-600 font-bold">
                $
                {(
                  product.price -
                  (product.price * product.discountPercentage) / 100
                ).toFixed(2)}
              </span>
              <span className="text-red-500 ml-2">
                SAVE {product.discountPercentage}%
              </span>
            </div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <ul className="list-disc list-inside mb-4">
              <li>Ut enim ad minima veniam, quis nostrum exercitationem.</li>
              <li>Nisi ut aliquid ex ea commodi consequatur.</li>
              <li>
                Quis autem vel eum iure reprehenderit qui in ea voluptate.
              </li>
              <li>Velit esse quam nihil molestiae consequatur, vel illum.</li>
              <li>Dolorem eum fugiat quo voluptas nulla pariatur.</li>
            </ul>
            <div className="flex items-center mb-4">
              <span className="mr-2">Quantity:</span>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.min(product.stock, Math.max(1, Number(e.target.value)))
                  )
                }
                className="border px-2 py-1 w-16 text-center"
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded w-full mb-2"
            >
              Add to Cart
            </button>
            {product.stock <= 10 && (
              <div className="text-red-500 flex items-center">
                <MdErrorOutline className="mr-2" />
                Last {product?.stock} {product?.stock > 1 ? "items" : "item"} in
                stock
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
