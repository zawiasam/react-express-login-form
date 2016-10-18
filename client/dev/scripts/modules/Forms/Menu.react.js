import React from 'react'

export default class Menu extends React.Component {
  render() {
    return (
      <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50" aria-hidden="true">
        <header className="demo-drawer-header">
          <img src="images/user.png" className="demo-avatar" />
          <div className="demo-avatar-dropdown">
            <span>hello@example.com</span>
            <div className="mdl-layout-spacer"></div>
            <button id="accbtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" data-upgraded=",MaterialButton,MaterialRipple">
              <i className="material-icons" role="presentation">arrow_drop_down</i>
              <span className="visuallyhidden">Accounts</span>
              <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span>
            </button>
            <div className="mdl-menu__container is-upgraded">
              <div className="mdl-menu__outline mdl-menu--bottom-right"></div>
              <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events" htmlFor="accbtn" data-upgraded=",MaterialMenu,MaterialRipple">
                <li className="mdl-menu__item mdl-js-ripple-effect" tabIndex="-1" data-upgraded=",MaterialRipple">hello@example.com<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span>
                </li>
                <li className="mdl-menu__item mdl-js-ripple-effect" tabIndex="-1" data-upgraded=",MaterialRipple">info@example.com<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span>
                </li>
                <li className="mdl-menu__item mdl-js-ripple-effect" tabIndex="-1" data-upgraded=",MaterialRipple"><i className="material-icons">add</i>Add another account...<span className="mdl-menu__item-ripple-container"><span className="mdl-ripple"></span></span>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <nav className="demo-navigation mdl-navigation mdl-color--blue-grey-800">
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</a>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">inbox</i>Inbox</a>
          <div className="mdl-layout-spacer"></div>
          <a className="mdl-navigation__link" href=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span className="visuallyhidden">Help</span></a>
        </nav>
      </div>
    )
  }
}