import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Redicrect, Switch} from 'react-router-dom';
import Fish from '../components/Fish/Fish';
import Home from '../components/Home/Home';
// import Inventory from '../components/Inventory/Inventory';
// import Login from '../components/Login/Login';
import Navbar from '../components/Navbar/Navbar';
// import New from '../components/New/New';
// import Order from '../components/Order/Order';
// import OrderSpa from '../components/OrderSpa/OrderSpa';
// import Register from '../components/Register/Register';
// import SingleOrder from '../components/SingleOrder/SingleOrder';

class App extends Component {
  render () {
    return (
      // everything outside of <switch> will stay the same
      // everyting inside of <switch> will be routed
      // <Route path="/" exact component={Home}/> homepage: "/"; exact only when it is exactlly same as '/'
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home}/>
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
        {/* <Fish /> */}
        {/* <Inventory />
        <Login />
        <Navbar />
        <New />
        <Order />
        <OrderSpa />
        <Register />
        <SingleOrder /> */}
      </div>
    );
  }
}

export default App;
