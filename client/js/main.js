import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
// Routing component for relative root
class Main extends React.Component{
    render(){
      return(
        // route to home root
        <Route path='/' component={Home} />

      );
    }
}
export default Main
