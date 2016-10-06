import React from 'react'
import UnsortedList from '../Commons/unsorted-list.js'
import { InputText, InputPassword, InputButton } from '../Commons/form-elements.js'

export default React.createClass({
  propTypes: {
    onLoginRequest: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      email: '',
      password: ''
    }
  },

  render() {
    const listElements = [
      (<InputText id={ 'email' } label={ 'e-mail' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<InputPassword id={ 'password' } label={ 'hasło' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<InputButton id={ 'loginBtn' } label={ 'Zaloguj się' } onClick={ this._loginRequest } />)
    ];

    return (
      <form>
        <UnsortedList items={ listElements } />
      </form>
    )
  },

  _onKeyDown(keyCode) {
    if (keyCode === 13) {
      this._loginRequest();
    }
  },

  _fieldValueChanged(value) {
    this.setState(value);
  },

  _loginRequest() {
    this.props.onLoginRequest(this.state)
  }
})
