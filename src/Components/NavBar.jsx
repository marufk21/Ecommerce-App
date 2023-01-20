import React from 'react'
import { Navbar } from 'flowbite-react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true} className="sticky top-0 z-10">
        <Navbar.Brand href="/">
          {/* Logo */}
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Ecommerce Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            ShopKart
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {/* Buttton */}
          {/* <Button className=" text-white bg-purple-700">Get started</Button> */}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <li>
            <NavLink
              to="/"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Contact
            </NavLink>
          </li>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
