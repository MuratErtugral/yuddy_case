import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../features/carts/cartSlice";
import Layout from "../components/Layout";
import Products from "../components/Products";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountPrice * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-2 text-center mt-4">Shopping Cart</h1>
      <div className="h-1 w-40 flex items-center justify-center text-center mx-auto bg-orange-500 mb-6"></div>
      <div className="flex flex-col md:flex-row justify-between mx-4 xxl:mx-40">
        <div className="flex-1">
          {cartItems.length === 0 ? (
            <div className="text-center text-2xl">
              <p>There are no more items in your cart.</p>
              <Link to="/" className="text-blue-500 hover:underline">
                Continue shopping
              </Link>
            </div>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-4"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-xl">{item.title}</h2>
                    <p className="text-gray-600">
                      ${item.discountPrice} x {item.quantity}
                    </p>
                    <div className="flex items-center">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                    {item.quantity <= 0 && (
                      <p className="text-red-500 text-sm">
                        Item will be removed
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">
                      ${(item.discountPrice * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="md:w-1/3 md:ml-4">
            <div className="border p-4 rounded-md">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Total (excl. taxes)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Products />
    </Layout>
  );
};

export default Cart;
