import React from 'react'
import {Link} from 'react-router-dom'
export default function Home() {
  return (

<div style={{float:'left'}} >
     
     <h1>this is home page</h1>
        <Link to="/Arrow"><button variant="outlined" color="error">Arrow Function</button></Link><br/>
        <Link to="/Array"><button variant="outlined" color="error" >Array Function</button></Link><br/>
        <Link to="/spread"><button variant="outlined" color="error" >SpreadOperator Function</button></Link><br/>
        <Link to="/Shubhra"><button variant="outlined" color="error" >Shubhra Function</button></Link><br/>
        <Link to="/Ternary"><button variant="outlined" color="error" >Ternary Function</button></Link><br/>
        <Link to="/Destruct"><button variant="outlined" color="error" >Destructuring function</button></Link><br/>
        <Link to="/Props"><button variant="outlined" color="error" >Props page</button></Link><br/>
        <Link to="/table"><button variant="outlined" color="error" >Table</button></Link>
        <Link to="/complx"><button variant="outlined" color="error" >complex interaction</button></Link><br/>
        <Link to="/Button"><button variant="outlined" color="error" >basic button</button></Link><br/>
        <Link to="/state"><button variant="outlined" color="error" > state </button></Link>
        <Link to="/Effect"><button variant="outlined" color="error" > Use effect </button></Link>
        <Link to="/LocalStorage"><button variant="outlined" color="error" > Local storage </button></Link>
        <Link to="/Api"><button variant="outlined" color="error" >Api </button></Link>
        <Link to="/Card"><button variant="outlined" color="error" >Card </button></Link>
        
</div>  
  )
}
