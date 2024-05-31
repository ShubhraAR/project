import React, { useState } from 'react'
import { Button, ButtonBase } from '@mui/material';

export default function State() {
    // let count =1;
    const[count,setCount]=useState(1)
    const counter =()=>{
        setCount(count+1)
        
    }
        const[name,setName]=useState('shubhra')
        const ChangeName =()=>{
            setName('shubhra')
        }
        const[email,setemail]=useState('')
        const HandleChange =(e)=>{
            console.log("e.target.value")
            setemail(e.target.value)          
}

const[color,setColor]=useState('')
const Color =(e)=>{
    setColor(e.target.value)          
}   
const[reg,SetReg]=useState("")
const[pho,SetPhone]=useState()
  return (
    <div><h1>This is sate page</h1>
    <h1 style={{color:color}}>My favorite Color</h1>
    <h2> {email} </h2>
    <input onChange={HandleChange} type="text" placeholder='enter your email'/>
   
    <h2>counter :{count} </h2>
    <Button onClick={counter} variant='contained'>+</Button>
    <Button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}> Red</Button>
    <Button  onClick={()=>setColor("blue")}style={{backgroundColor:"blue"}}>Blue</Button>
    <Button onClick={()=>setColor("green")}style={{backgroundColor:"yellowgreen"}}>Green</Button>
    <Button  onClick={()=>setColor("purple")}style={{backgroundColor:"purple"}}>Purple</Button>
    <br/>
    <br/>
    <input  onChange={(e)=>{SetReg(e.target.value)}} type="text" placeholder='enter your Register number'/><br/><br/>
    <input  onChange={(e)=>{SetPhone(e.target.value)}} type="text" placeholder='enter your phone number'/>
        </div>
  )
}
