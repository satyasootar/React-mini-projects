import "./Form.css";
import { useEffect, useState } from "react";


let initialData = {
    name: "",
    password: "",
    email: "",
    city: ""
}

export default function Form() {

    const [data, setData] = useState(initialData)
    const handleName = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value,
        })
    }

    const getData =(event) =>{
        event.preventDefault();
        console.log(data);
    }
    return (
        <div className="card">
            <form onSubmit={getData} >
                <h2>User Form</h2>
                <div>  
                    <input type="text" placeholder="Enter name" onChange={handleName} name="name"/>
                </div>
                <br />
                <div>
                    <input type="password" placeholder="Enter Password" onChange={handleName} name="password" />
                </div>
                <br />
                <div>
                    <input type="email" placeholder="Enter Email" onChange={handleName}  name="email" />
                </div>
                <br />

                <select name="city" onChange={handleName}  >
                    <option>Select City</option>
                    <option>Bhadrak</option>
                    <option>Dhenkanal</option>
                    <option>Bhubaneswar</option>
                    <option>Cuttak</option>
                    <option>Jajpur</option>
                </select>

                <div>
                    <button>Submit</button>
                </div>
            </form>

            <div>

            </div>
        </div>
    );
}
