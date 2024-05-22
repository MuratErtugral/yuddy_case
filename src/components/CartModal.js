import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { closeModal } from "../features/carts/cartSlice";

const CartModal = () => {
  const dispatch = useDispatch();
  const { isOpen, product, discountPrice, quantity } = useSelector(
    (state) => state.cart.modal
  );
  const cartItems = useSelector((state) => state.cart.cart);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/2">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-4 right-4 text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">
          Product successfully added to your shopping cart
        </h2>
        <div className="flex justify-between items-center border-b py-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-20 h-20 object-cover"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-xl">{product.title}</h2>
            <p className="text-gray-600">
              ${discountPrice} x {quantity}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-right font-bold">
            Total: ${totalPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <Link
            to="/"
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
            onClick={() => dispatch(closeModal())}
          >
            Continue Shopping
          </Link>
          <Link
            to="/cart"
            className="bg-green-500 text-white py-2 px-4 rounded-md"
            onClick={() => dispatch(closeModal())}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
