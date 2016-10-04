import React from 'react';
import { render } from 'react-dom';
import UnsortedList from './unsorted-list.js';
import { InputText, InputPassword, InputButton } from './form-elements.js';

export default class LoginForm extends React.Component {
  render() {
    const listElements = [
        <InputText id={'email'} label={'e-mail'} key={'email'} />,
        <InputPassword key={'password'} />,
        <InputButton key={'submit'} label={'Zaloguj się'} />
    ];

    return (
      <form>
        <UnsortedList items={listElements} />
      </form>
    )
  }
};
