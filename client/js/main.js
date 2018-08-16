import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
import Login from './login.js';
import Signin from './signin.js';
// Routing component for relative root
class Main extends React.Component{
    render(){
      return(
        <Switch>
        // route to login component
          <Route path='/login' component={Login}/>
          <Route path='/signin' component={Signin}/>
        // route to home root
          <Route path='/' component={Home} />
        </Switch>
      );
    }
}
export default Main
