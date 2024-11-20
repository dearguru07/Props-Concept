import React from "react";


const Card=(props)=>{
    return <div className="card">
        <img src={props.data.imgId}></img>
        <h4 className="data">{props.data.heading}</h4>
        <p className="data">{props.data.ratings}</p>
        <p className="data">{props.data.items}</p>
    </div>
}
const Array=[
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/azgtwzbi2xzs1qjw0gir",
        heading:"Brahmins' Thatte Idli",
        ratings:'4.2',
        items:'Indile,Dosa,Vada,Pongal'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/8/636369fc-5325-4094-ad48-da6c5f2b276f_893558.jpg",
        heading:"Veena Stores",
        ratings:'4.0',
        items:'South Indian, Indian, Snacks,Sahakar,Nagar'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fp5ignthqm9ujdwejor4",
        heading:"Swathi Gardenia",
        ratings:'4.7',
        items:'South indian Biryani,kabab'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fp5ignthqm9ujdwejor4",
        heading:"Swathi Gardenia",
        ratings:'4.7',
        items:'South indian Biryani,kabab'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fp5ignthqm9ujdwejor4",
        heading:"Swathi Gardenia",
        ratings:'4.7',
        items:'South indian Biryani,kabab'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fp5ignthqm9ujdwejor4",
        heading:"Swathi Gardenia",
        ratings:'4.7',
        items:'South indian Biryani,kabab'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fp5ignthqm9ujdwejor4",
        heading:"Swathi Gardenia",
        ratings:'4.7',
        items:'South indian Biryani,kabab'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fp5ignthqm9ujdwejor4",
        heading:"Swathi Gardenia",
        ratings:'4.7',
        items:'South indian Biryani,kabab'
    },
    {
        imgId:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fp5ignthqm9ujdwejor4",
        heading:"Swathi Gardenia",
        ratings:'4.7',
        items:'South indian Biryani,kabab'
    },
    
]
const Props=()=>{
    return <div className="flex">
        {
            Array.map((x)=>{
                return <Card data={x}/>
            })
        }
    </div>
}
export default Props;