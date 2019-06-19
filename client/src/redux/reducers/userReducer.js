import { USERNAME_SAVE, USER_OTHER_TYPING, USER_OTHER_NOT_TYPING } from '../constants/actionTypes'

const USER_STATE = {
    username: '',
    usersTyping: []
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

export default userReducer