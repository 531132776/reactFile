import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';

import Home1 from '../../compoents/home_1'
import Home2 from '../../compoents/home_2'

class Home extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
                <div id="home_container">
                <div>
                    <h1>React Router Tutorial</h1>
                    <ul>
                        <li><Link to="/home/">home_1</Link></li>
                        <li><Link to="/home/home_2">home_2</Link></li>
                    </ul>
                    <div className="nice">
                        <Route exact path='/home/' component={Home1} />
                        <Route path='/home/home_2' component={Home2} />  
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;