import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  // const setDecrease = () => {
  //   // amount > 1 ? amount(amount - 1) : amount(1);
  // };

  // const setIncrease = () => {
  //   // amount < stock ? amount(amount + 1) : amount(0);
  // };

  return (
    <div className="flex items-center py-4 border-b border-gray-300">
      <div className="flex-shrink-0">
        <img className="w-20 h-20 rounded-lg" src={image} alt={id} />
      </div>
      <div className="flex flex-col justify-between ml-4 flex-grow">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">{name}</p>
          <FaTrash
            className="text-gray-400 hover:text-red-500 cursor-pointer"
            onClick={() => removeItem(id)}
          />
        </div>
        <div className="flex items-center mt-2">
          <p className="mr-2 font-medium text-gray-500">Color:</p>
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color, color: color }}
          ></div>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-medium text-gray-500">Price:</p>
          <p className="ml-2 font-semibold">
            <FormatPrice price={price} />
          </p>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-medium text-gray-500">Quantity:</p>
          <div className="flex items-center ml-2">
            <CartAmountToggle
              amount={amount}
              setDecrease={() => setDecrease(id)}
              setIncrease={() => setIncrement(id)}
            />
          </div>
        </div>
        <div className="flex items-center mt-2">
          <p className="font-medium text-gray-500">Total:</p>
          <p className="ml-2 font-semibold">
            <FormatPrice price={price * amount} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
