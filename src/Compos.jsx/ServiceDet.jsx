import React from 'react'
import { servicedet } from '../Redux/GetSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { produc } from '../Redux/Helper';
import { useParams } from 'react-router-dom';
import { Paper } from '@mui/material';
import Navbar from './Navbar';


export default function ServiceDet() {

    const id = useParams();
    const dispatch = useDispatch();

useEffect(()=>{
dispatch(servicedet(id.id));
},[]);

const {servdets} = useSelector((state)=>state.Get);
console.log(servdets);








  return (
    <div >
      <Navbar/>
      <div style={{marginTop:"30px"}}>
    <Paper variant='elevation' elevation={10} style={{borderRadius:"20px",width:"90%",margin:"auto",padding:"20px",marginTop:"50px",marginBottom:"50px"}}>
        <h1>
            {servdets.service_name}
        </h1>
        <img src={produc(servdets.image)} style={{height:"300px",width:"80%",marginLeft:"110px",borderRadius:"20px"}} alt="" />
        <p>
            {servdets.service_description}
        </p>
        <h2>
           Service ID- {servdets._id}
        </h2>
        <h2>
           Trainer ID- {servdets.trainerId}
        </h2>
      
    </Paper>
    </div>
    </div>
  )
}
