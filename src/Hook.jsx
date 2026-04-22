import { useReducer, useRef } from "react"

export default function Hook(){
    const h1=useRef(null);
    function change(){
        h1.current.style.cssText="background-color:red; color:white; font-size:32px";
    }
    return(
        <div style={
            {
                width: "100%",
                height: "fit",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column"
            }
        }>
            <h1 ref={h1}>Hi there good morning</h1>
            <button onClick={change}>Change Color</button>
        </div>
    )
}