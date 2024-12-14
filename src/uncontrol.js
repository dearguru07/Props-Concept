import React, { useRef } from 'react';
import { useState } from 'react';

function UncontrolledComponent() {
  const nameInput = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted name:', nameInput.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameInput} />
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolledComponent;


// import React, { useState } from 'react';

function ControlledComponent() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted name:', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
