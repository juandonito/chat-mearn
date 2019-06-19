import './Chat.scss'

import React from 'react'

import MessageList from './MessageList'
import MessageForm from './MessageForm'

const Chat = () => {
    return (
        <div className='chat'>
            <MessageList />
            <MessageForm />
        </div>
    )
}

export default Chat