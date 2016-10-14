import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'

import AppLogin from './Login'
import AppDashboard from './Dashboard'

const loginElement = document.getElementById("login");
render(
    <Router history={hashHistory}>
    <Route path="/">
        <IndexRedirect to="/login"/>
        <Route path='/login' component={AppLogin}/>
        <Route path='/dashboard' component={AppDashboard}/>
    </Route>
</Router>, loginElement);