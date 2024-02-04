import React, { useEffect } from 'react'
import { profile } from '../Redux/ServiceSlice'
import { useDispatch, useSelector } from 'react-redux'
import { produc } from '../Redux/Helper';
import { Paper } from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Profile() {
    const dispatch = useDispatch();
    const {bookings} = useSelector((state)=>state.Serv);
    const authId = localStorage.getItem("id");



useEffect(()=>{
dispatch(profile(authId));  
},[]);



  return (
    <div style={{marginTop:"0px"}}>
      <Navbar/>
      <h1 style={{marginLeft:"50px",marginBottom:"50px"}}>
            Here are your all Bookings
        </h1>
        <h2 style={{marginLeft:"50px",marginBottom:"50px"}}>
          Your Member ID is- {authId}
        </h2>
      {bookings.map((items,ind)=>{
        return(
<>

<Paper variant='elevation' elevation={10} style={{borderRadius:"20px",width:"90%",margin:"auto",padding:"20px",marginTop:"20px",marginBottom:"50px"}}>
        <h1>
          {ind+1}  {items.serviceId.service_name}
        </h1>
        <img src={produc(items.serviceId.image)} style={{height:"300px",width:"80%",marginLeft:"110px",borderRadius:"20px"}} alt="" />
        <p>
            {items.serviceId.service_description}
        </p>
        <h3>
          Scheme- {items.scheme}
        </h3>
        <h3>
          Price- {items.price}
        </h3>
        <h4>
           Service ID- {items.serviceId._id}
        </h4>
        <h4>
           Trainer ID- {items.serviceId.trainerId}
        </h4>
      
    </Paper>



</>

        )
      })}
      <Footer/>
    </div>
  )
}
