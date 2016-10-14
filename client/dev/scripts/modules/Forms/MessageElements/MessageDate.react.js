import React from 'react'

export default class MessageDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const date = this.props.value;
        const stringDate = ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
        return <div>{stringDate}</div>
    }
}