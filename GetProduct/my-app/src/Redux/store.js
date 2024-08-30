
import { combineReducers, createStore } from 'redux'

import  {reducer as AuthReducer} from './Auth/reducer';



const rootreducer = combineReducers({ AuthReducer  })

export const store = createStore(rootreducer);
