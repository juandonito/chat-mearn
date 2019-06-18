import './MessageInformation.scss'

import React from 'react'

const MessageInformation = ({message}) => {

    return (
        <div className='MessageInformation'>
            {message.message}
        </div>
    )
}

export default MessageInformation