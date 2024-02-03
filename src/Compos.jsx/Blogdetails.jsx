import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { blogs } from '../Redux/BlogSlice'
import { produc } from '../Redux/Helper';
import { Link } from 'react-router-dom';
import { blogdet } from '../Redux/BlogSlice';
import { useParams } from 'react-router-dom';
import { Box, Paper,Grid } from '@mui/material'
import Footer from './Footer';
import Navbar from './Navbar';





export default function Blogdetails() {
    const {searchItems} = useSelector((state)=>state.Blog);
    const dispatch = useDispatch();

const params = useParams();

console.log("Paramsid",params.id);

useEffect(()=>{
    dispatch(blogdet(params.id))
},[])

  return (
   <div style={{marginTop:"0px"}}>
    <Navbar/>
       <h1 style={{marginLeft:"50px",marginBottom:"50px"}}>
            Blog details
        </h1>
   <Paper variant='elevation' elevation={10} style={{borderRadius:"20px",width:"90%",margin:"auto",padding:"20px",marginTop:"20px",marginBottom:"50px"}}>
  
   <img src={produc(searchItems.image)} style={{height:"300px",width:"80%",marginLeft:"110px",borderRadius:"20px"}} alt="" />
   <h1>
       {searchItems.title}
   </h1>
   <h2>
      {searchItems.subtitle} 
   </h2>
   <h4>
       {searchItems.content}
   </h4>
  
 
</Paper>
<Footer/>
</div>
  )
}
