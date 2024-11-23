import React from "react";


const Card=(props)=>{
    return <div className="card">
        <img src={props.data.imgId}></img>
        <h4 className="data">{props.data.heading}</h4>
        <p className="data">{props.data.ratings}</p>
        <p className="data">{props.data.items}</p>
    </div>
}
const One={
    imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/azgtwzbi2xzs1qjw0gir",
    heading:"Brahmins' Thatte Idli",
    ratings:'4.2',
    items:'Indile,Dosa,Vada,Pongal'
}

const PropApp=()=>{
    return <div>
        <Card/>
    </div>
}
export default Card;