import React from "react";
import ReactDOM from "react-dom/client";
import Props from "./props";
import List from "./lists";

// const App = () => {
//   return (
//     <div>
//       <List/>
//     </div>
    
//     // <React.Fragment>
//     //   <h1>Hello, world!</h1>
//     //   <p>This is a paragraph within a fragment.</p>
//     // <List/>
//     // </React.Fragment>

//     // <React.Fragment>
//     //   <Props />
//     // </React.Fragment>
//   );
// };


// HOC to add logging functionality
const withLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Regular component
const MyComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

// Enhanced component with logging
const EnhancedComponent = withLogging(MyComponent);

// Usage
<EnhancedComponent name="John" />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<withLogging/>);
