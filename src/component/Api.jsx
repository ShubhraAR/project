import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Api() {
    const [data,setData]=useState([])
    const [single,setSingle]=useState([])
    useEffect(()=> { 
        //axios.get()-to get the data
        //axios.push()-to post(insert) the data
        //axios.put()-to put the data
        //axios.delete()-to delete the data
        axios.get("https://dummyjson.com/quotes")
      
      .then((res)=>{
       console.log(res,1111)
        setData(res.data.quotes)
      })

      .catch((err)=>{
        console.log(err,2222)
      })
         axios.get("https://dummyjson.com/quotes/random")
         .then((res)=>{
            console.log(res.data,9999)
             setSingle(res.data)
           })
     
           .catch((err)=>{
             console.log(err)
           })
},[])
  return (
    <div> <h1>Api</h1>
    <h2>Quote of the day-{single.quote} ({single.author})</h2>
    {data.map((item)=>{
        return(<Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            > <Typography>{item.author}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
               {item.quote}
              </Typography>
            </AccordionDetails>
          </Accordion>

        )
    } )}
    
   
      </div>
  )
}