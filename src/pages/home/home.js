import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div id="home_container">
                <div>
                    <h1>React Router Tutorial</h1>
                    <ul>
                        <li><Link to="/home/home_1">home_1</Link></li>
                        <li><Link to="/home/home_2">home_2</Link></li>
                    </ul>
                    <div className="nice">
                        {this.props.children}
                    </div>

                </div>

            </div>
        );
    }
}

export default Home;