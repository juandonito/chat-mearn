import { USERNAME_SAVE, SOCKET_CONNECT } from '../constants/actionTypes'

export const doSaveUsername = (username) => {
    return {
        type: USERNAME_SAVE,
        payload: {
            username
        }
    }
}

export const doConnectSocket = username => {
    return {
        type: SOCKET_CONNECT,
        payload: {
            username
        }
    }
}

export const doLogin = username => dispatch => {
    dispatch(doConnectSocket(username));
    dispatch(doSaveUsername(username));
}