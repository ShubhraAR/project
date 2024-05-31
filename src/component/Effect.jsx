
import React, { useEffect, useState } from 'react'
import { Button} from '@mui/material';

export default function Effect() {
    const[count,setCount]=useState(1)
    const counter =()=>{
        setCount(count+1)
        
    }
    const[square,SetSquare]=useState(0);
    useEffect(()=>{ SetSquare(count*count)},[count])
    

  return (
    <div><h1>This is useEffect page</h1>
     <h2>counter :{count} </h2>
    <Button onClick={counter} variant='contained'>+</Button>
    <h2>Square :{square} </h2>
    
    </div> 
  )
}
