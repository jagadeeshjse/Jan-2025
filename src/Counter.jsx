import React, { useState, useEffect } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);

  // useEffect(()=>{

  // });

  //No dependency

  useEffect(() => {
    //run on every render
    console.log('runs on every render')
  });

  //empty dependency

  useEffect(() => {
    //runs only on first render

    console.log('first rendering')
  }, []);


  //with dependency values
  //state or prop value changes

  useEffect(() => {
    //first time rendering and state or prop changed
    console.log('state changed')
  }, [count])




  console.log(count)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
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
