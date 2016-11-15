import React from 'react'

const emptyFunction = () => {
};

export default class InputText extends React.Component {
    constructor(props) {
        super(props);
        this._changed = this._changed.bind(this);
        this._keyDown = this._keyDown.bind(this);
    }

    render() {
        return (
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={this.props.style}>
              <input className="mdl-textfield__input" type="text" id={ this.props.id } onChange={ this._changed } onKeyDown={ this._keyDown }></input>
              <label className="mdl-textfield__label" htmlFor={ this.props.id }>
                { this.props.label }
              </label>
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

InputText.propTypes = {
    onChange: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,  
}

InputText.defaultProps = {
    onChange: emptyFunction,
    onKeyDown: emptyFunction,
};