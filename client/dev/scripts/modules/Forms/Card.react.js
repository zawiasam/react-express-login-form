import React from 'react'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const btns = this.props.footer || [
      <div className="mdl-cell mdl-cell--2-col">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">wyświetl</a>
      </div>,

      <div className="mdl-cell mdl-cell--2-col">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">archiwizuj</a>
      </div>,

      <div className="mdl-layout-spacer"></div>,

      <div className="mdl-cell mdl-cell--2-col">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">odpowiedz</a>
      </div>
    ];

    return (
      <div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">{ this.props.title }</h2>
        </div>
        <div className="mdl-card__supporting-text mdl-card--expand">
          { this.props.children || this.props.content }
        </div>
        <div className="mdl-card__actions mdl-card--border mdl-grid">
          { btns }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  title: React.PropTypes.any,
  content: React.PropTypes.any,
}