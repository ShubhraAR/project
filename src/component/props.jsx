import React from 'react'

export default function props() {
    const Print =({name,phone})=><h1>My name is {name}-{phone}</h1>
    
    const fruits=["apple","Orange","grapes","pineapple"];
    const FruitsDisplay=({value})=><li style={{textTransform:"capitalize"}}>{value}</li>
  return (
    <div><h1>This is props page</h1>
   
    {/* {Print("Shubhra")} */}
    <Print name="shubhra" phone={2167795646}/>
    <h2>I have {fruits.length} Fruits</h2>
   <ol>
    {fruits.map((item)=><FruitsDisplay value={item}/>)}
   </ol>
    </div>
  )
}
