
import { useSelector } from 'react-redux'

function CounterValue() {

    const Countervalue = useSelector((store) => store.counterReducer)
    return (
        <>
            <h1>{Countervalue.counter}</h1>
        </>
    )
}

export default CounterValue
