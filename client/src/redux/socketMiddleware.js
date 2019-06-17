import io from 'socket.io-client'

import { SOCKET_MESSAGE_SEND } from './constants'

import { doAddMessage } from './actions/messageAction'

const createSocketMiddleware = url => store => {

    const socket = io(url)

    socket.on('chat message', msg => {
        store.dispatch(doAddMessage(msg))
    })

    return next => action => {

        switch(action.type) {
            case SOCKET_MESSAGE_SEND: {
                socket.emit('chat message', action.payload)
                break
            }
            default: break
        }

        return next(action)
    }
}

const socketMiddleware = createSocketMiddleware('/');

export default socketMiddleware