import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import apiInstance from "./Helper";


export const blogs = createAsyncThunk(
    "getblog",
    async ()=>{
        console.log("blogsssssss");
        let res = await apiInstance.get("/getblog");
       
        // console.log(response);
        let respData = res?.data;
        return respData;
    });


    export const blogdet = createAsyncThunk(
        "/blogdetails",
        async(id)=>{
            let res = await apiInstance.get(`/getblogdetails/${id}`);
            let resData = res?.data;
            return resData;
        }
    )


    export const BlogSlice = createSlice({
        name:"BlogSlice",
        initialState:{
            items:[{}],
            searchItems:{},
           
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(blogs.pending, (state,action)=>{
                state.status = "loading";
                console.log("loading");
            })
            .addCase(blogs.fulfilled, (state,{payload})=>{
                state.status = "idle";
                console.log("idle");
                // toast.success("Blogs fetched successfully")
                state.items = payload.data;
                console.log(payload.data);
                console.log("finishing");
            })
            .addCase(blogs.rejected, (state,action)=>{
                state.status = "loading";
                console.log("rejected");
            })
            .addCase(blogdet.pending, (state,action)=>{
                state.status = "loading";
                console.log("loading");
            })
            .addCase(blogdet.fulfilled, (state,{payload})=>{
                state.status = "idle";
                console.log("idle");
                // toast.success("Blogs fetched successfully")
                state.searchItems = payload.data;
                console.log(payload.data);
                console.log("finishing");
            })
            .addCase(blogdet.rejected, (state,action)=>{
                state.status = "loading";
                console.log("rejected");
            })
           
        }
        
        
        });
        
        export default BlogSlice;