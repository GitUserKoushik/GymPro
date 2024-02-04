import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { banner } from '../Redux/GetSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Box, Paper,Grid } from '@mui/material'
import { produc } from '../Redux/Helper';
import { trainers } from '../Redux/GetSlice';
import { service } from '../Redux/GetSlice';
import { testm } from '../Redux/GetSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';





export default function Home() {
  const dispatch = useDispatch();
  const {banners} = useSelector((state)=>state.Get);
  const {trainer}= useSelector((state)=>state.Get);
  const {services} = useSelector((state)=>state.Get);
  const {testimonials} = useSelector((state)=>state.Get);



  const navigate = useNavigate();

useEffect(()=>{
dispatch(banner());
},[dispatch]);

useEffect(()=>{
  dispatch(trainers());
  },[dispatch]);

  useEffect(()=>{
    dispatch(service());
    },[dispatch]);

    useEffect(()=>{
      dispatch(testm());
      },[dispatch]);

const toDet = (id)=>{
navigate(`/serdet/${id}`);
}






  return (
   <div style={{marginTop:"20px"}}>
    <Navbar/>
    
        <Carousel autoPlay={true} animation='slide'>
    {
        banners.map((mm) => (
            <Box
                sx={{
                    height:"100vh",
                    width: "100%",
                    position: 'relative',
                }}
            >
                <img src={produc(mm.image)} alt='' style={{height: '100vh', width: '100%'}} />
                <h1 style={{zIndex:5, position: 'absolute', bottom: "450px",left:15, color:"white"}}>{mm.title}</h1>
                <h1 style={{zIndex:5, position: 'absolute', bottom:"400px",left:15, color:"white"}}>{mm.subtitle}</h1>
            </Box>
        ))
    }
</Carousel>

<div>
<h1 style={{textAlign:"center",marginTop:"100px",marginBottom:"50px"}}>
        Our Professional Trainers
      </h1>
  <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 11 }}>

  
  {Array.isArray(trainer)&& trainer.map((items)=>{
    return(
      <>
      
      <Grid style={{marginLeft:"20px"}} item xs={2} sm={2} md={2} >

        <Paper variant='elevation' elevation={10} style={{alignContent:"center",borderRadius:"15px"}}>
        <img src={produc(items.image)}  style={{height:"180px",width:"230px",borderRadius:"15px",alignSelf:"center"}} alt="" />
        <h2 style={{padding:"15px",color:"red"}}>
          {items.name} 
        </h2>
        <h4 style={{paddingLeft:"15px"}}>
          SPC- {items.speciality}
        </h4>
        <h4 style={{padding:"15px"}}>
         EXP- {items.experience}
        </h4>
        </Paper>
      
       
       

      </Grid>
      
      </>
    )
  })}
   </Grid>
</div>

<div>
  <h1 style={{textAlign:"center",marginTop:"100px",marginBottom:"50px"}}>
    Our Premium Services
  </h1>
  <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 4, md: 13 }}>
  {Array.isArray(services)&& services.map((items,ind)=>{
    return(
      <Grid style={{marginLeft:"30px"}} item xs={3} sm={4} md={4} >
      <Card style={{marginBottom:"30px",borderRadius:"20px"}}  elevation={10} sx={{ maxWidth: 370 }}>
      <img src={produc(items.image)} style={{height:"300px"}} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {items.service_name}
        </Typography>


{Array.isArray(items.trainer_details)&& items.trainer_details.map((data)=>{
  return(
    <>
    <Typography variant="h6" color="grey">
          Trainer Name - {data.name}
        </Typography >
        <Typography variant="h6" color="grey">
         Speciality - {data.speciality}
        </Typography>
        <Typography variant="h6" color="grey">
         Experience - {data.experience}
        </Typography>
    </>
  )
})}
        


      </CardContent>
      <CardActions>
        <Button  style={{borderRadius:"10px",marginBottom:"15px",marginLeft:"10px",}} variant='contained' color='error' onClick={()=>toDet(items._id)} >View deatils</Button>
       
      </CardActions>
    </Card>
    </Grid>
    )
  })}
   </Grid>
</div>

<div>
  <h1 style={{textAlign:"center",marginTop:"100px",marginBottom:"50px"}}>
    Our Testimonials
  </h1>
<Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 4, md: 13 }}>
  {Array.isArray(testimonials)&& testimonials.map((items)=>{
    return (
      <Grid style={{marginLeft:"30px"}} item xs={3} sm={4} md={4} >
      <Card style={{marginBottom:"30px",borderRadius:"20px"}} elevation={10} sx={{ maxWidth: 370 }}>
      <img src={produc(items.image)} style={{height:"300px",marginLeft:"40px"}} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {items.client_name}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          
          {items.review}
        </Typography>
{Array.isArray(items.service_details)&& items.service_details.map((data)=>{
  return(
    <>
    <Typography variant="h6" color="grey">
          Service Purchased - {data.service_name}
        </Typography >
        <Typography variant="h6" color="grey">
         Service ID - {data._id}
        </Typography>
       
    </>
  )
})}
        


      </CardContent>
      
    </Card>
    </Grid>
    )
  })}
</Grid>

</div>
    
   
   
   <Footer/>
   </div>
  )
}
