import React, { Component } from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

import Axios from './http/SendRequest'


class App extends Component {
  componentDidMount() {
    Axios.post(`/exterior/houses/getHouseDetail`, { id: '1989', houseType: '0' }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {

    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul>
          <li><Link to="/common" >common</Link></li>
          <li><Link to="/home" >home</Link></li>
          <li><Link to="/about" >about</Link></li>
        </ul>
        <div className="container">
          {this.props.children}
        </div>

      </div>
    )
  }


}

export default App;
