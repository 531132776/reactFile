import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import './about.css'

import Home1 from '../../compoents/home_1'
import Home2 from '../../compoents/home_2'
// var userList = {}
class About extends Component {
    constructor(props, context){
        super(props, context);
        console.info(props);
        // this.userList = props.location.state.data
    }
    componentDidMount(){
        console.log()
    }
   render() {
    // var userList = {}
      return (
              <div id="about">
              <ul>
                <li><Link to="/about/" >home_1</Link></li>
                <li><Link to="/about/home_2" >home_2</Link></li>
                {/* <li>{userList.name}</li> */}
                </ul>
                <div className="container">
                        <Route exact path='/about/' component={Home1} />
                        <Route path='/about/home_2' component={Home2} />              
                </div>
        
                </div>
          
      );
   }
}
 
export default About;