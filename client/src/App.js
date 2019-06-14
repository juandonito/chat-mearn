import React from 'react'
import { connect } from 'react-redux'

import Authentication from './components/Authentication'
import Chat from './components/Chat'

const App = ({ username }) => {

    if (!username) {
        return (
            <div className='App'>
                <Authentication />
            </div>
        )
    }

    return (
        <div className='App'>
            <Chat />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.userState.username
    }
}

export default connect(mapStateToProps)(App)