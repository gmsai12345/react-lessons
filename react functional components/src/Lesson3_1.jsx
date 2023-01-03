// for writing the same thing in diffrent
// way then write like this
import React from "react";
export default function () {
  const names = ["bruce", "clark", "dia", "sai"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return <div>{nameList}</div>;
}
