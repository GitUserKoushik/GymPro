import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "./Helper"
import toast from 'react-hot-toast';



export const regauth = createAsyncThunk(
    "/register",
    async(details)=>{
        let res = await apiInstance.post("/register",details);
        let resData = res?.data;
        return resData;
    }
)

export const logauth = createAsyncThunk(
    "/login",
    async(details)=>{
        let res = await apiInstance.post("/login",details);
        let resData = res?.data;
        return resData;

    }
)

export const AuthSlice = createSlice({
    name:"AuthSlice",
    initialState:{
        reg:"",
        log:"",
        id:""
    },
    reducers:{
        logout:(state)=>{
          state.log ="";
          state.id="";
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(regauth.pending, (state,action)=>{
         console.log("pending");
        })
        .addCase(regauth.fulfilled,(state,{payload})=>{
           toast.success("Registered Successfully");
            state.reg= payload.token;
        })
        .addCase(regauth.rejected,(state,action)=>{
            console.log("rejected");
        })
        .addCase(logauth.pending, (state,action)=>{
            console.log("pending");
           })
           .addCase(logauth.fulfilled,(state,{payload})=>{
            toast.success("Logged in Successfully");
           
            if(payload.token&&payload.data._id){
                localStorage.setItem("token",payload.token);
                localStorage.setItem("id",payload.data._id);
                state.log=payload.token;
                state.id = payload.data._id;
                
            }
               
           })
           .addCase(logauth.rejected,(state,action)=>{
               console.log("rejected");
               toast.error("Error: Check your credentials")
           })

    }
})

export default AuthSlice;
export const {logout} = AuthSlice.actions;