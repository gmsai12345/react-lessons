import React from "react";
// so i am going to explain the diffrence
// class component and state component and breakout each things in it
// so first like of it says that it extends from react.component which is mandatory
// es6 it has same syntax and instead of using use state hook we can
// directly define the first state and in the future method we define
// the next state
// it is called in the increment in the method
// inface this.setstate is also an method this pattern is repeated
// everywhere
// and calling it in the button
// everytime you call the method you have to use this.methodname()
// dont care about the render just put it and call the className
// and then import it
export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
// The render method is called by React when the component is
//being rendered, and the returned element is used to update
//the component's UI.
