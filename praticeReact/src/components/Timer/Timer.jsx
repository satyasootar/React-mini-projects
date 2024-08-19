import './timer.css'
import { useRef, useState } from 'react'
export const Timer = () =>{
    const [timer, setTimer] = useState(0)
    
    let intervalId = useRef(null);  //useRef returns a object which contains a value called current. If we assign a value as a parameter in useRef. It will by default store in the current. It's value will not change even a the componets get re-renders.
    
    const startTimer = () =>{
         intervalId.current = setInterval(()=>{
            // console.log("current: ", intervalId.current);
            
            setTimer((prevTimer)=>prevTimer + 1)
            
        },1000)
    }

    const stopTimer = () =>{
        clearInterval(intervalId.current)  //It will stop the set interval.
    }

    return(
        <div className='card'style={{margin:"50px auto"}} >
            <h2>Timer : {timer}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>

    )
}