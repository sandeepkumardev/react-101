import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Display count={count} />
      <Counter count={count} setCount={setCount} />
    </div>
  );
};

const Counter = ({ setCount, count }) => {
  const inc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={inc}>+</button>
    </div>
  );
};

const Display = (props) => {
  return <div>{props.count}</div>;
};

export default App;
