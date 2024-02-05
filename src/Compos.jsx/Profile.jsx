import React, { useEffect } from 'react'
import { profile } from '../Redux/ServiceSlice'
import { useDispatch, useSelector } from 'react-redux'
import { produc } from '../Redux/Helper';
import { Grid } from '@mui/material';
import Footer from './Footer';
import Navbar from './Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Profile() {
    const dispatch = useDispatch();
    const {bookings} = useSelector((state)=>state.Serv);
    const authId = localStorage.getItem("id");



useEffect(()=>{
dispatch(profile(authId));  
},[authId,dispatch]);  



  return (
    <div style={{marginTop:"0px"}}>
      <Navbar/>
      <h1 style={{marginLeft:"50px",marginBottom:"50px"}}>
            Here are your all Bookings
        </h1>
        <h2 style={{marginLeft:"50px",marginBottom:"50px"}}>
          Your Member ID is- {authId}
        </h2>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 4, md: 13 }}>

      {bookings.map((items,ind)=>{
        return(
<>

{/* <Paper variant='elevation' elevation={10} style={{borderRadius:"20px",width:"90%",margin:"auto",padding:"20px",marginTop:"20px",marginBottom:"50px"}}>
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
      
    </Paper> */}


 
      <Grid style={{marginLeft:"30px"}} item xs={3} sm={4} md={4} >
      <Card style={{marginBottom:"30px",borderRadius:"20px"}}  elevation={10} sx={{ maxWidth: 370 }}>
      <img src={produc(items.serviceId.image)} style={{height:"300px"}} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {items.serviceId.service_name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Scheme: {items.scheme }
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Price: {items.price}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Service ID: {items.serviceId._id}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Trainer ID: {items.serviceId.trainerId}
        </Typography>



        


      </CardContent>
     
    </Card>
    </Grid>
    
  



</>

        )
      })}
       </Grid>
      <Footer/>
    </div>
  )
}
