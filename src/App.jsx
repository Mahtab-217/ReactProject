import { useState } from "react"

export default function App(){
  const [value, setValue]=useState(10);
  function hadleClick(){
    setValue(value+1);
  }
  return(
    <>
    <div style={
      {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
    </div>
    </>
  )
}