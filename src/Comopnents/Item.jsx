import React  from 'react'
import { useCart } from '../Context/Cart'

const Item = (props) => {
    const cart = useCart
  return (
    <div className='Item-card'>
      <h4>{props?.name}</h4>
      <p>${props?.price}</p>
      <button onClick={() => {
        cart.setItems([...cart.items , {
            name : props.name,
            price : props.price
        }])
      }}>Add To Cart</button>
    </div>
  )
}

export default Item
