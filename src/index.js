import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import "./static/css/index.css"
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux'


ReactDom.render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>,
    document.getElementById('root')
)
