import { USERNAME_SAVE } from '../constants'

const USER_STATE = {
    username: ''
}

const userReducer = (state = USER_STATE, action) => {
    switch(action.type){
        case USERNAME_SAVE: {
            return applySaveUsername(state, action)
        }
        default: return state
    }
}

const applySaveUsername = (state, action) => {
    return { ...state, username: action.payload.username}
}

export default userReducer