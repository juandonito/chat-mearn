import './UserInfo.scss'

import React from 'react'

const UserInfo = ({ user }) => {

    return (
        <div className='user-info-min'>
            {user}
        </div>
    )
}

export default UserInfo