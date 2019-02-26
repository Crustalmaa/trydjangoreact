import React from 'react';
import Footer from '../../containers/footer/footer';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../../containers/Navbar/Navbar';
import classes from './Layout.module.css';
import MenuStructure from '../../components/MenuStructure/MenuStructure';
import PageBar from '../../components/PageBar/PageBar';
class Layout extends React.Component{
    state={
        toggled: false
    }
    toggleClickHandler =()=>{
        this.setState({toggled: !this.state.toggled});
    }

    render(){
        return(
            <div>
                <Navbar toggleClickHandler = {this.toggleClickHandler}/>
                <MenuStructure  show = {this.state.toggled}/>
                <div className={classes.Layoutcontainer}>
                    <PageBar  />
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}
export default Layout;