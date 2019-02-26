import React from 'react';
import classes from './Vehicle.module.css';
import { faYarn } from '@fortawesome/free-brands-svg-icons';
class Vehicle extends React.Component{
    state = {
        selectedTab: 1, 
        vehicleForm: {
            countryNumber:{
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Улсын дугаар'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 5, 
                    maxLength: 5
                }, 
                valid: false, 
                touched: false
                }, 
            arliinNumber: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Арлын дугаар'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 5, 
                    maxLength: 5
                }, 
                valid: false, 
                touched: false
            }, 
            Manufacturer: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Manufacturer'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 5, 
                    maxLength: 5
                }, 
                valid: false, 
                touched: false
            },
            model: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Model'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 5, 
                    maxLength: 5
                }, 
                valid: false, 
                touched: false
            }, 
            variant: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Variant'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 5, 
                    maxLength: 5
                }, 
                valid: false, 
                touched: false
            }, 
            regYear: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Reg Year'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 4, 
                    maxLength: 4, 
                    isNumeric: true
                }, 
                valid: false, 
                touched: false
            }, 
            mnRegYear: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Mn Reg Year'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 4, 
                    maxLength: 4, 
                    isNumeric: true
                }, 
                valid: false, 
                touched: false
            }
        }, 
        userForm: {
            surname: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Овог'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 1, 
                    maxLength: 20
                }, 
                valid: false, 
                touched: false
            }, 
            firstname: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Нэр'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 1, 
                    maxLength: 20
                }, 
                valid: false, 
                touched: false
            }, 
            registrationNumber: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Регистерийн дугаар'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 10, 
                    maxLength: 10, 
                    isRegistrationNumber: true
                }, 
                valid: false, 
                touched: false
            }, 
            phoneNumber: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Утасны дугаар'
                }, 
                value: '', 
                validation: {
                    required: true, 
                    minLength: 8, 
                    maxLength: 8, 
                    isNumeric: true
                }, 
                valid: false, 
                touched: false
            }, 
            email: {
                elementType: 'input', 
                elementConfig: {
                    type: 'text', 
                    placeholder: 'Имэйл хаяг'
                }, 
                value: '', 
                validation: {
                    required: true, 

                    isEmail: true
                }, 
                valid: false, 
                touched: false
            }
        }, 
        generalForm: {
            agreeCheck: {
                elementType: 'input', 
                elementConfig: {
                    type: 'checkbox', 
                    checked: false, 
                  placeholder: 'I agree with the Terms and Conditions'  
                }, 
                value: '', 
                validation: {
                    required: true, 
                    isChecked: true
                }, 
                valid: false, 
                touched: false
            }
        }
    };

    listHandler =(num)=>{
        this.setState({selectedTab: num});
       
    }
    checkValidity = (value, rule)=>{
        if(!rule){
            return true;
        }
        let isValid = true;
        if(rule.required){
          
            if(rule.maxLength){
                isValid = isValid && value.length <= rule.maxLength;
            }
            if(rule.minLength){
                isValid = isValid && value.length >= rule.minLength;
            }
            if(rule.isNumeric){
                const pattern = /^(0|[1-9][0-9]*)$/;
                isValid = pattern.test(value) && isValid;
            }
            if(rule.isEmail){
                const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                isValid = pattern.test(value) & isValid;
            }
            if(rule.isRegistrationNumber){
                const pattern = /^[A-ЯҮӨа-яүө]{2}[0-9]{8}$/;
                isValid = pattern.test(value) & isValid;
            }
            
        }
        return isValid;
    }
    onChangeHandler =(event, id)=>{
        let tempForm = null;
        if(this.state.selectedTab ===1){
            tempForm = {...this.state.vehicleForm};
            tempForm[id].value = event.target.value;
            tempForm[id].valid = this.checkValidity(event.target.value, tempForm[id].validation);
            tempForm[id].touched = true;
            console.log(tempForm[id].valid);
            this.setState({vehicleForm: tempForm});

        }else if (this.state.selectedTab ===2){
            tempForm = {...this.state.userForm};
            tempForm[id].value = event.target.value;
            tempForm[id].valid = this.checkValidity(event.target.value, tempForm[id].validation);
            tempForm[id].touched = true;
            this.setState({userForm: tempForm});

        } else{
            tempForm = {...this.state.generalForm};
            tempForm[id].elementConfig.checked = !tempForm[id].elementConfig.checked;
            tempForm[id].touched = true;
            tempForm[id].valid = tempForm[id].elementConfig.checked ? true: false;
            this.setState({generalForm: tempForm});
            console.log(this.state.generalForm.agreeCheck.elementConfig.checked);

        }
        
    }
    onSubmit =()=>{
        //event.preventDefaults();
        let tempForm = null;
        if(this.state.selectedTab===1){
            tempForm = {...this.state.vehicleForm};
            let isValid = true;
            for(let id in tempForm){
                isValid = tempForm[id].valid && isValid;
                tempForm[id].touched = true;
                
            }
            this.setState({vehicleForm: tempForm});
            console.log(isValid);
            if(isValid){
                this.listHandler(2);
            }
        }else if(this.state.selectedTab ===2){
            tempForm = {...this.state.userForm};
            let isValid = true;
            for(let id in tempForm){
                isValid = tempForm[id].valid && isValid;
                
            }
            if(isValid){
                this.listHandler(3);
            }else{
                for(let id in tempForm){
                    tempForm[id].touched = true;
                    
                }
                this.setState({userForm: tempForm});
            }
        }else {
            tempForm = {...this.state.generalForm};
            let isValid = true;
            for(let id in tempForm){
                isValid = tempForm[id].valid && isValid;
                
            }
            if(isValid){
                this.props.history.push('/');
            }else{
                // to do something when checkbox is not checked
            }
        }
        
    }
    prevClicked =()=>{
        if(this.state.selectedTab ===1){

        }else if(this.state.selectedTab ===2){
            this.listHandler(1);
        }else {
            this.listHandler(2);
        }
    }
    render(){
        let loadingPosition = this.state.selectedTab===1 ? '40%' : this.state.selectedTab ===2 ? '70%': '100%'; 
        let formElements = null;
        if(this.state.selectedTab ===1){
            formElements = {...this.state.vehicleForm};
            
        }else if(this.state.selectedTab ===2){
            formElements = {...this.state.userForm};
        }else {
            formElements = {...this.state.generalForm};
        }
        const elementFormList = [];
        for(let i in formElements){
            elementFormList.push({ id: i, config: formElements[i]});
        }
        let generalTabExtra = (
            <div className = {classes.generalTabExtra}>
                <i className = "mdi mdi-check-all"></i>
                <h4>Thank you!</h4>
                <p>Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet.</p>
            </div>
        );
        
        
        
    
    return(
        <div className = {classes.Vehicle}>
            <div className = {classes.Tab}>
                <ul>
                    <li onClick = {()=>this.listHandler(1)} className = {this.state.selectedTab === 1 ? classes.SelectedTab: classes.UnselectedTab}>
                        <i className="mdi mdi-account-circle mr-1"></i>
                        <div className = {classes.TabText}>
                            Тээврийн хэрэгслийн мэдээлэл
                        </div>

                    </li>
                    <li onClick = {()=>this.listHandler(2)} className = {this.state.selectedTab === 2 ? classes.SelectedTab: classes.UnselectedTab}>
                        <i className="mdi mdi-face-profile mr-1"></i>
                        <div className = {classes.TabText}>
                            Даатгуулагчийн мэдээлэл
                        </div>
                    </li>
                    <li onClick = {()=>this.listHandler(3)} className = {this.state.selectedTab === 3 ? classes.SelectedTab: classes.UnselectedTab}>
                        <i className="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
                        <div className = {classes.TabText}>
                            Ерөнхий мэдээлэл
                        </div>
                    </li>
                </ul>
                <div className = {classes.VehicleContainer}> 
                    <div className={[classes.lines, classes.stripesLoader].join(' ')} style={{backgroundPosition: loadingPosition}}>
                    </div>

                </div>
                {this.state.selectedTab ===3 ? 
                generalTabExtra
                : null            
                }
                <form className = {this.state.selectedTab ===3 ? classes.formReg: classes.formGeneral}>
                    {

                        this.state.selectedTab ===3 ? 
                            elementFormList.map(igkey=>{

                                return(
                                    <div key = {igkey.id} className = {classes.formCheckElement}>
                                        
                                        <input className = {classes.checkInput}
                                        type={igkey.config.elementConfig.type}
                                        placeholder ={igkey.config.elementConfig.placeholder}
                                        onChange = {(event)=>this.onChangeHandler(event, igkey.id)} 
                                        checked = {igkey.config.elementConfig.checked}
                                        id = {igkey.id}
                                        />
                                        <span className={classes.checkmark}><i className = "mdi mdi-check"></i></span>
                                        <label htmlFor={igkey.id}>{igkey.config.elementConfig.placeholder}</label>
                                        

                                    </div>    
                                );
                            })
                        : 
                            elementFormList.map(igkey=>{
                                return(
                                    <div key = {igkey.id} className = {classes.formElement}>
                                        <label htmlFor={igkey.id}>{igkey.config.elementConfig.placeholder}</label>
                                        <div className = {classes.inputgroup}>
                                        <input 
                                        className = {[classes.textInput,  igkey.config.valid && igkey.config.touched ? classes.textInputSuccess:  ((!igkey.config.valid) && igkey.config.touched? classes.textInputDanger: null) ].join(' ')}
                                        type={igkey.config.elementConfig.type}
                                        placeholder ={igkey.config.elementConfig.placeholder}
                                        onChange = {(event)=>this.onChangeHandler(event, igkey.id)}
                                        value = {igkey.config.value}
                                        />
                                        {(!igkey.config.valid)  && igkey.config.touched ? <strong className= "mdi mdi-close" style = {{color: 'red', fontSize: '20px'}}></strong>:  
                                            null
                                        }
                                        
                                        
                                        {(igkey.config.valid) && igkey.config.touched ? <strong className= "mdi mdi-check" style = {{color: 'green', fontSize: '20px'}} ></strong>:  
                                            null
                                        }
                                        </div>

                                    </div>    
                                );
                            })
                        
                    }
                    
                </form>
                <div className = {classes.prevNextcont}>
                        <button className= {classes.Prev} onClick = {this.prevClicked}>Prev</button>
                        <button className = {classes.Next} onClick = {this.onSubmit}>Next</button>
                    </div>
                
            </div>
            
        </div>
    );
    }
}
export default Vehicle;