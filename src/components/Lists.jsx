import React, { useEffect, useState } from "react";

const File = () => {
const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("./MOCK_DATA.json")
    .then(data => data.json())
    .then(data => {
      setResult(data);
    })
    .catch(err => console.log("error -> ", err))
  }, [])

  return (
    <div>
      {result.map((item, i) => (
        <div key={i} style={{border: "1px solid black", margin: "20px"}}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default File;
