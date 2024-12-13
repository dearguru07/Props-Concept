// import React, { Component } from "react";
// import Another from "./anirher";

// class Compo extends Component {
//     state={
//         value:'Gurucharan',
//     }
//   render() {
//     return <div>
//         <Another name={this.state.value}/>
//     </div>;
//   }
// }
// export default Compo;

import { Component } from "react";
import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.name} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;