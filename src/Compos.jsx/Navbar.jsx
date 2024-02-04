import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch,} from 'react-redux'
import Button from '@mui/material/Button';
import { logout } from '../Redux/AuthSlice';
import toast from 'react-hot-toast';



export default function Navbar() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = localStorage.getItem("token");


const logoutt=()=>{
  dispatch(logout());
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  toast.success("Logged out Successfully");
  
  navigate('/login');

}

const toReg = ()=>{
  navigate('/register');
}

const toLog = ()=>{
  navigate('/login');
}



  return (
    <div style={{display:"flex",height:"50px",position:"sticky",top:"0",fontWeight:"500",alignItems:"center",justifyContent:"space-between",backdropFilter:"blur(20px)",marginTop:"10px",marginBottom:"10px"}}>

      <div style={{fontSize:"40px",marginLeft:"10px",color:"red",fontFamily:"fantasy",letterSpacing:"3px"}}>
        COREFIT
      </div>

      <div style={{display:"flex",columnGap:"0px",justifyContent:"space-between",width:"600px",marginRight:"10px"}}>
        <Link style={{border:"0px solid black",textDecoration:"none",color:"black",height:"25px",padding:"10px",borderRadius:"10px"}} to='/'>
        Home
        </Link>
        
       
        <Link style={{border:"0px solid black",textDecoration:"none",color:"black",height:"25px",padding:"10px",borderRadius:"10px"}}to='/blog'>
        Blog
        </Link>

  <Link style={{border:"0px solid black",textDecoration:"none",color:"black",height:"25px",padding:"10px",borderRadius:"10px"}}to='/member'>
        Book Service
        </Link>

        
        
          <Link style={{border:"0px solid black",textDecoration:"none",color:"black",height:"25px",padding:"10px",borderRadius:"10px"}}to='/profile'>
        Bookings
        </Link>
        

        
         <div style={{marginTop:"05px"}}>
          {auth? <Button style={{borderRadius:"8px"}}  onClick={logoutt} variant='contained' color='error'>
        Logout
        </Button>:
        <Button style={{borderRadius:"8px"}} variant='contained' onClick={toLog} color='error'  >
        Login
        </Button>}
         </div> 

       
       


        <Button style={{borderRadius:"10px",border:"2px solid red"}} variant='outlined' color='error' onClick={toReg}>
        Register
        </Button>
        </div>
        
      
    </div>
  )
}
