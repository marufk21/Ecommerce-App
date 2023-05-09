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
    <div className="bg-white rounded-lg shadow-lg px-6 py-8 sm:px-8 sm:py-10 md:py-12">
    <div className="space-y-6">
      <div className="flex justify-center">
        <p className="text-lg font-bold">Your Cart</p>
      </div>
      <hr />
      <div className="space-y-4">
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>
      <hr />
      <div className="space-y-4">
        <div className="flex justify-between">
          <p className="text-sm font-medium">Subtotal:</p>
          <p className="text-sm font-medium">
            <FormatPrice price={total_price} />
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-medium">Shipping Fee:</p>
          <p className="text-sm font-medium">
            <FormatPrice price={shipping_fee} />
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Order Total:</p>
          <p className="text-lg font-bold">
            <FormatPrice price={shipping_fee + total_price} />
          </p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between items-center">
        <NavLink to="/products">
          <button className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg text-sm px-4 py-2">
            Continue Shopping
          </button>
        </NavLink>
        <button
          className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  </div>
  
  
  );
};

export default Cart;
