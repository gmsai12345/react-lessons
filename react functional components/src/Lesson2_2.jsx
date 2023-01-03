// props => js function => HTML(JSX)
// props are functional components
// this.props are for class components
// import React, { useCallback } from "react";

// export default function (props) {
//   const handleClick = useCallback(() => {
//     console.log("Button was clicked");
//   }, []);

//   return <button onClick={handleClick}>Click me</button>;
// }
// if you want to put same message without using
// callback and you want to post the message
// always use use state whenever the message is clicked
// it changes state and posts the that message
// basic event handling
import React, { useState } from "react";
export default function () {
  const [message, setMessage] = useState("");

  function handleClick() {
    setMessage("Button was clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
    </div>
  );
}
