import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaFacebook,
  FaPinterest,
  FaSpinner,
  FaTwitter,
  FaStar,
  FaCommentDots,
} from "react-icons/fa";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/carts/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const commentsRef = useRef(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.thumbnail);
      })
      .catch((error) => console.error("Error fetching product:", error));

    axios
      .get(`https://dummyjson.com/comments/post/${id}`)
      .then((response) => {
        setComments(response.data.comments);
      })
      .catch((error) => console.error("Error fetching comments:", error));
  }, [id]);

  if (!product)
    return (
      <div className="w-full h-72 flex text-yuddyOrange items-center justify-center mb-4">
        <FaSpinner className="text-4xl animate-spin" />
      </div>
    );

  const discountedPrice = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const handleAddToCart = () => {
    const productToCart = {
      ...product,
      quantity,
    };
    dispatch(addToCart(productToCart));
  };

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleCommentIconClick = () => {
    setActiveTab("comments");
    setTimeout(() => {
      if (commentsRef.current) {
        commentsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); 
  };

  return (
    <Layout>
      <div className="mx-4 xxl:mx-40">
        <div className="flex flex-col lg:flex-row mt-4 gap-8">
          <div className=" w-full lg:w-1/2">
            <div className="relative">
              <img
                src={selectedImage}
                alt={product.title}
                className="w-full object-contain h-auto max-h-[500px] "
              />
            </div>
            <div className="flex space-x-2 mt-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className={`h-20 w-20 object-fit cursor-pointer ${
                    selectedImage === image ? "border-2 border-orange-500" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-500 text-sm line-through">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex justify-between items-center">
              <p className="text-xl text-red-500">
                ${discountedPrice}{" "}
                <span className="ml-2 text-sm bg-yuddyOrange text-white p-1 rounded">
                  SAVE {product.discountPercentage}%
                </span>
              </p>
              <div className="flex items-center mt-4">
                <p className="text-yellow-500 flex items-center">
                  <span className="mr-2">
                    <FaStar />
                  </span>{" "}
                  {product.rating}
                </p>
                <button
                  onClick={handleCommentIconClick}
                  className="ml-4 text-gray-600 flex items-center"
                >
                  <span className="mr-2">
                    <FaCommentDots />
                  </span>{" "}
                  {comments.length}
                </button>
              </div>
            </div>
            <p className="mt-4">{product.description}</p>
            <div className="mt-4">
              <label htmlFor="quantity" className="block">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                defaultValue="1"
                min="1"
                className="border rounded-md p-2 w-16"
                onChange={(e) =>
                  setQuantity(
                    Math.min(product.stock, Math.max(1, Number(e.target.value)))
                  )
                }
              />
              <button
                onClick={handleAddToCart}
                disabled={isInCart}
                className={`${
                  isInCart ? "bg-gray-400" : "bg-yuddyOrange"
                } text-white py-2 px-4 rounded-md ml-4`}
              >
                {isInCart ? "IN YOUR CART" : "ADD TO CART"}
              </button>
            </div>
            {product.stock < 10 && (
              <p className="mt-4 text-red-500">Last items in stock!</p>
            )}

            <div className="flex space-x-4 mt-6">
              <a
                href="/"
                className="border border-gray-400 rounded-sm p-2 text-gray-600 hover:text-blue-500"
              >
                <FaFacebook size="2em" />
              </a>
              <a
                href="/"
                className="border border-gray-400 rounded-sm p-2 text-gray-600 hover:text-blue-500"
              >
                <FaTwitter size="2em" />
              </a>
              <a
                href="/"
                className="border border-gray-400 rounded-sm p-2 text-gray-600 hover:text-blue-500"
              >
                <FaPinterest size="2em" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex space-x-8 border-b">
            <button
              className={`py-2 px-4 ${
                activeTab === "description"
                  ? "border-b-2 text-lg border-yuddyOrange"
                  : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === "comments"
                  ? "border-b-2 text-lg border-yuddyOrange"
                  : ""
              }`}
              onClick={() => setActiveTab("comments")}
            >
              Comments
            </button>
          </div>
          <div className="mt-4 mb-8">
            {activeTab === "description" && (
              <div>
                <p>{product.description}</p>
                <p>{product.description}</p>
              </div>
            )}
            {activeTab === "comments" && (
              <div ref={commentsRef}>
                {comments.map((comment, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-bold">{comment.user?.username}</p>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
