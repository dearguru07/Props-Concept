import React, { Component } from "react";

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.increment}>+</button>
//         <button onClick={this.decrement}>-</button>
//       </div>
//     );
//   }
// }

// export default Counter;

class Count extends Component {
  state = { count: 0 };
  inc = () => {};
  dec = () => {};
  render() {
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
export default Count;