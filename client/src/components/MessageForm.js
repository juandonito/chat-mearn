import './MessageForm.scss'

import React from 'react'
import { connect } from 'react-redux'

import { doSendMessage } from '../redux/actions/messageAction'
import { doUserSelfTyping, doUserSelfNotTyping } from '../redux/actions/userActions';

class MessageForm extends React.Component{

    constructor(props){
        super(props);

        this.messageRef = React.createRef()
        this.state = {
            message: ''
        }
    }

    scrollToBottom = () => {
        this.messageRef.current.scrollIntoView()
    }

    componentDidMount(){
        this.messageRef.current.focus()
        this.scrollToBottom()
    }

    componentDidUpdate(prevProps, prevState){
        this.scrollToBottom()

        if(prevState.message === '' && this.state.message !== ''){
            this.props.selfStartedTyping()
        }

        if(prevState.message !== '' && this.state.message === ''){
            this.props.selfStopedTyping()
        }

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
        const { usersTyping, usersConnected } = this.props

        console.log(usersConnected)

        return (
            <React.Fragment>
                <div className='info'>
                    { usersTyping.length !== 0 ? `${usersTyping.join(' ')} typing` : null}
                </div>
                <div className='msg-form'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text'
                            name='message'
                            placeholder='Enter new message'
                            spellCheck='false'
                            autoComplete='off'
                            value={message}
                            ref={this.messageRef}
                            onChange={this.handleInputChange}
                        />
                        <button type='submit'>
                            send
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.userState.username,
        usersTyping: state.userState.usersTyping,
        usersConnected: state.userState.usersConnected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendMessage: (author, message) => dispatch(doSendMessage(author, message)),
        selfStartedTyping: () => dispatch(doUserSelfTyping()),
        selfStopedTyping: () => dispatch(doUserSelfNotTyping())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)