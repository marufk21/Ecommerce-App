import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="inline-block float-right">
      <div className="flex ml-auto text-whiteborder-0 py-2 px-6 focus:outline-none">
        <button onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="flex ml-auto text-whiteborder-0 py-2 px-6 focus:outline-none">
          {amount}
        </div>
        <button onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
