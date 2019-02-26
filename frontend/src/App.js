import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';

import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';
import MainPage from './containers/MainPage/MainPage';
import {Route, Switch} from 'react-router-dom';
import DaatgalVehicle from './containers/Daatgal/Vehicle/Vehicle';
class App extends Component {
  render() {
    library.add(faSearch);
    library.add(faBell);
    return (
      <div className = "App">
          <div className = "wrapper">
            <div className = "content">
              <Layout>
                <Switch>
                  <Route path = "/daatgal/vehicle" component = {DaatgalVehicle} />
                  <Route path = "/daatgal/gate" component = {DaatgalVehicle} />
                  <Route path = "/daatgal/apartment" component = {DaatgalVehicle} />
                  <Route path = "/" component = {MainPage}/>
                  </Switch>
              </Layout>
            </div>
            
          </div>
      </div>
      
    );
  }
}

export default App;
