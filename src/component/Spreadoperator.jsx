import React, { version } from 'react'

export default function Spreadoperator() {
  const num1=[1,2,3,4,5];
  const num2=[6,7,8,9,10];
  const num3=[...num1,...num2]
  console.log(num3)

  const myvehicle={
    brand:"Ford",
    model:"mustang",
    year:2020,
    color:"red",
  }
  const updateVehicle={
    version:1.2,
    top_speed: 220,
    color:"yellow",
  }
  const myUpdatedvehicle={...myvehicle, ...updateVehicle}
  console.log(myUpdatedvehicle)

  const fruits=["apple","orange","pineapple","grapes","kiwi"];
  const[a,b,...c]=fruits


  return (
    <div style={{ backgroundColor:"lightgray"}}>
        <h1 style={{color:"white",backgroundColor:"purple"}}>Spreadoperator</h1>
    <h3>{num1}</h3>
    <h3>{num2}</h3>
    <h3>{num3}</h3>

    <h3>{a}</h3>
    <h3>{b}</h3>
    <h3>{c}</h3>
    <h3>{a}{b}{c}</h3>

    </div>
  )
}
