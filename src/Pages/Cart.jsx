import { useCartContext } from "../Context/CartContext";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cart } = useCartContext();
  // console.log("🚀 ~ file: Cart.js ~ line 6 ~ Cart ~ cart", cart);
  return (
    <div className="">
      <div className="flex space-x-44">
        <p>Item</p>                                                 
        <p className="">Price</p>
        <p>Quantity</p>
        <p className="">Subtotal</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="">
        {cart.map((curElem) => {
        console.log(curElem)
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
