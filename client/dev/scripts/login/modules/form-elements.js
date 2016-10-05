import React from 'react';
import {render} from 'react-dom';

export let InputText = React.createClass({
  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          type="text"
          id={this.props.id}
          onChange={this._changed}></input>
        <label className="mdl-textfield__label" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  },

  _changed(event) {
    if (this.props.onChange) {
      let value = {}
      value[this.props.id] = event.target.value;

      this
        .props
        .onChange(value)
    }
  }
})

export let InputPassword = React.createClass({
  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input
          className="mdl-textfield__input"
          type="password"
          id={this.props.id}
          onChange={this._changed}></input>
        <label className="mdl-textfield__label" htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  },

  _changed(event) {
    if (this.props.onChange) {
      let value = {}
      value[this.props.id] = event.target.value;

      this
        .props
        .onChange(value)
    }
  }
})

export let InputButton = React.createClass({
  render() {
    return (
      <button
        type="button"
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
        onClick={this._clicked}>{this.props.label}
        <div className="ripples buttonRipples">
          <span className="ripplesCircle"></span>
        </div>
      </button>
    );
  },

  _clicked(event) {
    if (typeof this.props.onClick === 'function') {
      this
        .props
        .onClick();
    }
  }
})
