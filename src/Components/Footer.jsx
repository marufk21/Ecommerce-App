import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Company</h3>
            <ul className="text-gray-500">
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
            <ul className="text-gray-500">
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Mobiles
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Laptops
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Headphones
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Mobile Cases
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Support</h3>
            <ul className="text-gray-500">
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Shipping &amp; Returns
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Connect With Us
            </h3>
            <ul className="flex items-center text-gray-500">
              <li className="mr-4">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="mr-4">
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  <FaYoutube />
                </a>
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
