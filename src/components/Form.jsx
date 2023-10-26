import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({name: "",email: "",phone: 0,});

  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({name: "",email: "",phone: 0,})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={handleInput}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={data.email}
          onChange={handleInput}
        />
        <br />
        <input
          type="number"
          name="phone"
          placeholder="phone"
          value={data.phone}
          onChange={handleInput}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
