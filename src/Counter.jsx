import React, { useState } from 'react';


const Counter = () => {
    const [count, setCount ] = useState(0);
    console.log(count)

    const increment = () =>{
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>count:{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter;
