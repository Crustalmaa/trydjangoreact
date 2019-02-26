import React from 'react';
import classes from './Notification.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Auxi from '../../hoc/Auxi/Auxi';
class Notification extends React.Component{
    state={
        show: false
    }
    showHandler =()=>{
        console.log("show Handler clicked");
        this.setState({show: !this.state.show});
    }
    
    render(){
        let attachedClasses = [classes.NotificationContent, classes.Close];
        let attachedSpanClasses = classes.SpanNormal;

        if(this.state.show){
            attachedClasses = [classes.NotificationContent, classes.Open];
            attachedSpanClasses = classes.SpanSelected;
        }
    return(
        <Auxi>
            <ul className = {classes.Notification}>
                <li>
                    <div className = {classes.NotificationIcon} onClick = {this.showHandler} >
                        <span className = {attachedSpanClasses}>
                            <FontAwesomeIcon icon = {['far', 'bell']}/>
                        </span>
                        <div className = {classes.Badge}>&nbsp;</div>
                    </div>
                    <div className = {attachedClasses.join(' ')}>
                        <div className = {classes.NotificationTitle} >
                            <h5>
                                <span>Notification</span>
                                <div className = {classes.clearAll}>Clear all</div>
                            </h5>
                        </div>
                        <div className = {classes.NotificationList}>
                            <a href="/" >
                                <div className = {classes.commentIcon}>
                                    <span className="mdi mdi-comment-account-outline"></span>
                                </div>
                                <p>Caleb Flakelar commented on Admin
                                    <small>4 days ago</small>
                                </p>
                            </a>
                        </div>
                        <a className = {classes.NotificationBottom} href = "/">
                            View All
                        </a>
                    </div>
                </li>
            </ul>
            
        </Auxi>
    );
    }
}
export default Notification;