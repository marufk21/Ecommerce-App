import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-white  dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <NavLink to="" className="flex items-center">
            <img src="" className="h-8 mr-3" alt="" />
            <span className="border-slate-600 self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              ElectriKart
            </span>
          </NavLink>
          <div className="flex items-center">
            <a
              href="/cart"
              className="text-xl font-semibold text-purple-500 dark:text-blue-500 hover:underline"
            >
              My Cart
            </a>
          </div>
        </div>
      </nav>
      <hr />
      <nav className=" dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 flex justify-center mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default NavBar;
