import io from 'socket.io-client'

import { SOCKET_MESSAGE_SEND, SOCKET_LOGIN } from './constants/actionTypes'

import { doAddMessage } from './actions/messageAction'

const createSocketMiddleware = url => store => {

    let socket;

    return next => action => {

        switch(action.type) {
            case SOCKET_LOGIN: {
                socket = io(url, {query: `username=${action.payload.username}`})
                addChatMessageListener(socket, msg => {
                    store.dispatch(doAddMessage(msg))
                })
                break
            }
            case SOCKET_MESSAGE_SEND: {
                socket.emit('chat message', action.payload)
                break
            }
            default: break
        }

        return next(action)
    }
}

const addChatMessageListener = (socket, cb) => {
    socket.on('chat message', cb)
}

const socketMiddleware = createSocketMiddleware('/');

export default socketMiddleware