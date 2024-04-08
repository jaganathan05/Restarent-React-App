import { useState } from "react"
import CartContext from "./cart-context"
const CartProvider = (props)=>{

    const [items,updatedItems] = useState([])

    const addItemCartHandler = (item) =>{ 
        updatedItems((prevItem)=>{
           return [...prevItem,item]
        })
    }
 

    const removeItemCartHandler = id =>{

    }


    const cartContext = {
        items:items,
        totalAmount: 0 ,
        addItem: addItemCartHandler ,
        removeItem: removeItemCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;