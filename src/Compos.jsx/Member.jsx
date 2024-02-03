import React from 'react'
import { Button, Container, Grid, TextField, Paper} from "@mui/material";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { service } from '../Redux/ServiceSlice';

import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';


export default function Member() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

const dispatch = useDispatch();


      async function Loginacc (data){
       
        // console.log(items[idd.id]._id);
        const formData = {
          name: data.name,
          email: data.email,
          memberId:data.memberId,
          serviceId:data.serviceId,
          service_name:data.service_name,
          scheme:data.scheme,
          price:data.price,
  
        }
        dispatch(service(formData));  
        
  
        
      }




  return (
    <div style={{}}>
      <Navbar/>
    <Container style={{}}>
      <h1 style={{textAlign:"center"}}>Service Booking</h1>
      <form onSubmit={handleSubmit(Loginacc)} style={{marginLeft:"120px"}}>
      <Paper elevation={5}   sx={{ padding: 5 }}style={{marginTop:"80px",marginBottom:"200px",marginRight:"130px",border:"1px solid grey",borderRadius:"15px"}}>
        <Grid container maxWidth={1100} spacing={2}>
            
        
        <Grid item sm={6}  style={{borderRadius:"25px"}}>
            <TextField
           
            label="Name"
            fullWidth
              
              {...register("name", { required: true, minLength: 3 })}
              error={!!errors.name}
              helperText={errors.name?.type === "required" ? "Name is required" : errors.name?.type === "minLength" ? "Minimum 3 characters are required" : ""}
            />
          </Grid>
         
          
          <Grid item sm={6}>
            <TextField
              label="Email"
              fullWidth
              {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
              error={!!errors.email}
              helperText={errors.email?.type === "required" ? "Email is required" : errors.email?.type === "pattern" ? "Valid email is required" : ""}
            />
          </Grid>

          <Grid item sm={6}>
            <TextField  label="Member ID" fullWidth {...register("memberId", { required: true })} error={!!errors.memberId} helperText={errors.memberId && "ID is required"} />
          </Grid>
          
          <Grid item sm={6}>
            <TextField
              label="Service ID"
              fullWidth
              {...register("serviceId", {
                required: "ID is required",
               
                
              })}
              error={!!errors.serviceId}
              helperText={errors.serviceId ? errors.serviceId.message : ""}
            />
          </Grid>
            
          <Grid item sm={6}>
            <TextField
              label="Service name"
              fullWidth
              {...register("service_name", { required: true, })}
              error={!!errors.service_name}
              helperText={errors.service_name?.type === "required" ? "Service name is required" : ""}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              label="Scheme"
              fullWidth
              {...register("scheme", { required: true, })}
              error={!!errors.scheme}
              helperText={errors.scheme?.type === "required" ? "Scheme is required" : ""}
            />
          </Grid>
          <Grid item sm={12}>
            <TextField
              label="Price"
              type='number'
              fullWidth
              {...register("price", { required: true, })}
              error={!!errors.price}
              helperText={errors.price?.type === "required" ? "Price is required" : ""}
            />
          </Grid>
          

         
          
          <Grid item sm={12}>
            <Button  style={{borderRadius:"10px",backgroundColor:"red"}} type="submit" variant="contained"  fullWidth size="large">
              Submit
            </Button>
           
          </Grid>
         
        </Grid>
        </Paper>
      </form>
    </Container>
    </div>
  )
}
