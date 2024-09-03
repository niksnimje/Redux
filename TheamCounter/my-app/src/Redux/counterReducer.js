import { DECREMENT, INCREMENT } from "./ActionType"

const initalstate = {
    counter: 0,
}

export const counterReducer = (state = initalstate, action) => {
    switch (action.type) {
        case INCREMENT:
            return { counter: state.counter + action.payload }
        case DECREMENT:
            return { counter: state.counter - action.payload }
        default: return state
    }
}


