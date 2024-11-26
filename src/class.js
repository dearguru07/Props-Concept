// class App extends React.Component{
//     render(){
//         return <div>

//         </div>
//     }
// }


const App=(props)=>{
    return (<div>
        <img src={props.value.zimgId} alt="images"></img>
        <h5>{props.value.para}</h5>
        <p>{props.value.guru}</p>
        <p>{props.value.guu}k</p>
    </div>)
}

const data=[
    {imgId:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    para:"ghello",
    guru:"lorem vbhkedk",
    guu:"lorem vbhkedk"
},
{imgId:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    para:"ghello vanakam",
    guru:"lorem vbhkedk",
    guu:"lorem vbhkedkhbljsdnljck"
},
{imgId:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    para:"ghello namastee",
    guru:"lorem vbhkedk",
    guu:"lorem vbhkedk"

},
{imgId:"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    para:"ghello",
    guru:"lorem vbedk",
    guu:"lohkedk"

}
]
const Layout=()=>{
    return (<div>
        {
            data.map((x)=>{
                return <App value={x}/>
            }) 
        }
    </div>)
}
export default Layout;