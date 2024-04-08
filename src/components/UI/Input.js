import classes from './Input.module.css';

function Input (props){
return <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.lable}</label>
    <input {...props.input}/ >
</div>
}
export default Input