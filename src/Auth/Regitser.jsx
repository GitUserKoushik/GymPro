import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { regauth } from '../Redux/AuthSlice';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { produc } from '../Redux/Helper';
import { Link, useNavigate } from 'react-router-dom'


import { Button, Container, Grid, TextField, Paper} from "@mui/material";


// const VisuallyHiddenInput = styled("input")({
//     clip: "rect(0 0 0 0)",
//     clipPath: "inset(50%)",
//     height: 1,
//     overflow: "hidden",
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     whiteSpace: "nowrap",
//     width: 1,
//   });



export default function Regitser() {

    const [img,setImg] = useState("");


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const navigate = useNavigate();

const {reg} = useSelector((state)=>state.Auth);
if(reg){
navigate('/login');
}


      const dispatch = useDispatch();

     

    

const Loginacc = (data)=>{
    const { name, email, phone, password,answer } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("password", password);
    formData.append("answer", answer);
    formData.append("image", img);


    dispatch(regauth(formData));


}





  return (
    (
    <div style={{}}>
    <Container style={{}}>
      <h1 style={{textAlign:"center"}}>Register</h1>
      <form onSubmit={handleSubmit(Loginacc)} style={{marginLeft:"120px"}}>
      <Paper elevation={5}   sx={{ padding: 5 }}style={{marginTop:"80px",marginBottom:"50px",marginRight:"130px",border:"0px solid grey",borderRadius:"12px"}}>
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
            <TextField label="Phone" fullWidth {...register("phone", { required: true })} error={!!errors.phone} helperText={errors.phone && "Phone number is required"} />
          </Grid>
          
          <Grid item sm={6}>
            <TextField
              label="Password"
              fullWidth
              {...register("password", {
                required: "Password is required",
                minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character",
                  }
                
              })}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
            />
          </Grid>
            
          <Grid item sm={6}>
            <TextField
              label="Answer"
              fullWidth
              {...register("answer", { required: true, })}
              error={!!errors.answer}
              helperText={errors.answer?.type === "required" ? "Answer is required" : ""}
            />
          </Grid>
          
          <Grid item sm={6}>
         

          <Button
          style={{height:"55px",border:"2px solid red"}}
                variant="outlined"
                component="label"
                fullWidth
                color='error'
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  onChange={(e) => setImg(e.target.files[0])}
                  name="img"
                  accept="image/*"
                />
                </Button>

          </Grid>

         
          
          <Grid item sm={12}>
            <Button  style={{borderRadius:"10px",backgroundColor:"red"}} type="submit" variant="contained"  fullWidth size="large">
              Submit
            </Button>
           
          </Grid>
         
        </Grid>
        <h3 style={{marginLeft:"20px",color:"black",fontWeight:"400"}}>
            Already have an account? 
            
            <Link to='/login'>
            Login
            </Link>
          </h3>
        </Paper>
      </form>
      <Link style={{fontSize:"30px",marginLeft:"500px"}} to="/">
Go to Home
</Link>
    </Container>
    </div>
  )
  )
}
