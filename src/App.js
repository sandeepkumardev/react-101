import "./App.css";
import React, { createContext, useState } from "react";
import Display from "./components/Store/Display";
import Counter from "./components/Store/Counter";

// global store
export const AppStore = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <AppStore.Provider value={{ count, inc }}>
        <Counter />
        <Display />
      </AppStore.Provider>
    </div>
  );
};

export default App;
