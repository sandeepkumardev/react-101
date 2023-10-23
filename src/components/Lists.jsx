import React from "react";

const File = () => {
  const data = [
    {
      name: "first",
      icon: "icon",
    },
    {
      name: "sec",
      icon: "icon",
    },
    {
      name: "third",
      icon: "icon",
    },
  ];

  return (
    <div>
      {data.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
          <p>{item.icon}</p>
        </div>
      ))}
    </div>
  );
};

export default File;
