import React from 'react';
import { render } from 'react-dom';
import UnsortedList from './unsorted-list.js';
import { InputText, InputPassword, InputButton } from './form-elements.js';

export default class LoginForm extends React.Component {
  render() {
    const listElements = [
        <InputText id={'email'} label={'e-mail'} />,
        <InputPassword id={'password'} />,
        <InputButton id={'loginBtn'} label={'Zaloguj się'} />
    ];

    return (
      <form>
        <UnsortedList items={listElements} />
      </form>
    )
  }
};
