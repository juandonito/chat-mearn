import './InfoSideBar.scss'

import React from 'react'
import { connect } from 'react-redux'

import UserInfo from './UserInfo'

const InfoSideBar = ({ usersConnected }) => {

    console.log(usersConnected)

    const usersConnectedList = usersConnected.map(user => <UserInfo user={user}/>)

    return (
        <div className='info-sidebar'>
            {usersConnectedList}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        usersConnected: state.userState.usersConnected
    }
}

export default connect(mapStateToProps)(InfoSideBar)