import uuid from 'uuid/v4'

import { 
    MESSAGE_ADD,
    SOCKET_MESSAGE_SEND
} from '../constants'

export const doSendMessage = (author, message) => {
    return {
        type: SOCKET_MESSAGE_SEND,
        payload: {
            id: uuid(),
            author,
            message,
            date: new Date()
        }
    }
}

export const doAddMessage = (payload) => {
    return {
        type: MESSAGE_ADD,
        payload
    }
}