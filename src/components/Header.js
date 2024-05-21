import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaRegUser,
  FaSearch,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }, []);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <header>
      <div className="bg-white ">
        <div className=" flex  xxl:mx-40  justify-between items-center p-4">
          <div className="flex items-center">
            <button className="lg:hidden text-yuddyOrange " onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
            <div className="flex gap-2 items-center">
              <img
                src="https://media.licdn.com/dms/image/D4D0BAQEqMI-jQQeOSQ/company-logo_200_200/0/1714325250068/jjaliri_logo?e=1724284800&v=beta&t=lkMUc8XXCyXXnAYbbTDSNCN22SIeyHSKw2Qt8UTXT4U"
                alt="Shopkart Lite"
                className="h-16"
              />
              <h1 className="text-4xl font-semibold font-cursive">
                Yuddy Shop
              </h1>
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="relative hidden lg:block ">
              <input
                type="text"
                placeholder="Search our catalog"
                className="px-4 py-2 border rounded-md text-black "
              />
              <FaSearch className="absolute right-2 top-3 text-lg text-gray-500" />
            </div>
            <div className=" flex gap-4 ">
              <div className="relative">
                <MdOutlineShoppingCart className="text-2xl cursor-pointer" />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-yuddyOrange rounded-full transform translate-x-1/2 -translate-y-1/2">
                  0
                </span>
              </div>
              <FaRegUser className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden w-full flex items-center justify-center py-4 bg-yuddyGrey ">
        <div className="relative w-11/12 ">
          <input
            type="text"
            placeholder="Search our catalog"
            className="px-4 py-2 w-full border rounded-md text-black "
          />
          <FaSearch className="absolute right-2 top-3 text-lg text-gray-500" />
        </div>
      </div>
      <div className="bg-yuddyOrange e w-full  px-4 xxl:px-44">
        <nav className="container  gap-6 text-base xl:text-lg items-center  hidden lg:flex w-full">
          <a href="/" className="text-white hover:text-black transition-colors duration-300 ease-out " >Home</a>
          {categories.map((category, index) => (
            <div key={index} className="relative group">
              <a
                href="/shop"
                className="flex py-4  text-white hover:text-black transition-colors duration-300 ease-out"
              >
                {category.name}
              </a>
              <div className="absolute left-0  hidden group-hover:flex flex-col bg-white  shadow-lg min-w-full z-10">
                <ul className="grid grid-cols-2 gap-x-6 min-w-96">
                  {category.subcategories.map((subcategory, idx) => (
                    <li key={idx}>
                      <a
                        href={`/category/${subcategory.slug}`}
                        className="block text-black hover:text-yuddyOrange px-4 py-2 whitespace-nowrap"
                      >
                        {subcategory.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <a href="/contact" className="text-white hover:text-black transition-colors duration-300 ease-out ">Contact Us</a>
        </nav>

        {isOpen && (
          <nav className="lg:hidden bg-yuddyOrange p-4">
            <a href="/" className="block py-2 text-white">
              Home
            </a>
            {categories.map((category, index) => (
              <div key={index} className="relative">
                <div
                  onClick={() => toggleCategory(index)}
                  className="flex justify-between items-center py-2 text-white"
                >
                  {category.name}
                  {openCategory === index ? (
                    <FaAngleUp className="ml-2" />
                  ) : (
                    <FaAngleDown className="ml-2" />
                  )}
                </div>
                {openCategory === index && (
                  <div className="">
                    <ul className="flex flex-col gap-x-6 text-white">
                      {category.subcategories.map((subcategory, idx) => (
                        <li key={idx}>
                          <a
                            href={`/category/${subcategory.slug}`}
                            className="block px-4 te py-2 whitespace-nowrap"
                          >
                            {subcategory.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <a href="/contact" className="block py-2 text-white">
              Contact Us
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
