// import { useState } from "react";
// import Kichen from "./kichen";

// const Home=()=>{
//     const [a,seta]=useState(0)
//     return <div>
//         <Kichen/>
//         <h4>{a}</h4>
//         <button onClick={()=>{
//             seta(a+1)
//         }}>Click Here</button>
//     </div>
// }
// export default Home;

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
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default MyForm;
