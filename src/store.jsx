import { configureStore } from "@reduxjs/toolkit";
// import colorReducer from
import colorReducer from "./ColorSlice";
const store =configureStore({
    reducer:{
        bgcolor:colorReducer
    }
    
})
 
export default store;