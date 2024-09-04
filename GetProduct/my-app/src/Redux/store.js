
import { combineReducers, createStore } from 'redux'


import { reducer as AuthReducer } from './Auth/reducer';
import { reducer as ProductReducer } from './Product/reducer';



const rootreducer = combineReducers({ AuthReducer, ProductReducer })

export const store = createStore(rootreducer);
