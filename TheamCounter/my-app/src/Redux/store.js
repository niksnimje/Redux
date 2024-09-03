
import { counterReducer } from './counterReducer'

import { combineReducers, createStore } from 'redux'
import { themeReducer } from './themeReducer'


const rootreducer = combineReducers({ counterReducer,themeReducer })


const store = createStore(rootreducer)

export default store

