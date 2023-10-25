import React from "react";

const File = () => {
  const data = [
    {
      name: "first",
      icon: "icon 1",
    },
    {
      name: "sec",
      icon: "icon 2",
    },
    {
      name: "third",
      icon: "icon 3",
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
