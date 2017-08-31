import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import {Provider} from 'react-redux';
import configureStore from './store/';
//configure and create our store
//var store = createStore(reducers, initialState)

let initialState = {
    todos : [
        {
            id: 0,
            text : 'initial todo'
        }
    ]
}

let store = configureStore(initialState)

const app = (
    <Provider store ={store}>
    <Layout/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))