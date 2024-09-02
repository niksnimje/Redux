
import { combineReducers, createStore } from 'redux'

import { reducer as AuthReducer } from '../Redux/Product/reducer';
import { reducer as ProductReducer } from '../Redux/Product/reducer';



const rootreducer = combineReducers({ AuthReducer, ProductReducer })

export const store = createStore(rootreducer);
