import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import Home from '../pages/home/home';


import Home_1 from './home_1'
import Home_2 from './home_2'

 const HomeIndex = ({history}) => (
    <Router history={history}>
        <Home>
            <Switch> 
                <Route exact path='/home' component={Home} />
                <Route path='/home/home_1' component={Home_1} />
                <Route path='/home/home_2' component={Home_2} />
                {/*路由不正确时，默认跳回common页面*/}
                <Route render={() => <Redirect to="/home" />} />
            </Switch>
        </Home>
    </Router>
               
);

export default HomeIndex