// import React, { Component } from "react";

// class Another extends Component {
//   render() {
//     return <div>
//         <h4>{}</h4>
//     </div>;
//   }
// }
// export default Another;

// import React from "react";
// import { useState } from "react";

// function MyFormOne() {
//   const [name, setName] = useState("");

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(name);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={handleChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default MyFormOne;



import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component did update');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
