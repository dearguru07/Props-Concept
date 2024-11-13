import React from 'react';
import ReactDOM from 'react-dom/client';
import Props from './props';

const App=()=>{
  return <div>
      <Props/>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
