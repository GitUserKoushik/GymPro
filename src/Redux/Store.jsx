import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import BlogSlice from "./BlogSlice";
import ServiceSlice from "./ServiceSlice";
import GetSlice from "./GetSlice";


export const Store = configureStore({
    reducer:{
        Auth:AuthSlice.reducer,
        Blog:BlogSlice.reducer,
        Serv:ServiceSlice.reducer,
        Get:GetSlice.reducer,
    }
})

export default Store;