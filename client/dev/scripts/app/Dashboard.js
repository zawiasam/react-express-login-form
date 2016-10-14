import React from 'react'
import Message from '../modules/Forms/Message.react'
import Card from '../modules/Forms/Card.react'
import MessageStore from './Message/MessageStore'

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: MessageStore.getMessage()
    }
  }

  render() {
    return (
      <Card message={this.state.message} />
    )
  }
}