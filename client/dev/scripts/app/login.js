import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRedirect, hashHistory } from 'react-router'


import LoginForm from '../modules/Forms/LoginForm.react'
import LoginStore from './LoginStore'
import LoginActions from './LoginActions'

function _loginRequest(value) {
    LoginActions.doLoginRequest(value);
}

let AppLogin = React.createClass({
    render() {
        return (
            <LoginForm onLoginRequest={ _loginRequest } />
        )
    }
})
const loginElement = document.getElementById("login");
render(<Router history={ hashHistory }>
         <Route path='/login' component={ AppLogin } />
       </Router>, loginElement);
