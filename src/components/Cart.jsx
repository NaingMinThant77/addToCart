import React, { useContext } from 'react'
import CartItem from './CartItem'
import { itemContext } from '../store/itemContent'


const Cart = (props) => {
    const {items, totalAmount} = useContext(itemContext)

    const totalPrice = `$${totalAmount.toFixed(2)}`
return (
    <section className='cart-box'>
        <h2>Your cart items are here</h2>
      <section className='overflow-ctr'>
       {
            items.length > 0 ? (
                (items.map((fruit) => (
                <CartItem key={fruit.key} fruit={fruit}/>
                )) )
            ) : (<h1 className='no-item'>No item in your cart</h1>)
         }
      </section>
        <hr />
        <div className='total'>
            <h3>Total Price</h3>
            <p>$ {totalPrice}</p>
        </div>
        <div className='btns'>
                <button className='close-btn' onClick={props.hideCartHandler}>Close</button>
                {items.length > 1 ?
                (<button className='order-btn' onClick={() => {alert("orderd !!")}}>Order</button> ) : (<></>)
}
            </div>
    </section>
  )
}

export default Cart