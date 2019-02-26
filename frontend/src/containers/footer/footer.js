import React from 'react';
import classes from './footer.module.css';
const footer =(props)=>{
    return(
        <div className = {classes.Footer}>
            <p className = {classes.FooterPar}>2018-2019 @ KhanInsurance</p>
            <div className = {classes.FooterList}>
                <ul >
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Support</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
            
            
        </div>
    );
}
export default footer;