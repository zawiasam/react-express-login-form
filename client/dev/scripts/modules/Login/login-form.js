import React from 'react'
import UnsortedList from '../Commons/unsorted-list.js'
import * as Form from '../Commons/form-elements.js'

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
      (<Form.InputText id={ 'email' } label={ 'e-mail' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<Form.InputPassword id={ 'password' } label={ 'hasło' } onChange={ this._fieldValueChanged } onKeyDown={ this._onKeyDown } />),
      (<Form.Button id={ 'loginBtn' } label={ 'Zaloguj się' } onClick={ this._loginRequest } />)
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
