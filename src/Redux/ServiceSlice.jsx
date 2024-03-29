import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "./Helper";
import toast from "react-hot-toast";

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
            toast.error("Wait a bit");
        })
        .addCase(service.fulfilled, (state,{payload})=>{
            state.status = "idle";
          toast.success("Booked Successfully")
            // toast.success("Courses fetched successfully")
        })
        .addCase(service.rejected, (state,action)=>{
            state.status ="rejected";
            toast.error("Already booked or incorrect details")
            // state.message = action.payload.name;
        })
        .addCase(profile.pending, (state,action)=>{
            state.status = "loading";
        })
        .addCase(profile.fulfilled, (state,{payload})=>{
            state.status = "idle";
            state.bookings = payload.result;
            toast.success("All Bookings")
            // toast.success("Courses fetched successfully")
        })
        .addCase(profile.rejected, (state,action)=>{
            state.status ="rejected";
            toast.error("Unknown Error, try again later");

        })
      

        
    }
})

export default ServiceSlice;