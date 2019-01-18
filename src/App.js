import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';

import {
  Layout, Menu, Icon,
} from 'antd';

import Axios from './http/SendRequest'
import Home from './pages/home/home'
import About from './pages/about/about'
import Common from './pages/common/common'
import Root from './pages/root/root'


// const { SubMenu } = Menu;
const {
  Header, Content, Footer, Sider,
} = Layout;
class App extends Component {
  constructor(props,context){
    super(props,context)
    console.info(props,context);
    this.state = {
      collapsed: false,
      selectedKey: ''
    }
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  menuClick =e=>{
    console.log(e)
    this.setState({selectedKey:e.key})
  }
  componentDidMount() {
    console.log(this.props)
    Axios.post(`/exterior/houses/getHouseDetail`, { id: '1989', houseType: '0' }).then(res => {
      // console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {

    return (
      <Router>
        <Layout style={{ height: '100vh' }} id="components-layout-demo-custom-trigger">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}>
            <div>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.menuClick}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>common</span>
                  <NavLink to="/" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>common</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>home</span>
                  <NavLink to="/home" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>home</NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="deployment-unit" />
                  <span>about</span>
                  <NavLink to="/about" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>about</NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="property-safety" />
                  <span>root</span>
                  <NavLink to="/root" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>root</NavLink>
                </Menu.Item>
              </Menu>
            </div>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{
              margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
            }}
            >
              <div className="app">
                <Route exact path='/' component={Common} />
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/root' component={Root} />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2019 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>


    )
  }


}

export default App;
