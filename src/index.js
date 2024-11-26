import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
// import Props from "./mockData/props";
// import List from "./mockData/lists";
// import SideImgs from "./test";
// import Effect from "./mockData/effect";
// import Back from "./callback";
import Home from "./home";
import Ref from "./useRef";
import Layout from "./class";

export const ContextData=React.createContext()
const App = () => {
  const person=0
  return (
    <div>
      {/* <List/> */}
      {/* <SideImgs/> */}
      {/* <Effect/> */}
      {/* <Back/> */}

      {/* <ContextData.Provider value={person}>
        <Home/>
      </ContextData.Provider> */}

      {/* <Ref/> */}
      {/* <Layout/> */}
      {person && <span>Hello</span>}
      
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
