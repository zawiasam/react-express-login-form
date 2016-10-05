import React from 'react'
import {render} from 'react-dom'
import Login from '../modules/Login/login-form.js'
import Dispatcher from '../arch/dispatcher.js'

var dispatcher = new Dispatcher();
dispatcher.register(function (action) {
    console.log(action);
})

function _loginRequest(value) {
    dispatcher.dispatch({actionType: 'LOGIN_REQUEST', value: value})
}

render(
    <Login onLoginRequest={_loginRequest}/>, document.getElementById("login"));