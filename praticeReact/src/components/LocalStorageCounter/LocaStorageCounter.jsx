import useLocalStorage from "../../Hooks/useLocalStorage"

export default function LocaStorageCounter() {
  const [count , setCount] = useLocalStorage("count" , 10)
  const increment = ()=>{
    setCount((prevCount)=>prevCount+1)
  }
  const decrement =() =>{
    setCount((prevCount)=> prevCount - 1)
  }
  return (
    <div className='card' > 
    <h1>Local Storage Counter</h1>
    <div style={{display:"flex" , justifyContent:"center", alignItems:"center", gap:"10px"}} >
        <button onClick={decrement} >-</button>
        <h1>{count}</h1>
        <button onClick={increment} >+</button>
    </div>
    </div> 
  )
}
