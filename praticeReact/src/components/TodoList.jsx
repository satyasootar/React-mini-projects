import { useState } from "react"
import { Todoitem } from "./Todoitem"

export const TodoList = () =>{
    const [state , setState] = useState("");
    const [todoitems,setTodoitems] = useState([]);
    const addlist =(e)=>{
          setState(e.target.value)
        }
   
   
    const addtodoitems = () =>{
       var newItem = {
       title: state,
       status: false
       }

       setTodoitems([...todoitems, newItem])
    }
    const toggleItem = (index) =>{
         var toggleditems = todoitems.map((item , idx)=>{
               return index == idx?{...item , status: !item.status}: item
         })
         setTodoitems(toggleditems)

    }

    const del = (index) =>{
      var filteredData = todoitems.filter((item,idx)=>{
            return index != idx
        })
        setTodoitems(filteredData)
    }

    return(
        <div>
            <input value={state} type="text" placeholder="Enter the task" onChange={addlist} />
            <button onClick={addtodoitems} >Add</button>

            <Todoitem todoitem = {todoitems}
             deleteitem = {del} toggleItem = {toggleItem} /> 
        </div>
    )
} 