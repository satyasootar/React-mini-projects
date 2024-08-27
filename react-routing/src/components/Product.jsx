import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Product() {
 const [Product, setProduct] = useState([])
  
  useEffect(()=>{
    getProduct()
  },[])
  const getProduct = async() =>{
    let res = await fetch(`https://${import.meta.env.VITE_PRODUCTS}/products`)
    let Data = await res.json();
    setProduct(Data) 
    console.log("Data: ", Data);
  } 
  return (
   <div>
        {Product.length > 0 ? ( 
          <div style={{padding:"30px 100px" }}>
          <table style={{width:"100%",}} rules='all' frame='box' cellPadding={10} >
            <thead style={{color:"white", backgroundColor:"black" , height:"50px" }}>
              <tr>
                <th>sl.no</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
              <tbody style={{textAlign:"center"}} >
                { 
                  Product.map((ele, idx)=>(
                    <tr key={idx} >
                      <td>{ele.id}</td>
                      <td style={{padding:"10px"}} >
                        <img style={{width:"70px"}} src={ele.image} alt='ProductImg' />
                      </td>
                      <td>{ele.title}</td>
                      <td>${ele.price}</td>
                      <td ><Link to = {`/productdetails/${ele.id}` }style={{color:"blue", marginRight:"0"}} >Details</Link></td>
                    </tr>
                  ))
                }
              </tbody>
            
          </table>
        </div>
         ):( 
          <div>
          <h2 style={{ color: "red", textAlign: "center" }}>Product not found</h2>
          </div>)}
   </div> 
  )
}
