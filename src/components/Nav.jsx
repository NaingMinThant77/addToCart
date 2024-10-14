import React, { useContext } from 'react'
import { itemContext } from '../store/itemContent';

const Nav = (props) => {

  const {items } = useContext(itemContext);

  const totalCart = items.reduce((currentVal, item) => {
    return currentVal + item.amount
  }, 0);

  return (
    <nav className='nav'>
        <h2>Shoppy</h2>
        <button onClick={props.showCartHandler}>Card <span>({totalCart})</span></button>
    </nav>
  )
}

export default Nav