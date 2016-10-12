import React from 'react'

export default class GridRow extends React.Component {
    render() {
        return (
            <div className="mdl-grid">
                {this.props.children}
            </div>
        )
    }
}
