import React, { useRef } from "react";

const Ref=()=>{
    const namePerson=useRef()
    const emailPerson=useRef()
    const passPerson=useRef()
    function Click(){
        console.log(namePerson.current.value)
        console.log(emailPerson.current.value)
        console.log(passPerson.current.value)
    }
    return <div>
        <input placeholder="Enter a name" ref={namePerson}></input>
        <input placeholder="Enter a password" ref={emailPerson}></input>
        <input placeholder="Enter ur email" ref={passPerson}></input>
        <button onClick={Click}>Sign in</button>
    </div>
}
export default Ref;
