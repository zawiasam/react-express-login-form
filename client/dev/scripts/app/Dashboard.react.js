import React from 'react'
import DashboardSideMenu from '../modules/Forms/Dashboard/SideMenu.react'
import DashboardMainContent from '../modules/Forms/Dashboard/MainContent.react'
import DashboardHeader from '../modules/Forms/Dashboard/Header.react'
import { MenuConfig } from './Index/IndexConstants'
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