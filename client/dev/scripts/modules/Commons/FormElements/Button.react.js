import React from 'react'

const emptyFunction = () => {
};

export default class InputButton extends React.Component {
    constructor(props) {
        super(props);
        this._clicked = this._clicked.bind(this);
    }

    render() {
        return (
            <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" onClick={ this._clicked }>
              { this.props.label }
              <div className="ripples buttonRipples">
                <span className="ripplesCircle"></span>
              </div>
            </button>
            );
    }

    _clicked(event) {
        this.props.onClick();
    }
}

InputButton.defaultProps = {
    onClick: emptyFunction,
}
