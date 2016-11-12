import React from 'react'
import Message from '../modules/Forms/Message.react'
import DashboardSideMenu from '../modules/Forms/Dashboard/SideMenu.react'
import DashboardMainContent from '../modules/Forms/Dashboard/MainContent.react'
import DashboardHeader from '../modules/Forms/Dashboard/Header.react'
import NewMessageWrapper from './Dialogs/NewMessageWrapper.react'
import Card from '../modules/Forms/Card.react'
import Menu from '../modules/Forms/Menu.react'
import MessageStore from './Message/MessageStore'

function _dialogHandler(obj) {
  console.log(obj);
}

// This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
function domUpgrade(){
  componentHandler.upgradeDom();
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: MessageStore.getMessage()
    }
  }

  componentDidMount() {
      domUpgrade();
  }

  componentDidUpdate() {
      domUpgrade();
  }

  render() {
    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <DashboardSideMenu />
        <DashboardHeader />
        <DashboardMainContent>
          <NewMessageWrapper 
            onClosing={ _dialogHandler } />
          <Card 
            message={ this.state.message } />
        </DashboardMainContent>
      </div>
    )
  }
}