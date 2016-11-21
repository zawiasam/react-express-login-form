import React from 'react'
import DashboardSideMenu from '../modules/Forms/Dashboard/SideMenu.react'
import DashboardMainContent from '../modules/Forms/Dashboard/MainContent.react'
import DashboardHeader from '../modules/Forms/Dashboard/Header.react'
import { MenuConfig, RoutePath } from './Index/IndexConstants'
import LoginStore from './Login/LoginStore'
import Redirect from '../modules/Commons/Navigation/redirect.react'

// This upgrades all upgradable components (i.e. with 'mdl-js-*' class)
function domUpgrade(){
  componentHandler.upgradeDom();
}

export default class AppDashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
      domUpgrade();
  }

  componentDidUpdate() {
      domUpgrade();
  }

  render() {
    if (!LoginStore.getLoginData().authorized) {
      return (<Redirect location={ RoutePath.Login } />)
    }

    return (
      <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <DashboardSideMenu 
          menuItems={ MenuConfig }/>
        <DashboardHeader />
        <DashboardMainContent>
          {this.props.children}
        </DashboardMainContent>
      </div>
    )
  }
}