import './Authentication.scss'

import React from 'react'
import { connect } from 'react-redux'

import { doSaveUsername } from '../redux/actions/userActions'

class Authentication extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: ''
        }
        this.usernameRef = React.createRef()
    }

    componentDidMount(){
        this.usernameRef.current.focus()
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {

        const { username } = this.state
        const { handleUsernameSubmit } = this.props

        e.preventDefault()
        handleUsernameSubmit(username)
        this.setState({ username: ''})
    }

    render() {

        const { username } = this.state

        return (
            <div className='Authentication'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>
                        Please enter your username
                    </label>
                    <input 
                        type='text'
                        name='username' 
                        value={username}
                        onChange={this.handleInputChange}
                        ref={this.usernameRef}
                        id='username'
                    />
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        handleUsernameSubmit: (username) => dispatch(doSaveUsername(username))
    }
}

export default connect(null, mapDispatchToProps)(Authentication)