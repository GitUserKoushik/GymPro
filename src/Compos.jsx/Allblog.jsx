import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogs } from '../Redux/BlogSlice'
import { produc } from '../Redux/Helper';
import { Box, Paper,Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';





export default function Allblog() {


const dispatch = useDispatch();



useEffect(()=>{
    dispatch(blogs());
},[])


    const {items} = useSelector((state)=>state.Blog);

    const navigate = useNavigate();
 

const toDet =(id)=>{
navigate(`/blogdet/${id}`); 
}

  return (
    <div style={{marginTop:"0px"}}>
      <Navbar/>
        <h1 style={{marginLeft:"50px",marginBottom:"50px"}}>
            Our Informative Blogs
        </h1>
  <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 4, md: 13 }}>

  {Array.isArray(items)&& items.map((items,ind)=>{
    return(
      <Grid style={{marginLeft:"30px"}} item xs={3} sm={4} md={4} >
      <Card style={{marginBottom:"30px",borderRadius:"20px"}}  elevation={10} sx={{ maxWidth: 370 }}>
      <img src={produc(items.image)} style={{height:"300px"}} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {items.title}
        </Typography>

        </CardContent>
      <CardActions>
        <Button style={{borderRadius:"10px",marginBottom:"15px",marginLeft:"10px",border:"1px solid red"}} variant='outlined' color='error' onClick={()=>toDet(items._id)} >Blog Details</Button>
       
      </CardActions>
    </Card>
    </Grid>
    )
  })}


        </Grid>
      <Footer/>
    </div>
  )
}
