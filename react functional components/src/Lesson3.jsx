import React from "react";
export default function () {
  const names = ["bruce", "clark", "dia"];
  return (
    <div>
      {/* for writing script like 
      in div tag put them in under 
      bracket and write script like 
      html codes*/}
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}
