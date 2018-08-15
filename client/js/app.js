import React from 'react';
import Main from './main.js';
import Header from './header.js';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}
export default App
