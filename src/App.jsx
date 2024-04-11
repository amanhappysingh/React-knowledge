import { useState , useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './Comopnents/Item'
import Cart from './Comopnents/Cart'


function App() {


  return (
    <>
    <div className='App'>
      <Item name='MackBook Pro' price={100000} />
      <Item name='iphone 13 Pro' price={90000} />
      <Item name='iPad Pro' price={110000} />
      <Cart />
    </div>
    </>
  )
}

export default App
