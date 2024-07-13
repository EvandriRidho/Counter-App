import { useState } from "react";

let Count = () => {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let reset = () => {
    setCount(0);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <h1 className="value">{count}</h1>
      <button onClick={increment} className="increase">
        +
      </button>
      <button onClick={reset} className="reset">
        Reset
      </button>
      <button onClick={decrement} className="decrease">
        -
      </button>
    </div>
  );
};

export default Count;
