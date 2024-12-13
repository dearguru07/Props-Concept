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
import Mom from "./mom";
import MyForm from "./home";
import Compo from "./classC";
import MyFormOne from "./anirher";
import Counter from "./counter";
import Count from "./counter";

export const ContextData=React.createContext()
const App = () => {
  const person=0
  async function API(){
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0445612&lng=77.57268839999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const OriginalData=await data.json()
    console.log(OriginalData)
  }
  API()
  return (
    <div>
      {/* <List/> */}
      {/* <SideImgs/> */}
      {/* <Effect/> */}
      {/* <Back/> */}

      {/* <ContextData.Provider value={person}>
        <Home/>
      </ContextData.Provider> */}
      {/* <MyForm/> */}
      {/* <MyFormOne/> */}
      <Count/>
      {/* <Compo/> */}
      {/* <Ref/> */}
      {/* <App/> */}
      {/* <Layout/> */}
      {/* {person && <span>Hello</span>} */}
      
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
