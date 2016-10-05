import React from 'react'
import { render } from 'react-dom'
import UnsortedList from '../Commons/unsorted-list.js'
import { InputText, InputPassword, InputButton } from '../Commons/form-elements.js'

export default React.createClass ({
  propTypes : {
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
        <InputText id={'email'} label={'e-mail'} onChange={this._fieldValueChanged} />,
        <InputPassword id={'password'} label={'hasło'} onChange={this._fieldValueChanged} />,
        <InputButton id={'loginBtn'} label={'Zaloguj się'} onClick={this._loginRequest} />
    ];

    return (
      <form>
        <UnsortedList items={listElements} />
      </form>
    )
  },

  _fieldValueChanged(value){
    this.setState(value);
  },

  _loginRequest(){
    this.props.onLoginRequest(this.state)
  }
})
