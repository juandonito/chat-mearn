import uuid from 'uuid/v4'

import { 
    MESSAGE_ADD,
    SOCKET_MESSAGE_SEND
} from '../constants/actionTypes'

import {
    TEXT,
    INFO
} from '../constants/messageTypes'

export const doSendMessage = (author, message) => {
    return {
        type: SOCKET_MESSAGE_SEND,
        payload: {
            id: uuid(),
            author,
            message,
            date: new Date(),
            type: TEXT
        }
    }
}

export const doInformMessage = message => {
    return {
        type: MESSAGE_ADD,
        payload: {
            id: uuid(),
            message,
            date: new Date(),
            type: INFO
        }
    }
}

export const doAddMessage = (payload) => {
    return {
        type: MESSAGE_ADD,
        payload
    }
}