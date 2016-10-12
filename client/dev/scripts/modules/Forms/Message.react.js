import React from 'react'
import * as Layout from '../Commons/Layout.react'
import * as MessageElements from './MessageElements.react'

export default class Message extends React.Component {
    render() {
        return (
            <section className="message.react">
                <Layout.GridRow>
                    <Layout.GridColumn columnSize="8">
                        <MessageElements.MessageTitle value={this.props.messageTitle} />
                    </Layout.GridColumn>
                    <Layout.GridColumn columnSize="4">
                        <MessageElements.MessageDate value={this.props.messageDate} />
                    </Layout.GridColumn>
                </Layout.GridRow>
                <Layout.GridRow>
                    <Layout.GridColumn columnSize="12">
                        <MessageElements.MessageBody value={this.props.messageBody} />
                    </Layout.GridColumn>
                </Layout.GridRow>

            </section>
        )
    }
}

Message.defaultProps = {
    messageTitle: 'Title is missing',
    messageBody: 'Body is missing',
    messageDate: 'Date is missing',
}