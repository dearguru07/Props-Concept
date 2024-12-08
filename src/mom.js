import { ContextData } from "./";
import { useContext } from "react";


const MainApp=(props)=>{
  return <div>
    <img src={props.Data.imgId} alt=""></img>
    <p>{props.Data.para}</p>
    <h5>{props.Data.dataInfo}</h5>
    <h6>{props.Data.meta}</h6>
  </div>
}

const Data=[
  {
    imgId:"https://images.pexels.com/photos/29319438/pexels-photo-29319438/free-photo-of-scenic-view-of-venice-s-grand-canal-with-gondolas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    para:"Image with part",
    dataInfo:'Hello world',
    meta:'dfjhsbehifbsh'
  },
  {
    imgId:"https://images.pexels.com/photos/29319438/pexels-photo-29319438/free-photo-of-scenic-view-of-venice-s-grand-canal-with-gondolas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    para:"Image with part",
    dataInfo:'Hello world',
    meta:'dfjhsbehifbsh'
  },
  {
    imgId:"https://images.pexels.com/photos/29319438/pexels-photo-29319438/free-photo-of-scenic-view-of-venice-s-grand-canal-with-gondolas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    para:"Image with part",
    dataInfo:'Hello world',
    meta:'dfjhsbehifbsh'
  },
  {
    imgId:"https://images.pexels.com/photos/29319438/pexels-photo-29319438/free-photo-of-scenic-view-of-venice-s-grand-canal-with-gondolas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    para:"Image with part",
    dataInfo:'Hello world',
    meta:'dfjhsbehifbsh'
  },
  {
    imgId:"https://images.pexels.com/photos/29319438/pexels-photo-29319438/free-photo-of-scenic-view-of-venice-s-grand-canal-with-gondolas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    para:"Image with part",
    dataInfo:'Hello world',
    meta:'dfjhsbehifbsh'
  },
  {
    imgId:"https://images.pexels.com/photos/29319438/pexels-photo-29319438/free-photo-of-scenic-view-of-venice-s-grand-canal-with-gondolas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    para:"Image with part",
    dataInfo:'Hello world',
    meta:'dfjhsbehifbsh'
  },
  {
    imgId:"https://images.pexels.com/photos/29319438/pexels-photo-29319438/free-photo-of-scenic-view-of-venice-s-grand-canal-with-gondolas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    para:"Image with part",
    dataInfo:'Hello world',
    meta:'dfjhsbehifbsh'
  }

]
const Mom = () => {
    // const data=useContext(ContextData
    return <div>
      {
        Data.map((x)=>{
          return <MainApp Data={x}/>
        })
      }
    </div>
};
export default Mom;
