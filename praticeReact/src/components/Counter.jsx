import { useState } from "react"
const Count = () => {
    const [count , setCount] = useState(0)

    const increase = () =>{
        setCount(count + 1)
    }
    
    var styles = {
        textAlign:"center",
        boxShadow: "0 0 10px black",
        
    }
    return(
        <div className="container" style={styles}>
            <h1>Click to increase the count</h1>
            <h2>{count}</h2>
            <button onClick={increase} >Click</button>
        </div>
    )
}
export default Count