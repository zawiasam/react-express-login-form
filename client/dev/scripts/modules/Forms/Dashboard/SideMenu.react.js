import React from 'react'
import { Link } from 'react-router'

export default class DashboardSideMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const message = this.props.message;
    let menuItemsToRender = [];

    this.props.menuItems.forEach(function(menuItem) {
      menuItemsToRender.push(
        (<Link to={ menuItem.path }
            key={ menuItem.name }
            className="mdl-navigation__link">
            <i className="mdl-color-text--blue-grey-400 material-icons"
              role="presentation">
                {menuItem.materialIconName} </i>
         {menuItem.label} </Link> )
      )
    }, this);
    return (
      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header className="demo-drawer-header">
          <img src="images/user.png" className="demo-avatar" />
          <div className="demo-avatar-dropdown">
            <span>hello@example.com</span>
            <div className="mdl-layout-spacer"></div>
            <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
              <i className="material-icons" role="presentation">arrow_drop_down</i>
              <span className="visuallyhidden">Accounts</span>
            </button>
            <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn">
              <li className="mdl-menu__item">hello@example.com</li>
              <li className="mdl-menu__item">info@example.com</li>
              <li className="mdl-menu__item"><i className="material-icons">add</i>Add another account...</li>
            </ul>
          </div>
        </header>
        <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          {menuItemsToRender}
          <div className="mdl-layout-spacer"></div>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span className="visuallyhidden">Help</span></a>
        </nav>
      </div>
    )
  }
}