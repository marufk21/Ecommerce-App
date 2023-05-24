import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex  flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Company</h3>
            <ul className="text-gray-500">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Careers</li>
              <li className="mb-2">Terms of Service</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
            <ul className="text-gray-500">
              <li className="mb-2">Mobiles</li>
              <li className="mb-2">Laptops</li>
              <li className="mb-2">Headphones</li>
              <li className="mb-2">Mobile Cases</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
            <ul className="text-gray-500">
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Shipping &amp; Returns</li>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Sitemap</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Connect With Us
            </h3>
            <ul className="flex items-center text-gray-500">
              <li className="mr-4">
                <FaTwitter />
              </li>
              <li className="mr-4">
                <FaFacebook />
              </li>
              <li className="mr-4">
                <FaInstagram />
              </li>
              <li className="mr-4">
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} ElectriKart.com All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
