import './MessageList.scss'

import React from 'react'
import { connect } from 'react-redux'

import Message from './Message'

const MessageList = ({ messages }) => {

    const list = messages.map(message => <Message key={message.id} message={message} />)

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