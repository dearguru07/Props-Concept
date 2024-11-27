import { useState } from "react";
import Kichen from "./kichen";

const Home=()=>{
    const [a,seta]=useState(0)
    return <div>
        <Kichen/>
        <h4>{a}</h4>
        <button onClick={()=>{
            seta(a+1)
        }}>Click Here</button>
    </div>
}
export default Home;