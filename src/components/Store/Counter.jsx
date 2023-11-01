import React, { useContext } from "react";
import { AppStore } from "../../App";

const Counter = () => {
  const { count, inc } = useContext(AppStore);

  return (
    <div>
      {count}
      <button onClick={inc}>+</button>
    </div>
  );
};

export default Counter;
