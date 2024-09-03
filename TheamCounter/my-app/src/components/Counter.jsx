import { useSelector } from "react-redux"
import CounterButtons from "./CounterButtons"
import CounterValue from "./CounterValue"



function Counter() {
    const { dark } = useSelector((state) => state.themeReducer)

    return (
        <div className={`${dark ? "bg-dark text-light" : "bg-light text-dark"}`}>
            <h1>Counter</h1>
            <CounterValue />
            <CounterButtons />

        </div>
    )
}

export default Counter
