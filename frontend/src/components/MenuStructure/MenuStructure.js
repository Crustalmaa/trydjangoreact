import React from 'react';
import classes from './MenuStructure.module.css';
import {NavLink} from 'react-router-dom';
import Auxi from '../../hoc/Auxi/Auxi';
class MenuStructure  extends React.Component{
    state = {
        width: 0
    }
    componentWillMount(){
        this.setState({width: window.innerWidth});
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions=()=>{
        this.setState({width: window.innerWidth});
    }
   
    render(){
        let menu = null;
    if(this.props.show){
        
        menu = (<div className = {classes.MenuStructureToggled} onClick = {this.props.clicked} >
        <ul className = {classes.OuterListToggled} >
            <li className = {classes.OuterListItemToggled}><i className="mdi mdi-speedometer mr-1"></i>Dashboards<span className = "mdi mdi-chevron-down"></span>
                <ul className = {classes.InnerListToggled}>
                    <li><a href="/">Ecommerse</a></li>
                    <li><a href="/">CRM</a></li>
                </ul>
            </li>
            <li className = {classes.OuterListItemToggled}><i className="mdi mdi-buffer mr-1"></i>Даатгал<span className = "mdi mdi-chevron-down"></span>
                <ul className = {classes.InnerListToggled}>
                    <li><NavLink to = "/daatgal/vehicle">Тээврийн хэрэгсэл</NavLink></li>
                    <li><NavLink to = "/daatgal/gate">Гарц даатгал</NavLink></li>
                    <li><NavLink to = "/daatgal/apartment">Орон сууцны даатгал</NavLink></li>
                </ul>
            </li>

        </ul>
    </div>);
        
    }else {
        menu = null;
    }
    console.log(this.state.width);
    
    return(
        <Auxi>
            {this.state.width < 900? menu: 
        <div className = {classes.MenuStructure} onClick = {this.props.clicked} >
            <ul className = {classes.OuterList} >
                <li className = {classes.OuterListItem}><i className="mdi mdi-speedometer mr-1"></i>Dashboards<span className = "mdi mdi-chevron-down"></span>
                    <ul className = {classes.InnerList}>
                        <li><a href="/">Ecommerse</a></li>
                        <li><a href="/">CRM</a></li>
                    </ul>
                </li>
                <li className = {classes.OuterListItem}><i className="mdi mdi-buffer mr-1"></i>Даатгал<span className = "mdi mdi-chevron-down"></span>
                    <ul className = {classes.InnerList}>
                        <li><NavLink to = "/daatgal/vehicle">Тээврийн хэрэгсэл</NavLink></li>
                        <li><NavLink to = "/daatgal/gate">Гарц даатгал</NavLink></li>
                        <li><NavLink to = "/daatgal/apartment">Орон сууцны даатгал</NavLink></li>
                    </ul>
                </li>
    
            </ul>
        </div>
            }
        </Auxi>
    );
    }
}
export default MenuStructure;