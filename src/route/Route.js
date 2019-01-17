import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import App from '../App';


import Home from '../pages/home/home'
import About from '../pages/about/about'
import Common from '../pages/common/common'

const Root = ({history}) => (
    // <Router history={history}>
        <App>
            <Switch> 
                <Route exact path='/' component={Common} />
                <Route path='/common' component={Common} />
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                {/*路由不正确时，默认跳回common页面*/}
                <Route render={() => <Redirect to="/" />} />
            </Switch>
        </App>
    // </Router>
               
);

export default Root