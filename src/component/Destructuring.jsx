import React from 'react'

export default function Destructuring() {
    const vehicle= ["BMW","Mustang","Volvo","Ford"];
    const car1=vehicle[0]; //old method of destructuring
    const car2=vehicle[1];  //old method of destructuring

    const [a,b,c]= vehicle //new method of destructuring
    const number=[1+1,5+5,10+10]
    const [x,y,z]=number
    //object
    const myvehicle={
        brand:"Ford",
        model:"mustang",
        year:2020,
        color:"red",
        register:{
            city:"Manglore",
            State:"Karnataka",
            country:"India",
        }
    }
const {color,brand,model,register:{city,state}}=myvehicle
//const {city,state}= myvehicle.register  
  return (
    <div style={{backgroundColor:"lightblue"}}><h1 style={{color:"greenyello",backgroundColor:"purple"}}>
        Destructuring</h1>
        <h2>{car1}</h2>
        <h2>{car2}</h2>  
        <h2>{a}</h2>
        <h2>{b}</h2>
        <h2>{c}</h2>
        <h2>I have {color} {brand} {model} ,register in {city}{state}</h2>
        </div>
  )
}
