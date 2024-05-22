import React from "react";
import Layout from "../components/Layout";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <Layout>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Get in Touch
          </h2>
          <div className="flex flex-col lg:flex-row bg-white shadow rounded-lg overflow-hidden">
            <div className="lg:w-1/2 p-6 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                We would love to hear from you! Whether you have a question about
                our products, pricing, need a demo, or anything else, our team is
                ready to answer all your questions.
              </p>
              <div className="flex items-center mb-4">
                <FaPhone className="text-yuddyOrange mr-3" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-yuddyOrange mr-3" />
                <span>info@yourdomain.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-yuddyOrange mr-3" />
                <span>1234 Street Name, City, Country</span>
              </div>
            </div>
            <div className="lg:w-1/2 p-6 lg:p-12 bg-gray-50">
              <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yuddyOrange focus:ring focus:ring-yuddyOrange focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yuddyOrange focus:ring focus:ring-yuddyOrange focus:ring-opacity-50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yuddyOrange focus:ring focus:ring-yuddyOrange focus:ring-opacity-50"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-yuddyOrange text-white px-4 py-2 rounded-md hover:bg-darkYuddyOrange transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
