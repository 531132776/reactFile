import React, { Component } from 'react';
import { Route,NavLink } from 'react-router-dom';

import Home1 from '../../compoents/home_1'
import Home2 from '../../compoents/home_2'

import {
    Layout, Menu, Icon,
  } from 'antd';
class Home extends Component {
    state = {
        selectedKey:this.props.location.pathname
    }
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <Layout>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} selectedKeys={[this.state.selectedKey]} onClick={this.menuClick}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>home_1</span>
                  <NavLink to={`${this.props.match.url}`} activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>home_1</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>home_2</span>
                  <NavLink to={`${this.props.match.url}/home_2`} activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>home_2</NavLink>
  </Menu.Item>
  </Menu>
            
            
                <div id="home_container">
                <div>
                    {/* <h1>React Router Tutorial</h1>
                    <ul>
                        <li><Link to={`${this.props.match.url}`}>home_1</Link></li>
                        <li><Link to={`${this.props.match.url}/home_2`}>home_2</Link></li>
                    </ul> */}
                    <div className="nice">
                        <Route exact path={this.props.match.url} component={Home1} />
                        <Route path={`${this.props.match.url}/:home_2`} component={Home2} />  
                    </div>
                </div>
            </div>
            </Layout>
        );
    }
}

export default Home;