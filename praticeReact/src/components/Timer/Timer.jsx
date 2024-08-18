import './timer.css'
import { useRef, useState } from 'react'
export const Timer = () =>{
    const [timer, setTimer] = useState(0)
    
    let intervalId = useRef;
    
    const startTimer = () =>{
         intervalId = setInterval(()=>{
            
            setTimer((prevTimer)=>prevTimer + 1)
            
        },1000)
    }

    const stopTimer = () =>{
        clearInterval(intervalId)
    }

    return(
        <div className='card'style={{margin:"50px auto"}} >
            <h2>Timer : {timer}</h2>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>

    )
}