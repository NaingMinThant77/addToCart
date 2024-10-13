import React from 'react'
import CartItem from './CartItem'

const fruits = [
    {
        id: 1,
        price: 10.98,
        name: "banana",
        description: "fresh banana from thailand",
        quantity: 2
    },
    {
        id: 2,
        price: 12.98,
        name: "apple",
        description: "fresh apple from thailand",
        quantity: 1
    },
    {
        id: 3,
        price: 8,
        name: "mango",
        description: "fresh mango from thailand",
        quantity: 2
    },
]

const Cart = () => {
  return (
    <section className='cart-box'>
        <h2>Carts</h2>
        {
            fruits.map((fruit) => (
                <CartItem key={fruit.key} fruit={fruit}/>
            ))
        }
        <hr />
        <div className='total'>
            <h3>Total Price</h3>
            <p>$ 3000</p>
        </div>
        <div className='btns'>
                <button className='close-btn'>Close</button>
                <button className='order-btn'>Order</button>
            </div>
    </section>
  )
}

export default Cart