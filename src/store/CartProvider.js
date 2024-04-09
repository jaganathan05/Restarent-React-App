import { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const [items, updatedItems] = useState([]);
  const [totalAmount, updatedAmount] = useState(0);
  const [nocartItems, updatednoofcartitems] = useState(0);

  const addItemCartHandler = (item) => {
    updatedItems((prevItem) => {
      return [...prevItem, item];
    });
    updatedAmount((prevAmount) => {
      return prevAmount + item.Quentity * item.Item.price;
    });
    updatednoofcartitems((prevcount) => {
      return prevcount + Number(item.Quentity);
    });
  };

  const removeItemCartHandler = (Item) => {
    updatedItems((prevItem) => {
        console.log(Item.id)
      let updateitem = prevItem.find((item) => item.id === Item.id);
      console.log(updateitem);
      if (updateitem) {
        updateitem.Quentity = Number(updateitem.Quentity) - 1;
      }
      const filteredItem = prevItem.filter((item) => item.Quentity !== 0);
      return [...filteredItem];
    });
    updatedAmount((prevAmount) => {
        const Amount = prevAmount - (Item.Item.price)
        return Amount > 0 ? Amount : 0;

    });
    updatednoofcartitems((prevcount) => {
        return prevcount -1;
      });
  };

  const addMoreItemHandler = (Item)=>{
    updatedItems((prevItem) => {
        console.log(Item.id)
      let updateitem = prevItem.find((item) => item.id === Item.id);
      console.log(updateitem);
      if (updateitem) {
        updateitem.Quentity = Number(updateitem.Quentity) + 1;
      }
      return [...prevItem];
    });
    updatedAmount((prevAmount) => {
        const Amount = prevAmount + (Item.Item.price)
        return Amount > 0 ? Amount : 0;

    });
    updatednoofcartitems((prevcount) => {
        return prevcount + 1;
      });
  }

  const cartContext = {
    items: items,
    totalAmount: totalAmount.toFixed(2),
    noofcartitems: nocartItems,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
    addMoreItem:addMoreItemHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
