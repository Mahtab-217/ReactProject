import { useContext } from "react"
import {StudentContext} from "./App"
export default function Students(){
    const list= useContext(StudentContext);
    return (
        <div>
            <h1>
                List of All Students
            </h1>
            {list.length > 0 &&(
             <div style={
                {
                    width: "100%",
                    display: "flex",
                    gap: "20px",
                }
             }>
                {list.map(x=>(
                    <div>
                        <h1>{x.name}</h1>
                        {x.gender === "female"? `She is ${x.grade} grade`: `He is ${x.grade} grade.`}
                    </div>
                ))}
             </div>
            )}
        </div>
    )
}