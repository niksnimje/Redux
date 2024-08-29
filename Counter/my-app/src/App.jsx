
import './App.css'

import { DecremetFunction, IncremetFunction } from './Redux/Action'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const Countervalue = useSelector((store) => store.counter)
  const dispatch=useDispatch()


  const hendelIncrement = () => {
    dispatch(IncremetFunction())
  }

  const hendelDecrement = () => {
    dispatch(DecremetFunction())
  }

  return (
    <>
      <h1>Counter={Countervalue}</h1>

      <button onClick={hendelIncrement}>+</button>
      <button onClick={hendelDecrement}>-</button>
    </>
  )
}

export default App;
