import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changecolor } from "./ColorSlice";

const App = () => {
  const bgcolor=useSelector((state)=>state.bgcolor.color);
  const dispatch=useDispatch()
  const [val,setval]=useState("")
  return ( 
    <>
      <h1>welcome</h1>
      enter color:<input type="text" value={val}
      onChange={(e)=>{setval(e.target.value)}}/>
      <button onClick={()=>{dispatch(changecolor(val))}}>change color</button>

      <br/><br/>
      <div style={{width:"400px",height:"300px",backgroundColor:bgcolor}}></div>
    </>
   );
}
 
export default App;