// import { useRef, useState } from "react"

import { useContext } from "react"
import Home from "./Home"
import { studentList } from "../db/Student";


 export const StudentContext= useContext();
export default function (){
  const list = studentList;

  // const [value,setValue]=useState(10);
  // const qimat=useRef(12);
  // function handleClick(){
  //   setValue(value+1);
  // }
  // function handleClick2(){
  //   qimat.current + 2;
  // }
  return(
    <div>
      <h1>Home Page</h1>
      <StudentContext.Provider>
        
      <Home/>
      </StudentContext.Provider>


    </div>
    // <>
    // <h1>{value}</h1>
    // <button onClick={handleClick}>+2</button>

    // <div>
    //   <h1>{qimat.current}</h1>
    //   <button onClick={handleClick2}> Add 2</button>
    // </div>
    // </>
  )
}