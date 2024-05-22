import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartModal from "./CartModal";
import { FaArrowUp } from "react-icons/fa";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener to toggle visibility of the button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen relative">
      <Header />
      <CartModal />
      <main className="flex-grow">{children}</main>
      <Footer />
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 bg-yuddyOrange text-white p-2 rounded-full shadow-lg transition duration-700 ease-in-out transform hover:scale-110 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <FaArrowUp className="text-xl" />
        <span className="sr-only">Top</span>
      </button>
    </div>
  );
};

export default Layout;
