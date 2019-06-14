import { combineReducers } from 'redux'

import userReducer from './userReducer'
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
    userState : userReducer,
    messageState : messageReducer
})

export default rootReducer