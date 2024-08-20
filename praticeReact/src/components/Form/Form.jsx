import "./Form.css";
import { useState, useRef } from "react";

let initialData = {
    name: "",
    password: "",
    email: "",
    city: ""
}

export default function Form() {

    const [data, setData] = useState(initialData);
    const [userData, setUserData] = useState([]);

    const nameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const cityRef = useRef();  //Added refs

    const displayTable = (event) => {
        event.preventDefault();
        if(nameRef.current.value == "" || passwordRef.current.value == "" || emailRef.current.value == ""|| cityRef.current.value == ""){
            alert("Please fill up the Input field")
        }else{

            setUserData([...userData, data]);
         
            nameRef.current.value = "";    // To reset the input field or DOM manupulation
            passwordRef.current.value = "";
            emailRef.current.value = "";
            cityRef.current.value = ""; 
    
            setData(initialData);  // To reset the input data

        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    return (
        <div className="card">
            <form onSubmit={displayTable}>
                <h2>User Form</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Enter name"
                        onChange={handleInputChange}
                        value={data.name}
                        name="name"
                        ref={nameRef}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        onChange={handleInputChange}
                        value={data.password}
                        name="password"
                        ref={passwordRef}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={handleInputChange}
                        value={data.email}
                        name="email"
                        ref={emailRef}
                    />
                </div>
                <br />

                <select
                    name="city"
                    onChange={handleInputChange}
                    value={data.city}
                    ref={cityRef}  // Fixed: Added the ref here
                >
                    <option value="">Select City</option>
                    <option value="Bhadrak">Bhadrak</option>
                    <option value="Dhenkanal">Dhenkanal</option>
                    <option value="Bhubaneswar">Bhubaneswar</option>
                    <option value="Cuttak">Cuttak</option>
                    <option value="Jajpur">Jajpur</option>
                </select>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.password}</td>
                            <td>{user.email}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
