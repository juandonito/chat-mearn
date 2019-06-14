import './MessageForm.scss'

import React from 'react'

class MessageForm extends React.Component{

    render() {
        return (
            <div className='MessageForm'>
                <form>
                    <input 
                        type='text'
                        name='message'
                        spellCheck='false'
                    />
                    <button type='submit'>
                        send
                    </button>
                </form>
            </div>
        )
    }
}

export default MessageForm