import { LOGIN_FILED, LOGIN_REQ, LOGIN_SUCCES } from "../ActionType"

const initalstate = {
    isLoading: false,
    isError: false,
    token: null
}

export const reducer = (state = initalstate, action) => {
    switch (action.type) {
        case LOGIN_REQ:
            return { isLoading: true, isError: false, token: null }
        case LOGIN_SUCCES:
            return { isLoading: false, isError: false, token: action.payload }
        case LOGIN_FILED:
            return { isLoading: false, isError: true, token: null }
        default:
            return state
    }
}
