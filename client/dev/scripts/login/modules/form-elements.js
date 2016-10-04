import React from 'react';
import { render } from 'react-dom';

export class InputText extends React.Component {
  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id={this.props.id}></input>
        <label className="mdl-textfield__label" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

export class InputPassword extends React.Component {
  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="password" id="password"></input>
        <label className="mdl-textfield__label" htmlFor="password">hasło</label>
      </div>
    );
  }
}

export class InputButton extends React.Component {
  render() {
    return (
         <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">{this.props.label}
          <div className="ripples buttonRipples"><span className="ripplesCircle"></span></div>
        </button>
    );
  }
}