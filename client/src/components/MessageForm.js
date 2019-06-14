import './MessageForm.scss'

import React from 'react'
import { connect } from 'react-redux'

import { doNewMessage } from '../redux/actions/messageAction'

class MessageForm extends React.Component{

    constructor(props){
        super(props);

        this.messageRef = React.createRef()
        this.state = {
            message: ''
        }
    }

    componentDidMount(){
        this.messageRef.current.focus()
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const { message } = this.state
        const { sendMessage, username } = this.props

        if(message !== ''){
            sendMessage(username, message)
            this.setState({
                message: ''
            })
        }
    }

    render() {

        const { message } = this.state

        return (
            <div className='MessageForm'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        name='message'
                        spellCheck='false'
                        value={message}
                        ref={this.messageRef}
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>
                        send
                    </button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.userState.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (author, message) => dispatch(doNewMessage(author, message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)