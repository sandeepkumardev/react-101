import React from "react";
import UserProfile from "./UserProfile";

const Navbar = (props) => {
  return (
    <div>
      <UserProfile name={props.name} />
    </div>
  );
};

export default Navbar;
