import { useContext } from "react";
import Model from "../UI/Model";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  console.log(ctx.items);
  const onRemove = (item) => {
    console.log(item)
    ctx.removeItem(item);
  };
  const onAdd = (item) => {
    console.log(item)
    ctx.addMoreItem(item)
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.Item.name}
          Quentity={item.Quentity}
          price={(item.Quentity * item.Item.price).toFixed(2)}
          onRemove={onRemove.bind(null, item)}
          onAdd={onAdd.bind(null,item)}
        ></CartItem>
      ))}
    </ul>
  );
  let totalAmount = ctx.totalAmount;

  return (
    <Model onhidecart={props.onhidecart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onhidecart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
