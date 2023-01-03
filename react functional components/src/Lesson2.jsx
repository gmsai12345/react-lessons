import React from "react";
export default function (props) {
  return (
    <div>
      {/*there are two types of components
    stateless functional component and stateful
    functional component */}
      <h1>Hello, {props.name}!</h1>
      <p>This is a stateless function component.</p>
    </div>
  );
}
// the props can be called in the index.js
// if you look at it you can understand
