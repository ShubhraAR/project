import React from 'react'

export default function LocalStorage() {
    //insert - localStorage.setItem()
       //remove - localStorage.removeItem()
          //get - localStorage.getItem()
   localStorage.setItem("name","shubhra")
   localStorage.setItem("phone","35672")
   localStorage.setItem("name","shreya")
   const Addshubhra=()=>(localStorage.setItem("name","shubhra"))
   const Addshreya=()=>(localStorage.setItem("name","shreya"))
 
   const removeshreya=()=>(localStorage.removeItem("name"))
   const Getdata=()=>{
    let data=localStorage.getItem("name")
     console.log(data)
   }
   
  return (
    <div><h1>
        This is Local storage page</h1>
        <button onClick={Addshubhra} ariant='contained'>add shubhra</button>
        <button onClick={Addshreya} ariant='contained'>add shreya</button> <br/>
        <button onClick={removeshreya} ariant='contained'>remove name</button>
        <button onClick={Getdata} >get name</button>
        </div>
  )
}
