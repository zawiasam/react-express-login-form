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
          {this.props.children}
				</div>
				<div className="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
				</div>
				<div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
					<div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
						<div className="mdl-card__title mdl-card--expand mdl-color--teal-300">
							<h2 className="mdl-card__title-text">Updates</h2>
						</div>
						<div className="mdl-card__supporting-text mdl-color-text--grey-600">
							Non dolore elit adipisicing ea reprehenderit consectetur culpa.
						</div>
						<div className="mdl-card__actions mdl-card--border">
							<a href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
						</div>
					</div>
					<div className="demo-separator mdl-cell--1-col"></div>
					<div className="demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
						<div className="mdl-card__supporting-text mdl-color-text--blue-grey-50">
							<h3>View options</h3>
							<ul>
								<li>
									<label htmlFor="chkbox1" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox1" className="mdl-checkbox__input" />
                      <span className="mdl-checkbox__label">Click per object</span>
                    </label>
								</li>
								<li>
									<label htmlFor="chkbox2" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox2" className="mdl-checkbox__input" />
                      <span className="mdl-checkbox__label">Views per object</span>
                    </label>
								</li>
								<li>
									<label htmlFor="chkbox3" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox3" className="mdl-checkbox__input" />
                      <span className="mdl-checkbox__label">Objects selected</span>
                    </label>
								</li>
								<li>
									<label htmlFor="chkbox4" className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                      <input type="checkbox" id="chkbox4" className="mdl-checkbox__input" />
                      <span className="mdl-checkbox__label">Objects viewed</span>
                    </label>
								</li>
							</ul>
						</div>
						<div className="mdl-card__actions mdl-card--border">
							<a href="#" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50">Change location</a>
							<div className="mdl-layout-spacer"></div>
							<i className="material-icons">location_on</i>
						</div>
					</div>
				</div>
			</div>
		</main>
		)
	}
}