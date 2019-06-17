import { MESSAGE_ADD } from '../constants/actionTypes'

const MESSAGE_STATE = {
    messages: []
}

const messageReducer = (state = MESSAGE_STATE, action) => {
    switch(action.type){
        case MESSAGE_ADD: {
            return applyAddMessage(state, action)
        }
        default: return state
    }
}

const applyAddMessage = (state, action) => {
    return {
        messages: [...state.messages, action.payload]
    }
}

export default messageReducer