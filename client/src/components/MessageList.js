import './MessageList.scss'

import React from 'react'
import { connect } from 'react-redux'

import {
    TextMessage,
    InformationMessage 
} from './Messages' 

import { TEXT, INFO } from '../constants/messageTypes'

const MessageList = ({ messages }) => {

    const messageType = {
        [TEXT]: TextMessage,
        [INFO]: InformationMessage
    }

    const list = messages.map(message => {
        const ToDisplay = messageType[message.type];

        return <ToDisplay key={message.id} message={message} />
    })

    return (
        <div className='msg-list'>
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