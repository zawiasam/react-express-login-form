import React from 'react'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const message = this.props.message;
    return (
      <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{message.messageTitle}</h2>
        </div>
        <div className="mdl-card__supporting-text mdl-card--expand">
          {message.messageBody}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            wyświetl
          </a>
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            archiwizuj
          </a>
          <div className="mdl-layout-spacer"></div>
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            odpowiedz
          </a>
        </div>
      </div>
    )
  }
}