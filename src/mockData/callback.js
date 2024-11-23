import React, { useState } from "react";
import { useCallback } from "react";

const AllFuns = new Set();
const Back = () => {
  const [one, setone] = useState(0);
  const [two, settwo] = useState(0);
  const [three, setthree] = useState(0);

  const First = useCallback(() => {
    setone(one + 1);
  }, [one]);

  const Sec = useCallback(() => {
    settwo(two + 1);
  }, [two]);
  const Third = useCallback(() => {
    setthree(three + 1);
  }, [three]);
  AllFuns.add(First);
  AllFuns.add(Sec);
  AllFuns.add(Third);
  console.log(AllFuns);
  return (
    <div>
      <h1>{one}</h1>
      <button onClick={First}>Click</button>
      <h1>{two}</h1>
      <button onClick={Sec}>Click</button>
      <h1>{three}</h1>
      <button onClick={Third}>Click</button>
    </div>
  );
};
export default Back;
