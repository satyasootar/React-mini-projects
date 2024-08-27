import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export default function User() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {

    let res = await fetch(`https://${import.meta.env.VITE_RANDOMUSER}/api/?results=20`);
    let data = await res.json();
    console.log("data: ", data);

    setUsers(data.results);
  };
 
  return (
    <div>
      {users.length > 0 ? (
        <div style={{padding:"30px 100px"}} >
          <table style={{width:"100%"}} rules='all' frame="box" cellPadding={10}>
            <thead style={{color:"white", backgroundColor:"black" , height:"50px"}} >
              <tr>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody style={{textAlign :" center" , height:"50px"}} >
              {users.map((ele, idx) => (
                <tr key={idx}>
                  <td>
                    <img src={ele.picture.large} alt="User" />
                  </td>
                  <td>{`${ele.name.first} ${ele.name.last}`}</td>
                  <td>{ele.email}</td>
                  <td>{ele.gender}</td>
                  <td>
                    <Link style={{color:"blue"}} to="/userdetails">Details</Link>
                  </td>
                </tr>
              ))} 
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h2 style={{ color: "red", textAlign: "center" }}>User not found</h2>
        </div>
      )}
    </div>
  );
}
