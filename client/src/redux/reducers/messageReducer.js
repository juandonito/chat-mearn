import { MESSAGE_NEW } from '../constants'

const MESSAGE_STATE = {
    messages: []
}

const messageReducer = (state = MESSAGE_STATE, action) => {
    switch(action.type){
        case MESSAGE_NEW: {
            return applyNewMessage(state, action)
        }
        default: return state
    }
}

const applyNewMessage = (state, action) => {
    return {
        messages: [...state.messages, action.payload]
    }
}

export default messageReducer