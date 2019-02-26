import React from 'react';
import classes from './Toggle.module.css';
const Toggle =(props)=>{
    return(
        <div className = {classes.Toggle} onClick = {props.clicked}>
            <p></p>
            <p></p>
            <p></p>
        </div>
    );
}
export default Toggle;