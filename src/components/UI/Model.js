import classes from './Model.module.css';
import React, { Fragment } from 'react';
import ReactDom from 'react-dom'

const BackDrop = props =>{ 
    return <div className={classes.backdrop}></div>
}

const  ModelOverlay = props =>{ 

    return <div className={classes.modal}>
        <div className={classes.content}> {props.children}</div>
    </div>
}


const portalElement = document.getElementById('overlays')
function Model (props){
 return <Fragment>
    {ReactDom.createPortal(<BackDrop/>,portalElement)}
    {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
 </Fragment>
}
export default Model