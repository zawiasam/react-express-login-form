import React from 'react'
import ReactRouter from 'react-router'

import Redirect from '../Commons/Navigation/redirect.react'
import UnorderedList from '../Commons/unordered-list'
import * as Form from '../Commons/form-elements'
import LoginStore from '../../app/Login/LoginStore'

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

  render() {
    let listElements = [
      (<Form.InputText id={ 'email' } label={ 'e-mail' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<Form.InputPassword id={ 'password' } label={ 'hasło' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<Form.Button id={ 'loginBtn' } label={ 'Zaloguj się' } onClick={ this._loginRequest } />)
    ];

    if (this.state.authorized && !!this.state.shouldRedirect) {
      LoginStore.setShouldRedirect(false);
      return(<Redirect location={ this.props.routePath } />)
    }
    
    return (
      <form>
        <div className="mdl-layout">
          <div className="mdl-layout__content">
            <UnorderedList items={listElements}/>
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
    this.props.onLoginRequest(this.state)
  }

  _stateUpdate(newState) {
    this.setState(LoginStore.getLoginData());
  }
}

LoginForm.propTypes = {
  onLoginRequest: React.PropTypes.func.isRequired,
  routePath: React.PropTypes.string.isRequired
}
