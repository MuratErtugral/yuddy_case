// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-center text-white">
      <h1 className="text-9xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">Oops! Page Not Found</p>
      <Link
        to="/"
        className="bg-yuddyOrange text-white text-lg px-4 py-2 rounded-md hover:bg-darkYuddyOrange transition duration-300 ease-in-out"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
