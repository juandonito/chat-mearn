import './Chat.scss'

import React from 'react'

import InfoSideBar from './InfoSideBar'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

const Chat = () => {
    return (
        <div className='chat'>
            <InfoSideBar />
            <MessageList />
            <MessageForm />
        </div>
    )
}

export default Chat