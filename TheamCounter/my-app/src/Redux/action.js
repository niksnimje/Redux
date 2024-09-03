import { DARK, DECREMENT, INCREMENT, LIGHT } from "./ActionType"

export const IncremetFunction = () => {
    return { type: INCREMENT, payload: 1 }
}
export const DecremetFunction = () => {
    return { type: DECREMENT, payload: 1 }
}


export const LightFunction = () => {
    return { type: LIGHT }
}
export const DarkFunction = () => {
    return { type: DARK }
}