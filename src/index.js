import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
// import Root from './route/Route';
import * as serviceWorker from './serviceWorker';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

// import axios from 'axios'
// import axiosService from './http/axiosIntercept'

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
