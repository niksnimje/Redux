import { DECREMENT, INCREMENT } from "./ActionType"

export const IncremetFunction = () => {
    return { type: INCREMENT, payload: 1 }
}
export const DecremetFunction = () => {
    return { type: DECREMENT, payload: 1 }
}