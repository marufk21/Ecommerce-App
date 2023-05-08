import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We offer a variety of services to help make your shopping experience as
            easy and enjoyable as possible.
          </p>
        </div>
        <div className="mt-20">
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-600">
              All orders over 500 Rs qualify for free shipping within the India.
            </p>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-600">
              Not happy with your purchase? No problem! We offer hassle-free returns.
            </p>
          </div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600">
              Our customer support team is available around the clock to help with any
              questions or concerns you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
