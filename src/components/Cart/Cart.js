import { useContext } from 'react';
import Model from '../UI/Model';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';


const Cart = (props) => {
    const ctx = useContext(CartContext);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <li key={item.Item.id}>{item.Item.name} - {item.Quentity}  -price  ${((item.Quentity)*(item.Item.price)).toFixed(2)}</li>
      ))}
    </ul>
  );
  let totalAmount = 0
   ctx.items.forEach(item=>{
totalAmount = totalAmount + ((item.Quentity)*(item.Item.price))
  })

  return (
    <Model onhidecart={props.onhidecart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onhidecart}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;