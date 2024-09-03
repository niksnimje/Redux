import { useDispatch } from "react-redux"
import { DecremetFunction, IncremetFunction } from "../Redux/action"


function CounterButtons() {

    const dispatch = useDispatch()

    const hendelIncrement = () => {
        dispatch(IncremetFunction())
    }

    const hendelDecrement = () => {
        dispatch(DecremetFunction())
    }


    return (
        <>
            <button onClick={hendelDecrement}>
                Decrement -
            </button>
            <button onClick={hendelIncrement}>
                Increment ++
            </button>
        </>
    )
}

export default CounterButtons
