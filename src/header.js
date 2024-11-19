import { useState } from 'react';
const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Header</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default Header;