import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "./Helper";
import { toast } from "react-toastify";


export const service = createAsyncThunk(
    "/booking",
    async (details)=>{
        let res = await apiInstance.post("/booking",details);
        let resData = res?.data;
        return resData;
    }
)

export const profile = createAsyncThunk(
    "/id",
    async (token)=>{

        let res = await apiInstance.get(`/viewBooking/${token}`);
        let resData = res?.data;
        return resData;
    }
)

export const ServiceSlice = createSlice({
    name:"ServiceSlice",
    initialState:{
        bookings:[],
        message:""
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(service.pending, (state,action)=>{
            state.status = "loading";
        })
        .addCase(service.fulfilled, (state,{payload})=>{
            state.status = "idle";
            toast.success("Booked Successfully");
            // toast.success("Courses fetched successfully")
        })
        .addCase(service.rejected, (state,action)=>{
            state.status ="rejected";
            // state.message = action.payload.name;
            console.log(state.message);
            toast.error("Already booked or unknown error");
        })
        .addCase(profile.pending, (state,action)=>{
            state.status = "loading";
        })
        .addCase(profile.fulfilled, (state,{payload})=>{
            state.status = "idle";
            state.bookings = payload.result;
            // toast.success("Courses fetched successfully")
        })
        .addCase(profile.rejected, (state,action)=>{
            state.status ="rejected";
        })
      

        
    }
})

export default ServiceSlice;