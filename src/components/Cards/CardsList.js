import React from 'react'
import Cards from './Cards'

const CardsList = ({content}) => {
  return (
    <div className='cards-list'>
        {content.map((item, index) => (
            <Cards 
                key={index}
                {...item}
            />
        ))}        
    </div>
  )
}

export default CardsList