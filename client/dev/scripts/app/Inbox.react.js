import React from 'react'
import { Link } from 'react-router'
import MessageStore from './Message/MessageStore'
import Card from '../modules/Forms/Card.react'
import Select2 from 'react-select2-wrapper'

function _dialogHandler(obj) {
  MessageStore.sendMessage(obj);
}

export default class Inbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: MessageStore.getMessage()
    }
  }

  render() {
    const message = this.state.message;
    return (
      <div style={ { width: "100%" } }>
        <Link to={this.props.newMessageLink}>
        <button id="btn-new_message" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i className="material-icons">add</i>
        </button>
        </Link>
        <Card title={ message.messageTitle }>
          { message.messageBody }
        </Card>
      </div>
    )
  }
}

Inbox.propTypes = {
  newMessageLink: React.PropTypes.string.isRequired
}