import './MessageList.scss'

import React from 'react'
import { connect } from 'react-redux'

import Message from './Message'
import MessageInformation from './MessageInformation'

import { TEXT, INFO } from '../redux/constants/messageTypes'

const MessageList = ({ messages }) => {

    const messageType = {
        TEXT: Message,
        INFO: MessageInformation
    }

    const list = messages.map(message => {
        const ToDisplay = messageType[message.type];

        return <ToDisplay key={message.id} message={message} />
    })

    return (
        <div className='MessageList'>
            {list}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        messages: state.messageState.messages
    }
}

export default connect(mapStateToProps)(MessageList) 