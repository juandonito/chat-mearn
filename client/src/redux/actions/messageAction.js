import uuid from 'uuid/v4'

import { MESSAGE_NEW } from '../constants'

export const doNewMessage = (author, message) => {
    return {
        type: MESSAGE_NEW,
        payload : {
            id: uuid(),
            author,
            message,
            date: new Date()
        }
    }
}