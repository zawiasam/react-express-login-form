import React from 'react'
import { render } from 'react-dom'
import Login from '../modules/Login/login-form.js'
import LoginStore from './LoginStore'
import LoginActions from './LoginActions'

function _loginRequest(value) {
    LoginActions.doLoginRequest(value);
}

const loginElement = document.getElementById("login");
render(<Login onLoginRequest={ _loginRequest } />, loginElement);