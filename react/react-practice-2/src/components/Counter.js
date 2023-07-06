import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    // called after render
    console.log("component Did Mount");
    console.log("-------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("Render");

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h1 className="counter">Counter: {this.state.counter}</h1>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("----------------------");
  }
}
