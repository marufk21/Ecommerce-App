import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../Context/CartContext";

const AddToCart = ({ price, product }) => {
  const { addToCart } = useCartContext();

  const [color, setColor] = useState(product?.colors?.[0] || "");
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < (product?.stock || 1)
      ? setAmount(amount + 1)
      : setAmount(product?.stock || 1);
  };

  const handleClick = () => {
    if (product?.id) {
      addToCart(product.id, color, amount, product);
    }
  };

  if (!product || !product.id || !product.colors || !product.stock) {
    return null;
  }

  return (
    <>
      <div className="inline">
        {/* Item Colors */}
        <div className="my-3 flex ">
          Color:
          {product.colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={
                  color === curColor
                    ? "border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none opacity-100"
                    : "border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                }
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? (
                  <FaCheck className="text-base text-white" />
                ) : null}
              </button>
            );
          })}
        </div>
        {/* Price */}
        <span className=" title-font font-medium text-3xl text-gray-900">
          <FormatPrice price={price} />
        </span>
      </div>

      <hr className="my-4" />

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <div>
        <div className="flex justify-center">
          <NavLink to="/cart" onClick={handleClick}>
            <button className="flex mr-16 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-60 0 rounded">
              Add to Cart
            </button>
          </NavLink>
          <NavLink to="/cart">
            <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Buy Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default AddToCart;
