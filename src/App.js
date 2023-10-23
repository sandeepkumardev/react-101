import React, { useEffect } from "react";
import State from "./components/State";
import Hola from "./components/Hola";
import Lists from "./components/Lists";

const App = () => {
  // useEffect(() => {
  //   fetch("/MOCK_DATA.json") // Specify the path to your JSON file in the public folder
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Use the JSON data here
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error loading JSON file:", error);
  //     });
  // }, []);
  return (
    <div>
      Hello
      <Lists />
    </div>
  );
};

export default App;
