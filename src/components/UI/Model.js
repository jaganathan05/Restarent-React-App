import classes from './Model.module.css';
import React, { Fragment } from 'react';
import ReactDom from 'react-dom'

const BackDrop = props =>{ 
    return <div className={classes.backdrop} onClick={props.onhidecart}></div>
}

const  ModelOverlay = props =>{ 

    return <div className={classes.modal}>
        <div className={classes.content}> {props.children}</div>
    </div>
}


const portalElement = document.getElementById('overlays')
function Model (props){
 return <Fragment>
    {ReactDom.createPortal(<BackDrop onhidecart={props.onhidecart}/>,portalElement)}
    {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
 </Fragment>
}
export default Model