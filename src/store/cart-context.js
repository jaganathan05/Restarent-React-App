import React from "react";

const CartContext =React.createContext({
    items:[],
    totalAmount: 0 ,
    noofcartitems:0,
    addItem: (item)=>{},
    removeItem:(id)=>{},
    addMoreItem:(id)=>{}
})

export default CartContext;