import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { CartProvider } from "./Context/CartContext";
import { ProductState } from "./Context/ProductState";
import { FilterContextProvider } from "./Context/FilterContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ProductState>
          <FilterContextProvider>
            <CartProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleproduct/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              <Footer />
            </CartProvider>
          </FilterContextProvider>
        </ProductState>
      </BrowserRouter>
    </>
  );
};

export default App;
