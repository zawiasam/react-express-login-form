import React from 'react'

import LoginForm from '../modules/Forms/LoginForm.react'
import LoginStore from './Login/LoginStore'
import LoginActions from './Login/LoginActions'
import { RoutePath } from './Index/IndexConstants'

function _loginRequest(value) {
    LoginActions.doLoginRequest(value);
}

export default class AppLogin extends React.Component {
    componentDidMount() {
        componentHandler.upgradeDom();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div style={ { textAlign: "center" } }>
              <LoginForm onLoginRequest={ _loginRequest } routePath={ RoutePath.Panel } style={ { display: "inline-block" } } />
            </div>
        )
    }
}
