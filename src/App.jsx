import {  useRef, useState } from "react"
import Hook from "./Hook";

export default function App(){
  const [value, setValue]=useState(10);
  const qimat = useRef(90);
  function increase(){
    qimat.current++;
  }
  function hadleClick(){
    setValue(value+1);
  }
  return(
    <>
    <div style={
      {
        width: "100%",
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }
    }>
      <div style={
        {
            display: "flex",
            gap:"10px",

        }
      }>
      <h1>{value}</h1>
      <button onClick={hadleClick} style={
        {
          
        }
      }>Add</button>
      </div>
      <div>
        <h1>{qimat.current}</h1>
        <button onClick={increase}>Add</button>
      </div>



    </div>

   <Hook/>
    </>
  )
}