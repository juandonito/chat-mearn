import './Message.scss'

import React from 'react'
import { connect } from 'react-redux'

const Message = ({ message, username }) => {

    const align = message.author === username ? 'own' : 'other';

    return (
        <div className='Message'>
            <div className={`msg ${align}`}>
                <div className='author'>
                    {message.author}
                </div>
                <div className={`content ${align}`}>
                    {message.message}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.userState.username
    }
}

export default connect(mapStateToProps)(Message)