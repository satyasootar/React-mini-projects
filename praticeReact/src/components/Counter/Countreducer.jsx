import{ useState }from 'react'
import { useReducer } from 'react'

export default function Countreducer() {


function reducer(state , action){
   switch(action.type){
    case "increment":
        return {count:state.count + 1}
    case "decrement":
        return{count:state.count - 1}
    default:
        return state        
   }
}

// const [count , setCount] = useState(0) 
const [state , dispatch] = useReducer(reducer , { count:0 })  //Generally we will be using object in the second parameter of useReducer.

const increment = () =>{
       dispatch({type:"increment"})  // using useReducer
    // setCount((prevcount)=>(prevcount + 1))
}
const decrement = () =>{
    dispatch({type:"decrement"})  //using useReducer
    // setCount((prevcount)=>(prevcount - 1))
}
  return ( 
    <div className='card' > 
    <h1>useReducer</h1>
    <div style={{display:"flex" , justifyContent:"center", alignItems:"center", gap:"10px"}} >
        <button onClick={decrement} >-</button>
        <h1>{state.count}</h1>
        <button onClick={increment} >+</button>
    </div>
    </div> 
  )
}
