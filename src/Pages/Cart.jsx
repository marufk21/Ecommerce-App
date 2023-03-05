import { useCartContext } from "../Context/CartContext";
import CartItem from "../Components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);

  if (cart.length === 0) {
    return <h3>No Cart in Item </h3>;
  }

  return (
    <div className="">
      <div className="flex justify-center space-x-44">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>
      <hr />

      {/* order total_amount */}
      <div className="">
        <div className="flex justify-center space-x-60">
          <div>
            <p>subtotal:</p>
            <p>
              <FormatPrice price={total_price} />
            </p>
          </div>
          <div>
            <p>shipping fee:</p>
            <p>
              <FormatPrice price={shipping_fee} />
            </p>
          </div>
          <hr />
          <div>
            <p>order total:</p>
            <p>
              <FormatPrice price={shipping_fee + total_price} />
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center space-x-96">
        <NavLink to="/products">
          <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            {" "}
            continue Shopping{" "}
          </button>
        </NavLink>
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={clearCart}
        >
          clear cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
