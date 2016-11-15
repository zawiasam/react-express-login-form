import React from 'react'

const emptyFunction = () => {
};

export default class InputTextArea extends React.Component {
    constructor(props) {
        super(props);
        this._changed = this._changed.bind(this);
        this._keyDown = this._keyDown.bind(this);
    }

    render() {
        return (
          <div className="mdl-textfield mdl-js-textfield" style={this.props.style}>
            <textarea className="mdl-textfield__input" type="text" rows={ this.props.initialRowsCount } id={ this.props.id } onChange={ this._changed } onKeyDown={ this._keyDown }></textarea>
            <label className="mdl-textfield__label" htmlFor={ this.props.id }>Treść wiadomości ...</label>
          </div>
            );
    }

    _changed(event) {
        let args = {}
        args[this.props.id] = event.target.value;
        this
            .props
            .onChange(args)
    }

    _keyDown(event) {
        this.props.onKeyDown(event.keyCode);
    }
}

InputTextArea.propTypes = {
    initialRowsCount: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,  
}

InputTextArea.defaultProps = {
    initialRowsCount: 3,
    onChange: emptyFunction,
    onKeyDown: emptyFunction,
};