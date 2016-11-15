import React from 'react'

export default class DashboardSideMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const message = this.props.message;
    return (
      <main className="mdl-layout__content mdl-color--grey-100">
        <div className="mdl-grid demo-content">
          <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
            { this.props.children }
          </div>
        </div>
      </main>
    )
  }
}