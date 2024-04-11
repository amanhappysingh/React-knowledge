import { useState , useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { CounterContext } from './Context/Counter'
import CounterNo from './Comopnents/CounterNo'

function App() {

  const counterState = useContext(CounterContext)

  return (
    <>
    <h1>Count is {counterState?.count}</h1>
    <CounterNo/>
    <CounterNo/>
    <CounterNo/>
    <CounterNo/>
    </>
  )
}

export default App
