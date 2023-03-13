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
    <div className="flex justify-center space-x-36">
      <div className="w-14 h-18">
        <div>
          <img className="w-full h-auto" src={image} alt={id} />
        </div>
        <div>
          <p className="">{name}</p>
          <div className="">
            <p className="">color:</p>
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="pl-3">
          <FormatPrice price={price} />
        </p>
      </div>

      <div className="pl-8">
        <CartAmountToggle
          amount={amount}
          setDecrease={() => setDecrease(id)}
          setIncrease={() => setIncrement(id)}
        />
      </div>
      <div className="">
        <p className="">
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div className="">
        <div className=""></div>
        <FaTrash className="" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
