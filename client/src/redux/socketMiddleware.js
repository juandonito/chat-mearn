import io from 'socket.io-client'

const createSocketMiddleware = () => {

    const socket = io('/')

    return store => next => action => {
        return next(action)
    }
}

const socketMiddleware = createSocketMiddleware();

export default socketMiddleware