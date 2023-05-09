import { FaShieldAlt } from "react-icons/fa";

function Trusted() {
  return (
    <div className="bg-gray-100 py-24 mb-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Trusted by top electronics brands
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl text-blue-500">
                <FaShieldAlt />
              </span>
              <span className="ml-4 font-bold text-lg">Apple</span>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl text-blue-500">
                <FaShieldAlt />
              </span>
              <span className="ml-4 font-bold text-lg">Samsung</span>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl text-blue-500">
                <FaShieldAlt />
              </span>
              <span className="ml-4 font-bold text-lg">Sony</span>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl text-blue-500">
                <FaShieldAlt />
              </span>
              <span className="ml-4 font-bold text-lg">Xiaomi</span>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl text-blue-500">
                <FaShieldAlt />
              </span>
              <span className="ml-4 font-bold text-lg">Motorola</span>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/4 md:w-1/5 lg:w-1/6 p-4">
            <div className="flex items-center justify-center">
              <span className="text-4xl text-blue-500">
                <FaShieldAlt />
              </span>
              <span className="ml-4 font-bold text-lg">LG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
