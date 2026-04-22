import { useRef, useState } from "react"

export default function (){
  const [value,setValue]=useState(10);
  const qimat=useRef(12);
  function handleClick(){
    setValue(value+1);
  }
  function handleClick2(){
    qimat.current + 2;
  }
  return(
    <>
    <h1>{value}</h1>
    <button onClick={handleClick}>+2</button>

    <div>
      <h1>{qimat.current}</h1>
      <button onClick={handleClick2}> Add 2</button>
    </div>
    </>
  )
}