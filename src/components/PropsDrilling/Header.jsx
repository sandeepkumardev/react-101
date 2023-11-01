import React from "react";
import Navbar from "./Navbar";

const Header = (props) => {
  return (
    <div>
      <Navbar name={props.name} />
    </div>
  );
};

export default Header;
