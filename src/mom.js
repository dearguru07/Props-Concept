import { ContextData } from "./";
import { useContext } from "react";

const Mom = () => {
    const data=useContext(ContextData)
  return (
    <div>
      <h4>Im given the ......{data}</h4>
    </div>
  );
};
export default Mom;
