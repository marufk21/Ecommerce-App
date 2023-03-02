import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/CartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem } = useCartContext();

  const setDecrease = () => {
    // amount > 1 ? amount(amount - 1) : amount(1);
  };

  const setIncrease = () => {
    // amount < stock ? amount(amount + 1) : amount(0);
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="flex items-center space-x-4 col-span-2">
        <div>
          <figure>
            <img className="w-full h-auto" src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p className="text-base font-bold mb-2">{name}</p>
          <div className="flex items-center mb-2">
            <p className="text-sm mr-2">color:</p>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-base">
          <FormatPrice price={price} />
        </p>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />
      </div>
      <div className="hidden md:block">
        <p className="text-base font-bold">
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div className="flex items-center justify-end col-span-1">
        <div className="text-base font-bold mr-4"></div>
        <FaTrash
          className="text-red-500 cursor-pointer text-xl"
          onClick={() => removeItem(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
