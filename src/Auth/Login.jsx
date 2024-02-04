import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { logauth } from '../Redux/AuthSlice';
import { Link, useNavigate } from 'react-router-dom'



import {
   
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import { useForm } from "react-hook-form";

 

export default function Login() {


  const {log} = useSelector((state)=>state.Auth);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

      async function submit (data) {
        const formData = {
          email: data.email,
          password: data.password,
        }
        
        dispatch(logauth(formData));
        
      };

      if(log){ 
        navigate('/');
              }

   
      const {id} = useSelector((state)=>state.Auth);


      

      


  return (
    <>
    <h2 style={{textAlign:"center"}}>
      Login to access MemberOnly Services
    </h2>
       
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ margin: "0 auto" }}>
          <Paper elevation={6}  sx={{ padding: 2 }} style={{marginTop:"80px",marginBottom:"20px",borderRadius:"15px",border:"0px solid grey"}}>
            <Typography variant="h5" gutterBottom>
              Login Form
            </Typography>
            <form onSubmit={handleSubmit(submit)} action="/">
             
             
              <TextField

              className="txtfld"
                {...register("email", {required:true, })}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.email}
                helperText={(errors.email && errors.email.type === "required"  && "Email is required") ||  (errors.email && errors.email.type === "pattern" &&"Valid email is required" )}
               
              />
                
              <TextField
                {...register("password", {required:true})}
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                error={!!errors.password}
                helperText={(errors.password) && "Password is required"}
              />
              

              <Button
              style={{borderRadius:"10px",backgroundColor:"red"}}
                variant="contained"
                
                fullWidth
                size="large"
                type="submit"
                
                sx={{ marginTop: 2 }}
              >
                Login
              </Button>
             
            </form>
            <h3 style={{marginLeft:"20px",color:"black",fontWeight:"400"}}>
            Don't have an account? 
            
            <Link to='/Register'>
            Register
            </Link>
          </h3>
          </Paper>
        </Grid>
      </Grid>
    
     
      <br />
      <Link style={{fontSize:"30px",marginLeft:"590px"}} to="/">
Go to Home
</Link>
      
     
    


    </>
  )
}
