import React, { Component } from "react";
import Another from "./anirher";

class Compo extends Component {
    state={
        value:'Gurucharan',
    }
  render() {
    return <div>
        <Another name={this.state.value}/>
    </div>;
  }
}
export default Compo;
