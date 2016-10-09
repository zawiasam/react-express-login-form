import React from 'react'

import LoginForm from '../modules/Forms/LoginForm.react'
import LoginStore from './Login/LoginStore'
import LoginActions from './Login/LoginActions'

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

export default AppLogin