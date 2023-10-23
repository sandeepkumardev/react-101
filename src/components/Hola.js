import React, { useState } from "react";

const Hola = () => {
  const [user, setUser] = useState(false);

  const userHandle = () => {
    setUser(!user);
  };

  return (
    <div>
      {user ? <p>Profle</p> : <p>Please Login</p>}
      <button onClick={userHandle}>{user ? "Log out" : "Log in"}</button>
    </div>
  );
};

export default Hola;
