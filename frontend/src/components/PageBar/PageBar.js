import React from 'react';
import classes from './PageBar.module.css';
const PageBar =(props)=>{
    return(
        <div className = {classes.PageBar}>
            <h3>Тээврийн хэрэгсэлийн даатгал !</h3>
            <div className = {classes.ButtonContainer}>
                
                <button><i className="mdi mdi-autorenew"></i></button>
                <button><i className="mdi mdi-filter-variant"></i></button>
            </div>
            
        </div>
    );
}
export default PageBar;