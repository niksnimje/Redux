import { DARK, LIGHT } from "./ActionType"

const initalstate = {
    dark: false,
    light: true
}

export const themeReducer = (state = initalstate, action) => {
    switch (action.type) {
        case LIGHT:
            return { light: true, dark: false }
        case DARK:
            return {
                dark: true,
                light: false
            }
        default: return state
    }
}