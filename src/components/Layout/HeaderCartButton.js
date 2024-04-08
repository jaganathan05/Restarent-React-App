import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";
function HeaderCartButton (props){
  const ctx = useContext(CartContext)
  let numberofcartItems = 0
   ctx.items.forEach((item)=>{
    numberofcartItems = numberofcartItems + Number(item.Quentity)
  })
  return <button className={classes.button} onClick={props.onClick} >
    <span className={classes.icon}><CartIcon/></span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberofcartItems}</span>
  </button>
}
export default HeaderCartButton;