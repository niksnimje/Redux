
import {reducer} from "./reducer"
import { createStore } from 'redux'



const initalstate = {
    counter : 0,
}

export const store = createStore(reducer, initalstate);
