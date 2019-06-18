import { USERNAME_SAVE, SOCKET_LOGIN } from '../constants/actionTypes'

export const doSaveUsername = (username) => {
    return {
        type: USERNAME_SAVE,
        payload: {
            username
        }
    }
}

export const doLoginSocket = username => {
    return {
        type: SOCKET_LOGIN,
        payload: {
            username
        }
    }
}