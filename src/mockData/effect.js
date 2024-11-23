import React, { useState } from "react"

const Effect=()=>{
    const [search,setsearch]=useState('Apple')
    return <div>
        <input value={search} onChange={(x)=>{
            setsearch(x.target.value)
        }}></input>
    </div>
}
export default Effect;