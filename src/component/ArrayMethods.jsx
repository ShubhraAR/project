import React from 'react'

export default function ArrayMethods() {
    const fruits=[" apple "," orange "," banana "," mango "];

     let mapping=fruits.map((item,index)=><h1>{++index}{item}</h1>)

     let obj ={name:"shubhra",age:"20"}
     let studentData =[
        {name:"shubhra",reg:123,phone:92324632,email:"shubhra@gmail.com"},
        {name:"shreya",reg:124,phone:924354,email:"shreya@gmail.com"},
        {name:"spandana",reg:125,phone:92336632,email:"spandana@gmail.com"},
        {name:"swathi",reg:126,phone:9232533,email:"swathi@gmail.com"},
        {name:"sharanya",reg:127,phone:92325354,email:"sharanya@gmail.com"},
     ]
    return (
    <div>
        <h2 style={{color:"white", backgroundColor:"purple"}}>ArrayMethods</h2>
       <h2>{fruits}</h2>
       {mapping}
       <table border={2}><tr>
        <th>Sl No</th>
        <th>Fruits</th>
        </tr>
        
            {fruits.map((item,index)=>{
                return(  <tr>
                    <td>{++index}</td>
                    <td>{item}</td></tr>)
            })}
          
            </table>
            <table border={3}>
                <tr>
                    <th>SI NO </th>
                    <th>Name</th>
                    <th>phone</th>
                    <th>Email</th>
                 </tr>
                 {studentData.map((value,index)=>{
                    return(
                        <tr><td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.phone}</td>
                            <td>{value.email}</td>
                        </tr>
                    )
                 })
                 }
            </table>
    </div>
  )
}
