import React from 'react'
export default function ArrowFunction() {
//  function Hello(){
  //  alert('this is function')
 // }
  const Arrow = a =>    
     alert("this is arrow function" +a)
  //Arrow("Shubhra")
  const Printer=(name,phone)=>{
    alert(`I am ${name},phone:${phone}`)
  }
  return (
    <div>
        <h2 style={{color:"purple"}}>Arrow Function</h2>
         <h2 style={{color:"purple"}}>my name is Shubhra</h2>
         <button style={{backgroundColor:"violet"}} onClick={()=>Arrow("shubhra")}> Hello</button>   
         <button style={{backgroundColor:"greenyellow"}} onClick={()=>Printer("Shubhra",3222454)}> Print name</button>     
    </div>
  )
}
