import React , {useContext} from 'react'
import { CounterContext } from '../Context/Counter'

const CounterNo = () => {
    const counterState = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => counterState.setCount(prev => prev+1)}>Increment</button>
      <button onClick={() => counterState.setCount(prev => prev - 1)}>Deccrement</button>
    </div>
  )
}

export default CounterNo
