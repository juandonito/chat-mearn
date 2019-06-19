import './InformationMessage.scss'

import React from 'react'

const InformationMessage = ({message}) => {

    return (
        <div className='information-msg'>
            {message.message}
        </div>
    )
}

export default InformationMessage