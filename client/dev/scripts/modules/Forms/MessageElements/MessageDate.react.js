import React from 'react'

export default class MessageDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.value}</div>
    }
}