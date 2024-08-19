import { useRef } from "react"

export const DOM = () =>{

     let h2ref = useRef(null)
     let buttonref = useRef(null)
    const changeContent = () =>{
        h2ref.current.innerText = "Yo i am changed & i am rangin";
        h2ref.current.style.color = "#CD5C08";
        buttonref.current.style.backgroundColor = "#14e7ff"
    }

    return(
        <div className="card" >
            <h2 ref={h2ref} >Hii welcome to the pratice session</h2>
            <button ref={buttonref} onClick={changeContent} >Change the style & content</button>
        </div>
    )
}