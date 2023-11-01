import React, { useContext } from "react";
import { AppStore } from "../../App";

const Display = () => {
  const { count } = useContext(AppStore);

  return <div>{count}</div>;
};

export default Display;
