import {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => {
        setCount(count - 1)
    };
  return (
    <main>
        <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>  event listener
    </main>
  )
}

export default Counter
