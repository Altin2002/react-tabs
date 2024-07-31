import React from 'react'
import './Cards.css'

const Cards = ({name, price, originalPrice}) => {
  return (
    <div className='cards'>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>Instead of {originalPrice}</p> 
        <button>Buy Now</button>       
    </div>
  )
}

export default Cards