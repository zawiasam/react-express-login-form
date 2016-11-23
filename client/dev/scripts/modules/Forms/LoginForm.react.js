import React from 'react'
import ReactRouter from 'react-router'

import Redirect from '../Commons/Navigation/redirect.react'
import UnorderedList from '../Commons/unordered-list'
import * as Form from '../Commons/FormElements.react'
import LoginStore from '../../app/Login/LoginStore'
import loginFormConst from './LoginForm/Const'
import _ from 'lodash'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = LoginStore.getLoginData();

    this._fieldValueChanged = this._fieldValueChanged.bind(this);
    this._loginRequest = this._loginRequest.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._stateUpdate = this._stateUpdate.bind(this);

    LoginStore.addChangeListener(this._stateUpdate);
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this._stateUpdate);
  }

  render() {
    let listElements = [
      (<Form.InputText id={ loginFormConst.LOGIN_FLD_ID } label={ 'e-mail' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<Form.InputPassword id={ loginFormConst.PASSWORD_FLD_ID } label={ 'hasło' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<Form.Button id={ loginFormConst.LOGIN_BTN_ID } label={ 'Zaloguj się' } onClick={ this._loginRequest } />)
    ];

    if (this.state.authorized && !!this.state.loginRequestSucceeded) {
      LoginStore.setLoginRequestSucceeded(false);
      return (<Redirect location={ this.props.routePath } />)
    }

    return (
      <form style={ this.props.style }>
        <div className="mdl-layout">
          <div className="mdl-layout__content">
            <UnorderedList items={ listElements } />
          </div>
        </div>
      </form>
    )
  }

  _onKeyDown(keyCode) {
    if (keyCode === 13) {
      this._loginRequest();
    }
  }

  _fieldValueChanged(value) {
    this.setState(value);
  }

  _loginRequest() {
    this.props.onLoginRequest(_.pick(this.state, ["email", "password"]))
  }

  _stateUpdate(newState) {
    this.setState(LoginStore.getLoginData());
  }
}

LoginForm.propTypes = {
  onLoginRequest: React.PropTypes.func.isRequired,
  routePath: React.PropTypes.string.isRequired,
}
