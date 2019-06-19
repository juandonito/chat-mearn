import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import socketMiddleware  from './middlewares/socketMiddleware'

const store = createStore(
    rootReducer, 
    undefined,
    applyMiddleware(socketMiddleware,thunk)
)

export default store