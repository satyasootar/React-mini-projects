import { useState } from "react";  
import { Todoitem } from "./Todoitem";  

export const TodoList = () => {  
    const [task, setTask] = useState(""); // Renamed 'state' to 'task' for clarity  
    const [todoItems, setTodoItems] = useState([]);  

    // Function to handle input change  
    const handleInputChange = (e) => {  
        setTask(e.target.value);  
    };  

    // Function to add a new item to the list  
    const addTodoItem = () => {  
        if (task.trim() === "") { // Check for empty or whitespace input  
            alert("Please enter a task");  
        } else {  
            const newItem = {  
                title: task,  
                status: false  
            };  
            setTodoItems([...todoItems, newItem]);  
            setTask(""); // Clear the input field after addition  
        }  
    };  

    // Function to toggle the status of a todo item  
    const toggleItem = (index) => {  
        const updatedItems = todoItems.map((item, idx) => {  
            return idx === index ? { ...item, status: !item.status } : item;  
        });  
        setTodoItems(updatedItems);  
    };  

    // Function to delete a todo item  
    const deleteItem = (index) => {  
        const filteredItems = todoItems.filter((item, idx) => idx !== index);  
        setTodoItems(filteredItems);  
    };  

    return (  
        <div className="container">  
            <hr />  
            <h1>Todo List</h1>  
            <input   
                value={task}   
                type="text"   
                placeholder="Enter the task"   
                onChange={handleInputChange}   
            />  
            <button onClick={addTodoItem}>Add</button>  
            <Todoitem   
                todoitem={todoItems}   
                deleteitem={deleteItem}   
                toggleItem={toggleItem}   
            />  
        </div>  
    );  
};