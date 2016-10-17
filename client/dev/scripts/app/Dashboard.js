import React from 'react'
import Message from '../modules/Forms/Message.react'
import DashboardSideMenu from '../modules/Forms/DashboardSideMenu.react'
import DashboardMainContent from '../modules/Forms/DashboardMainContent.react'
import DashboardHeader from '../modules/Forms/DashboardHeader.react'
import Card from '../modules/Forms/Card.react'
import Menu from '../modules/Forms/Menu.react'
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
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <DashboardSideMenu />
        <DashboardHeader />
        <DashboardMainContent>
          <Card message={ this.state.message } />
        </DashboardMainContent>
      </div>
    )
  }
}