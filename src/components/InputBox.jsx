import React, { useState } from "react";

const InputBox = () => {
  const [input, setInput] = useState("");

  const inputHandle = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={inputHandle} placeholder="name"/>
    </div>
  );
};

export default InputBox;
