import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiInstance from "./Helper";
import toast from "react-hot-toast";

export const banner = createAsyncThunk(
    "/getbanner",
    async()=>{
        let res = await apiInstance.get("/getbanner");
        let resData = res?.data;
        return resData;
    }
)
export const trainers = createAsyncThunk(
    "/gettrainer",
    async()=>{
        let res = await apiInstance.get("/gettrainer");
        let resData = res?.data;
        return resData;
    }
)

export const service = createAsyncThunk(
    "/getservice",
    async()=>{
        let res = await apiInstance.get("/getservice");
        let resData = res?.data;
        return resData;
    }
)

export const servicedet = createAsyncThunk(
    "/getservicedetails/id",
    async(id)=>{
        let res = await apiInstance.get(`/getservicedetails/${id}`); 
        let resData = res?.data;
        return resData;
    }
)

export const testm = createAsyncThunk(
    "/gettestimonial",
    async()=>{
        let res = await apiInstance.get("/gettestimonial"); 
        let resData = res?.data;
        return resData;
    }
)

export const GetSlice = createSlice({
    name:"GetSlice",
    initialState:{
        banners:[{}],
        trainer:[{}],
        services:[{}],
        servdets:[{}],
        testimonials:[{}],
    },
    reducers:{},
    extraReducers:(builders)=>{
        builders
        .addCase(banner.pending, (state,action)=>{

        })
        .addCase(banner.fulfilled, (state,{payload})=>{
            state.banners=payload.data;
            
        })
        .addCase(banner.rejected, (state,action)=>{
            toast.error("Unknown error, try again later")
            
        })
        .addCase(trainers.pending, (state,action)=>{

        })
        .addCase(trainers.fulfilled, (state,{payload})=>{
            state.trainer=payload.data;
            
        })
        .addCase(trainers.rejected, (state,action)=>{
            
        })
        .addCase(service.pending, (state,action)=>{

        })
        .addCase(service.fulfilled, (state,{payload})=>{
            state.services=payload.data;
            
        })
        .addCase(service.rejected, (state,action)=>{
            
        })
        .addCase(servicedet.pending, (state,action)=>{

        })
        .addCase(servicedet.fulfilled, (state,{payload})=>{
            state.servdets=payload.data;
            
        })
        .addCase(servicedet.rejected, (state,action)=>{
            
        })
        .addCase(testm.pending, (state,action)=>{

        })
        .addCase(testm.fulfilled, (state,{payload})=>{
            state.testimonials=payload.data;
            
        })
        .addCase(testm.rejected, (state,action)=>{
            
        })
    }
})


export default GetSlice;