import React from 'react'

export default class MessageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.value}</div>
    }
}
