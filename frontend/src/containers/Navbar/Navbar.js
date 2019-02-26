import React from 'react';
import classes from './Navbar.module.css';
import Toggle from '../../components/Toggle/Toggle';
import Notification from '../../components/Notification/Notification';
import TopMenu from '../../components/TopMenu/TopMenu';

class Navbar extends React.Component{
    
    render(){
        return(
            <nav className = {classes.Navbar}>
               <Toggle clicked = {this.props.toggleClickHandler}/>
                <TopMenu />
                <Notification />
            </nav>
        );
    }
}
export default Navbar;