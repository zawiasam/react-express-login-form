import React from 'react'

export default class GridColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cellClass: "mdl-cell mdl-cell--" + this.props.columnSize + "-col"
        }
    }
    render() {
        return (
            <div className={this.state.cellClass}>
                {this.props.children}
            </div>
        )
    }
}

GridColumn.defaultProps = {
    columnSize: 1,
}