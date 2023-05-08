import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-2">
            Rest assured that you're buying quality electronics from a trusted source.
            </p>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex items-center">
              <a href="#" className="mr-4">
                <FaFacebook />
              </a>
              <a href="#" className="mr-4">
                <FaTwitter />
              </a>
              <a href="#" className="mr-4">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4">
            <h3 className="text-xl font-bold mb-4">Join Our Newsletter</h3>
            <form className="flex flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 rounded-l-md bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded-r-md text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-4 flex justify-between">
          <p>&copy; 2023 Ecommerce Store. All Rights Reserved.</p>
          <ul>
            <li className="inline-block ml-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="inline-block ml-4">
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
