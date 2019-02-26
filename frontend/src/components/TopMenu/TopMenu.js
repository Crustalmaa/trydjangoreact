import React from 'react';
import classes from './TopMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const topMenu =(props)=>{
    return(
        <div className = {classes.TopMenu}>
                <a href="/">
                    <img src="https://khaandaatgal.mn/assets/v1/images/kd-logo.png" alt="" height="60"/>
                </a>
                <form action="#">
                    <span><FontAwesomeIcon icon="search" /></span>
                    <input type="text" placeholder = "Search..." name = "searchInput"/>
                    <button>Search</button>
                </form>
        </div>
    );
}
export default topMenu;