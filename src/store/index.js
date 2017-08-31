import {applyMiddleware , compose,  createStore} from 'redux';
import rootReducer from '../reducers/'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

let initialState = {
    todos :[]
}

let finalCreateStore = compose(
    applyMiddleware(thunk, createLogger())
)(createStore)


const configureStore  = (initialState)=>{
    return finalCreateStore(rootReducer, initialState)
}

export default configureStore;