import React from 'react'
import {render} from 'react-dom'
import Login from '../modules/Login/login-form.js'
import LoginStore from './LoginStore'
import LoginActions from './LoginActions'


function _loginRequest(value) {
    LoginActions.doLoginRequest(value);
}

render(
    <Login onLoginRequest={_loginRequest}/>, document.getElementById("login"));