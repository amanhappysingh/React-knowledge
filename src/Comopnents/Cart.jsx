import React  from 'react'
import { useCart } from '../Context/Cart'

const Cart = () => {
    const cart = useCart()

    const total = cart.items.reduce((a , b) => a+ b.price , 0)
  return (
    <div className='cart'>
      {
        cart && cart.items && cart.items.map((item) => <li>{item?.name} - {item.price}</li>)
      }

      <h5>Total - ${total} </h5>
    </div>
  )
}

export default Cart
