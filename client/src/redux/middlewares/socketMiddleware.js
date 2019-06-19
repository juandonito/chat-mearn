import io from 'socket.io-client'

import { SOCKET_MESSAGE_SEND, SOCKET_CONNECT, USER_SELF_TYPING, USER_SELF_NOT_TYPING } from '../constants/actionTypes'

import { doAddMessage, doInformMessage } from '../actions/messageAction'
import { doUserOtherTyping, doUserOtherNotTyping } from '../actions/userActions';

const createSocketMiddleware = url => store => {

    let socket;

    return next => action => {

        switch(action.type) {
            case SOCKET_CONNECT: {
                socket = io(url, {query: `username=${action.payload.username}`})
                addChatMessageListener(socket, msg => {
                    store.dispatch(doAddMessage(msg))
                })
                addInformationListener(socket, msg => {
                    store.dispatch(doInformMessage(msg))
                })
                addTypingUsersListener(socket, user => {
                    store.dispatch(doUserOtherTyping(user))
                })
                addNotTypingUsersListener(socket, user => {
                    store.dispatch(doUserOtherNotTyping(user))
                })
                break
            }
            case USER_SELF_TYPING: {
                socket.emit('user typing')
                break
            }
            case USER_SELF_NOT_TYPING: {
                socket.emit('user not typing')
                break
            }
            case SOCKET_MESSAGE_SEND: {
                socket.emit('chat message', action.payload)
                store.dispatch(doAddMessage(action.payload))
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

const addInformationListener = (socket, cb) => {
    socket.on('information message', cb)
}

const addTypingUsersListener = (socket, cb) => {
    socket.on('user typing', cb)
}

const addNotTypingUsersListener = (socket, cb) => {
    socket.on('user not typing', cb)
}

const socketMiddleware = createSocketMiddleware('/');

export default socketMiddleware