import React from 'react'
import * as Layout from '../Commons/Layout.react'
import * as MessageElements from './MessageElements.react'

export default class Message extends React.Component {
    render() {
        const message = this.props.message;
        return (
            <section className="message.react">
                <Layout.GridRow>
                    <Layout.GridColumn columnSize="8">
                        <MessageElements.MessageTitle value={message.messageTitle} />
                    </Layout.GridColumn>
                    <Layout.GridColumn columnSize="4">
                        <MessageElements.MessageDate value={message.messageDate} />
                    </Layout.GridColumn>
                </Layout.GridRow>
                <Layout.GridRow>
                    <Layout.GridColumn columnSize="12">
                        <MessageElements.MessageBody value={message.messageBody} />
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