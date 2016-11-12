import React from 'react'
import MessageStore from './Message/MessageStore'
import NewMessageWrapper from './Dialogs/NewMessageWrapper.react'
import Card from '../modules/Forms/Card.react'

function _dialogHandler(obj) {
  console.log(obj);
}

export default class Inbox extends React.Component {
  constructor(props) {
    super(props)
        this.state = {
      message: MessageStore.getMessage()
    }
  }
  render() {
    return (
      <div>
          <NewMessageWrapper onClosing={ _dialogHandler } />
          <Card message={ this.state.message } />
      </div>
    )
  }
}