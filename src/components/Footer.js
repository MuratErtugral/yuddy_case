import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 xxl:px-40  py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
        <div className="flex gap-2 items-center">
              <img
                src="/logo.png"
                alt="Yuddy Logo"
                className="h-16"
              />
              <h1 className="text-4xl font-semibold font-cursive">
                Yuddy Shop
              </h1>
            </div>
          <p>15 Main Rd E, St Albans VIC 1234, Australia</p>
          <p>Email: info@domain.com</p>
          <p>Phone: +1 234-456-7890</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">PRODUCTS</h3>
          <ul>
            <li><a href="/" className="hover:underline">Prices drop</a></li>
            <li><a href="/" className="hover:underline">New products</a></li>
            <li><a href="/" className="hover:underline">Best sales</a></li>
            <li><a href="/" className="hover:underline">Stores</a></li>
            <li><a href="/" className="hover:underline">My account</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">OUR COMPANY</h3>
          <ul>
            <li><a href="/" className="hover:underline">Delivery</a></li>
            <li><a href="/" className="hover:underline">Legal Notice</a></li>
            <li><a href="/" className="hover:underline">About us</a></li>
            <li><a href="/" className="hover:underline">Secure payment</a></li>
            <li><a href="/" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">GET IN TOUCH</h3>
          <p>Subscribe to our newsletter to get exclusive discounts</p>
          <input type="email" placeholder="Your email address" className="p-2 rounded mb-2 w-full text-black" />
          <button className="bg-yuddyOrange text-white py-2 px-4 rounded w-full">Subscribe</button>
          <p className="mt-2 text-xs">You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
        </div>
      </div>
      <div className="text-center mt-8">
        © 2024 - Ecommerce software - by Murat ERTUĞRAL
      </div>
    </footer>
  );
};

export default Footer;
