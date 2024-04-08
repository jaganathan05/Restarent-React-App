import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useContext, useRef } from 'react';
import CartContext from '../../../store/cart-context';

function MealItemForm (props){
    const InputRef = useRef()
    const ctx = useContext(CartContext)
const addItemtoCart = (event)=>{
    event.preventDefault();

    const Item = {Item: props.item, Quentity: InputRef.current.value }
    ctx.addItem(Item)

}


return <form className={classes.form}>
    <Input lable='Amount' input={{
        id: 'amount',
        type:'number',
        min: 1 ,
        max: 5 ,
        defaultValue: 1,
        step : 1,
        ref: InputRef
    }} />
    <button onClick={addItemtoCart}>+Add</button>
</form>
}
export default MealItemForm;