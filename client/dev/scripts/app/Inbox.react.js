import React from 'react'
import MessageStore from './Message/MessageStore'
import NewMessageWrapper from './Dialogs/NewMessageWrapper.react'
import Card from '../modules/Forms/Card.react'

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
        <NewMessageWrapper onClosing={ _dialogHandler } />
        <Card title={ message.messageTitle }>
          {message.messageBody}
        </Card>
      </div>
    )
  }
}