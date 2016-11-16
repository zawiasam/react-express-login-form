import React from 'react'

export default class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const btns = this.props.footer || [
      <div className="mdl-cell mdl-cell--2-col" key="show">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">wyświetl</a>
      </div>,

      <div className="mdl-cell mdl-cell--2-col" key="archive">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">archiwizuj</a>
      </div>,

      <div className="mdl-layout-spacer" key="spacer"></div>,

      <div className="mdl-cell mdl-cell--2-col" key="replay">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">odpowiedz</a>
      </div>
    ];
    let style = this.props.styles;
    return (
      <div className="demo-card-square mdl-card mdl-shadow--2dp" style={ style.card }>
        <div className="mdl-card__title" style={ style.title }>
          <h2 className="mdl-card__title-text">{ this.props.title }</h2>
        </div>
        <div className="mdl-card__supporting-text mdl-card--expand" style={ style.content }>
          { this.props.children || this.props.content }
        </div>
        <div className="mdl-card__actions mdl-card--border mdl-grid" style={ style.footer }>
          { btns }
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  title: React.PropTypes.any,
  content: React.PropTypes.any,
  styles: React.PropTypes.object,
}

Card.defaultProps = {
  styles: {}  
}