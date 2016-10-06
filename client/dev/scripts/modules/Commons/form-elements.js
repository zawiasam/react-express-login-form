import React from 'react';

var emptyFunction = () => {
};

export let InputText = React.createClass({
  getDefaultProps: function() {
    return {
      onChange: emptyFunction,
      onKeyDown: emptyFunction,
    };
  },

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id={ this.props.id } onChange={ this._changed } onKeyDown={ this._keyDown }></input>
        <label className="mdl-textfield__label" htmlFor={ this.props.id }>
          { this.props.label }
        </label>
      </div>
      );
  },

  _changed(event) {
    let value = {}
    value[this.props.id] = event.target.value;

    this
      .props
      .onChange(value)
  },

  _keyDown(event) {
    this.props.onKeyDown(event.keyCode);
  }
})

export let InputPassword = React.createClass({
  getDefaultProps: function() {
    return {
      onChange: emptyFunction,
      onKeyDown: emptyFunction,
    };
  },

  render() {
    return (
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="password" id={ this.props.id } onChange={ this._changed }></input>
        <label className="mdl-textfield__label" htmlFor={ this.props.id }>
          { this.props.label }
        </label>
      </div>
      );
  },

  _changed(event) {
    let value = {}
    value[this.props.id] = event.target.value;

    this
      .props
      .onChange(value)
  },

  _keyDown(event) {
    this.props.onKeyDown(event.keyCode);
  }
})

export let InputButton = React.createClass({
  getDefaultProps: function() {
    return {
      onClick: emptyFunction,
    };
  },

  render() {
    return (
      <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={ this._clicked }>
        { this.props.label }
        <div className="ripples buttonRipples">
          <span className="ripplesCircle"></span>
        </div>
      </button>
      );
  },

  _clicked(event) {
    this.props.onClick();
  }
})
