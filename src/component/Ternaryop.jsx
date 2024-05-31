import React from 'react'

export default function Ternaryop() {
    const Click=(item)=>{
    //     if(item=="left"){
    //         alert('you have clicked on left button')
    //     }
    //     else if(item=="back"){
    //         alert('you have clicked on back button')
    //     }
    //     else{
    //       alert('you have clicked on right button')
    //     }
    //  }
     item=="left"?
     alert("you have clicked on left button")
     :item=="back"?
        alert("you have clicked on back button")
          :
        alert("you have click on right button")
    }
    let dark=true;
  return (
    <div><h1 style={{color:"white"}}>Ternary operator</h1>
    <button onClick={()=>Click("left")}>LEFT</button>
    <button onClick={()=>Click("right")}>RIGHT</button>
    <button onClick={()=>Click("back")}>BAck</button>
    <h1 style={{backgroundColor:dark?"black":"white",color:dark?"white":"black"}}>hello my name is shubhra</h1>
        </div>
  )
}
