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
         <button id="btn-new_message" className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
           <i className="material-icons">add</i>
         </button>
         { this.props.children }
       </div>
     </div>
   </main>
		)
	}
}