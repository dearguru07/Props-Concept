import React from "react";
import ReactDOM from "react-dom/client";
import Props from "./props";
import List from "./lists";
import SideImgs from "./test";

const App = () => {
  return (
    <div>
      {/* <List/> */}
      <SideImgs/>
    </div>
    
    // <React.Fragment>
    //   <h1>Hello, world!</h1>
    //   <p>This is a paragraph within a fragment.</p>
    // <List/>
    // </React.Fragment>

    // <React.Fragment>
    //   <Props />
    // </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
