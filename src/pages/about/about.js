import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class About extends Component {
   render() {
      return (
          <div id="about">
              {/*search,state可以自定义，获取方法：this.props.location.search，this.props.location.state*/}
              <Link to={{ pathname: '/home', search: '?name=homename', state: { mold: 'add' },aa:'dddd' }} className="home-link">
                  about
              </Link>
 
          </div>
      );
   }
}
 
export default About;