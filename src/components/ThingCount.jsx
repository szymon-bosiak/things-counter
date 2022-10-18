import React from 'react'
import { useQuantity } from './useQuantity';

const ThingCount = () => {

    const quantity = useQuantity();

    const increment = () => {
        quantity.setValue(quantity.value + 1);
    };

    const decrement = () => {
        quantity.setValue(quantity.value - 1)
    };

  return (
    <div className='count_area'>
        <div className='count_container'>
              <button className='btn' onClick={decrement}>-</button>
              <div className='count'>{quantity.value}</div>
              <button className='btn' onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default ThingCount