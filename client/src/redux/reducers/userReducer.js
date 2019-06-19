import { 
    USERNAME_SAVE, 
    USER_OTHER_TYPING, 
    USER_OTHER_NOT_TYPING, 
    SOCKET_INIT,
    USER_CONNECT,
    USER_DISCONNECT
} from '../constants/actionTypes'

const USER_STATE = {
    username: '',
    usersTyping: [],
    usersConnected: []
}

const userReducer = (state = USER_STATE, action) => {
    switch(action.type){
        case USERNAME_SAVE: {
            return applySaveUsername(state, action)
        }
        case USER_OTHER_TYPING: {
            return applyTypingUserOther(state, action)
        }
        case USER_OTHER_NOT_TYPING: {
            return applyNotTypingUserOther(state, action)
        }
        case SOCKET_INIT: {
            return applyInitTypingUsers(state, action)
        }
        case USER_CONNECT: {
            return applyConnectUser(state, action)
        }
        case USER_DISCONNECT: {
            return applyDisconnectUser(state, action)
        }
        default: return state
    }
}

const applySaveUsername = (state, action) => {
    return { ...state, username: action.payload.username}
}

const applyTypingUserOther = (state, action) => {
    return { ...state, usersTyping: [...state.usersTyping, action.payload.user]}
}

const applyNotTypingUserOther = (state, action) => {
    const usersTyping = state.usersTyping.filter(user => user !== action.payload.user)
    return {...state, usersTyping}
}

const applyInitTypingUsers = (state, action) => {
    return {
        ...state, 
        usersTyping: action.payload.usersTyping, 
        usersConnected: action.payload.usersConnected
    }
}

const applyConnectUser = (state, action) => {
    return {
        ...state,
        usersConnected: [...state.usersConnected, action.payload.user]
    }
}

const applyDisconnectUser = (state, action) => {
    const usersConnected = state.usersConnected.filter(user => user !== action.payload.user)
    console.log(usersConnected)
    return {
        ...state,
        usersConnected        
    }
}

export default userReducer