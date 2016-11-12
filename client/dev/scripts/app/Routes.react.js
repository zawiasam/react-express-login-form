import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRedirect, IndexRoute, hashHistory} from 'react-router'

import AppLogin from './Login.react'
import AppDashboard from './Dashboard.react'
import Inbox from './Inbox.react'
import Home from './Home.react'
import { RoutePath } from './Index/IndexConstants'

const loginElement = document.getElementById("login");
render(
    <Router history={hashHistory}>
    <Route path="/">
        <IndexRedirect to={RoutePath.Login}/>
        <Route path={RoutePath.Login} component={AppLogin}/>
        <Route path={RoutePath.Panel} component={AppDashboard}>
            <IndexRoute component={Inbox} />
            <Route path={RoutePath.Inbox} component={Inbox} />
            <Route path={RoutePath.Home} component={Home} />
        </Route>
    </Route>
</Router>, loginElement);