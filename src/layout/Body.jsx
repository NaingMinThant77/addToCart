import React from 'react'
import Card from '../components/Card'

const fruits = [
  {
    id: 1,
    price: 10.98,
    name: "Banana",
    description: "Fresh banana form Thailand"
  },
  {
    id: 2,
    price: 12.98,
    name: "Apple",
    description: "Fresh apple form Thailand"
  },
  {
    id: 3,
    price: 8,
    name: "Mango",
    description: "Fresh mango form Thailand"
  },
  {
    id: 4,
    price: 5.55,
    name: "Kiwi",
    description: "Fresh kiwi form Thailand"
  },
  {
    id: 5,
    price: 6.89,
    name: "Orange",
    description: "Fresh orange form Thailand"
  },
];

const Body = () => {
  return (
    <section className='body'>
      {
        fruits.map((fruit) => (
          <Card key={fruit.id} fruit={fruit} />
        ))
      }
    </section>
  )
}

export default Body