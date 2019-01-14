import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Axios from 'axios';
// import qs from 'qs'

import Axios from './http/SendRequest'

class App extends Component {


  componentDidMount (){
    Axios.post(`/exterior/houses/getHouseDetail`,{id:'1989',houseType:'0'}).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })
  }
  render() {
    
    return (
      
      <div className="App">
        
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header>
      </div>
    )
  }


}

export default App;
