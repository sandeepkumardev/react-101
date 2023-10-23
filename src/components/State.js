import React, { useState } from "react";

const State = () => {
  const [user, setUser] = useState(true);

  const updateUser = () => {
    setUser(!user);
  };

  return (
    <div className="App">
      {user ? <h1>Hello, Sandeep</h1> : <h5>Please Login first!</h5>}
      {user && <p>Age: 25</p>}
      {user && <p>Phone: 0000000</p>}
      {user && <p>Email: email@gmail.com</p>}

      <button onClick={updateUser}>{user ? <>Logout</> : <>Login</>}</button>
    </div>
  );
};

export default State;
